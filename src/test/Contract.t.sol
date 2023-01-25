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
        Token t = new Token();
        address(t).call(
            abi.encodeWithSelector(
                Token.transferFrom.selector,
                address(1),
                2,
                3,
                address(2),
                5
            )
        );

        console.logBytes32(Token.transferFrom.selector);
        console.logBytes32(SimpleSwap.swap.selector);
    }
}

contract SimpleSwap {
    function swap(address s, uint256 a) external {}
}

contract Token {
    function transferFrom(address s, uint256 a) external {}
}
