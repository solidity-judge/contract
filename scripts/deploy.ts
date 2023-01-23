import { env, exit } from "process"
import hre from "hardhat";
import { prepEnv, writeDeployment } from "./env";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { deploy, deployProxy } from "./helper";
import { Gate, Problem, ProblemFactory, UserGateFactory } from "../typechain-types";
import { ethers } from "ethers";
import { write } from "fs";

async function main() {
    const [deployer]: SignerWithAddress[] = await hre.ethers.getSigners();
    const env = await prepEnv(deployer);

    // console.log(ethers.utils.formatBytes32String("leduykhongngu"));


    const implGate = await deploy<Gate>(env, 'Gate', []);
    const implProblem = await deploy<Problem>(env, 'Problem', []);

    env.gateFactory = await deployProxy<UserGateFactory>(env, 'UserGateFactory', [], [implGate.address]);
    env.problemFactory = await deployProxy<ProblemFactory>(env, 'ProblemFactory', [env.gateFactory.address], [implProblem.address]);

    writeDeployment(env);
}

main().then(() => {
    exit(0);
})