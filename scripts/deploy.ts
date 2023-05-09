import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import hre from 'hardhat';
import { exit } from 'process';
import { Gate, Problem, ProblemFactory, UserGateFactory } from '../typechain-types';
import { Environment, NonceManager, prepEnv } from './env';
import { deploy, deployProxy } from './helper';

async function main() {
    const [deployer]: SignerWithAddress[] = await hre.ethers.getSigners();
    const env: Environment = {} as any;

    env.nonceManager = new NonceManager(deployer);
    await env.nonceManager.prepNonce();

    const gateImplementation = await deploy<Gate>(env, 'Gate', []);
    const userGateFactory = await deployProxy<UserGateFactory>(env, 'UserGateFactory', [], [gateImplementation.address]);

    const problemImplementation = await deploy<Problem>(env, 'Problem', []);
    const problemFactory = await deployProxy<ProblemFactory>(env, 'ProblemFactory', [userGateFactory.address], [problemImplementation.address]);




}

main().then(() => {
    exit(0);
});
