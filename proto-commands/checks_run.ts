/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/** Check the changelog or database for issues */
export interface Checks {
}

export interface Checks_RunRequest {
  /** Allows automatic backup and updating of liquibase.checks.conf file when new quality checks are available, or for file format changes. Options: [on|off] */
  autoUpdate?: string;
  /** If true, sqlFile change type contents will be cached in memory to improve performance, at the cost of higher memory usage. To reduce memory usage, set this to false. */
  cacheChangelogFileContents?: boolean;
  /** Relative or fully qualified path to a Liquibase changelog file.  One of --changelog-file or --url is required. */
  changelogFile?: string;
  /** The changeset filter to use when determining which changesets to run checks against, which can be a comma separated list of the following options: 'all', 'pending' */
  changesetFilter?: string;
  /** Comma-separated list of one or more enabled checks to run. Checks to exclude can be prefixed with the ! character. If no checks are specified, all enabled checks will run. Example: --check-name=shortname1,shortname2,!shortname3 */
  checkName?: string;
  /** Allow changeset's rollback code to be analyzed for compliance with currently enabled quality checks. */
  checkRollbacks?: boolean;
  /** Specify which parts of the checks run output should be shown; options: all, issues, issues0, issues1, issues2, issues3, issues4, validated, checksrun, sqlparserfails, skippedchecks */
  checksOutput?: string;
  /** If using a checks packages file, optionally specify which packages should be run from the file as a comma separated list. */
  checksPackages?: string;
  /** The Liquibase component to run checks against, which can be a comma separated list of the following options: 'changelog', 'database' */
  checksScope?: string;
  /** Relative or fully qualified path to a configuration file for checks execution */
  checksSettingsFile?: string;
  /** Changeset contexts to match */
  contextFilter?: string;
  /** The default catalog name to use for the database connection */
  defaultCatalogName?: string;
  /** The default schema name to use for the database connection */
  defaultSchemaName?: string;
  /** The JDBC driver class */
  driver?: string;
  /** The JDBC driver properties file */
  driverPropertiesFile?: string;
  /** [PRO] Option to create JSON output */
  format?: string;
  /** Changeset labels to match */
  labelFilter?: string;
  /** Password to use to connect to the database */
  password?: string;
  /** [PRO] Enable or disable reporting. */
  reportEnabled?: boolean;
  /** [PRO] The name of the report. */
  reportName?: string;
  /** [PRO] The path to the directory to generate the report. */
  reportPath?: string;
  /** The schemas to check when checks-scope contains 'database' */
  schemas?: string;
  /** The severity that a check which fails due to a SQL parse error will exit with. If not set, use the severity of the configured check. Available values are: 0, 1, 2, 3, 4 */
  sqlParserFailSeverity?: number;
  /** The JDBC database connection URL.  One of --changelog-file or --url is required. */
  url?: string;
  /** Username to use to connect to the database */
  username?: string;
  /** Verbose flag with optional values of 'True' or 'False'. The default is 'False'. */
  verbose?: boolean;
  globalOptions: GlobalOptions | undefined;
}

export interface Response {
  message: string;
}

function createBaseChecks(): Checks {
  return {};
}

