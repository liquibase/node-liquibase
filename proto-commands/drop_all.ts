/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/** Drop all database objects owned by the user */
export interface DropAllRequest {
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
  /** [PRO] If true, the database changelog history table will be dropped */
  dropDbclhistory?:
    | boolean
    | undefined;
  /** required* Argument to allow use of dropAll with values of 'true' or 'false'. The default is 'false'. */
  force: boolean;
  /** Password to use to connect to the database */
  password?:
    | string
    | undefined;
  /** required* Argument to require user of dropAll to supply a 'force' argument, with values of 'true' or 'false'. The default is 'false'. */
  requireForce: boolean;
  /** Schemas to include in drop */
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

function createBaseDropAllRequest(): DropAllRequest {
  return {
    defaultCatalogName: undefined,
    defaultSchemaName: undefined,
    driver: undefined,
    driverPropertiesFile: undefined,
    dropDbclhistory: undefined,
    force: false,
    password: undefined,
    requireForce: false,
    schemas: undefined,
    url: "",
    username: undefined,
    globalOptions: undefined,
  };
}

export const DropAllRequest = {
  encode(message: DropAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.dropDbclhistory !== undefined) {
      writer.uint32(40).bool(message.dropDbclhistory);
    }
    if (message.force !== false) {
      writer.uint32(48).bool(message.force);
    }
    if (message.password !== undefined) {
      writer.uint32(58).string(message.password);
    }
    if (message.requireForce !== false) {
      writer.uint32(64).bool(message.requireForce);
    }
    if (message.schemas !== undefined) {
      writer.uint32(74).string(message.schemas);
    }
    if (message.url !== "") {
      writer.uint32(82).string(message.url);
    }
    if (message.username !== undefined) {
      writer.uint32(90).string(message.username);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropAllRequest();
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
          if (tag !== 40) {
            break;
          }

          message.dropDbclhistory = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.force = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.password = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.requireForce = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.schemas = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.url = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.username = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
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

  fromJSON(object: any): DropAllRequest {
    return {
      defaultCatalogName: isSet(object.defaultCatalogName) ? globalThis.String(object.defaultCatalogName) : undefined,
      defaultSchemaName: isSet(object.defaultSchemaName) ? globalThis.String(object.defaultSchemaName) : undefined,
      driver: isSet(object.driver) ? globalThis.String(object.driver) : undefined,
      driverPropertiesFile: isSet(object.driverPropertiesFile)
        ? globalThis.String(object.driverPropertiesFile)
        : undefined,
      dropDbclhistory: isSet(object.dropDbclhistory) ? globalThis.Boolean(object.dropDbclhistory) : undefined,
      force: isSet(object.force) ? globalThis.Boolean(object.force) : false,
      password: isSet(object.password) ? globalThis.String(object.password) : undefined,
      requireForce: isSet(object.requireForce) ? globalThis.Boolean(object.requireForce) : false,
      schemas: isSet(object.schemas) ? globalThis.String(object.schemas) : undefined,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: DropAllRequest): unknown {
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
    if (message.dropDbclhistory !== undefined) {
      obj.dropDbclhistory = message.dropDbclhistory;
    }
    if (message.force !== false) {
      obj.force = message.force;
    }
    if (message.password !== undefined) {
      obj.password = message.password;
    }
    if (message.requireForce !== false) {
      obj.requireForce = message.requireForce;
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

  create<I extends Exact<DeepPartial<DropAllRequest>, I>>(base?: I): DropAllRequest {
    return DropAllRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DropAllRequest>, I>>(object: I): DropAllRequest {
    const message = createBaseDropAllRequest();
    message.defaultCatalogName = object.defaultCatalogName ?? undefined;
    message.defaultSchemaName = object.defaultSchemaName ?? undefined;
    message.driver = object.driver ?? undefined;
    message.driverPropertiesFile = object.driverPropertiesFile ?? undefined;
    message.dropDbclhistory = object.dropDbclhistory ?? undefined;
    message.force = object.force ?? false;
    message.password = object.password ?? undefined;
    message.requireForce = object.requireForce ?? false;
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

export interface DropAllService {
  execute(request: DropAllRequest): Promise<Response>;
}

export const DropAllServiceServiceName = "liquibase.DropAllService";
export class DropAllServiceClientImpl implements DropAllService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || DropAllServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: DropAllRequest): Promise<Response> {
    const data = DropAllRequest.encode(request).finish();
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
