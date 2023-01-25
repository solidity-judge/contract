// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

interface IGate {
    event Deployment(uint256 id, address solution);

    function user() external view returns (address);

    function username() external view returns (string memory username);

    function solutionId(address solution) external view returns (uint256 id);

    function deploy(bytes memory bytecode) external returns (address solution);

    function deployAndRun(bytes memory bytecode, bytes memory input)
        external
        returns (bytes memory output);
}
