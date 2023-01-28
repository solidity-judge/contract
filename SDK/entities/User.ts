import { Contract, ethers } from 'ethers';
import DEPLOYMENT from '../../deployment.json';
import { Gate, UserGateFactory } from '../../typechain-types';
import { IGateAbi, IUserGateFactoryAbi } from '../abis';
import { RpcSigner } from '../type';
import request from 'graphql-request';
import { USERS_QUERY, UserDto } from '../subgraph';
import { SUBGRAPH_ENDPOINT } from '../consts';

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

    async users({ limit = 10, skip = 0 } = {}): Promise<UserDto[]> {
        const results = await request<{ data: UserDto[] }>(SUBGRAPH_ENDPOINT, USERS_QUERY, {
            limit,
            skip,
        });
        return results.data;
    }
}
