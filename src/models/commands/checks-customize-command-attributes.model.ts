export interface ChecksCustomizeCommandAttributes {
  /** Allows automatic backup and updating of liquibase.checks.conf file when new quality checks are available, or for file format changes. Options: [on|off] */
  autoUpdate?: string | undefined;
  /** required* Name of check to configure */
  checkName: string;
  /** Relative or fully qualified path to a configuration file for checks execution */
  checksSettingsFile?: string | undefined;
}
