import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import hre from 'hardhat';
import { exit } from 'process';
import { Gate, Problem, UserGateFactory } from '../typechain-types';
import { prepEnv } from './env';
import { deploy, getContractAt } from './helper';
import { zeroAddress } from '@nomicfoundation/ethereumjs-util';

async function main() {
    const [deployer]: SignerWithAddress[] = await hre.ethers.getSigners();
    const env = await prepEnv(deployer);
    const problemAddress = '0x897e22ffd7761c2acfd7b4c4b459bcd4099b6d2a';
    const deadline = new Date('2023-10-10');

    const problem = await getContractAt<Problem>('Problem', problemAddress);
    await problem.setDeadline(Math.trunc(deadline.getTime() / 1000), env.nonceManager.nonce());
}

main().then(() => {
    exit(0);
});
