// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

import {DSTest} from "../../lib/ds-test/src/test.sol";
import {Utilities} from "./utils/Utilities.sol";
import {console} from "./utils/Console.sol";
import {Vm} from "../../lib/forge-std/src/Vm.sol";

contract ContractTest is DSTest {
    Vm internal immutable vm = Vm(HEVM_ADDRESS);

    Utilities internal utils;
    address payable[] internal users;

    function setUp() public {
        utils = new Utilities();
        users = utils.createUsers(5);
    }

    function initialize(address, bytes memory stupid) public {
        console.log("hihi", string(stupid));
    }

    function testExample() public {
        bytes32 name = 0x6c656475796b686f6e676e677500000000000000000000000000000000000000;
        bytes memory data = abi.encodeWithSignature(
            "initialize(address,bytes)",
            address(this),
            abi.encodePacked(name)
        );
        address(this).call(data);
    }
}
