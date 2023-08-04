export declare function isSameAddress(a: string, b: string): boolean;
export declare function getCompilerVersion(): Promise<string>;
export declare function compileSolidity(source: string): Promise<{
    bytecode: string;
    errors: {
        msg: string;
        code: string;
    }[];
}>;
