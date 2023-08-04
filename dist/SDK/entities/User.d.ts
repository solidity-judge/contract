import { ethers } from 'ethers';
import { UserGateFactory } from '../../typechain-types';
import { RpcSigner } from '../type';
import { UserDto } from '../subgraph';
export declare class UserSdk {
    readonly signer: RpcSigner;
    readonly gateFactory: UserGateFactory;
    constructor(signer: RpcSigner);
    getUsername(userAddr: string): Promise<string>;
    register(username: string): Promise<ethers.ContractTransaction>;
    static users({ limit, skip }?: {
        limit?: number | undefined;
        skip?: number | undefined;
    }): Promise<{
        users: UserDto[];
        total: number;
    }>;
}
