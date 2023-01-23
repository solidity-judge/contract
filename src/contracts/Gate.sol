// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

import "../interfaces/ISolution.sol";
import "../interfaces/IGate.sol";
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

    function initialize(address _user, string memory _username)
        external
        initializer
    {
        user = _user;
        username = _username;
    }

    function deploy(bytes memory bytecode)
        external
        onlyUser
        returns (address solution)
    {
        return _deploy(bytecode);
    }

    function deployAndRun(bytes memory bytecode, bytes memory input)
        external
        onlyUser
        returns (bytes memory output)
    {
        address solution = _deploy(bytecode);
        output = ISolution(solution).execute(input);
    }

    function _deploy(bytes memory bytecode) internal returns (address addr) {
        ++nonce;
        addr = Create2.deploy(0, bytes32(nonce), bytecode);
        solutionId[addr] = nonce;

        emit Deployment(nonce, addr);
    }
}
