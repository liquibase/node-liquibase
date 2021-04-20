export declare class FileHelper {
    static get bundledLiquibasePath(): string;
    static get bundledLiquibasePathForExternalConsumers(): string;
    static get bundledLiquibasePathForInternalConsumers(): string;
    static readFileContent(absolutePathToPropertyFile: string): string;
}
