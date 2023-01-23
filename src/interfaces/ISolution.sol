// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

interface ISolution {
    function execute(bytes memory input) external returns (bytes memory output);
}
