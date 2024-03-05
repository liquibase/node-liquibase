export interface UpdateCountSQLCommandAttributes {
  /** Fully-qualified class which specifies a ChangeExecListener */
  changeExecListenerClass?:
    | string
    | undefined;
  /** Path to a properties file for the ChangeExecListenerClass */
  changeExecListenerPropertiesFile?:
    | string
    | undefined;
  /** required* The root changelog */
  changelogFile: string;
  /** Changeset contexts to match */
  contextFilter?:
    | string
    | undefined;
  /** required* The number of changes in the changelog to deploy */
  count: number;
  /** The default catalog name to use for the database connection */
  defaultCatalogName?:
    | string
    | undefined;
  /** The default schema name to use for the database connection */
  defaultSchemaName?:
    | string
    | undefined;
  /** Changeset labels to match */
  labelFilter?:
    | string
    | undefined;
  /** [PRO] Enable or disable reporting. */
  reportEnabled?:
    | boolean
    | undefined;
  /** [PRO] The name of the report. */
  reportName?:
    | string
    | undefined;
  /** [PRO] The path to the directory to generate the report. */
  reportPath?:
    | string
    | undefined;
  /** If set to true and any changeset in a deployment fails, then the update operation stops, and liquibase attempts to rollback all changesets just deployed. A changeset marked "fail-on-error=false" does not trigger as an error, therefore rollback-on-error will not occur. Additionally, if a changeset is not auto-rollback compliant or does not have a rollback script, then no rollback-on-error will occur for any changeset. */
  rollbackOnError?:
    | boolean
    | undefined;
  /** Type of update results summary to show.  Values can be 'off', 'summary', or 'verbose'. */
  showSummary?:
    | string
    | undefined;
  /** Summary output to report update summary results. Values can be 'log', 'console', or 'all'. */
  showSummaryOutput?:
    | string
    | undefined;
}
