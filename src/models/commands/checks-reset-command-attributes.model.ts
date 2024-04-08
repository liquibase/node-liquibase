export interface ChecksResetCommandAttributes {
  /** Automatically enable new quality checks in liquibase.checks.conf file when they are available. Options: [true|false] */
  autoEnableNewChecks?: boolean;
  /** Allows automatic backup and updating of liquibase.checks.conf file when new quality checks are available, or for file format changes. Options: [on|off] */
  autoUpdate?: string;
  /** required* Name of check to reset */
  checkName: string;
  /** Relative or fully qualified path to a configuration file for checks execution */
  checksSettingsFile?: string;
}
