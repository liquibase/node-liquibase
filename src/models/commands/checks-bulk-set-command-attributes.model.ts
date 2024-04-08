export interface ChecksBulkSetCommandAttributes {
  /** Automatically enable new quality checks in liquibase.checks.conf file when they are available. Options: [true|false] */
  autoEnableNewChecks?: boolean;
  /** Allows automatic backup and updating of liquibase.checks.conf file when new quality checks are available, or for file format changes. Options: [on|off] */
  autoUpdate?: string;
  /** Relative or fully qualified path to a configuration file for checks execution */
  checksSettingsFile?: string;
  /** Disable all qualifying checks in the checks settings file */
  disable?: boolean;
  /** Enable all qualifying checks in the checks settings file */
  enable?: boolean;
  /** Do not ask for confirmation when running this command */
  force?: boolean;
  /** Set the severity of all checks to the value specified */
  severity?: string;
}
