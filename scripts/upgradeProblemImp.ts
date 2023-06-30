import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import hre from 'hardhat';
import { exit } from 'process';
import { Problem } from '../typechain-types';
import { prepEnv } from './env';
import { deploy } from './helper';

async function main() {
    const [deployer]: SignerWithAddress[] = await hre.ethers.getSigners();
    const env = await prepEnv(deployer);
    const problemImplementation = await deploy<Problem>(env, 'Problem', []);
    await env.problemFactory.upgradeBeacon(problemImplementation.address, env.nonceManager.nonce());
}

main().then(() => {
    exit(0);
});
