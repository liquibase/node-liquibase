import { LiquibaseConfig } from '../models';
export declare class CommandHandler {
    private logger;
    constructor(config: LiquibaseConfig);
    spawnChildProcess(commandString: string): Promise<string>;
}
