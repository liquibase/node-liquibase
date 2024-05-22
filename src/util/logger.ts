import { LiquibaseLogLevels } from '../enums';
import { LIQUIBASE_LABEL } from '../constants';
import { LiquibaseConfig } from '../models';

export class Logger {
  constructor(private config: LiquibaseConfig) {}

  public log(message: string): void {
    return this._log(message);
  }

  public debug(message: string): void {
    return this._debug(message);
  }

  public info(message: string): void {
    return this._info(message);
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

    if(this.logLevel == LiquibaseLogLevels.Debug)
      return this._debug(message);

    return console.log(`${LIQUIBASE_LABEL} ${this.sanitizeOutput(message)}`);
  }

  private _debug(message: string) {
    const levels = [LiquibaseLogLevels.Debug, LiquibaseLogLevels.Info, LiquibaseLogLevels.Severe, LiquibaseLogLevels.Warning];

    if (!this.shouldOperate(levels)) {
      return;
    }

    return console.debug('\x1b[34m%s\x1b[0m', `${LIQUIBASE_LABEL} ${message}`);
  }

  private _info(message: string) {
    const levels = [LiquibaseLogLevels.Info, LiquibaseLogLevels.Severe, LiquibaseLogLevels.Warning];

    if (!this.shouldOperate(levels)) {
      return;
    }

    return console.info('\x1b[32m%s\x1b[0m', `${LIQUIBASE_LABEL} ${this.sanitizeOutput(message)}`);
  }

  private _warn(message: string) {
    const levels = [LiquibaseLogLevels.Severe, LiquibaseLogLevels.Warning];

    if (!this.shouldOperate(levels)) {
      return;
    }

    return console.warn('\x1b[33m%s\x1b[0m', `${LIQUIBASE_LABEL} ${this.sanitizeOutput(message)}`);
  }

  private _error(message: string) {
    const levels = [LiquibaseLogLevels.Severe];

    if (!this.shouldOperate(levels)) {
      return;
    }

    return console.error('\x1b[31m%s\x1b[0m', `${LIQUIBASE_LABEL} ${this.sanitizeOutput(message)}`);
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

  private sanitizeOutput(output: string): string {
    return output.replace(/password=("?\S+"?)/gi, 'password=******');
  }

}
