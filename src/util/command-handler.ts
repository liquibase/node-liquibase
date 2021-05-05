import { exec } from 'child_process';
import { Logger } from '../util';

export class CommandHandler {
	public static spawnChildProcess(commandString: string): Promise<string> {
		Logger.log(`Running ${commandString}...`);
		return new Promise((resolve, reject) => {
			exec(commandString, (error, stdout, stderr) => {
				Logger.log(`\n ${stdout}`);
				if (error) {
					Logger.error(`\n ${stderr}`);
					// error.stderr = stderr;
					return reject(error);
				}
				resolve(stdout);
			});
		});
	}
}
