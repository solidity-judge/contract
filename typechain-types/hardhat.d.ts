/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "IERC1822Proxiable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822Proxiable__factory>;
    getContractFactory(
      name: "BeaconProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BeaconProxy__factory>;
    getContractFactory(
      name: "IBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeacon__factory>;
    getContractFactory(
      name: "ERC1967Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Proxy__factory>;
    getContractFactory(
      name: "ERC1967Upgrade",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Upgrade__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "Gate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Gate__factory>;
    getContractFactory(
      name: "Problem",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Problem__factory>;
    getContractFactory(
      name: "ProblemFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProblemFactory__factory>;
    getContractFactory(
      name: "SimpleChecker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleChecker__factory>;
    getContractFactory(
      name: "TestManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestManager__factory>;
    getContractFactory(
      name: "UserGateFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UserGateFactory__factory>;
    getContractFactory(
      name: "IChecker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IChecker__factory>;
    getContractFactory(
      name: "IGate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGate__factory>;
    getContractFactory(
      name: "IProblem",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProblem__factory>;
    getContractFactory(
      name: "IProblemFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProblemFactory__factory>;
    getContractFactory(
      name: "ISolution",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISolution__factory>;
    getContractFactory(
      name: "ITestManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITestManager__factory>;
    getContractFactory(
      name: "IUserGateFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUserGateFactory__factory>;
    getContractFactory(
      name: "BoringOwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BoringOwnableUpgradeable__factory>;
    getContractFactory(
      name: "BoringOwnableUpgradeableData",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BoringOwnableUpgradeableData__factory>;

    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "IERC1822Proxiable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822Proxiable>;
    getContractAt(
      name: "BeaconProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BeaconProxy>;
    getContractAt(
      name: "IBeacon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeacon>;
    getContractAt(
      name: "ERC1967Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Proxy>;
    getContractAt(
      name: "ERC1967Upgrade",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Upgrade>;
    getContractAt(
      name: "Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "Gate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Gate>;
    getContractAt(
      name: "Problem",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Problem>;
    getContractAt(
      name: "ProblemFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProblemFactory>;
    getContractAt(
      name: "SimpleChecker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleChecker>;
    getContractAt(
      name: "TestManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestManager>;
    getContractAt(
      name: "UserGateFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UserGateFactory>;
    getContractAt(
      name: "IChecker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IChecker>;
    getContractAt(
      name: "IGate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGate>;
    getContractAt(
      name: "IProblem",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProblem>;
    getContractAt(
      name: "IProblemFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProblemFactory>;
    getContractAt(
      name: "ISolution",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISolution>;
    getContractAt(
      name: "ITestManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITestManager>;
    getContractAt(
      name: "IUserGateFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUserGateFactory>;
    getContractAt(
      name: "BoringOwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BoringOwnableUpgradeable>;
    getContractAt(
      name: "BoringOwnableUpgradeableData",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BoringOwnableUpgradeableData>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
