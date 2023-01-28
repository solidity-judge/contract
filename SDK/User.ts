import { RpcSigner } from './type';
import { Gate, Problem, UserGateFactory } from '../typechain-types';
import { BigNumber, BigNumberish, CallOverrides, Contract, ethers } from 'ethers';
import DEPLOYMENT from '../deployment.json';
import { IGateAbi, IProblemAbi, IUserGateFactoryAbi } from './abis';
import { isSameAddress } from './helper';

export class UserSdk {
    readonly gateFactory: UserGateFactory;
    constructor(readonly signer: RpcSigner) {
        this.gateFactory = new Contract(DEPLOYMENT.gateFactory, IUserGateFactoryAbi, signer) as UserGateFactory;
    }

    async getUsername(userAddr: string): Promise<string> {
        const userGate = await this.gateFactory.callStatic.gates(userAddr);
        if (userGate === ethers.constants.AddressZero) {
            return '';
        }
        const gate = new Contract(userGate, IGateAbi, this.signer) as Gate;
        return gate.callStatic.username();
    }

    async register(username: string) {
        const userGate = await this.gateFactory.callStatic.gates(await this.signer.getAddress());
        if (userGate !== ethers.constants.AddressZero) {
            throw new Error('Already registered');
        }
        return this.gateFactory.createGate(username);
    }
}
