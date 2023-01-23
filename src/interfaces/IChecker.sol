// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

import {TestCase, Verdict} from "../libraries/Tests.sol";

interface IChecker {
    function checkOutput(TestCase memory test, bytes memory contestantOutput)
        external
        pure
        returns (Verdict);
}
