import { IProblemFactory, IUserGateFactory, ProblemFactory, UserGateFactory } from '../typechain-types';
import deployment from '../deployment.json';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import hre from 'hardhat';
import { getContractAt } from './helper';
import fs from 'fs';
import path from 'path';

export class NonceManager {
    deployer: SignerWithAddress;
    _nonce: number = 0;

    constructor(deployer: SignerWithAddress) {
        this.deployer = deployer;
    }

    async prepNonce() {
        this._nonce = (await this.deployer.getTransactionCount()) - 1;
    }

    nonceView() {
        if (hre.network.name == 'hardhat') return {};
        return {
            nonce: this._nonce + 1,
        };
    }

    nonce(gas: number = 0) {
        if (hre.network.name == 'hardhat') {
            if (gas == 0) {
                return {
                    // gasPrice: 31 * 10 ** 9,
                };
            } else {
                return {
                    gasLimit: gas,
                };
            }
        } else {
            if (gas == 0) {
                return {
                    nonce: ++this._nonce,
                };
            } else {
                return {
                    nonce: ++this._nonce,
                    gasLimit: gas,
                };
            }
        }
    }
}

export interface Environment {
    nonceManager: NonceManager;
    gateFactory: UserGateFactory;
    problemFactory: ProblemFactory;
}

export async function prepEnv(deployer: SignerWithAddress): Promise<Environment> {
    let env: Environment = {} as any;
    env.nonceManager = new NonceManager(deployer);
    await env.nonceManager.prepNonce();
    if (deployment.gateFactory != '') {
        env.gateFactory = await getContractAt<UserGateFactory>('UserGateFactory', deployment.gateFactory);
    }

    if (deployment.problemFactory != '') {
        env.problemFactory = await getContractAt<ProblemFactory>('ProblemFactory', deployment.problemFactory);
    }
    return env;
}

export function writeDeployment(env: Environment) {
    fs.writeFileSync(
        path.resolve(__dirname, `../deployment.json`),
        JSON.stringify(
            {
                gateFactory: env.gateFactory.address,
                problemFactory: env.problemFactory.address,
            },
            null,
            4
        )
    );
}
