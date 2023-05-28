import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import hre from 'hardhat';
import { exit } from 'process';
import { ProblemSDK } from '../../SDK/entities/Problem';

async function main() {
    const [deployer]: SignerWithAddress[] = await hre.ethers.getSigners();

    const addresses = [
        '0x9e343b14ca92cc4fac6d5ff009f1317b64af6f07',
        '0x41f279f89854209b8734a78adee7de6be388e420',
        '0x897e22ffd7761c2acfd7b4c4b459bcd4099b6d2a',
    ];
    for (const address of addresses) {
        const pSDK = new ProblemSDK(
            {
                inputFormat: ['uint256', 'uint256'],
                outputFormat: ['uint256'],
                address,
            },
            deployer.address,
            deployer
        );
        await pSDK
            .replaceTests([
                {
                    input: ['1', '2'],
                    output: ['3'],
                    gasLimit: 100_000,
                },
                {
                    input: ['1', '3'],
                    output: ['4'],
                    gasLimit: 100_000,
                },
            ])
            .then((x) => x.wait());
    }
}

main().then(() => {
    exit(0);
});
