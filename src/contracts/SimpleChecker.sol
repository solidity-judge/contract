// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

import {IChecker, Verdict, TestCase} from "../interfaces/IChecker.sol";

contract SimpleChecker is IChecker {
    constructor() {}

    function checkOutput(TestCase memory test, bytes memory contestantOutput)
        external
        pure
        returns (Verdict)
    {
        if (keccak256(contestantOutput) == test.output) {
            return Verdict.ACCEPTED;
        }
        return Verdict.WRONG_ANSWER;
    }
}
