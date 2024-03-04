/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/** Outputs a description of differences.  If you have a Liquibase Pro key, you can output the differences as JSON using the --format=JSON option */
export interface DiffRequest {
  /** The default catalog name to use for the database connection */
  defaultCatalogName?:
    | string
    | undefined;
  /** The default schema name to use for the database connection */
  defaultSchemaName?:
    | string
    | undefined;
  /** Types of objects to compare */
  diffTypes?:
    | string
    | undefined;
  /** [PRO] Sets the return code for all drift types found in diff or diffchangelog operations. Options are 0, 1, 2, 3, 4 */
  driftSeverity?:
    | number
    | undefined;
  /** [PRO] Sets the return code for "changed" type drift found in diff or diffchangelog operations. Options are 0, 1, 2, 3, 4 */
  driftSeverityChanged?:
    | number
    | undefined;
  /** [PRO] Sets the return code for "missing" type drift found in diff or diffchangelog operations. Options are 0, 1, 2, 3, 4 */
  driftSeverityMissing?:
    | number
    | undefined;
  /** [PRO] Sets the return code for "unexpected" type drift found in diff or diffchangelog operations. Options are 0, 1, 2, 3, 4 */
  driftSeverityUnexpected?:
    | number
    | undefined;
  /** The JDBC driver class */
  driver?:
    | string
    | undefined;
  /** The JDBC driver properties file */
  driverPropertiesFile?:
    | string
    | undefined;
  /** Objects to exclude from diff */
  excludeObjects?:
    | string
    | undefined;
  /** [PRO] Option to create JSON output */
  format?:
    | string
    | undefined;
  /** Objects to include in diff */
  includeObjects?:
    | string
    | undefined;
  /** Output schemas names. This is a CSV list. */
  outputSchemas?:
    | string
    | undefined;
  /** Password to use to connect to the database */
  password?:
    | string
    | undefined;
  /** The default catalog name to use for the reference database connection */
  referenceDefaultCatalogName?:
    | string
    | undefined;
  /** The default schema name to use for the reference database connection */
  referenceDefaultSchemaName?:
    | string
    | undefined;
  /** The JDBC driver class for the reference database */
  referenceDriver?:
    | string
    | undefined;
  /** The JDBC driver properties file for the reference database */
  referenceDriverPropertiesFile?:
    | string
    | undefined;
  /** Reference catalog to use for Liquibase objects */
  referenceLiquibaseCatalogName?:
    | string
    | undefined;
  /** Reference schema to use for Liquibase objects */
  referenceLiquibaseSchemaName?:
    | string
    | undefined;
  /** The reference database password */
  referencePassword?:
    | string
    | undefined;
  /** Schemas names on reference database to use in diff. This is a CSV list. */
  referenceSchemas?:
    | string
    | undefined;
  /** required* The JDBC reference database connection URL */
  referenceUrl: string;
  /** The reference database username */
  referenceUsername?:
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
  /** Schemas to include in diff */
  schemas?:
    | string
    | undefined;
  /** required* The JDBC database connection URL */
  url: string;
  /** Username to use to connect to the database */
  username?: string | undefined;
  globalOptions: GlobalOptions | undefined;
}

export interface Response {
  message: string;
}

function createBaseDiffRequest(): DiffRequest {
  return {
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
    format: undefined,
    includeObjects: undefined,
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
    reportEnabled: undefined,
    reportName: undefined,
    reportPath: undefined,
    schemas: undefined,
    url: "",
    username: undefined,
    globalOptions: undefined,
  };
}

