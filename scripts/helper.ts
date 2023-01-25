import hre from "hardhat";
import { Environment, NonceManager } from "./env";
import { Contract } from "ethers";
import { ERC1967Proxy } from "../typechain-types";
import { exit } from "process";

const HG = 8000000;

export async function verifyContract(contract: string, constructor: any[]) {
    try {
        await hre.run('verify:verify', {
            address: contract,
            constructorArguments: constructor,
        });
    } catch (err) {
        let errStr: string = err.toString();
        if (errStr.includes('Already Verified')) {
            console.log('[VERIFIED] Nice. Alr Verified');
        } else if (errStr.includes('hardhat')) {

        } else {
            console.log('[FATAL] Error occured while verifying contract');
            console.log(errStr);
        }
    }
}

export async function deploy<CType extends Contract>(
    env: Environment,
    abiType: string,
    args: any[],
    libs: any = {},
    printLog: boolean = true
) {
    if (printLog) console.log(`Deploying ${abiType}...`);
    const contractFactory = await hre.ethers.getContractFactory(abiType, { libraries: libs });
    const contract = await contractFactory.connect(env.nonceManager.deployer).deploy(...args, env.nonceManager.nonce(HG));
    await contract.deployed();
    if (printLog) console.log(`[DEPLOYED] ${abiType} / ${(await contract).address}`);
    await verifyContract(contract.address, args);
    return contract as CType;
}

export async function deployProxy<CType extends Contract>(
    env: Environment,
    abiType: string,
    args: any[],
    argsInit: any[],
    libs: any = {}
) {
    const impl = await deploy<CType>(env, abiType, args, libs, false);
    const proxy = await deploy<ERC1967Proxy>(env, 'ERC1967Proxy', [impl.address, []], {}, false);
    try {
        const proxyInitializable = await getContractAt<CType>(abiType, proxy.address);
        await proxyInitializable.initialize(...argsInit, env.nonceManager.nonce(HG));
    } catch (e) {
        console.log(e);
        exit(0);
    }

    console.log(`Proxy for ${abiType} deployed at: ${proxy.address}`);
    return getContractAt<CType>(abiType, proxy.address);
}


export async function getContractAt<CType extends Contract>(abiType: string, address: string) {
    if (address == null || address == undefined) {
        return {} as CType;
    }
    return (await hre.ethers.getContractAt(abiType, address)) as CType;
}
