import { LiquibaseLogLevels } from '../enums';
import { LIQUIBASE_LABEL } from '../constants';

export class Logger {
	constructor() { }

	public static log(message: string): void {
		return this._log(message);
	}

	public static warn(message: string): void {
		return this._warn(message);
	}

	public static error(message: string): void {
		return this._error(message);
	}

	private static _log(message: string) {
		const levels = [LiquibaseLogLevels.Debug, LiquibaseLogLevels.Info, LiquibaseLogLevels.Severe, LiquibaseLogLevels.Warning];
		if (!this.shouldOperate(levels)) {
			return;
		}
		return console.log(`${LIQUIBASE_LABEL} ${message}`);
	}

	private static _warn(message: string) {
		const levels = [LiquibaseLogLevels.Severe, LiquibaseLogLevels.Warning];
		if (!this.shouldOperate(levels)) {
			return;
		}
		return console.warn('\x1b[33m%s\x1b[0m', `${LIQUIBASE_LABEL} ${message}`);
	}

	private static _error(message: string) {
		const levels = [LiquibaseLogLevels.Severe];
		if (!this.shouldOperate(levels)) {
			return;
		}
		return console.error('\x1b[31m%s\x1b[0m', `${LIQUIBASE_LABEL} ${message}`);
	}

	private static shouldOperate(acceptableLogLevels: Array<LiquibaseLogLevels>) {
		return acceptableLogLevels.indexOf(this.logLevel) > -1;
	}

	private static get logLevel() {
		if (process.env.NODE_ENV === 'test') {
			return LiquibaseLogLevels.Off;
		}
		return LiquibaseLogLevels.Severe;
	}
}
