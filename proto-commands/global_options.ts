/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

/** Liquibase Global Options */
export interface GlobalOptions {
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
  /** Controls which logs get set to stderr AND to any log file. The CLI defaults, if log file set, to SEVERE. Others vary by integration. The official log levels are: OFF, SEVERE, WARNING, INFO, FINE */
  logLevel?: string;
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
}

function createBaseGlobalOptions(): GlobalOptions {
  return {
    addEmptyMdcValues: undefined,
    allowDuplicatedChangesetIdentifiers: undefined,
    alwaysDropInsteadOfReplace: undefined,
    alwaysOverrideStoredLogicSchema: undefined,
    autoReorg: undefined,
    changelogLockPollRate: undefined,
    changelogLockWaitTimeInMinutes: undefined,
    changelogParseMode: undefined,
    classpath: undefined,
    convertDataTypes: undefined,
    customLogDataFile: undefined,
    customLogDataFrequency: undefined,
    databaseChangelogLockTableName: undefined,
    databaseChangelogTableName: undefined,
    databaseClass: undefined,
    ddlLockTimeout: undefined,
    defaultsFile: undefined,
    diffColumnOrder: undefined,
    driver: undefined,
    driverPropertiesFile: undefined,
    duplicateFileMode: undefined,
    errorOnCircularIncludeAll: undefined,
    fileEncoding: undefined,
    filterLogMessages: undefined,
    flowVerboseToString: undefined,
    generateChangesetCreatedValues: undefined,
    generatedChangesetIdsContainsDescription: undefined,
    headless: undefined,
    includeCatalogInSpecification: undefined,
    includeMatchingTagInRollbackOldest: undefined,
    includeRelationsForComputedColumns: undefined,
    includeSystemClasspath: undefined,
    licenseKey: undefined,
    liquibaseCatalogName: undefined,
    liquibaseSchemaName: undefined,
    liquibaseTablespaceName: undefined,
    logChannels: undefined,
    logFile: undefined,
    logFormat: undefined,
    logLevel: undefined,
    mirrorConsoleMessagesToLog: undefined,
    missingPropertyMode: undefined,
    monitorPerformance: undefined,
    nativeExecutor: undefined,
    onMissingIncludeChangelog: undefined,
    onMissingSqlFile: undefined,
    outputFile: undefined,
    outputFileEncoding: undefined,
    outputLineSeparator: undefined,
    preserveSchemaCase: undefined,
    proForceOnPartialChanges: undefined,
    proGlobalEndDelimiter: undefined,
    proGlobalEndDelimiterPrioritized: undefined,
    proLicenseKey: undefined,
    proMarkUnusedNotDrop: undefined,
    proSqlInline: undefined,
    proSynonymsDropPublic: undefined,
    promptForNonLocalDatabase: undefined,
    propertyProviderClass: undefined,
    reportsEnabled: undefined,
    reportsFormat: undefined,
    reportsName: undefined,
    reportsPath: undefined,
    searchPath: undefined,
    secureParsing: undefined,
    shouldGenerateRollbackReport: undefined,
    shouldRun: undefined,
    shouldSnapshotData: undefined,
    showBanner: undefined,
    showHiddenArgs: undefined,
    sqlLogLevel: undefined,
    sqlShowSqlWarnings: undefined,
    strict: undefined,
    supportPropertyEscaping: undefined,
    uiService: undefined,
    useProcedureSchema: undefined,
    validateXmlChangelogFiles: undefined,
  };
}

