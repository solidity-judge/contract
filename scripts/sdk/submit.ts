import { env, exit } from 'process';
import hre from 'hardhat';
import { prepEnv, writeDeployment } from '../env';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { getContractAt } from '../helper';
import { Gate, Problem } from '../../typechain-types';

async function main() {
    const [deployer]: SignerWithAddress[] = await hre.ethers.getSigners();
    const solutionBytesCode =
        '0x608060405234801561001057600080fd5b50610454806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806309c5eabe14610030575b600080fd5b61004a6004803603810190610045919061020b565b610060565b60405161005791906102d3565b60405180910390f35b606060008083806020019051810190610079919061032b565b915091508082610089919061039a565b60405160200161009991906103dd565b60405160208183030381529060405292505050919050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610118826100cf565b810181811067ffffffffffffffff82111715610137576101366100e0565b5b80604052505050565b600061014a6100b1565b9050610156828261010f565b919050565b600067ffffffffffffffff821115610176576101756100e0565b5b61017f826100cf565b9050602081019050919050565b82818337600083830152505050565b60006101ae6101a98461015b565b610140565b9050828152602081018484840111156101ca576101c96100ca565b5b6101d584828561018c565b509392505050565b600082601f8301126101f2576101f16100c5565b5b813561020284826020860161019b565b91505092915050565b600060208284031215610221576102206100bb565b5b600082013567ffffffffffffffff81111561023f5761023e6100c0565b5b61024b848285016101dd565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561028e578082015181840152602081019050610273565b60008484015250505050565b60006102a582610254565b6102af818561025f565b93506102bf818560208601610270565b6102c8816100cf565b840191505092915050565b600060208201905081810360008301526102ed818461029a565b905092915050565b6000819050919050565b610308816102f5565b811461031357600080fd5b50565b600081519050610325816102ff565b92915050565b60008060408385031215610342576103416100bb565b5b600061035085828601610316565b925050602061036185828601610316565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006103a5826102f5565b91506103b0836102f5565b92508282019050808211156103c8576103c761036b565b5b92915050565b6103d7816102f5565b82525050565b60006020820190506103f260008301846103ce565b9291505056fea264697066735822122028edef7e67b443e5fe1741507208308eebbc3e3b8a0e801c46f4c731009704ff64736f6c637828302e382e31382d646576656c6f702e323032332e312e32312b636f6d6d69742e64373064373961660059';

    const env = await prepEnv(deployer);
    const gateAddress = '0x72901f0d22fa29154f606b4dfa35d974fa29df0b';
    const problemAddress = '0x5ad2233a0bdc178442ebe2ec36c6ea456aa7448e';

    const gateContract = await getContractAt<Gate>('Gate', gateAddress);
    const problemContract = await getContractAt<Problem>('Problem', problemAddress);

    const solutionAddr = await gateContract.callStatic.deploy(solutionBytesCode);
    console.log(solutionAddr);
    await gateContract.deploy(solutionBytesCode, env.nonceManager.nonce());

    await problemContract.updateAndRunSolution(solutionAddr, env.nonceManager.nonce());
}

main().then(() => {
    exit(0);
});
