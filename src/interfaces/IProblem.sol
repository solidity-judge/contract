// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

import {Verdict} from "../libraries/Tests.sol";

interface IProblem {
    struct ContestantData {
        address solution;
        uint32 point;
        uint32 version;
    }

    event RunSolution(
        address contestant,
        uint256 version,
        uint256 point,
        Verdict[] verdicts
    );

    event UpdateSolution(address contestant, address solution);

    function getContestantInfo(address contestant)
        external
        view
        returns (
            address solution,
            uint32 point,
            bool isPointUpToDate
        );

    function updateSolution(address solution) external;

    function updateAndRunSolution(address solution) external;

    function runSolution(address contestant) external;
}
