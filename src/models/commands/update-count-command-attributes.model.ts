export interface UpdateCountCommandAttributes {
	/** Fully-qualified class which specifies a ChangeExecListener */
	changeExecListenerClass?: string;
	/** Path to a properties file for the ChangeExecListenerClass */
	changeExecListenerPropertiesFile?: string;
	/** required* The root changelog */
	changelogFile: string;
	/** Changeset contexts to match */
	contextFilter?: string;
	/** required* The number of changes in the changelog to deploy */
	count: number;
	/** The default catalog name to use for the database connection */
	defaultCatalogName?: string;
	/** The default schema name to use for the database connection */
	defaultSchemaName?: string;
	/** Changeset labels to match */
	labelFilter?: string;
	/** [PRO] Enable or disable reporting. */
	reportEnabled?: boolean;
	/** [PRO] The name of the report. */
	reportName?: string;
	/** [PRO] The path to the directory to generate the report. */
	reportPath?: string;
	/** If set to true and any changeset in a deployment fails, then the update operation stops, and liquibase attempts to rollback all changesets just deployed. A changeset marked "fail-on-error=false" does not trigger as an error, therefore rollback-on-error will not occur. Additionally, if a changeset is not auto-rollback compliant or does not have a rollback script, then no rollback-on-error will occur for any changeset. */
	rollbackOnError?: boolean;
	/** Type of update results summary to show.  Values can be 'off', 'summary', or 'verbose'. */
	showSummary?: string;
	/** Summary output to report update summary results. Values can be 'log', 'console', or 'all'. */
	showSummaryOutput?: string;
}
