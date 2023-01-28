let solComp: any = null;

if (typeof window !== 'undefined') {
    solComp = require('@agnostico/browser-solidity-compiler');
}

export function isSameAddress(a: string, b: string) {
    return a.toLowerCase() === b.toLowerCase();
}

let compilerVersion = '';
export async function getCompilerVersion() {
    if (compilerVersion !== '') {
        return compilerVersion;
    }
    const results = (await solComp.getCompilerVersions()) as any;
    compilerVersion = results.releases[results.latestRelease];
    return compilerVersion;
}

export async function compileSolidity(source: string) {
    const version = await getCompilerVersion();
    const output = (await solComp.solidityCompiler({
        version: `https://binaries.soliditylang.org/bin/${version}`,
        contractBody: source,
    })) as any;
    const allErrors: {
        severity: string;
        formattedMessage: string;
        errorCode: string;
    }[] = output['errors'] ?? [];

    const errors = allErrors.filter((x) => x.severity === 'error');

    if (errors.length > 0) {
        return {
            bytecode: '',
            errors: errors.map((x) => {
                return {
                    msg: x.formattedMessage,
                    code: x.errorCode,
                };
            }),
        };
    }

    const contracts = output.contracts.Compiled_Contracts;
    for (const contractName in contracts) {
        return {
            bytecode: '0x' + contracts[contractName].evm.bytecode.object,
            errors: [],
        };
    }
    return { bytecode: '', errors: [{ msg: 'Compilation failed - no contract found', code: '6969' }] };
}
