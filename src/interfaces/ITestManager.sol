// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

import {TestCase} from "../libraries/Tests.sol";

interface ITestManager {
    event NewTestVersion(uint256 version, TestCase[] tests);

    function replaceTests(TestCase[] calldata newTests) external;

    function addTest(TestCase calldata test) external;
}
