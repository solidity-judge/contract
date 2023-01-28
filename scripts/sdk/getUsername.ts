import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import hre from 'hardhat';
import { exit } from 'process';
import { UserSdk } from '../../SDK';
import { prepEnv } from '../env';
import { zeroAddress } from '@nomicfoundation/ethereumjs-util';

async function main() {
    const [deployer]: SignerWithAddress[] = await hre.ethers.getSigners();

    const env = await prepEnv(deployer);

    const userSdk = new UserSdk(deployer);
    console.log(await userSdk.getUsername(deployer.address));
    console.log(await userSdk.getUsername(zeroAddress()));
    console.log(await userSdk.users());
}

main().then(() => {
    exit(0);
});
