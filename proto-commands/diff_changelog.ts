/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/** Compare two databases to produce changesets and write them to a changelog file */
export interface DiffChangelogRequest {
  /** Specifies the author for changesets in the generated changelog */
  author?: string;
  /** required* Changelog file to write results */
  changelogFile: string;
  /** Changeset contexts to generate */
  contextFilter?: string;
  /** The default catalog name to use for the database connection */
  defaultCatalogName?: string;
  /** The default schema name to use for the database connection */
  defaultSchemaName?: string;
  /** Types of objects to compare */
  diffTypes?: string;
  /** [PRO] Sets the return code for all drift types found in diff or diffchangelog operations. Options are 0, 1, 2, 3, 4 */
  driftSeverity?: number;
  /** [PRO] Sets the return code for "changed" type drift found in diff or diffchangelog operations. Options are 0, 1, 2, 3, 4 */
  driftSeverityChanged?: number;
  /** [PRO] Sets the return code for "missing" type drift found in diff or diffchangelog operations. Options are 0, 1, 2, 3, 4 */
  driftSeverityMissing?: number;
  /** [PRO] Sets the return code for "unexpected" type drift found in diff or diffchangelog operations. Options are 0, 1, 2, 3, 4 */
  driftSeverityUnexpected?: number;
  /** The JDBC driver class */
  driver?: string;
  /** The JDBC driver properties file */
  driverPropertiesFile?: string;
  /** Objects to exclude from diff */
  excludeObjects?: string;
  /** If true, the catalog will be included in generated changeSets. Defaults to false. */
  includeCatalog?: boolean;
  /** Objects to include in diff */
  includeObjects?: string;
  /** If true, the schema will be included in generated changeSets. Defaults to false. */
  includeSchema?: boolean;
  /** Include the tablespace attribute in the changelog. Defaults to false. */
  includeTablespace?: boolean;
  /** Changeset labels to generate */
  labelFilter?: string;
  /** Output schemas names. This is a CSV list. */
  outputSchemas?: string;
  /** Password to use to connect to the database */
  password?: string;
  /** The default catalog name to use for the reference database connection */
  referenceDefaultCatalogName?: string;
  /** The default schema name to use for the reference database connection */
  referenceDefaultSchemaName?: string;
  /** The JDBC driver class for the reference database */
  referenceDriver?: string;
  /** The JDBC driver properties file for the reference database */
  referenceDriverPropertiesFile?: string;
  /** Reference catalog to use for Liquibase objects */
  referenceLiquibaseCatalogName?: string;
  /** Reference schema to use for Liquibase objects */
  referenceLiquibaseSchemaName?: string;
  /** The reference database password */
  referencePassword?: string;
  /** Schemas names on reference database to use in diff. This is a CSV list. */
  referenceSchemas?: string;
  /** required* The JDBC reference database connection URL */
  referenceUrl: string;
  /** The reference database username */
  referenceUsername?: string;
  /** Sets replaceIfExists="true" for changes of these types (supported types: createFunction, createPackage, createPackageBody, createProcedure, createTrigger, createView) */
  replaceIfExistsTypes?: string;
  /** [PRO] Enable or disable reporting. */
  reportEnabled?: boolean;
  /** [PRO] The name of the report. */
  reportName?: string;
  /** [PRO] The path to the directory to generate the report. */
  reportPath?: string;
  /** Sets runOnChange="true" for changesets containing solely changes of these types (e. g. createView, createProcedure, ...). */
  runOnChangeTypes?: string;
  /** Schemas to include in diff */
  schemas?: string;
  /** required* The JDBC database connection URL */
  url: string;
  /** If true, will add 'OR REPLACE' option to the create view change object */
  useOrReplaceOption?: boolean;
  /** Username to use to connect to the database */
  username?: string;
  globalOptions: GlobalOptions | undefined;
}

export interface Response {
  message: string;
}

