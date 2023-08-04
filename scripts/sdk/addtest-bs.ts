import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import hre from 'hardhat';
import { exit } from 'process';
import { ProblemSDK } from '../../SDK/entities/Problem';

function createIncreasingArray(n: number) {
    const arr: number[] = [];
    let lastValue = 0;
    for (let i = 0; i < n; i++) {
        lastValue += Math.floor(Math.random() * 100) + 1;
        arr.push(lastValue);
    }
    return arr;
}

async function main() {
    const [deployer]: SignerWithAddress[] = await hre.ethers.getSigners();

    const addresses = ['0x897e22ffd7761c2acfd7b4c4b459bcd4099b6d2a'];
    for (const address of addresses) {
        const pSDK = new ProblemSDK(
            {
                inputFormat: ['uint256[]', 'uint256'],
                outputFormat: ['uint256'],
                address,
            },
            deployer.address,
            deployer
        );

        const arr1 = createIncreasingArray(30).map((x) => x.toString());
        const arr1_str = arr1.join(',');
        const arr2 = createIncreasingArray(100).map((x) => x.toString());
        const arr2_str = arr2.join(',');
        const arr3 = createIncreasingArray(200).map((x) => x.toString());
        const arr3_str = arr3.join(',');

        await pSDK
            .replaceTests([
                {
                    input: [arr1_str, arr1[28]],
                    output: ['28'],
                    gasLimit: 20_000,
                },
                {
                    input: [arr2_str, arr2[98]],
                    output: ['98'],
                    gasLimit: 50_000,
                },
                {
                    input: [arr3_str, arr3[198]],
                    output: ['198'],
                    gasLimit: 80_000,
                },
            ])
            .then((x) => x.wait());
    }
}

main().then(() => {
    exit(0);
});
