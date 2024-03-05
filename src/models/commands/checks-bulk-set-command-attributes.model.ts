export interface ChecksBulkSetCommandAttributes {
  /** Allows automatic backup and updating of liquibase.checks.conf file when new quality checks are available, or for file format changes. Options: [on|off] */
  autoUpdate?: string | undefined;
  /** Relative or fully qualified path to a configuration file for checks execution */
  checksSettingsFile?: string | undefined;
  /** Disable all qualifying checks in the checks settings file */
  disable?: boolean | undefined;
  /** Enable all qualifying checks in the checks settings file */
  enable?: boolean | undefined;
  /** Do not ask for confirmation when running this command */
  force?: boolean | undefined;
  /** Set the severity of all checks to the value specified */
  severity?: string | undefined;
}