function createBaseDiffChangelogRequest(): DiffChangelogRequest {
  return {
    author: undefined,
    changelogFile: "",
    contextFilter: undefined,
    defaultCatalogName: undefined,
    defaultSchemaName: undefined,
    diffTypes: undefined,
    driftSeverity: undefined,
    driftSeverityChanged: undefined,
    driftSeverityMissing: undefined,
    driftSeverityUnexpected: undefined,
    driver: undefined,
    driverPropertiesFile: undefined,
    excludeObjects: undefined,
    includeCatalog: undefined,
    includeObjects: undefined,
    includeSchema: undefined,
    includeTablespace: undefined,
    labelFilter: undefined,
    outputSchemas: undefined,
    password: undefined,
    referenceDefaultCatalogName: undefined,
    referenceDefaultSchemaName: undefined,
    referenceDriver: undefined,
    referenceDriverPropertiesFile: undefined,
    referenceLiquibaseCatalogName: undefined,
    referenceLiquibaseSchemaName: undefined,
    referencePassword: undefined,
    referenceSchemas: undefined,
    referenceUrl: "",
    referenceUsername: undefined,
    replaceIfExistsTypes: undefined,
    reportEnabled: undefined,
    reportName: undefined,
    reportPath: undefined,
    runOnChangeTypes: undefined,
    schemas: undefined,
    url: "",
    useOrReplaceOption: undefined,
    username: undefined,
    globalOptions: undefined,
  };
}

