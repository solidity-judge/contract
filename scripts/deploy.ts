import { env, exit } from "process"
import hre from "hardhat";
import { prepEnv, writeDeployment } from "./env";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { deploy, deployProxy, getContractAt } from "./helper";
import { Gate, Problem, ProblemFactory, SolutionAC__factory, UserGateFactory } from "../typechain-types";
import { ethers } from "ethers";
import { write } from "fs";
import deployment from "../deployment.json";

async function main() {
    const [deployer]: SignerWithAddress[] = await hre.ethers.getSigners();
    const env = await prepEnv(deployer);

    // console.log(ethers.utils.formatBytes32String("leduykhongngu"));

    const problem = await getContractAt<Problem>('Problem', '0x5ad2233a0bdc178442ebe2ec36c6ea456aa7448e');

    console.log(await problem.runSolution('0x176f91d3ebd1d8bfc52abf299e7a940d8aa0db3c'));
}

main().then(() => {
    exit(0);
})