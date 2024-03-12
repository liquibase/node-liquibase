/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/** Execute a SQL string or file */
export interface ExecuteSqlRequest {
  /** The default catalog name to use for the database connection */
  defaultCatalogName?: string;
  /** The default schema name to use for the database connection */
  defaultSchemaName?: string;
  /** Delimiter to use when executing SQL script */
  delimiter?: string;
  /** The JDBC driver class */
  driver?: string;
  /** The JDBC driver properties file */
  driverPropertiesFile?: string;
  /** Password to use to connect to the database */
  password?: string;
  /** SQL string to execute */
  sql?: string;
  /** SQL script to execute */
  sqlFile?: string;
  /** required* The JDBC database connection URL */
  url: string;
  /** Username to use to connect to the database */
  username?: string;
  globalOptions: GlobalOptions | undefined;
}

export interface Response {
  message: string;
}

function createBaseExecuteSqlRequest(): ExecuteSqlRequest {
  return {
    defaultCatalogName: undefined,
    defaultSchemaName: undefined,
    delimiter: undefined,
    driver: undefined,
    driverPropertiesFile: undefined,
    password: undefined,
    sql: undefined,
    sqlFile: undefined,
    url: "",
    username: undefined,
    globalOptions: undefined,
  };
}

export const ExecuteSqlRequest = {
  encode(message: ExecuteSqlRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultCatalogName !== undefined) {
      writer.uint32(10).string(message.defaultCatalogName);
    }
    if (message.defaultSchemaName !== undefined) {
      writer.uint32(18).string(message.defaultSchemaName);
    }
    if (message.delimiter !== undefined) {
      writer.uint32(26).string(message.delimiter);
    }
    if (message.driver !== undefined) {
      writer.uint32(34).string(message.driver);
    }
    if (message.driverPropertiesFile !== undefined) {
      writer.uint32(42).string(message.driverPropertiesFile);
    }
    if (message.password !== undefined) {
      writer.uint32(50).string(message.password);
    }
    if (message.sql !== undefined) {
      writer.uint32(58).string(message.sql);
    }
    if (message.sqlFile !== undefined) {
      writer.uint32(66).string(message.sqlFile);
    }
    if (message.url !== "") {
      writer.uint32(74).string(message.url);
    }
    if (message.username !== undefined) {
      writer.uint32(82).string(message.username);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteSqlRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteSqlRequest();
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

          message.delimiter = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.driver = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.driverPropertiesFile = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.password = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sql = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.sqlFile = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.url = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.username = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
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

  fromJSON(object: any): ExecuteSqlRequest {
    return {
      defaultCatalogName: isSet(object.defaultCatalogName) ? globalThis.String(object.defaultCatalogName) : undefined,
      defaultSchemaName: isSet(object.defaultSchemaName) ? globalThis.String(object.defaultSchemaName) : undefined,
      delimiter: isSet(object.delimiter) ? globalThis.String(object.delimiter) : undefined,
      driver: isSet(object.driver) ? globalThis.String(object.driver) : undefined,
      driverPropertiesFile: isSet(object.driverPropertiesFile)
        ? globalThis.String(object.driverPropertiesFile)
        : undefined,
      password: isSet(object.password) ? globalThis.String(object.password) : undefined,
      sql: isSet(object.sql) ? globalThis.String(object.sql) : undefined,
      sqlFile: isSet(object.sqlFile) ? globalThis.String(object.sqlFile) : undefined,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: ExecuteSqlRequest): unknown {
    const obj: any = {};
    if (message.defaultCatalogName !== undefined) {
      obj.defaultCatalogName = message.defaultCatalogName;
    }
    if (message.defaultSchemaName !== undefined) {
      obj.defaultSchemaName = message.defaultSchemaName;
    }
    if (message.delimiter !== undefined) {
      obj.delimiter = message.delimiter;
    }
    if (message.driver !== undefined) {
      obj.driver = message.driver;
    }
    if (message.driverPropertiesFile !== undefined) {
      obj.driverPropertiesFile = message.driverPropertiesFile;
    }
    if (message.password !== undefined) {
      obj.password = message.password;
    }
    if (message.sql !== undefined) {
      obj.sql = message.sql;
    }
    if (message.sqlFile !== undefined) {
      obj.sqlFile = message.sqlFile;
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

  create<I extends Exact<DeepPartial<ExecuteSqlRequest>, I>>(base?: I): ExecuteSqlRequest {
    return ExecuteSqlRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecuteSqlRequest>, I>>(object: I): ExecuteSqlRequest {
    const message = createBaseExecuteSqlRequest();
    message.defaultCatalogName = object.defaultCatalogName ?? undefined;
    message.defaultSchemaName = object.defaultSchemaName ?? undefined;
    message.delimiter = object.delimiter ?? undefined;
    message.driver = object.driver ?? undefined;
    message.driverPropertiesFile = object.driverPropertiesFile ?? undefined;
    message.password = object.password ?? undefined;
    message.sql = object.sql ?? undefined;
    message.sqlFile = object.sqlFile ?? undefined;
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

export interface ExecuteSqlService {
  execute(request: ExecuteSqlRequest): Promise<Response>;
}

export const ExecuteSqlServiceServiceName = "liquibase.ExecuteSqlService";
export class ExecuteSqlServiceClientImpl implements ExecuteSqlService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ExecuteSqlServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: ExecuteSqlRequest): Promise<Response> {
    const data = ExecuteSqlRequest.encode(request).finish();
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
