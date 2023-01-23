// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

enum Verdict {
    ACCEPTED,
    WRONG_ANSWER,
    REVERTED
}

struct TestCase {
    bytes input;
    bytes32 output;
    uint224 gasLimit;
}
