import { LiquibaseLogLevels } from '../enums';

export interface LiquibaseConfig {
	/**
	 * Absolute path to your Liquibase executable.
	 */
	liquibase?: string;

	/**
	 * Absolute path to your Liquibase executable.
	 */
	liquibasePropertiesFile?: string;

	/**
	 * Absolute path to your Change Log File
	 */
	changeLogFile: string;

	/**
	 * JDBC connection string
	 */
	url: string;

	/**
	 * username
	 */
	username: string;

	/**
	 * password
	 */
	password: string;

	/**
	 * Your Liquibase Pro License key
	 */
	liquibaseProLicenseKey?: string;

	/**
	 * JDBC connection string for ref database
	 */
	referenceUrl?: string;

	/**
	 * username for ref database
	 */
	referenceUsername?: string;
	/** The default catalog name to use for the database connection */
	defaultCatalogName?: string;
	/** The default schema name to use for the database connection */
	defaultSchemaName?: string;
	/** Context string to use for filtering */
	contextFilter?: string;
	/** Label expression to use for filtering */
	labelFilter?: string;
	/** Fully-qualified class which specifies a ChangeExecListener */
	changeExecListenerClass?: string;
	/** Path to a properties file for the ChangeExecListenerClass */
	changeExecListenerPropertiesFile?: string;
	/**
	 * password for ref database
	 */
	referencePassword?: string;
	/** If true, a subset of the MdcKeys, as defined by product, will be set to empty strings upon system startup. */
	addEmptyMdcValues?: boolean;
	/** Allows duplicated changeset identifiers without failing Liquibase execution. */
	allowDuplicatedChangesetIdentifiers?: boolean;
	/** If true, drop and recreate a view instead of replacing it. */
	alwaysDropInsteadOfReplace?: boolean;
	/** When generating SQL for createProcedure, should the procedure schema be forced to the default schema if no schemaName attribute is set? */
	alwaysOverrideStoredLogicSchema?: boolean;
	/** Should Liquibase automatically include REORG TABLE commands when needed? */
	autoReorg?: boolean;
	/** Number of seconds wait between checks to the changelog lock when it is locked */
	changelogLockPollRate?: string;
	/** Number of minutes to wait for the changelog lock to be available before giving up */
	changelogLockWaitTimeInMinutes?: string;
	/** Configures how to handle unknown fields in changelog files. Possible values: STRICT which causes parsing to fail, and LAX which continues with the parsing. */
	changelogParseMode?: string;
	/** Additional classpath entries to use */
	classpath?: string;
	/** Should Liquibase convert to/from STANDARD data types. Applies to both snapshot and update commands. */
	convertDataTypes?: boolean;
	/** [PRO]Relative or fully qualified path to a yaml file containing key:value data to inject or exclude data from JSON structured logs. Learn more at https://docs.liquibase.com/structured-logging */
	customLogDataFile?: string;
	/** [PRO]The frequency that the custom log data will be entered into the logs. Available options are: ONCE,REPEATED */
	customLogDataFrequency?: string;
	/** Name of table to use for tracking concurrent Liquibase usage */
	databaseChangelogLockTableName?: string;
	/** Name of table to use for tracking change history */
	databaseChangelogTableName?: string;
	/** Class to use for Database implementation */
	databaseClass?: string;
	/** The DDL_LOCK_TIMEOUT parameter indicates the number of seconds a DDL command should wait for the locks to become available before throwing the resource busy error message. This applies only to Oracle databases. */
	ddlLockTimeout?: number;
	/** File with default Liquibase properties */
	defaultsFile?: string;
	/** Should Liquibase compare column order in diff operation? */
	diffColumnOrder?: boolean;
	/** Database driver class */
	driver?: string;
	/** Driver-specific properties */
	driverPropertiesFile?: string;
	/** How to handle multiple files being found in the search path that have duplicate paths. Options are WARN (log warning and choose one at random) or ERROR (fail current operation) */
	duplicateFileMode?: string;
	/** Throw an error if Liquibase detects that an includeAll will cause a circular reference (and thus a changelog parse error). */
	errorOnCircularIncludeAll?: boolean;
	/** Encoding to use when reading files. Valid values include: UTF-8, UTF-16, UTF-16BE, UTF-16LE, US-ASCII, or OS to use the system configured encoding. */
	fileEncoding?: string;
	/** DEPRECATED: No longer used */
	filterLogMessages?: boolean;
	/** If true, display a more verbose output for the FlowFile toString representation */
	flowVerboseToString?: boolean;
	/** Should Liquibase include a 'created' attribute in diff/generateChangelog changesets with the current datetime */
	generateChangesetCreatedValues?: boolean;
	/** Should Liquibase include the change description in the id when generating changesets? */
	generatedChangesetIdsContainsDescription?: boolean;
	/** Force liquibase to think it has no access to a keyboard */
	headless?: boolean;
	/** Should Liquibase include the catalog name when determining equality? */
	includeCatalogInSpecification?: boolean;
	/** If set to true, and there are multiple identical tags in the database changelog table, all of the newer matching tags will be rolled back while rolling back to the oldest tag. The default value for this option was false for all Liquibase versions equal to or older than 4.25.1. */
	includeMatchingTagInRollbackOldest?: boolean;
	/** If true, the parent relationship for computed columns is preserved in snapshot-dependent commands: snapshot and diff */
	includeRelationsForComputedColumns?: boolean;
	/** Include the system classpath when resolving classes at runtime */
	includeSystemClasspath?: boolean;
	/** Liquibase Pro or Liquibase Labs license key used to unlock paid capabilities. Get a free trial at https://liquibase.com/trial and use in CLI or add liquibase.licenseKey=<yourKey> into your defaults file. */
	licenseKey?: string;
	/** Catalog to use for Liquibase objects */
	liquibaseCatalogName?: string;
	/** Schema to use for Liquibase objects */
	liquibaseSchemaName?: string;
	/** Tablespace to use for Liquibase objects */
	liquibaseTablespaceName?: string;
	/** Controls which log channels have their level set by the liquibase.logLevel setting. Comma separate multiple values. To set the level of all channels, use 'all'. Example: liquibase,org.mariadb.jdbc */
	logChannels?: string;
	logFile?: string;
	/** Sets the format of log output to console or log files. Open Source users default to unstructured "TEXT" logs to the console or output log files. Pro users have the option to set value as "JSON" or "JSON_PRETTY" to enable json-structured log files to the console or output log files. */
	logFormat?: string;
	/** When set to true, the console messages are mirrored to the logs as [liquibase.ui] to provide a more complete picture of liquibase operations to log analysis tools. Set to false to change this behavior. */
	mirrorConsoleMessagesToLog?: boolean;
	/** How to handle changelog property expressions where a value is not set. For example, a string '${address}' when no 'address' property was defined. Values can be: 'preserve' which leaves the string as-is, 'empty' which replaces it with an empty string, or 'error' which stops processing with an error. */
	missingPropertyMode?: string;
	/** Enable performance tracking. Set to 'false' to disable. If set to 'true', data is stored to a `liquibase-TIMESTAMP.jfr` file in your working directory. Any other value will enable tracking and be used as the name of the file to write the data to. */
	monitorPerformance?: string;
	/** Custom executor that can specified */
	nativeExecutor?: string;
	/** If set to WARN, then liquibase will not throw exception on missing changelog file, instead will show a warning message. */
	onMissingIncludeChangelog?: string;
	/** If set to WARN, then Liquibase will not throw exception on missing sqlFile inside a sqlFile change type, instead will show a warning message */
	onMissingSqlFile?: string;
	outputFile?: string;
	/** Encoding to use when writing files */
	outputFileEncoding?: string;
	/** Line separator for output */
	outputLineSeparator?: string;
	/** Should liquibase treat schema and catalog names as case sensitive? */
	preserveSchemaCase?: boolean;
	/** If true, rollback execution will be forced when having partial changes that needs to be rolled back. Defaults to false. */
	proForceOnPartialChanges?: boolean;
	/** [PRO]The default end delimiter to use for all change sets */
	proGlobalEndDelimiter?: string;
	/** [PRO]If true, the global end delimiter overrides all other settings */
	proGlobalEndDelimiterPrioritized?: boolean;
	/** DEPRECATED: Liquibase Pro license key used to unlock paid capabilities. Get a free trial at https://www.liquibase.com/protrial and use in CLI or add liquibase.pro.licenseKey=<yourKey> into your defaults file. */
	proLicenseKey?: string;
	/** If a column would be dropped in a diffChangeLog, call markUnused instead if set to true */
	proMarkUnusedNotDrop?: boolean;
	/** If true, generate changeSets with SQL-based changes inlined instead of saving them to an external file */
	proSqlInline?: boolean;
	/** If false, do not drop public synonyms in diffChangeLog/dropAll */
	proSynonymsDropPublic?: boolean;
	/** Should Liquibase prompt if a non-local database is being accessed */
	promptForNonLocalDatabase?: boolean;
	/** Implementation of Properties class to provide additional driver properties */
	propertyProviderClass?: string;
	/** Enable or disable reporting. */
	reportsEnabled?: boolean;
	/** The format of the report. Currently, can only be set to "html". */
	reportsFormat?: string;
	/** The name of the reports. */
	reportsName?: string;
	/** The path to the directory to generate the reports. */
	reportsPath?: string;
	/** Complete list of Location(s) to search for files such as changelog files in. Multiple paths can be specified by separating them with commas. */
	searchPath?: string;
	/** If true, remove functionality from file parsers which could be used insecurely. Examples include (but not limited to) disabling remote XML entity support. */
	secureParsing?: boolean;
	/** If true, the rollback report will actually be generated. This argument supercedes whatever value you set on the command. However, both this and the command need to be set to true to actually generate the report. */
	shouldGenerateRollbackReport?: boolean;
	/** Should Liquibase commands execute */
	shouldRun?: boolean;
	/** Should Liquibase snapshot data by default? */
	shouldSnapshotData?: boolean;
	/** If true, show a Liquibase banner on startup. */
	showBanner?: boolean;
	/** If true, all command arguments marked as hidden will be shown in the help output, ignoring the hidden flag. NOTE, due to the order of value provider loading at such an early point in Liquibase startup, you MUST set this as a environment variable. Command line parameters will not be recognized. */
	showHiddenArgs?: boolean;
	/** Level to log SQL statements to */
	sqlLogLevel?: string;
	/** Show SQLWarning messages */
	sqlShowSqlWarnings?: boolean;
	/** Be stricter on allowed Liquibase configuration and setup? */
	strict?: boolean;
	/** Support escaping changelog parameters using a colon. Example: ${:user.name} */
	supportPropertyEscaping?: boolean;
	/** Changes the default UI Service Logger used by Liquibase. Options are CONSOLE or LOGGER. */
	uiService?: string;
	/** If set to true (default value), createProcedure tags with a set schemaName will modify the procedure body with the given schema name. */
	useProcedureSchema?: boolean;
	/** Will perform xsd validation of XML changelog files. When many XML changelog files are included this validation may impact Liquibase performance. Defaults to true. */
	validateXmlChangelogFiles?: boolean;
	/** Verbose flag */
	verbose?: boolean;
	/**
	 * The `logLevel parameter controls the amount of messages that are generated when running Liquibase commands
	 */
	logLevel?: LiquibaseLogLevels;
	/** If set to true and any changeset in a deployment fails, then the update operation stops, and liquibase attempts to rollback all changesets just deployed. A changeset marked "fail-on-error=false" does not trigger as an error, therefore rollback-on-error will not occur. Additionally, if a changeset is not auto-rollback compliant or does not have a rollback script, then no rollback-on-error will occur for any changeset. */
	rollbackOnError?: boolean;
	/** Control whether names of objects in the default catalog are fully qualified or not. If true they are. If false, only objects outside the default catalog are fully qualified */
	outputDefaultCatalog?: boolean;
	/** Control whether names of objects in the default schema are fully qualified or not. If true they are. If false, only objects outside the default schema are fully qualified */
	outputDefaultSchema?: boolean;
}