export const GlobalOptions = {
  encode(message: GlobalOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addEmptyMdcValues !== undefined) {
      writer.uint32(8).bool(message.addEmptyMdcValues);
    }
    if (message.allowDuplicatedChangesetIdentifiers !== undefined) {
      writer.uint32(16).bool(message.allowDuplicatedChangesetIdentifiers);
    }
    if (message.alwaysDropInsteadOfReplace !== undefined) {
      writer.uint32(24).bool(message.alwaysDropInsteadOfReplace);
    }
    if (message.alwaysOverrideStoredLogicSchema !== undefined) {
      writer.uint32(32).bool(message.alwaysOverrideStoredLogicSchema);
    }
    if (message.autoReorg !== undefined) {
      writer.uint32(40).bool(message.autoReorg);
    }
    if (message.changelogLockPollRate !== undefined) {
      writer.uint32(50).string(message.changelogLockPollRate);
    }
    if (message.changelogLockWaitTimeInMinutes !== undefined) {
      writer.uint32(58).string(message.changelogLockWaitTimeInMinutes);
    }
    if (message.changelogParseMode !== undefined) {
      writer.uint32(66).string(message.changelogParseMode);
    }
    if (message.classpath !== undefined) {
      writer.uint32(74).string(message.classpath);
    }
    if (message.convertDataTypes !== undefined) {
      writer.uint32(80).bool(message.convertDataTypes);
    }
    if (message.customLogDataFile !== undefined) {
      writer.uint32(90).string(message.customLogDataFile);
    }
    if (message.customLogDataFrequency !== undefined) {
      writer.uint32(98).string(message.customLogDataFrequency);
    }
    if (message.databaseChangelogLockTableName !== undefined) {
      writer.uint32(106).string(message.databaseChangelogLockTableName);
    }
    if (message.databaseChangelogTableName !== undefined) {
      writer.uint32(114).string(message.databaseChangelogTableName);
    }
    if (message.databaseClass !== undefined) {
      writer.uint32(122).string(message.databaseClass);
    }
    if (message.ddlLockTimeout !== undefined) {
      writer.uint32(128).int32(message.ddlLockTimeout);
    }
    if (message.defaultsFile !== undefined) {
      writer.uint32(138).string(message.defaultsFile);
    }
    if (message.diffColumnOrder !== undefined) {
      writer.uint32(144).bool(message.diffColumnOrder);
    }
    if (message.driver !== undefined) {
      writer.uint32(154).string(message.driver);
    }
    if (message.driverPropertiesFile !== undefined) {
      writer.uint32(162).string(message.driverPropertiesFile);
    }
    if (message.duplicateFileMode !== undefined) {
      writer.uint32(170).string(message.duplicateFileMode);
    }
    if (message.errorOnCircularIncludeAll !== undefined) {
      writer.uint32(176).bool(message.errorOnCircularIncludeAll);
    }
    if (message.fileEncoding !== undefined) {
      writer.uint32(186).string(message.fileEncoding);
    }
    if (message.filterLogMessages !== undefined) {
      writer.uint32(192).bool(message.filterLogMessages);
    }
    if (message.flowVerboseToString !== undefined) {
      writer.uint32(200).bool(message.flowVerboseToString);
    }
    if (message.generateChangesetCreatedValues !== undefined) {
      writer.uint32(208).bool(message.generateChangesetCreatedValues);
    }
    if (message.generatedChangesetIdsContainsDescription !== undefined) {
      writer.uint32(216).bool(message.generatedChangesetIdsContainsDescription);
    }
    if (message.headless !== undefined) {
      writer.uint32(224).bool(message.headless);
    }
    if (message.includeCatalogInSpecification !== undefined) {
      writer.uint32(232).bool(message.includeCatalogInSpecification);
    }
    if (message.includeMatchingTagInRollbackOldest !== undefined) {
      writer.uint32(240).bool(message.includeMatchingTagInRollbackOldest);
    }
    if (message.includeRelationsForComputedColumns !== undefined) {
      writer.uint32(248).bool(message.includeRelationsForComputedColumns);
    }
    if (message.includeSystemClasspath !== undefined) {
      writer.uint32(256).bool(message.includeSystemClasspath);
    }
    if (message.licenseKey !== undefined) {
      writer.uint32(266).string(message.licenseKey);
    }
    if (message.liquibaseCatalogName !== undefined) {
      writer.uint32(274).string(message.liquibaseCatalogName);
    }
    if (message.liquibaseSchemaName !== undefined) {
      writer.uint32(282).string(message.liquibaseSchemaName);
    }
    if (message.liquibaseTablespaceName !== undefined) {
      writer.uint32(290).string(message.liquibaseTablespaceName);
    }
    if (message.logChannels !== undefined) {
      writer.uint32(298).string(message.logChannels);
    }
    if (message.logFile !== undefined) {
      writer.uint32(306).string(message.logFile);
    }
    if (message.logFormat !== undefined) {
      writer.uint32(314).string(message.logFormat);
    }
    if (message.logLevel !== undefined) {
      writer.uint32(322).string(message.logLevel);
    }
    if (message.mirrorConsoleMessagesToLog !== undefined) {
      writer.uint32(328).bool(message.mirrorConsoleMessagesToLog);
    }
    if (message.missingPropertyMode !== undefined) {
      writer.uint32(338).string(message.missingPropertyMode);
    }
    if (message.monitorPerformance !== undefined) {
      writer.uint32(346).string(message.monitorPerformance);
    }
    if (message.nativeExecutor !== undefined) {
      writer.uint32(354).string(message.nativeExecutor);
    }
    if (message.onMissingIncludeChangelog !== undefined) {
      writer.uint32(362).string(message.onMissingIncludeChangelog);
    }
    if (message.onMissingSqlFile !== undefined) {
      writer.uint32(370).string(message.onMissingSqlFile);
    }
    if (message.outputFile !== undefined) {
      writer.uint32(378).string(message.outputFile);
    }
    if (message.outputFileEncoding !== undefined) {
      writer.uint32(386).string(message.outputFileEncoding);
    }
    if (message.outputLineSeparator !== undefined) {
      writer.uint32(394).string(message.outputLineSeparator);
    }
    if (message.preserveSchemaCase !== undefined) {
      writer.uint32(400).bool(message.preserveSchemaCase);
    }
    if (message.proForceOnPartialChanges !== undefined) {
      writer.uint32(408).bool(message.proForceOnPartialChanges);
    }
    if (message.proGlobalEndDelimiter !== undefined) {
      writer.uint32(418).string(message.proGlobalEndDelimiter);
    }
    if (message.proGlobalEndDelimiterPrioritized !== undefined) {
      writer.uint32(424).bool(message.proGlobalEndDelimiterPrioritized);
    }
    if (message.proLicenseKey !== undefined) {
      writer.uint32(434).string(message.proLicenseKey);
    }
    if (message.proMarkUnusedNotDrop !== undefined) {
      writer.uint32(440).bool(message.proMarkUnusedNotDrop);
    }
    if (message.proSqlInline !== undefined) {
      writer.uint32(448).bool(message.proSqlInline);
    }
    if (message.proSynonymsDropPublic !== undefined) {
      writer.uint32(456).bool(message.proSynonymsDropPublic);
    }
    if (message.promptForNonLocalDatabase !== undefined) {
      writer.uint32(464).bool(message.promptForNonLocalDatabase);
    }
    if (message.propertyProviderClass !== undefined) {
      writer.uint32(474).string(message.propertyProviderClass);
    }
    if (message.reportsEnabled !== undefined) {
      writer.uint32(480).bool(message.reportsEnabled);
    }
    if (message.reportsFormat !== undefined) {
      writer.uint32(490).string(message.reportsFormat);
    }
    if (message.reportsName !== undefined) {
      writer.uint32(498).string(message.reportsName);
    }
    if (message.reportsPath !== undefined) {
      writer.uint32(506).string(message.reportsPath);
    }
    if (message.searchPath !== undefined) {
      writer.uint32(514).string(message.searchPath);
    }
    if (message.secureParsing !== undefined) {
      writer.uint32(520).bool(message.secureParsing);
    }
    if (message.shouldGenerateRollbackReport !== undefined) {
      writer.uint32(528).bool(message.shouldGenerateRollbackReport);
    }
    if (message.shouldRun !== undefined) {
      writer.uint32(536).bool(message.shouldRun);
    }
    if (message.shouldSnapshotData !== undefined) {
      writer.uint32(544).bool(message.shouldSnapshotData);
    }
    if (message.showBanner !== undefined) {
      writer.uint32(552).bool(message.showBanner);
    }
    if (message.showHiddenArgs !== undefined) {
      writer.uint32(560).bool(message.showHiddenArgs);
    }
    if (message.sqlLogLevel !== undefined) {
      writer.uint32(570).string(message.sqlLogLevel);
    }
    if (message.sqlShowSqlWarnings !== undefined) {
      writer.uint32(576).bool(message.sqlShowSqlWarnings);
    }
    if (message.strict !== undefined) {
      writer.uint32(584).bool(message.strict);
    }
    if (message.supportPropertyEscaping !== undefined) {
      writer.uint32(592).bool(message.supportPropertyEscaping);
    }
    if (message.uiService !== undefined) {
      writer.uint32(602).string(message.uiService);
    }
    if (message.useProcedureSchema !== undefined) {
      writer.uint32(608).bool(message.useProcedureSchema);
    }
    if (message.validateXmlChangelogFiles !== undefined) {
      writer.uint32(616).bool(message.validateXmlChangelogFiles);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GlobalOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.addEmptyMdcValues = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.allowDuplicatedChangesetIdentifiers = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.alwaysDropInsteadOfReplace = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.alwaysOverrideStoredLogicSchema = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.autoReorg = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.changelogLockPollRate = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.changelogLockWaitTimeInMinutes = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.changelogParseMode = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.classpath = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.convertDataTypes = reader.bool();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.customLogDataFile = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.customLogDataFrequency = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.databaseChangelogLockTableName = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.databaseChangelogTableName = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.databaseClass = reader.string();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.ddlLockTimeout = reader.int32();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.defaultsFile = reader.string();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.diffColumnOrder = reader.bool();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.driver = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.driverPropertiesFile = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.duplicateFileMode = reader.string();
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.errorOnCircularIncludeAll = reader.bool();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.fileEncoding = reader.string();
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.filterLogMessages = reader.bool();
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.flowVerboseToString = reader.bool();
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.generateChangesetCreatedValues = reader.bool();
          continue;
        case 27:
          if (tag !== 216) {
            break;
          }

          message.generatedChangesetIdsContainsDescription = reader.bool();
          continue;
        case 28:
          if (tag !== 224) {
            break;
          }

          message.headless = reader.bool();
          continue;
        case 29:
          if (tag !== 232) {
            break;
          }

          message.includeCatalogInSpecification = reader.bool();
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.includeMatchingTagInRollbackOldest = reader.bool();
          continue;
        case 31:
          if (tag !== 248) {
            break;
          }

          message.includeRelationsForComputedColumns = reader.bool();
          continue;
        case 32:
          if (tag !== 256) {
            break;
          }

          message.includeSystemClasspath = reader.bool();
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.licenseKey = reader.string();
          continue;
        case 34:
          if (tag !== 274) {
            break;
          }

          message.liquibaseCatalogName = reader.string();
          continue;
        case 35:
          if (tag !== 282) {
            break;
          }

          message.liquibaseSchemaName = reader.string();
          continue;
        case 36:
          if (tag !== 290) {
            break;
          }

          message.liquibaseTablespaceName = reader.string();
          continue;
        case 37:
          if (tag !== 298) {
            break;
          }

          message.logChannels = reader.string();
          continue;
        case 38:
          if (tag !== 306) {
            break;
          }

          message.logFile = reader.string();
          continue;
        case 39:
          if (tag !== 314) {
            break;
          }

          message.logFormat = reader.string();
          continue;
        case 40:
          if (tag !== 322) {
            break;
          }

          message.logLevel = reader.string();
          continue;
        case 41:
          if (tag !== 328) {
            break;
          }

          message.mirrorConsoleMessagesToLog = reader.bool();
          continue;
        case 42:
          if (tag !== 338) {
            break;
          }

          message.missingPropertyMode = reader.string();
          continue;
        case 43:
          if (tag !== 346) {
            break;
          }

          message.monitorPerformance = reader.string();
          continue;
        case 44:
          if (tag !== 354) {
            break;
          }

          message.nativeExecutor = reader.string();
          continue;
        case 45:
          if (tag !== 362) {
            break;
          }

          message.onMissingIncludeChangelog = reader.string();
          continue;
        case 46:
          if (tag !== 370) {
            break;
          }

          message.onMissingSqlFile = reader.string();
          continue;
        case 47:
          if (tag !== 378) {
            break;
          }

          message.outputFile = reader.string();
          continue;
        case 48:
          if (tag !== 386) {
            break;
          }

          message.outputFileEncoding = reader.string();
          continue;
        case 49:
          if (tag !== 394) {
            break;
          }

          message.outputLineSeparator = reader.string();
          continue;
        case 50:
          if (tag !== 400) {
            break;
          }

          message.preserveSchemaCase = reader.bool();
          continue;
        case 51:
          if (tag !== 408) {
            break;
          }

          message.proForceOnPartialChanges = reader.bool();
          continue;
        case 52:
          if (tag !== 418) {
            break;
          }

          message.proGlobalEndDelimiter = reader.string();
          continue;
        case 53:
          if (tag !== 424) {
            break;
          }

          message.proGlobalEndDelimiterPrioritized = reader.bool();
          continue;
        case 54:
          if (tag !== 434) {
            break;
          }

          message.proLicenseKey = reader.string();
          continue;
        case 55:
          if (tag !== 440) {
            break;
          }

          message.proMarkUnusedNotDrop = reader.bool();
          continue;
        case 56:
          if (tag !== 448) {
            break;
          }

          message.proSqlInline = reader.bool();
          continue;
        case 57:
          if (tag !== 456) {
            break;
          }

          message.proSynonymsDropPublic = reader.bool();
          continue;
        case 58:
          if (tag !== 464) {
            break;
          }

          message.promptForNonLocalDatabase = reader.bool();
          continue;
        case 59:
          if (tag !== 474) {
            break;
          }

          message.propertyProviderClass = reader.string();
          continue;
        case 60:
          if (tag !== 480) {
            break;
          }

          message.reportsEnabled = reader.bool();
          continue;
        case 61:
          if (tag !== 490) {
            break;
          }

          message.reportsFormat = reader.string();
          continue;
        case 62:
          if (tag !== 498) {
            break;
          }

          message.reportsName = reader.string();
          continue;
        case 63:
          if (tag !== 506) {
            break;
          }

          message.reportsPath = reader.string();
          continue;
        case 64:
          if (tag !== 514) {
            break;
          }

          message.searchPath = reader.string();
          continue;
        case 65:
          if (tag !== 520) {
            break;
          }

          message.secureParsing = reader.bool();
          continue;
        case 66:
          if (tag !== 528) {
            break;
          }

          message.shouldGenerateRollbackReport = reader.bool();
          continue;
        case 67:
          if (tag !== 536) {
            break;
          }

          message.shouldRun = reader.bool();
          continue;
        case 68:
          if (tag !== 544) {
            break;
          }

          message.shouldSnapshotData = reader.bool();
          continue;
        case 69:
          if (tag !== 552) {
            break;
          }

          message.showBanner = reader.bool();
          continue;
        case 70:
          if (tag !== 560) {
            break;
          }

          message.showHiddenArgs = reader.bool();
          continue;
        case 71:
          if (tag !== 570) {
            break;
          }

          message.sqlLogLevel = reader.string();
          continue;
        case 72:
          if (tag !== 576) {
            break;
          }

          message.sqlShowSqlWarnings = reader.bool();
          continue;
        case 73:
          if (tag !== 584) {
            break;
          }

          message.strict = reader.bool();
          continue;
        case 74:
          if (tag !== 592) {
            break;
          }

          message.supportPropertyEscaping = reader.bool();
          continue;
        case 75:
          if (tag !== 602) {
            break;
          }

          message.uiService = reader.string();
          continue;
        case 76:
          if (tag !== 608) {
            break;
          }

          message.useProcedureSchema = reader.bool();
          continue;
        case 77:
          if (tag !== 616) {
            break;
          }

          message.validateXmlChangelogFiles = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GlobalOptions {
    return {
      addEmptyMdcValues: isSet(object.addEmptyMdcValues) ? globalThis.Boolean(object.addEmptyMdcValues) : undefined,
      allowDuplicatedChangesetIdentifiers: isSet(object.allowDuplicatedChangesetIdentifiers)
        ? globalThis.Boolean(object.allowDuplicatedChangesetIdentifiers)
        : undefined,
      alwaysDropInsteadOfReplace: isSet(object.alwaysDropInsteadOfReplace)
        ? globalThis.Boolean(object.alwaysDropInsteadOfReplace)
        : undefined,
      alwaysOverrideStoredLogicSchema: isSet(object.alwaysOverrideStoredLogicSchema)
        ? globalThis.Boolean(object.alwaysOverrideStoredLogicSchema)
        : undefined,
      autoReorg: isSet(object.autoReorg) ? globalThis.Boolean(object.autoReorg) : undefined,
      changelogLockPollRate: isSet(object.changelogLockPollRate)
        ? globalThis.String(object.changelogLockPollRate)
        : undefined,
      changelogLockWaitTimeInMinutes: isSet(object.changelogLockWaitTimeInMinutes)
        ? globalThis.String(object.changelogLockWaitTimeInMinutes)
        : undefined,
      changelogParseMode: isSet(object.changelogParseMode) ? globalThis.String(object.changelogParseMode) : undefined,
      classpath: isSet(object.classpath) ? globalThis.String(object.classpath) : undefined,
      convertDataTypes: isSet(object.convertDataTypes) ? globalThis.Boolean(object.convertDataTypes) : undefined,
      customLogDataFile: isSet(object.customLogDataFile) ? globalThis.String(object.customLogDataFile) : undefined,
      customLogDataFrequency: isSet(object.customLogDataFrequency)
        ? globalThis.String(object.customLogDataFrequency)
        : undefined,
      databaseChangelogLockTableName: isSet(object.databaseChangelogLockTableName)
        ? globalThis.String(object.databaseChangelogLockTableName)
        : undefined,
      databaseChangelogTableName: isSet(object.databaseChangelogTableName)
        ? globalThis.String(object.databaseChangelogTableName)
        : undefined,
      databaseClass: isSet(object.databaseClass) ? globalThis.String(object.databaseClass) : undefined,
      ddlLockTimeout: isSet(object.ddlLockTimeout) ? globalThis.Number(object.ddlLockTimeout) : undefined,
      defaultsFile: isSet(object.defaultsFile) ? globalThis.String(object.defaultsFile) : undefined,
      diffColumnOrder: isSet(object.diffColumnOrder) ? globalThis.Boolean(object.diffColumnOrder) : undefined,
      driver: isSet(object.driver) ? globalThis.String(object.driver) : undefined,
      driverPropertiesFile: isSet(object.driverPropertiesFile)
        ? globalThis.String(object.driverPropertiesFile)
        : undefined,
      duplicateFileMode: isSet(object.duplicateFileMode) ? globalThis.String(object.duplicateFileMode) : undefined,
      errorOnCircularIncludeAll: isSet(object.errorOnCircularIncludeAll)
        ? globalThis.Boolean(object.errorOnCircularIncludeAll)
        : undefined,
      fileEncoding: isSet(object.fileEncoding) ? globalThis.String(object.fileEncoding) : undefined,
      filterLogMessages: isSet(object.filterLogMessages) ? globalThis.Boolean(object.filterLogMessages) : undefined,
      flowVerboseToString: isSet(object.flowVerboseToString)
        ? globalThis.Boolean(object.flowVerboseToString)
        : undefined,
      generateChangesetCreatedValues: isSet(object.generateChangesetCreatedValues)
        ? globalThis.Boolean(object.generateChangesetCreatedValues)
        : undefined,
      generatedChangesetIdsContainsDescription: isSet(object.generatedChangesetIdsContainsDescription)
        ? globalThis.Boolean(object.generatedChangesetIdsContainsDescription)
        : undefined,
      headless: isSet(object.headless) ? globalThis.Boolean(object.headless) : undefined,
      includeCatalogInSpecification: isSet(object.includeCatalogInSpecification)
        ? globalThis.Boolean(object.includeCatalogInSpecification)
        : undefined,
      includeMatchingTagInRollbackOldest: isSet(object.includeMatchingTagInRollbackOldest)
        ? globalThis.Boolean(object.includeMatchingTagInRollbackOldest)
        : undefined,
      includeRelationsForComputedColumns: isSet(object.includeRelationsForComputedColumns)
        ? globalThis.Boolean(object.includeRelationsForComputedColumns)
        : undefined,
      includeSystemClasspath: isSet(object.includeSystemClasspath)
        ? globalThis.Boolean(object.includeSystemClasspath)
        : undefined,
      licenseKey: isSet(object.licenseKey) ? globalThis.String(object.licenseKey) : undefined,
      liquibaseCatalogName: isSet(object.liquibaseCatalogName)
        ? globalThis.String(object.liquibaseCatalogName)
        : undefined,
      liquibaseSchemaName: isSet(object.liquibaseSchemaName)
        ? globalThis.String(object.liquibaseSchemaName)
        : undefined,
      liquibaseTablespaceName: isSet(object.liquibaseTablespaceName)
        ? globalThis.String(object.liquibaseTablespaceName)
        : undefined,
      logChannels: isSet(object.logChannels) ? globalThis.String(object.logChannels) : undefined,
      logFile: isSet(object.logFile) ? globalThis.String(object.logFile) : undefined,
      logFormat: isSet(object.logFormat) ? globalThis.String(object.logFormat) : undefined,
      logLevel: isSet(object.logLevel) ? globalThis.String(object.logLevel) : undefined,
      mirrorConsoleMessagesToLog: isSet(object.mirrorConsoleMessagesToLog)
        ? globalThis.Boolean(object.mirrorConsoleMessagesToLog)
        : undefined,
      missingPropertyMode: isSet(object.missingPropertyMode)
        ? globalThis.String(object.missingPropertyMode)
        : undefined,
      monitorPerformance: isSet(object.monitorPerformance) ? globalThis.String(object.monitorPerformance) : undefined,
      nativeExecutor: isSet(object.nativeExecutor) ? globalThis.String(object.nativeExecutor) : undefined,
      onMissingIncludeChangelog: isSet(object.onMissingIncludeChangelog)
        ? globalThis.String(object.onMissingIncludeChangelog)
        : undefined,
      onMissingSqlFile: isSet(object.onMissingSqlFile) ? globalThis.String(object.onMissingSqlFile) : undefined,
      outputFile: isSet(object.outputFile) ? globalThis.String(object.outputFile) : undefined,
      outputFileEncoding: isSet(object.outputFileEncoding) ? globalThis.String(object.outputFileEncoding) : undefined,
      outputLineSeparator: isSet(object.outputLineSeparator)
        ? globalThis.String(object.outputLineSeparator)
        : undefined,
      preserveSchemaCase: isSet(object.preserveSchemaCase) ? globalThis.Boolean(object.preserveSchemaCase) : undefined,
      proForceOnPartialChanges: isSet(object.proForceOnPartialChanges)
        ? globalThis.Boolean(object.proForceOnPartialChanges)
        : undefined,
      proGlobalEndDelimiter: isSet(object.proGlobalEndDelimiter)
        ? globalThis.String(object.proGlobalEndDelimiter)
        : undefined,
      proGlobalEndDelimiterPrioritized: isSet(object.proGlobalEndDelimiterPrioritized)
        ? globalThis.Boolean(object.proGlobalEndDelimiterPrioritized)
        : undefined,
      proLicenseKey: isSet(object.proLicenseKey) ? globalThis.String(object.proLicenseKey) : undefined,
      proMarkUnusedNotDrop: isSet(object.proMarkUnusedNotDrop)
        ? globalThis.Boolean(object.proMarkUnusedNotDrop)
        : undefined,
      proSqlInline: isSet(object.proSqlInline) ? globalThis.Boolean(object.proSqlInline) : undefined,
      proSynonymsDropPublic: isSet(object.proSynonymsDropPublic)
        ? globalThis.Boolean(object.proSynonymsDropPublic)
        : undefined,
      promptForNonLocalDatabase: isSet(object.promptForNonLocalDatabase)
        ? globalThis.Boolean(object.promptForNonLocalDatabase)
        : undefined,
      propertyProviderClass: isSet(object.propertyProviderClass)
        ? globalThis.String(object.propertyProviderClass)
        : undefined,
      reportsEnabled: isSet(object.reportsEnabled) ? globalThis.Boolean(object.reportsEnabled) : undefined,
      reportsFormat: isSet(object.reportsFormat) ? globalThis.String(object.reportsFormat) : undefined,
      reportsName: isSet(object.reportsName) ? globalThis.String(object.reportsName) : undefined,
      reportsPath: isSet(object.reportsPath) ? globalThis.String(object.reportsPath) : undefined,
      searchPath: isSet(object.searchPath) ? globalThis.String(object.searchPath) : undefined,
      secureParsing: isSet(object.secureParsing) ? globalThis.Boolean(object.secureParsing) : undefined,
      shouldGenerateRollbackReport: isSet(object.shouldGenerateRollbackReport)
        ? globalThis.Boolean(object.shouldGenerateRollbackReport)
        : undefined,
      shouldRun: isSet(object.shouldRun) ? globalThis.Boolean(object.shouldRun) : undefined,
      shouldSnapshotData: isSet(object.shouldSnapshotData) ? globalThis.Boolean(object.shouldSnapshotData) : undefined,
      showBanner: isSet(object.showBanner) ? globalThis.Boolean(object.showBanner) : undefined,
      showHiddenArgs: isSet(object.showHiddenArgs) ? globalThis.Boolean(object.showHiddenArgs) : undefined,
      sqlLogLevel: isSet(object.sqlLogLevel) ? globalThis.String(object.sqlLogLevel) : undefined,
      sqlShowSqlWarnings: isSet(object.sqlShowSqlWarnings) ? globalThis.Boolean(object.sqlShowSqlWarnings) : undefined,
      strict: isSet(object.strict) ? globalThis.Boolean(object.strict) : undefined,
      supportPropertyEscaping: isSet(object.supportPropertyEscaping)
        ? globalThis.Boolean(object.supportPropertyEscaping)
        : undefined,
      uiService: isSet(object.uiService) ? globalThis.String(object.uiService) : undefined,
      useProcedureSchema: isSet(object.useProcedureSchema) ? globalThis.Boolean(object.useProcedureSchema) : undefined,
      validateXmlChangelogFiles: isSet(object.validateXmlChangelogFiles)
        ? globalThis.Boolean(object.validateXmlChangelogFiles)
        : undefined,
    };
  },

  toJSON(message: GlobalOptions): unknown {
    const obj: any = {};
    if (message.addEmptyMdcValues !== undefined) {
      obj.addEmptyMdcValues = message.addEmptyMdcValues;
    }
    if (message.allowDuplicatedChangesetIdentifiers !== undefined) {
      obj.allowDuplicatedChangesetIdentifiers = message.allowDuplicatedChangesetIdentifiers;
    }
    if (message.alwaysDropInsteadOfReplace !== undefined) {
      obj.alwaysDropInsteadOfReplace = message.alwaysDropInsteadOfReplace;
    }
    if (message.alwaysOverrideStoredLogicSchema !== undefined) {
      obj.alwaysOverrideStoredLogicSchema = message.alwaysOverrideStoredLogicSchema;
    }
    if (message.autoReorg !== undefined) {
      obj.autoReorg = message.autoReorg;
    }
    if (message.changelogLockPollRate !== undefined) {
      obj.changelogLockPollRate = message.changelogLockPollRate;
    }
    if (message.changelogLockWaitTimeInMinutes !== undefined) {
      obj.changelogLockWaitTimeInMinutes = message.changelogLockWaitTimeInMinutes;
    }
    if (message.changelogParseMode !== undefined) {
      obj.changelogParseMode = message.changelogParseMode;
    }
    if (message.classpath !== undefined) {
      obj.classpath = message.classpath;
    }
    if (message.convertDataTypes !== undefined) {
      obj.convertDataTypes = message.convertDataTypes;
    }
    if (message.customLogDataFile !== undefined) {
      obj.customLogDataFile = message.customLogDataFile;
    }
    if (message.customLogDataFrequency !== undefined) {
      obj.customLogDataFrequency = message.customLogDataFrequency;
    }
    if (message.databaseChangelogLockTableName !== undefined) {
      obj.databaseChangelogLockTableName = message.databaseChangelogLockTableName;
    }
    if (message.databaseChangelogTableName !== undefined) {
      obj.databaseChangelogTableName = message.databaseChangelogTableName;
    }
    if (message.databaseClass !== undefined) {
      obj.databaseClass = message.databaseClass;
    }
    if (message.ddlLockTimeout !== undefined) {
      obj.ddlLockTimeout = Math.round(message.ddlLockTimeout);
    }
    if (message.defaultsFile !== undefined) {
      obj.defaultsFile = message.defaultsFile;
    }
    if (message.diffColumnOrder !== undefined) {
      obj.diffColumnOrder = message.diffColumnOrder;
    }
    if (message.driver !== undefined) {
      obj.driver = message.driver;
    }
    if (message.driverPropertiesFile !== undefined) {
      obj.driverPropertiesFile = message.driverPropertiesFile;
    }
    if (message.duplicateFileMode !== undefined) {
      obj.duplicateFileMode = message.duplicateFileMode;
    }
    if (message.errorOnCircularIncludeAll !== undefined) {
      obj.errorOnCircularIncludeAll = message.errorOnCircularIncludeAll;
    }
    if (message.fileEncoding !== undefined) {
      obj.fileEncoding = message.fileEncoding;
    }
    if (message.filterLogMessages !== undefined) {
      obj.filterLogMessages = message.filterLogMessages;
    }
    if (message.flowVerboseToString !== undefined) {
      obj.flowVerboseToString = message.flowVerboseToString;
    }
    if (message.generateChangesetCreatedValues !== undefined) {
      obj.generateChangesetCreatedValues = message.generateChangesetCreatedValues;
    }
    if (message.generatedChangesetIdsContainsDescription !== undefined) {
      obj.generatedChangesetIdsContainsDescription = message.generatedChangesetIdsContainsDescription;
    }
    if (message.headless !== undefined) {
      obj.headless = message.headless;
    }
    if (message.includeCatalogInSpecification !== undefined) {
      obj.includeCatalogInSpecification = message.includeCatalogInSpecification;
    }
    if (message.includeMatchingTagInRollbackOldest !== undefined) {
      obj.includeMatchingTagInRollbackOldest = message.includeMatchingTagInRollbackOldest;
    }
    if (message.includeRelationsForComputedColumns !== undefined) {
      obj.includeRelationsForComputedColumns = message.includeRelationsForComputedColumns;
    }
    if (message.includeSystemClasspath !== undefined) {
      obj.includeSystemClasspath = message.includeSystemClasspath;
    }
    if (message.licenseKey !== undefined) {
      obj.licenseKey = message.licenseKey;
    }
    if (message.liquibaseCatalogName !== undefined) {
      obj.liquibaseCatalogName = message.liquibaseCatalogName;
    }
    if (message.liquibaseSchemaName !== undefined) {
      obj.liquibaseSchemaName = message.liquibaseSchemaName;
    }
    if (message.liquibaseTablespaceName !== undefined) {
      obj.liquibaseTablespaceName = message.liquibaseTablespaceName;
    }
    if (message.logChannels !== undefined) {
      obj.logChannels = message.logChannels;
    }
    if (message.logFile !== undefined) {
      obj.logFile = message.logFile;
    }
    if (message.logFormat !== undefined) {
      obj.logFormat = message.logFormat;
    }
    if (message.logLevel !== undefined) {
      obj.logLevel = message.logLevel;
    }
    if (message.mirrorConsoleMessagesToLog !== undefined) {
      obj.mirrorConsoleMessagesToLog = message.mirrorConsoleMessagesToLog;
    }
    if (message.missingPropertyMode !== undefined) {
      obj.missingPropertyMode = message.missingPropertyMode;
    }
    if (message.monitorPerformance !== undefined) {
      obj.monitorPerformance = message.monitorPerformance;
    }
    if (message.nativeExecutor !== undefined) {
      obj.nativeExecutor = message.nativeExecutor;
    }
    if (message.onMissingIncludeChangelog !== undefined) {
      obj.onMissingIncludeChangelog = message.onMissingIncludeChangelog;
    }
    if (message.onMissingSqlFile !== undefined) {
      obj.onMissingSqlFile = message.onMissingSqlFile;
    }
    if (message.outputFile !== undefined) {
      obj.outputFile = message.outputFile;
    }
    if (message.outputFileEncoding !== undefined) {
      obj.outputFileEncoding = message.outputFileEncoding;
    }
    if (message.outputLineSeparator !== undefined) {
      obj.outputLineSeparator = message.outputLineSeparator;
    }
    if (message.preserveSchemaCase !== undefined) {
      obj.preserveSchemaCase = message.preserveSchemaCase;
    }
    if (message.proForceOnPartialChanges !== undefined) {
      obj.proForceOnPartialChanges = message.proForceOnPartialChanges;
    }
    if (message.proGlobalEndDelimiter !== undefined) {
      obj.proGlobalEndDelimiter = message.proGlobalEndDelimiter;
    }
    if (message.proGlobalEndDelimiterPrioritized !== undefined) {
      obj.proGlobalEndDelimiterPrioritized = message.proGlobalEndDelimiterPrioritized;
    }
    if (message.proLicenseKey !== undefined) {
      obj.proLicenseKey = message.proLicenseKey;
    }
    if (message.proMarkUnusedNotDrop !== undefined) {
      obj.proMarkUnusedNotDrop = message.proMarkUnusedNotDrop;
    }
    if (message.proSqlInline !== undefined) {
      obj.proSqlInline = message.proSqlInline;
    }
    if (message.proSynonymsDropPublic !== undefined) {
      obj.proSynonymsDropPublic = message.proSynonymsDropPublic;
    }
    if (message.promptForNonLocalDatabase !== undefined) {
      obj.promptForNonLocalDatabase = message.promptForNonLocalDatabase;
    }
    if (message.propertyProviderClass !== undefined) {
      obj.propertyProviderClass = message.propertyProviderClass;
    }
    if (message.reportsEnabled !== undefined) {
      obj.reportsEnabled = message.reportsEnabled;
    }
    if (message.reportsFormat !== undefined) {
      obj.reportsFormat = message.reportsFormat;
    }
    if (message.reportsName !== undefined) {
      obj.reportsName = message.reportsName;
    }
    if (message.reportsPath !== undefined) {
      obj.reportsPath = message.reportsPath;
    }
    if (message.searchPath !== undefined) {
      obj.searchPath = message.searchPath;
    }
    if (message.secureParsing !== undefined) {
      obj.secureParsing = message.secureParsing;
    }
    if (message.shouldGenerateRollbackReport !== undefined) {
      obj.shouldGenerateRollbackReport = message.shouldGenerateRollbackReport;
    }
    if (message.shouldRun !== undefined) {
      obj.shouldRun = message.shouldRun;
    }
    if (message.shouldSnapshotData !== undefined) {
      obj.shouldSnapshotData = message.shouldSnapshotData;
    }
    if (message.showBanner !== undefined) {
      obj.showBanner = message.showBanner;
    }
    if (message.showHiddenArgs !== undefined) {
      obj.showHiddenArgs = message.showHiddenArgs;
    }
    if (message.sqlLogLevel !== undefined) {
      obj.sqlLogLevel = message.sqlLogLevel;
    }
    if (message.sqlShowSqlWarnings !== undefined) {
      obj.sqlShowSqlWarnings = message.sqlShowSqlWarnings;
    }
    if (message.strict !== undefined) {
      obj.strict = message.strict;
    }
    if (message.supportPropertyEscaping !== undefined) {
      obj.supportPropertyEscaping = message.supportPropertyEscaping;
    }
    if (message.uiService !== undefined) {
      obj.uiService = message.uiService;
    }
    if (message.useProcedureSchema !== undefined) {
      obj.useProcedureSchema = message.useProcedureSchema;
    }
    if (message.validateXmlChangelogFiles !== undefined) {
      obj.validateXmlChangelogFiles = message.validateXmlChangelogFiles;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GlobalOptions>, I>>(base?: I): GlobalOptions {
    return GlobalOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GlobalOptions>, I>>(object: I): GlobalOptions {
    const message = createBaseGlobalOptions();
    message.addEmptyMdcValues = object.addEmptyMdcValues ?? undefined;
    message.allowDuplicatedChangesetIdentifiers = object.allowDuplicatedChangesetIdentifiers ?? undefined;
    message.alwaysDropInsteadOfReplace = object.alwaysDropInsteadOfReplace ?? undefined;
    message.alwaysOverrideStoredLogicSchema = object.alwaysOverrideStoredLogicSchema ?? undefined;
    message.autoReorg = object.autoReorg ?? undefined;
    message.changelogLockPollRate = object.changelogLockPollRate ?? undefined;
    message.changelogLockWaitTimeInMinutes = object.changelogLockWaitTimeInMinutes ?? undefined;
    message.changelogParseMode = object.changelogParseMode ?? undefined;
    message.classpath = object.classpath ?? undefined;
    message.convertDataTypes = object.convertDataTypes ?? undefined;
    message.customLogDataFile = object.customLogDataFile ?? undefined;
    message.customLogDataFrequency = object.customLogDataFrequency ?? undefined;
    message.databaseChangelogLockTableName = object.databaseChangelogLockTableName ?? undefined;
    message.databaseChangelogTableName = object.databaseChangelogTableName ?? undefined;
    message.databaseClass = object.databaseClass ?? undefined;
    message.ddlLockTimeout = object.ddlLockTimeout ?? undefined;
    message.defaultsFile = object.defaultsFile ?? undefined;
    message.diffColumnOrder = object.diffColumnOrder ?? undefined;
    message.driver = object.driver ?? undefined;
    message.driverPropertiesFile = object.driverPropertiesFile ?? undefined;
    message.duplicateFileMode = object.duplicateFileMode ?? undefined;
    message.errorOnCircularIncludeAll = object.errorOnCircularIncludeAll ?? undefined;
    message.fileEncoding = object.fileEncoding ?? undefined;
    message.filterLogMessages = object.filterLogMessages ?? undefined;
    message.flowVerboseToString = object.flowVerboseToString ?? undefined;
    message.generateChangesetCreatedValues = object.generateChangesetCreatedValues ?? undefined;
    message.generatedChangesetIdsContainsDescription = object.generatedChangesetIdsContainsDescription ?? undefined;
    message.headless = object.headless ?? undefined;
    message.includeCatalogInSpecification = object.includeCatalogInSpecification ?? undefined;
    message.includeMatchingTagInRollbackOldest = object.includeMatchingTagInRollbackOldest ?? undefined;
    message.includeRelationsForComputedColumns = object.includeRelationsForComputedColumns ?? undefined;
    message.includeSystemClasspath = object.includeSystemClasspath ?? undefined;
    message.licenseKey = object.licenseKey ?? undefined;
    message.liquibaseCatalogName = object.liquibaseCatalogName ?? undefined;
    message.liquibaseSchemaName = object.liquibaseSchemaName ?? undefined;
    message.liquibaseTablespaceName = object.liquibaseTablespaceName ?? undefined;
    message.logChannels = object.logChannels ?? undefined;
    message.logFile = object.logFile ?? undefined;
    message.logFormat = object.logFormat ?? undefined;
    message.logLevel = object.logLevel ?? undefined;
    message.mirrorConsoleMessagesToLog = object.mirrorConsoleMessagesToLog ?? undefined;
    message.missingPropertyMode = object.missingPropertyMode ?? undefined;
    message.monitorPerformance = object.monitorPerformance ?? undefined;
    message.nativeExecutor = object.nativeExecutor ?? undefined;
    message.onMissingIncludeChangelog = object.onMissingIncludeChangelog ?? undefined;
    message.onMissingSqlFile = object.onMissingSqlFile ?? undefined;
    message.outputFile = object.outputFile ?? undefined;
    message.outputFileEncoding = object.outputFileEncoding ?? undefined;
    message.outputLineSeparator = object.outputLineSeparator ?? undefined;
    message.preserveSchemaCase = object.preserveSchemaCase ?? undefined;
    message.proForceOnPartialChanges = object.proForceOnPartialChanges ?? undefined;
    message.proGlobalEndDelimiter = object.proGlobalEndDelimiter ?? undefined;
    message.proGlobalEndDelimiterPrioritized = object.proGlobalEndDelimiterPrioritized ?? undefined;
    message.proLicenseKey = object.proLicenseKey ?? undefined;
    message.proMarkUnusedNotDrop = object.proMarkUnusedNotDrop ?? undefined;
    message.proSqlInline = object.proSqlInline ?? undefined;
    message.proSynonymsDropPublic = object.proSynonymsDropPublic ?? undefined;
    message.promptForNonLocalDatabase = object.promptForNonLocalDatabase ?? undefined;
    message.propertyProviderClass = object.propertyProviderClass ?? undefined;
    message.reportsEnabled = object.reportsEnabled ?? undefined;
    message.reportsFormat = object.reportsFormat ?? undefined;
    message.reportsName = object.reportsName ?? undefined;
    message.reportsPath = object.reportsPath ?? undefined;
    message.searchPath = object.searchPath ?? undefined;
    message.secureParsing = object.secureParsing ?? undefined;
    message.shouldGenerateRollbackReport = object.shouldGenerateRollbackReport ?? undefined;
    message.shouldRun = object.shouldRun ?? undefined;
    message.shouldSnapshotData = object.shouldSnapshotData ?? undefined;
    message.showBanner = object.showBanner ?? undefined;
    message.showHiddenArgs = object.showHiddenArgs ?? undefined;
    message.sqlLogLevel = object.sqlLogLevel ?? undefined;
    message.sqlShowSqlWarnings = object.sqlShowSqlWarnings ?? undefined;
    message.strict = object.strict ?? undefined;
    message.supportPropertyEscaping = object.supportPropertyEscaping ?? undefined;
    message.uiService = object.uiService ?? undefined;
    message.useProcedureSchema = object.useProcedureSchema ?? undefined;
    message.validateXmlChangelogFiles = object.validateXmlChangelogFiles ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
