import { LiquibaseConfig } from '../models';
export declare class Logger {
    private config;
    constructor(config: LiquibaseConfig);
    log(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    private _log;
    private _warn;
    private _error;
    private shouldOperate;
    private get logLevel();
}