export const DiffChangelogRequest = {
  encode(message: DiffChangelogRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.author !== undefined) {
      writer.uint32(10).string(message.author);
    }
    if (message.changelogFile !== "") {
      writer.uint32(18).string(message.changelogFile);
    }
    if (message.contextFilter !== undefined) {
      writer.uint32(26).string(message.contextFilter);
    }
    if (message.defaultCatalogName !== undefined) {
      writer.uint32(34).string(message.defaultCatalogName);
    }
    if (message.defaultSchemaName !== undefined) {
      writer.uint32(42).string(message.defaultSchemaName);
    }
    if (message.diffTypes !== undefined) {
      writer.uint32(50).string(message.diffTypes);
    }
    if (message.driftSeverity !== undefined) {
      writer.uint32(56).int32(message.driftSeverity);
    }
    if (message.driftSeverityChanged !== undefined) {
      writer.uint32(64).int32(message.driftSeverityChanged);
    }
    if (message.driftSeverityMissing !== undefined) {
      writer.uint32(72).int32(message.driftSeverityMissing);
    }
    if (message.driftSeverityUnexpected !== undefined) {
      writer.uint32(80).int32(message.driftSeverityUnexpected);
    }
    if (message.driver !== undefined) {
      writer.uint32(90).string(message.driver);
    }
    if (message.driverPropertiesFile !== undefined) {
      writer.uint32(98).string(message.driverPropertiesFile);
    }
    if (message.excludeObjects !== undefined) {
      writer.uint32(106).string(message.excludeObjects);
    }
    if (message.includeCatalog !== undefined) {
      writer.uint32(112).bool(message.includeCatalog);
    }
    if (message.includeObjects !== undefined) {
      writer.uint32(122).string(message.includeObjects);
    }
    if (message.includeSchema !== undefined) {
      writer.uint32(128).bool(message.includeSchema);
    }
    if (message.includeTablespace !== undefined) {
      writer.uint32(136).bool(message.includeTablespace);
    }
    if (message.labelFilter !== undefined) {
      writer.uint32(146).string(message.labelFilter);
    }
    if (message.outputSchemas !== undefined) {
      writer.uint32(154).string(message.outputSchemas);
    }
    if (message.password !== undefined) {
      writer.uint32(162).string(message.password);
    }
    if (message.referenceDefaultCatalogName !== undefined) {
      writer.uint32(170).string(message.referenceDefaultCatalogName);
    }
    if (message.referenceDefaultSchemaName !== undefined) {
      writer.uint32(178).string(message.referenceDefaultSchemaName);
    }
    if (message.referenceDriver !== undefined) {
      writer.uint32(186).string(message.referenceDriver);
    }
    if (message.referenceDriverPropertiesFile !== undefined) {
      writer.uint32(194).string(message.referenceDriverPropertiesFile);
    }
    if (message.referenceLiquibaseCatalogName !== undefined) {
      writer.uint32(202).string(message.referenceLiquibaseCatalogName);
    }
    if (message.referenceLiquibaseSchemaName !== undefined) {
      writer.uint32(210).string(message.referenceLiquibaseSchemaName);
    }
    if (message.referencePassword !== undefined) {
      writer.uint32(218).string(message.referencePassword);
    }
    if (message.referenceSchemas !== undefined) {
      writer.uint32(226).string(message.referenceSchemas);
    }
    if (message.referenceUrl !== "") {
      writer.uint32(234).string(message.referenceUrl);
    }
    if (message.referenceUsername !== undefined) {
      writer.uint32(242).string(message.referenceUsername);
    }
    if (message.replaceIfExistsTypes !== undefined) {
      writer.uint32(250).string(message.replaceIfExistsTypes);
    }
    if (message.reportEnabled !== undefined) {
      writer.uint32(256).bool(message.reportEnabled);
    }
    if (message.reportName !== undefined) {
      writer.uint32(266).string(message.reportName);
    }
    if (message.reportPath !== undefined) {
      writer.uint32(274).string(message.reportPath);
    }
    if (message.runOnChangeTypes !== undefined) {
      writer.uint32(282).string(message.runOnChangeTypes);
    }
    if (message.schemas !== undefined) {
      writer.uint32(290).string(message.schemas);
    }
    if (message.url !== "") {
      writer.uint32(298).string(message.url);
    }
    if (message.useOrReplaceOption !== undefined) {
      writer.uint32(304).bool(message.useOrReplaceOption);
    }
    if (message.username !== undefined) {
      writer.uint32(314).string(message.username);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(322).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiffChangelogRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiffChangelogRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.author = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.changelogFile = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contextFilter = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.defaultCatalogName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.defaultSchemaName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.diffTypes = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.driftSeverity = reader.int32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.driftSeverityChanged = reader.int32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.driftSeverityMissing = reader.int32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.driftSeverityUnexpected = reader.int32();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.driver = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.driverPropertiesFile = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.excludeObjects = reader.string();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.includeCatalog = reader.bool();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.includeObjects = reader.string();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.includeSchema = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.includeTablespace = reader.bool();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.labelFilter = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.outputSchemas = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.password = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.referenceDefaultCatalogName = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.referenceDefaultSchemaName = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.referenceDriver = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.referenceDriverPropertiesFile = reader.string();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.referenceLiquibaseCatalogName = reader.string();
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.referenceLiquibaseSchemaName = reader.string();
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.referencePassword = reader.string();
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.referenceSchemas = reader.string();
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.referenceUrl = reader.string();
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.referenceUsername = reader.string();
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.replaceIfExistsTypes = reader.string();
          continue;
        case 32:
          if (tag !== 256) {
            break;
          }

          message.reportEnabled = reader.bool();
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.reportName = reader.string();
          continue;
        case 34:
          if (tag !== 274) {
            break;
          }

          message.reportPath = reader.string();
          continue;
        case 35:
          if (tag !== 282) {
            break;
          }

          message.runOnChangeTypes = reader.string();
          continue;
        case 36:
          if (tag !== 290) {
            break;
          }

          message.schemas = reader.string();
          continue;
        case 37:
          if (tag !== 298) {
            break;
          }

          message.url = reader.string();
          continue;
        case 38:
          if (tag !== 304) {
            break;
          }

          message.useOrReplaceOption = reader.bool();
          continue;
        case 39:
          if (tag !== 314) {
            break;
          }

          message.username = reader.string();
          continue;
        case 40:
          if (tag !== 322) {
            break;
          }

          message.globalOptions = GlobalOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DiffChangelogRequest {
    return {
      author: isSet(object.author) ? globalThis.String(object.author) : undefined,
      changelogFile: isSet(object.changelogFile) ? globalThis.String(object.changelogFile) : "",
      contextFilter: isSet(object.contextFilter) ? globalThis.String(object.contextFilter) : undefined,
      defaultCatalogName: isSet(object.defaultCatalogName) ? globalThis.String(object.defaultCatalogName) : undefined,
      defaultSchemaName: isSet(object.defaultSchemaName) ? globalThis.String(object.defaultSchemaName) : undefined,
      diffTypes: isSet(object.diffTypes) ? globalThis.String(object.diffTypes) : undefined,
      driftSeverity: isSet(object.driftSeverity) ? globalThis.Number(object.driftSeverity) : undefined,
      driftSeverityChanged: isSet(object.driftSeverityChanged)
        ? globalThis.Number(object.driftSeverityChanged)
        : undefined,
      driftSeverityMissing: isSet(object.driftSeverityMissing)
        ? globalThis.Number(object.driftSeverityMissing)
        : undefined,
      driftSeverityUnexpected: isSet(object.driftSeverityUnexpected)
        ? globalThis.Number(object.driftSeverityUnexpected)
        : undefined,
      driver: isSet(object.driver) ? globalThis.String(object.driver) : undefined,
      driverPropertiesFile: isSet(object.driverPropertiesFile)
        ? globalThis.String(object.driverPropertiesFile)
        : undefined,
      excludeObjects: isSet(object.excludeObjects) ? globalThis.String(object.excludeObjects) : undefined,
      includeCatalog: isSet(object.includeCatalog) ? globalThis.Boolean(object.includeCatalog) : undefined,
      includeObjects: isSet(object.includeObjects) ? globalThis.String(object.includeObjects) : undefined,
      includeSchema: isSet(object.includeSchema) ? globalThis.Boolean(object.includeSchema) : undefined,
      includeTablespace: isSet(object.includeTablespace) ? globalThis.Boolean(object.includeTablespace) : undefined,
      labelFilter: isSet(object.labelFilter) ? globalThis.String(object.labelFilter) : undefined,
      outputSchemas: isSet(object.outputSchemas) ? globalThis.String(object.outputSchemas) : undefined,
      password: isSet(object.password) ? globalThis.String(object.password) : undefined,
      referenceDefaultCatalogName: isSet(object.referenceDefaultCatalogName)
        ? globalThis.String(object.referenceDefaultCatalogName)
        : undefined,
      referenceDefaultSchemaName: isSet(object.referenceDefaultSchemaName)
        ? globalThis.String(object.referenceDefaultSchemaName)
        : undefined,
      referenceDriver: isSet(object.referenceDriver) ? globalThis.String(object.referenceDriver) : undefined,
      referenceDriverPropertiesFile: isSet(object.referenceDriverPropertiesFile)
        ? globalThis.String(object.referenceDriverPropertiesFile)
        : undefined,
      referenceLiquibaseCatalogName: isSet(object.referenceLiquibaseCatalogName)
        ? globalThis.String(object.referenceLiquibaseCatalogName)
        : undefined,
      referenceLiquibaseSchemaName: isSet(object.referenceLiquibaseSchemaName)
        ? globalThis.String(object.referenceLiquibaseSchemaName)
        : undefined,
      referencePassword: isSet(object.referencePassword) ? globalThis.String(object.referencePassword) : undefined,
      referenceSchemas: isSet(object.referenceSchemas) ? globalThis.String(object.referenceSchemas) : undefined,
      referenceUrl: isSet(object.referenceUrl) ? globalThis.String(object.referenceUrl) : "",
      referenceUsername: isSet(object.referenceUsername) ? globalThis.String(object.referenceUsername) : undefined,
      replaceIfExistsTypes: isSet(object.replaceIfExistsTypes)
        ? globalThis.String(object.replaceIfExistsTypes)
        : undefined,
      reportEnabled: isSet(object.reportEnabled) ? globalThis.Boolean(object.reportEnabled) : undefined,
      reportName: isSet(object.reportName) ? globalThis.String(object.reportName) : undefined,
      reportPath: isSet(object.reportPath) ? globalThis.String(object.reportPath) : undefined,
      runOnChangeTypes: isSet(object.runOnChangeTypes) ? globalThis.String(object.runOnChangeTypes) : undefined,
      schemas: isSet(object.schemas) ? globalThis.String(object.schemas) : undefined,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      useOrReplaceOption: isSet(object.useOrReplaceOption) ? globalThis.Boolean(object.useOrReplaceOption) : undefined,
      username: isSet(object.username) ? globalThis.String(object.username) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: DiffChangelogRequest): unknown {
    const obj: any = {};
    if (message.author !== undefined) {
      obj.author = message.author;
    }
    if (message.changelogFile !== "") {
      obj.changelogFile = message.changelogFile;
    }
    if (message.contextFilter !== undefined) {
      obj.contextFilter = message.contextFilter;
    }
    if (message.defaultCatalogName !== undefined) {
      obj.defaultCatalogName = message.defaultCatalogName;
    }
    if (message.defaultSchemaName !== undefined) {
      obj.defaultSchemaName = message.defaultSchemaName;
    }
    if (message.diffTypes !== undefined) {
      obj.diffTypes = message.diffTypes;
    }
    if (message.driftSeverity !== undefined) {
      obj.driftSeverity = Math.round(message.driftSeverity);
    }
    if (message.driftSeverityChanged !== undefined) {
      obj.driftSeverityChanged = Math.round(message.driftSeverityChanged);
    }
    if (message.driftSeverityMissing !== undefined) {
      obj.driftSeverityMissing = Math.round(message.driftSeverityMissing);
    }
    if (message.driftSeverityUnexpected !== undefined) {
      obj.driftSeverityUnexpected = Math.round(message.driftSeverityUnexpected);
    }
    if (message.driver !== undefined) {
      obj.driver = message.driver;
    }
    if (message.driverPropertiesFile !== undefined) {
      obj.driverPropertiesFile = message.driverPropertiesFile;
    }
    if (message.excludeObjects !== undefined) {
      obj.excludeObjects = message.excludeObjects;
    }
    if (message.includeCatalog !== undefined) {
      obj.includeCatalog = message.includeCatalog;
    }
    if (message.includeObjects !== undefined) {
      obj.includeObjects = message.includeObjects;
    }
    if (message.includeSchema !== undefined) {
      obj.includeSchema = message.includeSchema;
    }
    if (message.includeTablespace !== undefined) {
      obj.includeTablespace = message.includeTablespace;
    }
    if (message.labelFilter !== undefined) {
      obj.labelFilter = message.labelFilter;
    }
    if (message.outputSchemas !== undefined) {
      obj.outputSchemas = message.outputSchemas;
    }
    if (message.password !== undefined) {
      obj.password = message.password;
    }
    if (message.referenceDefaultCatalogName !== undefined) {
      obj.referenceDefaultCatalogName = message.referenceDefaultCatalogName;
    }
    if (message.referenceDefaultSchemaName !== undefined) {
      obj.referenceDefaultSchemaName = message.referenceDefaultSchemaName;
    }
    if (message.referenceDriver !== undefined) {
      obj.referenceDriver = message.referenceDriver;
    }
    if (message.referenceDriverPropertiesFile !== undefined) {
      obj.referenceDriverPropertiesFile = message.referenceDriverPropertiesFile;
    }
    if (message.referenceLiquibaseCatalogName !== undefined) {
      obj.referenceLiquibaseCatalogName = message.referenceLiquibaseCatalogName;
    }
    if (message.referenceLiquibaseSchemaName !== undefined) {
      obj.referenceLiquibaseSchemaName = message.referenceLiquibaseSchemaName;
    }
    if (message.referencePassword !== undefined) {
      obj.referencePassword = message.referencePassword;
    }
    if (message.referenceSchemas !== undefined) {
      obj.referenceSchemas = message.referenceSchemas;
    }
    if (message.referenceUrl !== "") {
      obj.referenceUrl = message.referenceUrl;
    }
    if (message.referenceUsername !== undefined) {
      obj.referenceUsername = message.referenceUsername;
    }
    if (message.replaceIfExistsTypes !== undefined) {
      obj.replaceIfExistsTypes = message.replaceIfExistsTypes;
    }
    if (message.reportEnabled !== undefined) {
      obj.reportEnabled = message.reportEnabled;
    }
    if (message.reportName !== undefined) {
      obj.reportName = message.reportName;
    }
    if (message.reportPath !== undefined) {
      obj.reportPath = message.reportPath;
    }
    if (message.runOnChangeTypes !== undefined) {
      obj.runOnChangeTypes = message.runOnChangeTypes;
    }
    if (message.schemas !== undefined) {
      obj.schemas = message.schemas;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.useOrReplaceOption !== undefined) {
      obj.useOrReplaceOption = message.useOrReplaceOption;
    }
    if (message.username !== undefined) {
      obj.username = message.username;
    }
    if (message.globalOptions !== undefined) {
      obj.globalOptions = GlobalOptions.toJSON(message.globalOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DiffChangelogRequest>, I>>(base?: I): DiffChangelogRequest {
    return DiffChangelogRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DiffChangelogRequest>, I>>(object: I): DiffChangelogRequest {
    const message = createBaseDiffChangelogRequest();
    message.author = object.author ?? undefined;
    message.changelogFile = object.changelogFile ?? "";
    message.contextFilter = object.contextFilter ?? undefined;
    message.defaultCatalogName = object.defaultCatalogName ?? undefined;
    message.defaultSchemaName = object.defaultSchemaName ?? undefined;
    message.diffTypes = object.diffTypes ?? undefined;
    message.driftSeverity = object.driftSeverity ?? undefined;
    message.driftSeverityChanged = object.driftSeverityChanged ?? undefined;
    message.driftSeverityMissing = object.driftSeverityMissing ?? undefined;
    message.driftSeverityUnexpected = object.driftSeverityUnexpected ?? undefined;
    message.driver = object.driver ?? undefined;
    message.driverPropertiesFile = object.driverPropertiesFile ?? undefined;
    message.excludeObjects = object.excludeObjects ?? undefined;
    message.includeCatalog = object.includeCatalog ?? undefined;
    message.includeObjects = object.includeObjects ?? undefined;
    message.includeSchema = object.includeSchema ?? undefined;
    message.includeTablespace = object.includeTablespace ?? undefined;
    message.labelFilter = object.labelFilter ?? undefined;
    message.outputSchemas = object.outputSchemas ?? undefined;
    message.password = object.password ?? undefined;
    message.referenceDefaultCatalogName = object.referenceDefaultCatalogName ?? undefined;
    message.referenceDefaultSchemaName = object.referenceDefaultSchemaName ?? undefined;
    message.referenceDriver = object.referenceDriver ?? undefined;
    message.referenceDriverPropertiesFile = object.referenceDriverPropertiesFile ?? undefined;
    message.referenceLiquibaseCatalogName = object.referenceLiquibaseCatalogName ?? undefined;
    message.referenceLiquibaseSchemaName = object.referenceLiquibaseSchemaName ?? undefined;
    message.referencePassword = object.referencePassword ?? undefined;
    message.referenceSchemas = object.referenceSchemas ?? undefined;
    message.referenceUrl = object.referenceUrl ?? "";
    message.referenceUsername = object.referenceUsername ?? undefined;
    message.replaceIfExistsTypes = object.replaceIfExistsTypes ?? undefined;
    message.reportEnabled = object.reportEnabled ?? undefined;
    message.reportName = object.reportName ?? undefined;
    message.reportPath = object.reportPath ?? undefined;
    message.runOnChangeTypes = object.runOnChangeTypes ?? undefined;
    message.schemas = object.schemas ?? undefined;
    message.url = object.url ?? "";
    message.useOrReplaceOption = object.useOrReplaceOption ?? undefined;
    message.username = object.username ?? undefined;
    message.globalOptions = (object.globalOptions !== undefined && object.globalOptions !== null)
      ? GlobalOptions.fromPartial(object.globalOptions)
      : undefined;
    return message;
  },
};

function createBaseResponse(): Response {
  return { message: "" };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.message = object.message ?? "";
    return message;
  },
};

export interface DiffChangelogService {
  execute(request: DiffChangelogRequest): Promise<Response>;
}

export const DiffChangelogServiceServiceName = "liquibase.DiffChangelogService";
export class DiffChangelogServiceClientImpl implements DiffChangelogService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || DiffChangelogServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: DiffChangelogRequest): Promise<Response> {
    const data = DiffChangelogRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "execute", data);
    return promise.then((data) => Response.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
