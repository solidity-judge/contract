// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

interface IUserGateFactory {
    event CreateGate(address user, string username, address gate);

    function gates(address user) external view returns (address);

    function createGate(string memory username) external returns (address gate);

    function verifySolution(address user, address solution)
        external
        view
        returns (bool);
}
