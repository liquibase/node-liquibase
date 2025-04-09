export interface ChecksShowCommandAttributes {
	/** Automatically enable new quality checks in liquibase.checks.conf file when they are available. Options: [true|false] */
	autoEnableNewChecks?: boolean;
	/** Allows automatic backup and updating of liquibase.checks.conf file when new quality checks are available, or for file format changes. Options: [on|off] */
	autoUpdate?: string;
	/** Only show the listed rules. Use rule shortnames separated with commas to list all required rules. Checks to exclude can be prefixed with the ! character. Use 'all', to select all the rules (used by default, if the parameter isn't set). */
	checkName?: string;
	/** If using a checks packages file, optionally specify which packages should be run from the file as a comma separated list. */
	checksPackages?: string;
	/** Relative or fully qualified path to a configuration file for checks execution */
	checksSettingsFile?: string;
	/** Only show the listed columns. Column options: id,checkname,type,priority,shortname,scope,enabled,severity,customization,description,file. Use commas to separate column names. Use 'all' to select all the columns. */
	showCols?: string;
}