export const DiffRequest = {
  encode(message: DiffRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultCatalogName !== undefined) {
      writer.uint32(10).string(message.defaultCatalogName);
    }
    if (message.defaultSchemaName !== undefined) {
      writer.uint32(18).string(message.defaultSchemaName);
    }
    if (message.diffTypes !== undefined) {
      writer.uint32(26).string(message.diffTypes);
    }
    if (message.driftSeverity !== undefined) {
      writer.uint32(32).int32(message.driftSeverity);
    }
    if (message.driftSeverityChanged !== undefined) {
      writer.uint32(40).int32(message.driftSeverityChanged);
    }
    if (message.driftSeverityMissing !== undefined) {
      writer.uint32(48).int32(message.driftSeverityMissing);
    }
    if (message.driftSeverityUnexpected !== undefined) {
      writer.uint32(56).int32(message.driftSeverityUnexpected);
    }
    if (message.driver !== undefined) {
      writer.uint32(66).string(message.driver);
    }
    if (message.driverPropertiesFile !== undefined) {
      writer.uint32(74).string(message.driverPropertiesFile);
    }
    if (message.excludeObjects !== undefined) {
      writer.uint32(82).string(message.excludeObjects);
    }
    if (message.format !== undefined) {
      writer.uint32(90).string(message.format);
    }
    if (message.includeObjects !== undefined) {
      writer.uint32(98).string(message.includeObjects);
    }
    if (message.outputSchemas !== undefined) {
      writer.uint32(106).string(message.outputSchemas);
    }
    if (message.password !== undefined) {
      writer.uint32(114).string(message.password);
    }
    if (message.referenceDefaultCatalogName !== undefined) {
      writer.uint32(122).string(message.referenceDefaultCatalogName);
    }
    if (message.referenceDefaultSchemaName !== undefined) {
      writer.uint32(130).string(message.referenceDefaultSchemaName);
    }
    if (message.referenceDriver !== undefined) {
      writer.uint32(138).string(message.referenceDriver);
    }
    if (message.referenceDriverPropertiesFile !== undefined) {
      writer.uint32(146).string(message.referenceDriverPropertiesFile);
    }
    if (message.referenceLiquibaseCatalogName !== undefined) {
      writer.uint32(154).string(message.referenceLiquibaseCatalogName);
    }
    if (message.referenceLiquibaseSchemaName !== undefined) {
      writer.uint32(162).string(message.referenceLiquibaseSchemaName);
    }
    if (message.referencePassword !== undefined) {
      writer.uint32(170).string(message.referencePassword);
    }
    if (message.referenceSchemas !== undefined) {
      writer.uint32(178).string(message.referenceSchemas);
    }
    if (message.referenceUrl !== "") {
      writer.uint32(186).string(message.referenceUrl);
    }
    if (message.referenceUsername !== undefined) {
      writer.uint32(194).string(message.referenceUsername);
    }
    if (message.reportEnabled !== undefined) {
      writer.uint32(200).bool(message.reportEnabled);
    }
    if (message.reportName !== undefined) {
      writer.uint32(210).string(message.reportName);
    }
    if (message.reportPath !== undefined) {
      writer.uint32(218).string(message.reportPath);
    }
    if (message.schemas !== undefined) {
      writer.uint32(226).string(message.schemas);
    }
    if (message.url !== "") {
      writer.uint32(234).string(message.url);
    }
    if (message.username !== undefined) {
      writer.uint32(242).string(message.username);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(250).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiffRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiffRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.defaultCatalogName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.defaultSchemaName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.diffTypes = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.driftSeverity = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.driftSeverityChanged = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.driftSeverityMissing = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.driftSeverityUnexpected = reader.int32();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.driver = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.driverPropertiesFile = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.excludeObjects = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.format = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.includeObjects = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.outputSchemas = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.password = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.referenceDefaultCatalogName = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.referenceDefaultSchemaName = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.referenceDriver = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.referenceDriverPropertiesFile = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.referenceLiquibaseCatalogName = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.referenceLiquibaseSchemaName = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.referencePassword = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.referenceSchemas = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.referenceUrl = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.referenceUsername = reader.string();
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.reportEnabled = reader.bool();
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.reportName = reader.string();
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.reportPath = reader.string();
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.schemas = reader.string();
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.url = reader.string();
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.username = reader.string();
          continue;
        case 31:
          if (tag !== 250) {
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

  fromJSON(object: any): DiffRequest {
    return {
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
      format: isSet(object.format) ? globalThis.String(object.format) : undefined,
      includeObjects: isSet(object.includeObjects) ? globalThis.String(object.includeObjects) : undefined,
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
      reportEnabled: isSet(object.reportEnabled) ? globalThis.Boolean(object.reportEnabled) : undefined,
      reportName: isSet(object.reportName) ? globalThis.String(object.reportName) : undefined,
      reportPath: isSet(object.reportPath) ? globalThis.String(object.reportPath) : undefined,
      schemas: isSet(object.schemas) ? globalThis.String(object.schemas) : undefined,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: DiffRequest): unknown {
    const obj: any = {};
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
    if (message.format !== undefined) {
      obj.format = message.format;
    }
    if (message.includeObjects !== undefined) {
      obj.includeObjects = message.includeObjects;
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
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.username !== undefined) {
      obj.username = message.username;
    }
    if (message.globalOptions !== undefined) {
      obj.globalOptions = GlobalOptions.toJSON(message.globalOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DiffRequest>, I>>(base?: I): DiffRequest {
    return DiffRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DiffRequest>, I>>(object: I): DiffRequest {
    const message = createBaseDiffRequest();
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
    message.format = object.format ?? undefined;
    message.includeObjects = object.includeObjects ?? undefined;
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
    message.reportEnabled = object.reportEnabled ?? undefined;
    message.reportName = object.reportName ?? undefined;
    message.reportPath = object.reportPath ?? undefined;
    message.schemas = object.schemas ?? undefined;
    message.url = object.url ?? "";
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

export interface DiffService {
  execute(request: DiffRequest): Promise<Response>;
}

export const DiffServiceServiceName = "liquibase.DiffService";
export class DiffServiceClientImpl implements DiffService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || DiffServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: DiffRequest): Promise<Response> {
    const data = DiffRequest.encode(request).finish();
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
