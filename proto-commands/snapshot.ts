/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/** Capture the current state of the database */
export interface SnapshotRequest {
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
  /** Password to use to connect to the database */
  password?:
    | string
    | undefined;
  /** The schemas to snapshot */
  schemas?:
    | string
    | undefined;
  /** [PRO] Types of objects to snapshot: Catalog, CheckConstraint, Column, DatabasePackage, DatabasePackageBody, ForeignKey, Function, Index, PrimaryKey, Schema, Sequence, StoredProcedure, Synonym, Table, Trigger, UniqueConstraint, View */
  snapshotFilters?:
    | string
    | undefined;
  /** Output format to use (JSON, YAML, or TXT) */
  snapshotFormat?:
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

function createBaseSnapshotRequest(): SnapshotRequest {
  return {
    defaultCatalogName: undefined,
    defaultSchemaName: undefined,
    driver: undefined,
    driverPropertiesFile: undefined,
    password: undefined,
    schemas: undefined,
    snapshotFilters: undefined,
    snapshotFormat: undefined,
    url: "",
    username: undefined,
    globalOptions: undefined,
  };
}

export const SnapshotRequest = {
  encode(message: SnapshotRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultCatalogName !== undefined) {
      writer.uint32(10).string(message.defaultCatalogName);
    }
    if (message.defaultSchemaName !== undefined) {
      writer.uint32(18).string(message.defaultSchemaName);
    }
    if (message.driver !== undefined) {
      writer.uint32(26).string(message.driver);
    }
    if (message.driverPropertiesFile !== undefined) {
      writer.uint32(34).string(message.driverPropertiesFile);
    }
    if (message.password !== undefined) {
      writer.uint32(42).string(message.password);
    }
    if (message.schemas !== undefined) {
      writer.uint32(50).string(message.schemas);
    }
    if (message.snapshotFilters !== undefined) {
      writer.uint32(58).string(message.snapshotFilters);
    }
    if (message.snapshotFormat !== undefined) {
      writer.uint32(66).string(message.snapshotFormat);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotRequest();
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

          message.driver = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.driverPropertiesFile = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.password = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.schemas = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.snapshotFilters = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.snapshotFormat = reader.string();
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

  fromJSON(object: any): SnapshotRequest {
    return {
      defaultCatalogName: isSet(object.defaultCatalogName) ? globalThis.String(object.defaultCatalogName) : undefined,
      defaultSchemaName: isSet(object.defaultSchemaName) ? globalThis.String(object.defaultSchemaName) : undefined,
      driver: isSet(object.driver) ? globalThis.String(object.driver) : undefined,
      driverPropertiesFile: isSet(object.driverPropertiesFile)
        ? globalThis.String(object.driverPropertiesFile)
        : undefined,
      password: isSet(object.password) ? globalThis.String(object.password) : undefined,
      schemas: isSet(object.schemas) ? globalThis.String(object.schemas) : undefined,
      snapshotFilters: isSet(object.snapshotFilters) ? globalThis.String(object.snapshotFilters) : undefined,
      snapshotFormat: isSet(object.snapshotFormat) ? globalThis.String(object.snapshotFormat) : undefined,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: SnapshotRequest): unknown {
    const obj: any = {};
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
    if (message.password !== undefined) {
      obj.password = message.password;
    }
    if (message.schemas !== undefined) {
      obj.schemas = message.schemas;
    }
    if (message.snapshotFilters !== undefined) {
      obj.snapshotFilters = message.snapshotFilters;
    }
    if (message.snapshotFormat !== undefined) {
      obj.snapshotFormat = message.snapshotFormat;
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

  create<I extends Exact<DeepPartial<SnapshotRequest>, I>>(base?: I): SnapshotRequest {
    return SnapshotRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SnapshotRequest>, I>>(object: I): SnapshotRequest {
    const message = createBaseSnapshotRequest();
    message.defaultCatalogName = object.defaultCatalogName ?? undefined;
    message.defaultSchemaName = object.defaultSchemaName ?? undefined;
    message.driver = object.driver ?? undefined;
    message.driverPropertiesFile = object.driverPropertiesFile ?? undefined;
    message.password = object.password ?? undefined;
    message.schemas = object.schemas ?? undefined;
    message.snapshotFilters = object.snapshotFilters ?? undefined;
    message.snapshotFormat = object.snapshotFormat ?? undefined;
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

export interface SnapshotService {
  execute(request: SnapshotRequest): Promise<Response>;
}

export const SnapshotServiceServiceName = "liquibase.SnapshotService";
export class SnapshotServiceClientImpl implements SnapshotService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || SnapshotServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: SnapshotRequest): Promise<Response> {
    const data = SnapshotRequest.encode(request).finish();
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
