export interface ChecksRunCommandAttributes {
  /** Allows automatic backup and updating of liquibase.checks.conf file when new quality checks are available, or for file format changes. Options: [on|off] */
  autoUpdate?: string | undefined;
  /** If true, sqlFile change type contents will be cached in memory to improve performance, at the cost of higher memory usage. To reduce memory usage, set this to false. */
  cacheChangelogFileContents?: boolean | undefined;
  /** Relative or fully qualified path to a Liquibase changelog file.  One of --changelog-file or --url is required. */
  changelogFile?: string | undefined;
  /** The changeset filter to use when determining which changesets to run checks against, which can be a comma separated list of the following options: 'all', 'pending' */
  changesetFilter?: string | undefined;
  /** Comma-separated list of one or more enabled checks to run. Checks to exclude can be prefixed with the ! character. If no checks are specified, all enabled checks will run. Example: --check-name=shortname1,shortname2,!shortname3 */
  checkName?: string | undefined;
  /** Allow changeset's rollback code to be analyzed for compliance with currently enabled quality checks. */
  checkRollbacks?: boolean | undefined;
  /** Specify which parts of the checks run output should be shown; options: all, issues, issues0, issues1, issues2, issues3, issues4, validated, checksrun, sqlparserfails, skippedchecks */
  checksOutput?: string | undefined;
  /** If using a checks packages file, optionally specify which packages should be run from the file as a comma separated list. */
  checksPackages?: string | undefined;
  /** The Liquibase component to run checks against, which can be a comma separated list of the following options: 'changelog', 'database' */
  checksScope?: string | undefined;
  /** Relative or fully qualified path to a configuration file for checks execution */
  checksSettingsFile?: string | undefined;
  /** Changeset contexts to match */
  contextFilter?: string | undefined;
  /** The default catalog name to use for the database connection */
  defaultCatalogName?: string | undefined;
  /** The default schema name to use for the database connection */
  defaultSchemaName?: string | undefined;
  /** The JDBC driver class */
  driver?: string | undefined;
  /** The JDBC driver properties file */
  driverPropertiesFile?: string | undefined;
  /** [PRO] Option to create JSON output */
  format?: string | undefined;
  /** Changeset labels to match */
  labelFilter?: string | undefined;
  /** Password to use to connect to the database */
  password?: string | undefined;
  /** [PRO] Enable or disable reporting. */
  reportEnabled?: boolean | undefined;
  /** [PRO] The name of the report. */
  reportName?: string | undefined;
  /** [PRO] The path to the directory to generate the report. */
  reportPath?: string | undefined;
  /** The schemas to check when checks-scope contains 'database' */
  schemas?: string | undefined;
  /** The severity that a check which fails due to a SQL parse error will exit with. If not set, use the severity of the configured check. Available values are: 0, 1, 2, 3, 4 */
  sqlParserFailSeverity?: number | undefined;
  /** The JDBC database connection URL.  One of --changelog-file or --url is required. */
  url?: string | undefined;
  /** Username to use to connect to the database */
  username?: string | undefined;
  /** Verbose flag with optional values of 'True' or 'False'. The default is 'False'. */
  verbose?: boolean | undefined;
}
