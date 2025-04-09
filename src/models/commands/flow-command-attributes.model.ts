export interface FlowCommandAttributes {
	/** The path to the configuration yaml file which contains one or more 'stages' of commands to be executed in a liquibase flow operation. Defaults to yaml file named "liquibase.flowfile.yaml" in the current working directory. */
	flowFile?: string;
	/** Parse flow-file YAML to allow only Liquibase flow-file specific properties, indentations, and structure. */
	flowFileStrictParsing?: boolean;
	/** The default interpreter used to execute shell commands. EXAMPLES: bash, sh, cmd. */
	flowShellInterpreter?: string;
	/** Do not delete temporary files created by the shell command execution */
	flowShellKeepTempFiles?: boolean;
}
