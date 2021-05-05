export declare class FileHelper {
    static get bundledLiquibasePath(): string;
    static readFileContent(absolutePathToPropertyFile: string): string;
    private static get bundledLiquibasePathForExternalConsumers();
    private static get bundledLiquibasePathForInternalConsumers();
}
