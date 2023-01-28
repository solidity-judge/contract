import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import hre from 'hardhat';
import { exit } from 'process';
import { Gate, Problem, UserGateFactory } from '../typechain-types';
import { prepEnv } from './env';
import { deploy } from './helper';

async function main() {
    const [deployer]: SignerWithAddress[] = await hre.ethers.getSigners();
    const env = await prepEnv(deployer);

    const newGateFactoryImpl = await deploy<UserGateFactory>(env, 'UserGateFactory', []);
    const newGateImpl = await deploy<Gate>(env, 'Gate', []);
    const newProblemImpl = await deploy<Problem>(env, 'Problem', []);

    await env.gateFactory.upgradeTo(newGateFactoryImpl.address, env.nonceManager.nonce());
    await env.gateFactory.upgradeBeacon(newGateImpl.address, env.nonceManager.nonce());
    await env.problemFactory.upgradeBeacon(newProblemImpl.address, env.nonceManager.nonce());

    console.log(env.gateFactory.address);
}

main().then(() => {
    exit(0);
});