export const Checks = {
  encode(_: Checks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Checks {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChecks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Checks {
    return {};
  },

  toJSON(_: Checks): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Checks>, I>>(base?: I): Checks {
    return Checks.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Checks>, I>>(_: I): Checks {
    const message = createBaseChecks();
    return message;
  },
};

function createBaseChecks_RunRequest(): Checks_RunRequest {
  return {
    autoUpdate: undefined,
    cacheChangelogFileContents: undefined,
    changelogFile: undefined,
    changesetFilter: undefined,
    checkName: undefined,
    checkRollbacks: undefined,
    checksOutput: undefined,
    checksPackages: undefined,
    checksScope: undefined,
    checksSettingsFile: undefined,
    contextFilter: undefined,
    defaultCatalogName: undefined,
    defaultSchemaName: undefined,
    driver: undefined,
    driverPropertiesFile: undefined,
    format: undefined,
    labelFilter: undefined,
    password: undefined,
    reportEnabled: undefined,
    reportName: undefined,
    reportPath: undefined,
    schemas: undefined,
    sqlParserFailSeverity: undefined,
    url: undefined,
    username: undefined,
    verbose: undefined,
    globalOptions: undefined,
  };
}

export const Checks_RunRequest = {
  encode(message: Checks_RunRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.autoUpdate !== undefined) {
      writer.uint32(10).string(message.autoUpdate);
    }
    if (message.cacheChangelogFileContents !== undefined) {
      writer.uint32(16).bool(message.cacheChangelogFileContents);
    }
    if (message.changelogFile !== undefined) {
      writer.uint32(26).string(message.changelogFile);
    }
    if (message.changesetFilter !== undefined) {
      writer.uint32(34).string(message.changesetFilter);
    }
    if (message.checkName !== undefined) {
      writer.uint32(42).string(message.checkName);
    }
    if (message.checkRollbacks !== undefined) {
      writer.uint32(48).bool(message.checkRollbacks);
    }
    if (message.checksOutput !== undefined) {
      writer.uint32(58).string(message.checksOutput);
    }
    if (message.checksPackages !== undefined) {
      writer.uint32(66).string(message.checksPackages);
    }
    if (message.checksScope !== undefined) {
      writer.uint32(74).string(message.checksScope);
    }
    if (message.checksSettingsFile !== undefined) {
      writer.uint32(82).string(message.checksSettingsFile);
    }
    if (message.contextFilter !== undefined) {
      writer.uint32(90).string(message.contextFilter);
    }
    if (message.defaultCatalogName !== undefined) {
      writer.uint32(98).string(message.defaultCatalogName);
    }
    if (message.defaultSchemaName !== undefined) {
      writer.uint32(106).string(message.defaultSchemaName);
    }
    if (message.driver !== undefined) {
      writer.uint32(114).string(message.driver);
    }
    if (message.driverPropertiesFile !== undefined) {
      writer.uint32(122).string(message.driverPropertiesFile);
    }
    if (message.format !== undefined) {
      writer.uint32(130).string(message.format);
    }
    if (message.labelFilter !== undefined) {
      writer.uint32(138).string(message.labelFilter);
    }
    if (message.password !== undefined) {
      writer.uint32(146).string(message.password);
    }
    if (message.reportEnabled !== undefined) {
      writer.uint32(152).bool(message.reportEnabled);
    }
    if (message.reportName !== undefined) {
      writer.uint32(162).string(message.reportName);
    }
    if (message.reportPath !== undefined) {
      writer.uint32(170).string(message.reportPath);
    }
    if (message.schemas !== undefined) {
      writer.uint32(178).string(message.schemas);
    }
    if (message.sqlParserFailSeverity !== undefined) {
      writer.uint32(184).int32(message.sqlParserFailSeverity);
    }
    if (message.url !== undefined) {
      writer.uint32(194).string(message.url);
    }
    if (message.username !== undefined) {
      writer.uint32(202).string(message.username);
    }
    if (message.verbose !== undefined) {
      writer.uint32(208).bool(message.verbose);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(218).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Checks_RunRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChecks_RunRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.autoUpdate = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.cacheChangelogFileContents = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.changelogFile = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.changesetFilter = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.checkName = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.checkRollbacks = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.checksOutput = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.checksPackages = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.checksScope = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.checksSettingsFile = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.contextFilter = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.defaultCatalogName = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.defaultSchemaName = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.driver = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.driverPropertiesFile = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.format = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.labelFilter = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.password = reader.string();
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.reportEnabled = reader.bool();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.reportName = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.reportPath = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.schemas = reader.string();
          continue;
        case 23:
          if (tag !== 184) {
            break;
          }

          message.sqlParserFailSeverity = reader.int32();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.url = reader.string();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.username = reader.string();
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.verbose = reader.bool();
          continue;
        case 27:
          if (tag !== 218) {
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

  fromJSON(object: any): Checks_RunRequest {
    return {
      autoUpdate: isSet(object.autoUpdate) ? globalThis.String(object.autoUpdate) : undefined,
      cacheChangelogFileContents: isSet(object.cacheChangelogFileContents)
        ? globalThis.Boolean(object.cacheChangelogFileContents)
        : undefined,
      changelogFile: isSet(object.changelogFile) ? globalThis.String(object.changelogFile) : undefined,
      changesetFilter: isSet(object.changesetFilter) ? globalThis.String(object.changesetFilter) : undefined,
      checkName: isSet(object.checkName) ? globalThis.String(object.checkName) : undefined,
      checkRollbacks: isSet(object.checkRollbacks) ? globalThis.Boolean(object.checkRollbacks) : undefined,
      checksOutput: isSet(object.checksOutput) ? globalThis.String(object.checksOutput) : undefined,
      checksPackages: isSet(object.checksPackages) ? globalThis.String(object.checksPackages) : undefined,
      checksScope: isSet(object.checksScope) ? globalThis.String(object.checksScope) : undefined,
      checksSettingsFile: isSet(object.checksSettingsFile) ? globalThis.String(object.checksSettingsFile) : undefined,
      contextFilter: isSet(object.contextFilter) ? globalThis.String(object.contextFilter) : undefined,
      defaultCatalogName: isSet(object.defaultCatalogName) ? globalThis.String(object.defaultCatalogName) : undefined,
      defaultSchemaName: isSet(object.defaultSchemaName) ? globalThis.String(object.defaultSchemaName) : undefined,
      driver: isSet(object.driver) ? globalThis.String(object.driver) : undefined,
      driverPropertiesFile: isSet(object.driverPropertiesFile)
        ? globalThis.String(object.driverPropertiesFile)
        : undefined,
      format: isSet(object.format) ? globalThis.String(object.format) : undefined,
      labelFilter: isSet(object.labelFilter) ? globalThis.String(object.labelFilter) : undefined,
      password: isSet(object.password) ? globalThis.String(object.password) : undefined,
      reportEnabled: isSet(object.reportEnabled) ? globalThis.Boolean(object.reportEnabled) : undefined,
      reportName: isSet(object.reportName) ? globalThis.String(object.reportName) : undefined,
      reportPath: isSet(object.reportPath) ? globalThis.String(object.reportPath) : undefined,
      schemas: isSet(object.schemas) ? globalThis.String(object.schemas) : undefined,
      sqlParserFailSeverity: isSet(object.sqlParserFailSeverity)
        ? globalThis.Number(object.sqlParserFailSeverity)
        : undefined,
      url: isSet(object.url) ? globalThis.String(object.url) : undefined,
      username: isSet(object.username) ? globalThis.String(object.username) : undefined,
      verbose: isSet(object.verbose) ? globalThis.Boolean(object.verbose) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: Checks_RunRequest): unknown {
    const obj: any = {};
    if (message.autoUpdate !== undefined) {
      obj.autoUpdate = message.autoUpdate;
    }
    if (message.cacheChangelogFileContents !== undefined) {
      obj.cacheChangelogFileContents = message.cacheChangelogFileContents;
    }
    if (message.changelogFile !== undefined) {
      obj.changelogFile = message.changelogFile;
    }
    if (message.changesetFilter !== undefined) {
      obj.changesetFilter = message.changesetFilter;
    }
    if (message.checkName !== undefined) {
      obj.checkName = message.checkName;
    }
    if (message.checkRollbacks !== undefined) {
      obj.checkRollbacks = message.checkRollbacks;
    }
    if (message.checksOutput !== undefined) {
      obj.checksOutput = message.checksOutput;
    }
    if (message.checksPackages !== undefined) {
      obj.checksPackages = message.checksPackages;
    }
    if (message.checksScope !== undefined) {
      obj.checksScope = message.checksScope;
    }
    if (message.checksSettingsFile !== undefined) {
      obj.checksSettingsFile = message.checksSettingsFile;
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
    if (message.driver !== undefined) {
      obj.driver = message.driver;
    }
    if (message.driverPropertiesFile !== undefined) {
      obj.driverPropertiesFile = message.driverPropertiesFile;
    }
    if (message.format !== undefined) {
      obj.format = message.format;
    }
    if (message.labelFilter !== undefined) {
      obj.labelFilter = message.labelFilter;
    }
    if (message.password !== undefined) {
      obj.password = message.password;
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
    if (message.schemas !== undefined) {
      obj.schemas = message.schemas;
    }
    if (message.sqlParserFailSeverity !== undefined) {
      obj.sqlParserFailSeverity = Math.round(message.sqlParserFailSeverity);
    }
    if (message.url !== undefined) {
      obj.url = message.url;
    }
    if (message.username !== undefined) {
      obj.username = message.username;
    }
    if (message.verbose !== undefined) {
      obj.verbose = message.verbose;
    }
    if (message.globalOptions !== undefined) {
      obj.globalOptions = GlobalOptions.toJSON(message.globalOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Checks_RunRequest>, I>>(base?: I): Checks_RunRequest {
    return Checks_RunRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Checks_RunRequest>, I>>(object: I): Checks_RunRequest {
    const message = createBaseChecks_RunRequest();
    message.autoUpdate = object.autoUpdate ?? undefined;
    message.cacheChangelogFileContents = object.cacheChangelogFileContents ?? undefined;
    message.changelogFile = object.changelogFile ?? undefined;
    message.changesetFilter = object.changesetFilter ?? undefined;
    message.checkName = object.checkName ?? undefined;
    message.checkRollbacks = object.checkRollbacks ?? undefined;
    message.checksOutput = object.checksOutput ?? undefined;
    message.checksPackages = object.checksPackages ?? undefined;
    message.checksScope = object.checksScope ?? undefined;
    message.checksSettingsFile = object.checksSettingsFile ?? undefined;
    message.contextFilter = object.contextFilter ?? undefined;
    message.defaultCatalogName = object.defaultCatalogName ?? undefined;
    message.defaultSchemaName = object.defaultSchemaName ?? undefined;
    message.driver = object.driver ?? undefined;
    message.driverPropertiesFile = object.driverPropertiesFile ?? undefined;
    message.format = object.format ?? undefined;
    message.labelFilter = object.labelFilter ?? undefined;
    message.password = object.password ?? undefined;
    message.reportEnabled = object.reportEnabled ?? undefined;
    message.reportName = object.reportName ?? undefined;
    message.reportPath = object.reportPath ?? undefined;
    message.schemas = object.schemas ?? undefined;
    message.sqlParserFailSeverity = object.sqlParserFailSeverity ?? undefined;
    message.url = object.url ?? undefined;
    message.username = object.username ?? undefined;
    message.verbose = object.verbose ?? undefined;
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

export interface ChecksRunService {
  execute(request: Checks_RunRequest): Promise<Response>;
}

export const ChecksRunServiceServiceName = "liquibase.pro.ChecksRunService";
export class ChecksRunServiceClientImpl implements ChecksRunService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ChecksRunServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: Checks_RunRequest): Promise<Response> {
    const data = Checks_RunRequest.encode(request).finish();
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
