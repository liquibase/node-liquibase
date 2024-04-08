/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/** Updates database, then rolls back changes before updating again. Useful for testing rollback support */
export interface UpdateTestingRollbackRequest {
  /** Fully-qualified class which specifies a ChangeExecListener */
  changeExecListenerClass?:
    | string
    | undefined;
  /** Path to a properties file for the ChangeExecListenerClass */
  changeExecListenerPropertiesFile?:
    | string
    | undefined;
  /** required* The root changelog file */
  changelogFile: string;
  /** Context string to use for filtering */
  contextFilter?:
    | string
    | undefined;
  /** The default catalog name to use for the database connection */
  defaultCatalogName?:
    | string
    | undefined;
  /** The default schema name to use for the database connection */
  defaultSchemaName?:
    | string
    | undefined;
  /** The JDBC driver class */
  driver?:
    | string
    | undefined;
  /** The JDBC driver properties file */
  driverPropertiesFile?:
    | string
    | undefined;
  /** Label expression to use for filtering */
  labelFilter?:
    | string
    | undefined;
  /** Password to use to connect to the database */
  password?:
    | string
    | undefined;
  /** If set to true and any changeset in a deployment fails, then the update operation stops, and liquibase attempts to rollback all changesets just deployed. A changeset marked "fail-on-error=false" does not trigger as an error, therefore rollback-on-error will not occur. Additionally, if a changeset is not auto-rollback compliant or does not have a rollback script, then no rollback-on-error will occur for any changeset. */
  rollbackOnError?:
    | boolean
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

function createBaseUpdateTestingRollbackRequest(): UpdateTestingRollbackRequest {
  return {
    changeExecListenerClass: undefined,
    changeExecListenerPropertiesFile: undefined,
    changelogFile: "",
    contextFilter: undefined,
    defaultCatalogName: undefined,
    defaultSchemaName: undefined,
    driver: undefined,
    driverPropertiesFile: undefined,
    labelFilter: undefined,
    password: undefined,
    rollbackOnError: undefined,
    url: "",
    username: undefined,
    globalOptions: undefined,
  };
}

export const UpdateTestingRollbackRequest = {
  encode(message: UpdateTestingRollbackRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.changeExecListenerClass !== undefined) {
      writer.uint32(10).string(message.changeExecListenerClass);
    }
    if (message.changeExecListenerPropertiesFile !== undefined) {
      writer.uint32(18).string(message.changeExecListenerPropertiesFile);
    }
    if (message.changelogFile !== "") {
      writer.uint32(26).string(message.changelogFile);
    }
    if (message.contextFilter !== undefined) {
      writer.uint32(34).string(message.contextFilter);
    }
    if (message.defaultCatalogName !== undefined) {
      writer.uint32(42).string(message.defaultCatalogName);
    }
    if (message.defaultSchemaName !== undefined) {
      writer.uint32(50).string(message.defaultSchemaName);
    }
    if (message.driver !== undefined) {
      writer.uint32(58).string(message.driver);
    }
    if (message.driverPropertiesFile !== undefined) {
      writer.uint32(66).string(message.driverPropertiesFile);
    }
    if (message.labelFilter !== undefined) {
      writer.uint32(74).string(message.labelFilter);
    }
    if (message.password !== undefined) {
      writer.uint32(82).string(message.password);
    }
    if (message.rollbackOnError !== undefined) {
      writer.uint32(88).bool(message.rollbackOnError);
    }
    if (message.url !== "") {
      writer.uint32(98).string(message.url);
    }
    if (message.username !== undefined) {
      writer.uint32(106).string(message.username);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTestingRollbackRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTestingRollbackRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.changeExecListenerClass = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.changeExecListenerPropertiesFile = reader.string();
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

          message.contextFilter = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.defaultCatalogName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.defaultSchemaName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.driver = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.driverPropertiesFile = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.labelFilter = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.password = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.rollbackOnError = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.url = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.username = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
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

  fromJSON(object: any): UpdateTestingRollbackRequest {
    return {
      changeExecListenerClass: isSet(object.changeExecListenerClass)
        ? globalThis.String(object.changeExecListenerClass)
        : undefined,
      changeExecListenerPropertiesFile: isSet(object.changeExecListenerPropertiesFile)
        ? globalThis.String(object.changeExecListenerPropertiesFile)
        : undefined,
      changelogFile: isSet(object.changelogFile) ? globalThis.String(object.changelogFile) : "",
      contextFilter: isSet(object.contextFilter) ? globalThis.String(object.contextFilter) : undefined,
      defaultCatalogName: isSet(object.defaultCatalogName) ? globalThis.String(object.defaultCatalogName) : undefined,
      defaultSchemaName: isSet(object.defaultSchemaName) ? globalThis.String(object.defaultSchemaName) : undefined,
      driver: isSet(object.driver) ? globalThis.String(object.driver) : undefined,
      driverPropertiesFile: isSet(object.driverPropertiesFile)
        ? globalThis.String(object.driverPropertiesFile)
        : undefined,
      labelFilter: isSet(object.labelFilter) ? globalThis.String(object.labelFilter) : undefined,
      password: isSet(object.password) ? globalThis.String(object.password) : undefined,
      rollbackOnError: isSet(object.rollbackOnError) ? globalThis.Boolean(object.rollbackOnError) : undefined,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: UpdateTestingRollbackRequest): unknown {
    const obj: any = {};
    if (message.changeExecListenerClass !== undefined) {
      obj.changeExecListenerClass = message.changeExecListenerClass;
    }
    if (message.changeExecListenerPropertiesFile !== undefined) {
      obj.changeExecListenerPropertiesFile = message.changeExecListenerPropertiesFile;
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
    if (message.driver !== undefined) {
      obj.driver = message.driver;
    }
    if (message.driverPropertiesFile !== undefined) {
      obj.driverPropertiesFile = message.driverPropertiesFile;
    }
    if (message.labelFilter !== undefined) {
      obj.labelFilter = message.labelFilter;
    }
    if (message.password !== undefined) {
      obj.password = message.password;
    }
    if (message.rollbackOnError !== undefined) {
      obj.rollbackOnError = message.rollbackOnError;
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

  create<I extends Exact<DeepPartial<UpdateTestingRollbackRequest>, I>>(base?: I): UpdateTestingRollbackRequest {
    return UpdateTestingRollbackRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTestingRollbackRequest>, I>>(object: I): UpdateTestingRollbackRequest {
    const message = createBaseUpdateTestingRollbackRequest();
    message.changeExecListenerClass = object.changeExecListenerClass ?? undefined;
    message.changeExecListenerPropertiesFile = object.changeExecListenerPropertiesFile ?? undefined;
    message.changelogFile = object.changelogFile ?? "";
    message.contextFilter = object.contextFilter ?? undefined;
    message.defaultCatalogName = object.defaultCatalogName ?? undefined;
    message.defaultSchemaName = object.defaultSchemaName ?? undefined;
    message.driver = object.driver ?? undefined;
    message.driverPropertiesFile = object.driverPropertiesFile ?? undefined;
    message.labelFilter = object.labelFilter ?? undefined;
    message.password = object.password ?? undefined;
    message.rollbackOnError = object.rollbackOnError ?? undefined;
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

export interface UpdateTestingRollbackService {
  execute(request: UpdateTestingRollbackRequest): Promise<Response>;
}

export const UpdateTestingRollbackServiceServiceName = "liquibase.UpdateTestingRollbackService";
export class UpdateTestingRollbackServiceClientImpl implements UpdateTestingRollbackService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || UpdateTestingRollbackServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: UpdateTestingRollbackRequest): Promise<Response> {
    const data = UpdateTestingRollbackRequest.encode(request).finish();
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
