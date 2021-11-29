import { exec } from 'child_process';
import { LiquibaseConfig } from '../models';
import { Logger } from '../util';

export class CommandHandler {
  private logger: Logger;

  constructor(config: LiquibaseConfig) {
    this.logger = new Logger(config);
  }

  public spawnChildProcess(commandString: string): Promise<string> {
    this.logger.log(`Running ${commandString}...`);

    return new Promise((resolve, reject) => {
      exec(commandString, (error, stdout, stderr) => {
        this.logger.log(`\n ${stdout}`);

        if (error) {
			console.log(error, stdout, stderr)
          this.logger.error(`\n ${stderr}`);
          // error.stderr = stderr;
          return reject(error);
        }

        resolve(stdout);
      });
    });
  }
}
