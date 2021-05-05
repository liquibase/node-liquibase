export declare class Logger {
    constructor();
    static log(message: string): void;
    static warn(message: string): void;
    static error(message: string): void;
    private static _log;
    private static _warn;
    private static _error;
    private static shouldOperate;
    private static get logLevel();
}
