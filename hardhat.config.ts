import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import '@typechain/hardhat';
import * as dotenv from "dotenv";
import "hardhat-contract-sizer";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/types";
import "solidity-coverage";

const DUMMY_PRIVATE_KEY = '0x1111111111111111111111111111111111111111111111111111111111111111';
const DUMMY_RICK = '0xca3547a47684862274b476b689f951fad53219fbde79f66c9394e30f1f0b4904';
const DUMMY_DUCK = '0x4bad9ef34aa208258e3d5723700f38a7e10a6bca6af78398da61e534be792ea8';
const DUMMY_FEE_EXECUTOR = '0x4bad9ef34aa208258e3d5723700f38a7e10a6bca6af78398da61e534be792eaa';
const rootPrivateKey = process.env.PRIVATE_KEYS || DUMMY_PRIVATE_KEY;

const RICK = process.env.RICK || DUMMY_RICK;
const DUCK = process.env.DUCK || DUMMY_DUCK;
const FEE_EXECUTOR = process.env.DEPLOYER_V1 || DUMMY_FEE_EXECUTOR;

dotenv.config();

const config: HardhatUserConfig = {
    defaultNetwork: 'hardhat',
    paths: {
        sources: './src/contracts',
        tests: './scripts',
        artifacts: './build/artifacts',
        cache: './build/cache',
    },
    networks: {
        hardhat: {
            chainId: 43113,
            forking: {
                url: `https://api.avax-test.network/ext/bc/C/rpc`,
            },
            // chainId: 1,
            // forking: {
            //     url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
            //     blockNumber: 16426132
            // },
            accounts: [
                // 5 accounts with 10^14 ETH each
                // Addresses:
                //   your address generated from the private key
                //   0x6824c889f6EbBA8Dac4Dd4289746FCFaC772Ea56
                //   0xCFf94465bd20C91C86b0c41e385052e61ed49f37
                //   0xEBAf3e0b7dBB0Eb41d66875Dd64d9F0F314651B3
                //   0xbFe6D5155040803CeB12a73F8f3763C26dd64a92
                {
                    privateKey: rootPrivateKey,
                    balance: '1000000000000000000000000000000000000',
                },
                {
                    privateKey: RICK,
                    balance: '1000000000000000000000000000000000000',
                },
                {
                    privateKey: DUCK,
                    balance: '1000000000000000000000000000000000000',
                },
                {
                    privateKey: FEE_EXECUTOR,
                    balance: '1000000000000000000000000000000000000',
                },
                {
                    privateKey: '0x380c430a9b8fa9cce5524626d25a942fab0f26801d30bfd41d752be9ba74bd98',
                    balance: '1000000000000000000000000000000000000',
                },
            ],
            allowUnlimitedContractSize: false,
            blockGasLimit: 800000000000000,
            gas: 80000000,
            loggingEnabled: false,
        },
        fuji: {
            url: 'https://api.avax-test.network/ext/bc/C/rpc',
            accounts: [rootPrivateKey, RICK, DUCK],
            gasPrice: 30 * 1000000000,
            chainId: 43113,
            gas: 8000000
        }
    },
    solidity: {
        compilers: [
            {
                version: '0.8.17',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 90000, // 2^32-1
                    },
                },
            },
        ],
        overrides: {}
    },
    mocha: {
        timeout: 500000,
    },
    // tenderly: {
    //   username: "Yongkhang",
    //   project: "pendle-finance"
    // },
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
        apiKey: process.env.ETHERSCAN_KEY,
    },

    contractSizer: {
        disambiguatePaths: false,
        runOnCompile: false,
        strict: true,
        only: [],
    },
};

export default config;
