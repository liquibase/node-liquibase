import { LiquibaseLogLevels } from '../enums';
import { LIQUIBASE_LABEL } from '../constants';
import { LiquibaseConfig } from '../models';

export class Logger {
  constructor(private config: LiquibaseConfig) {}

  public log(message: string): void {
    return this._log(message);
  }

  public warn(message: string): void {
    return this._warn(message);
  }

  public error(message: string): void {
    return this._error(message);
  }

  private _log(message: string) {
    const levels = [
      LiquibaseLogLevels.Debug,
      LiquibaseLogLevels.Info,
      LiquibaseLogLevels.Severe,
      LiquibaseLogLevels.Warning,
    ];

    if (!this.shouldOperate(levels)) {
      return;
    }

    return console.log(`${LIQUIBASE_LABEL} ${message}`);
  }

  private _warn(message: string) {
    const levels = [LiquibaseLogLevels.Severe, LiquibaseLogLevels.Warning];

    if (!this.shouldOperate(levels)) {
      return;
    }

    return console.warn('\x1b[33m%s\x1b[0m', `${LIQUIBASE_LABEL} ${message}`);
  }

  private _error(message: string) {
    const levels = [LiquibaseLogLevels.Severe];

    if (!this.shouldOperate(levels)) {
      return;
    }

    return console.error('\x1b[31m%s\x1b[0m', `${LIQUIBASE_LABEL} ${message}`);
  }

  private shouldOperate(acceptableLogLevels: Array<LiquibaseLogLevels>) {
    return acceptableLogLevels.indexOf(this.logLevel) > -1;
  }

  private get logLevel() {
    if (process.env.NODE_ENV === 'test') {
      return LiquibaseLogLevels.Off;
    }

    return this.config?.logLevel || LiquibaseLogLevels.Severe;
  }
}
