// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

interface IProblemFactory {
    event CreateProblem(
        address author,
        uint256 id,
        address problem,
        address checker
    );

    function createProblem(
        address checker
    ) external returns (uint256 id, address problem);
}
