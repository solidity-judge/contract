// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

import {IProblem} from "../interfaces/IProblem.sol";
import {ISolution} from "../interfaces/ISolution.sol";
import {IChecker} from "../interfaces/IChecker.sol";
import {IUserGateFactory} from "../interfaces/IUserGateFactory.sol";
import {TestManager, TestCase, Verdict} from "./TestManager.sol";
import {ExcessivelySafeCall} from "../libraries/ExcessivelySafeCall.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract Problem is IProblem, TestManager {
    uint16 public constant MAX_OUTPUT_SIZE = 1500;

    uint256 public id;
    address public checker;
    address public gateFactory;

    mapping(address => ContestantData) public contestants;

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

    function getContestantInfo(address contestant)
        public
        view
        returns (
            address solution,
            uint32 point,
            bool isPointUpToDate
        )
    {
        ContestantData memory data = contestants[contestant];
        solution = data.solution;
        point = data.point;
        isPointUpToDate = data.version == testVersion;
    }

    function updateAndRunSolution(address solution) external {
        updateSolution(solution);
        runSolution(msg.sender);
    }

    function updateSolution(address solution) public {
        require(
            IUserGateFactory(gateFactory).verifySolution(msg.sender, solution),
            "invalid solution"
        );
        contestants[msg.sender].solution = solution;

        emit UpdateSolution(msg.sender, solution);
    }

    function runSolution(address contestant) public {
        address solutionAddr = contestants[contestant].solution;

        require(solutionAddr != address(0), "solution not submitted");

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

        ContestantData memory newContestantData = ContestantData({
            solution: solutionAddr,
            point: uint32((cntCorrect * 10000) / nTest),
            version: uint32(testVersion)
        });
        contestants[contestant] = newContestantData;

        emit RunSolution(
            contestant,
            newContestantData.version,
            newContestantData.point,
            allVerdicts
        );
    }

    function _runTest(address solution, TestCase memory test)
        internal
        returns (bool success, bytes memory result)
    {
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

    function modifyChecker(address newChecker) external {
        checker = newChecker;
    }
}
