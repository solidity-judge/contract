// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

import {Verdict} from "../libraries/Tests.sol";

interface IProblemV2 {
    struct ContestantData {
        bytes32 solutionHash;
        address solutionPreDeadline;
        address solutionPosDeadline;
        uint24 pointPreDeadline;
        uint24 pointPosDeadline;
    }

    event RunSolution(
        address contestant,
        uint256 point,
        bool isPreDeadlineSolution,
        Verdict[] verdicts
    );

    event UpdateSolution(
        address contestant,
        bool isPreDeadlineSolution,
        address solution
    );

    event DeclareSolutionHash(address contestant, bytes32 solutionHash);

    event DeadlineUpdated(uint256 deadline);

    function getContestantInfo(
        address contestant
    )
        external
        view
        returns (
            bytes32 solutionHash,
            address solutionPreDeadline,
            address solutionPosDeadline,
            uint24 pointPreDeadline,
            uint24 pointPosDeadline
        );

    function declareSolutionHash(bytes32 solutionHash) external;

    function submit(
        address user,
        bool isPreDeadlineSolution,
        bytes memory solutionBytecode
    ) external;
}
