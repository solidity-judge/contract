// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

import {SimpleChecker} from "./SimpleChecker.sol";
import {Problem} from "./Problem.sol";
import {IProblemFactory} from "../interfaces/IProblemFactory.sol";
import {IUserGateFactory} from "../interfaces/IUserGateFactory.sol";
import {BoringOwnableUpgradeable} from "../libraries/BoringOwnableUpgradable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";
import "@openzeppelin/contracts/proxy/beacon/IBeacon.sol";

contract ProblemFactory is
    UUPSUpgradeable,
    BoringOwnableUpgradeable,
    IProblemFactory,
    IBeacon
{
    address public implementation;
    uint256 public problemCount;
    address public immutable simpleChecker;
    address public immutable gateFactory;

    constructor(address _gateFactory) initializer {
        gateFactory = _gateFactory;
        simpleChecker = address(new SimpleChecker());
    }

    function createProblem(
        address checker
    ) external returns (uint256 id, address problem) {
        if (checker == address(0)) checker = simpleChecker;

        require(
            IUserGateFactory(gateFactory).gates(msg.sender) != address(0),
            "user not registered"
        );

        id = ++problemCount;
        bytes memory data = abi.encodeWithSignature(
            "initialize(uint256,address,address,address)",
            id,
            msg.sender,
            checker,
            gateFactory
        );
        problem = address(new BeaconProxy(address(this), data));
        emit CreateProblem(msg.sender, id, problem, checker);
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
