import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import hre from 'hardhat';
import { exit } from 'process';
import { ProblemSDK } from '../../SDK/entities/Problem';

async function main() {
    const [deployer]: SignerWithAddress[] = await hre.ethers.getSigners();

    const addresses = ['0x9e343b14ca92cc4fac6d5ff009f1317b64af6f07'];
    for (const address of addresses) {
        const txHash = '0x7875f93f53345fdeaefada576fe6871e113f7a2a29969897c8dc05be1c4561bd';
        const pSDK = new ProblemSDK(
            {
                inputFormat: ['uint256', 'uint256'],
                outputFormat: ['uint256'],
                address,
            },
            deployer.address,
            deployer
        );
        const logs = await pSDK.parseSubmissionVerdict(txHash);
        console.log(logs);
    }
}

main().then(() => {
    exit(0);
});
