// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

import {IProblemV2} from "../interfaces/IProblemV2.sol";
import {ISolution} from "../interfaces/ISolution.sol";
import {IChecker} from "../interfaces/IChecker.sol";
import {IUserGateFactory} from "../interfaces/IUserGateFactory.sol";
import {IGate} from "../interfaces/IGate.sol";
import {TestManager, TestCase, Verdict} from "./TestManager.sol";
import {ExcessivelySafeCall} from "../libraries/ExcessivelySafeCall.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/utils/Create2.sol";

contract Problem is IProblemV2, TestManager {
    uint16 public constant MAX_OUTPUT_SIZE = 1500;

    uint256 public id;
    address public checker;
    address public gateFactory;

    uint256 public deadline;

    mapping(address => ContestantData) public contestants;

    modifier ensureDeadline(bool isBeforeDeadline) {
        if (isBeforeDeadline) {
            require(block.timestamp <= deadline, "only before deadline");
        } else {
            require(block.timestamp > deadline, "only after deadline");
        }
        _;
    }

    function initialize(
        uint256 _id,
        address _author,
        address _checker,
        address _gateFactory
    ) external initializer {
        id = _id;
        checker = _checker;
        gateFactory = _gateFactory;
        _TestManagerInit(_author);
    }

    function getContestantInfo(
        address contestant
    )
        public
        view
        returns (
            bytes32 solutionHash,
            address solutionPreDeadline,
            address solutionPosDeadline,
            uint24 pointPreDeadline,
            uint24 pointPosDeadline
        )
    {
        ContestantData memory data = contestants[contestant];
        solutionHash = data.solutionHash;
        solutionPreDeadline = data.solutionPreDeadline;
        solutionPosDeadline = data.solutionPosDeadline;
        pointPreDeadline = data.pointPreDeadline;
        pointPosDeadline = data.pointPosDeadline;
    }

    function declareSolutionHash(
        bytes32 solutionHash
    ) external ensureDeadline(true) {
        address user = msg.sender;
        contestants[user].solutionHash = solutionHash;
        emit DeclareSolutionHash(user, solutionHash);
    }

    function submit(
        address user,
        bool isPreDeadlineSolution,
        bytes memory solutionBytecode
    ) external {
        address solutionAddr = Create2.deploy(
            0,
            keccak256(abi.encode(user)),
            solutionBytecode
        );

        if (isPreDeadlineSolution) {
            contestants[user].solutionPreDeadline = solutionAddr;
            bytes32 solutionHash = keccak256(solutionBytecode);
            require(
                solutionHash == contestants[user].solutionHash,
                "invalid solution hash"
            );
        } else {
            contestants[user].solutionPosDeadline = solutionAddr;
        }

        emit UpdateSolution(user, isPreDeadlineSolution, solutionAddr);
    }

    function runPreDeadlineSolution(
        address contestant,
        bool isBeforeDeadline
    ) external {
        if (isBeforeDeadline) {
            _runSolution(
                contestant,
                true,
                contestants[contestant].solutionPreDeadline
            );
        } else {
            _runSolution(
                contestant,
                false,
                contestants[contestant].solutionPosDeadline
            );
        }
    }

    function _runSolution(
        address contestant,
        bool isPreDeadlineSolution,
        address solutionAddr
    ) internal {
        uint256 cntCorrect = 0;
        uint256 nTest = testLength;
        Verdict[] memory allVerdicts = new Verdict[](nTest);

        for (uint256 i = 0; i < nTest; ++i) {
            TestCase memory test = tests[i];
            (bool success, bytes memory output) = _runTest(solutionAddr, test);

            if (success) {
                allVerdicts[i] = IChecker(checker).checkOutput(test, output);
            } else {
                allVerdicts[i] = Verdict.REVERTED;
            }

            if (allVerdicts[i] == Verdict.ACCEPTED) {
                ++cntCorrect;
            }
        }

        ContestantData storage data = contestants[contestant];

        uint24 point = uint24((cntCorrect * 10000) / nTest);

        if (isPreDeadlineSolution) {
            data.pointPreDeadline = point;
        } else {
            data.pointPosDeadline = point;
        }

        emit RunSolution(contestant, point, isPreDeadlineSolution, allVerdicts);
    }

    function _runTest(
        address solution,
        TestCase memory test
    ) internal returns (bool success, bytes memory result) {
        (success, result) = ExcessivelySafeCall.excessivelySafeCall(
            solution,
            (test.gasLimit * 101) / 100, // 1% buffer
            MAX_OUTPUT_SIZE,
            abi.encodeWithSelector(ISolution.execute.selector, test.input)
        );

        if (success) {
            result = abi.decode(result, (bytes));
        }
    }
}
