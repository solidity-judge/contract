import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import hre from 'hardhat';
import { exit } from 'process';
import { Gate, Problem, UserGateFactory } from '../typechain-types';
import { prepEnv } from './env';
import { deploy } from './helper';
import { zeroAddress } from '@nomicfoundation/ethereumjs-util';

async function main() {
    const [deployer]: SignerWithAddress[] = await hre.ethers.getSigners();
    const env = await prepEnv(deployer);
    const problemImplementation = await deploy<Problem>(env, 'Problem', []);

    await env.problemFactory.upgradeBeacon(problemImplementation.address);
    // await env.problemFactory.createProblem(zeroAddress(), env.nonceManager.nonce());
}

main().then(() => {
    exit(0);
});
