#!/usr/bin/env node
import { LiquibaseCommands } from './enums';
import { CommandHandler, FileHelper } from './util';

const commandString = getCommandString();
CommandHandler.spawnChildProcess(commandString);


function getCommandString(): string {
	const args = process.argv.slice(2);
	const argsWereProvided = args?.length > 0;
	if (!argsWereProvided) {
		throw new Error('CLI call signature does not match the expected format. Please verify you have passed required arguments and parameters.');
	}

	const firstArg = args[0];
	const firstArgWasAKnownCommand = Object.values(LiquibaseCommands).includes(firstArg as any);
	const firstArgWasAFlag = firstArg.substr(0, 2) === '--';

	/**
	 * This allows us to support a Liquibase-core-like syntax (i think?).
	 *
	 * Basically if we recognize the first arg as a command or a flag we can be relatively certain they didn't give us a filepath to an alternative liquibase executable.
	 * In that case, we provide the `'liquibase'` string to follow normal behavior.
	 */
	if (firstArgWasAKnownCommand || firstArgWasAFlag) {
		args.unshift(FileHelper.bundledLiquibasePath);
	}

	return args.join(' ');
}
