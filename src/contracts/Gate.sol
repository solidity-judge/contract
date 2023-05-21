// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

import "../interfaces/ISolution.sol";
import "../interfaces/IGate.sol";
import "../interfaces/IProblem.sol";
import "@openzeppelin/contracts/utils/Create2.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract Gate is IGate, Initializable {
    uint256 public nonce;
    address public user;
    string public username;
    mapping(address => uint256) public solutionId;

    modifier onlyUser() {
        require(msg.sender == user, "not user");
        _;
    }

    function initialize(
        address _user,
        string memory _username
    ) external initializer {
        user = _user;
        username = _username;
    }

    function deployAndRun(
        bytes memory bytecode,
        bytes memory input
    ) external returns (bytes memory output, uint256 gasUsed) {
        address solution = Create2.deploy(0, bytes32(0), bytecode);
        gasUsed = gasleft();
        output = ISolution(solution).execute(input);
        gasUsed -= gasleft();
    }
}
