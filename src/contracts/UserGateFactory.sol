// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

import {Gate, IGate} from "./Gate.sol";
import {IUserGateFactory} from "../interfaces/IUserGateFactory.sol";
import {BoringOwnableUpgradeable} from "../libraries/BoringOwnableUpgradable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/proxy/beacon/IBeacon.sol";
import "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";
import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

contract UserGateFactory is
    UUPSUpgradeable,
    BoringOwnableUpgradeable,
    IUserGateFactory,
    IBeacon
{
    address public implementation;

    mapping(address => address) public gates;

    constructor() initializer {}

    function createGate(
        string memory username
    ) external returns (address gate) {
        address user = msg.sender;
        require(gates[user] == address(0), "gate for user already created");

        bytes memory data = abi.encodeWithSignature(
            "initialize(address,string)",
            user,
            username
        );

        gate = address(new BeaconProxy(address(this), data));
        gates[user] = gate;

        emit CreateGate(user, username, gate);
    }

    function initialize(address _implementation) external initializer {
        __BoringOwnable_init();
        implementation = _implementation;
    }

    // ----------------- upgrade-related -----------------

    function _authorizeUpgrade(address) internal override onlyOwner {}

    function upgradeBeacon(address newImplementation) external onlyOwner {
        implementation = newImplementation;
    }
}
