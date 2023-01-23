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

    const newProblemFactory = await deploy<ProblemFactory>(env, 'ProblemFactory', [deployment.gateFactory]);

    const newProblem = await deploy<Problem>(env, 'Problem', []);
    const problemFactory = await getContractAt<ProblemFactory>('ProblemFactory', deployment.problemFactory);

    await problemFactory.upgradeTo(newProblemFactory.address, env.nonceManager.nonce());
    await problemFactory.upgradeBeacon(newProblem.address, env.nonceManager.nonce());
}

main().then(() => {
    exit(0);
})