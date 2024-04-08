/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/**
 * [PRO]
 * Bulk set contexts in the changelog file
 */
export interface SetContextsRequest {
  /** required* The root changelog file */
  changelogFile: string;
  /** The author of the changeset to modify */
  changesetAuthor?:
    | string
    | undefined;
  /** The id of the changeset to modify */
  changesetId?:
    | string
    | undefined;
  /** The changeset path */
  changesetPath?:
    | string
    | undefined;
  /** Changeset contexts to match */
  contextFilter?:
    | string
    | undefined;
  /** The database to filter by */
  dbms?:
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
  /** Replace the contexts if true */
  forceReplace?:
    | boolean
    | undefined;
  /** Changeset labels to match */
  labelFilter?:
    | string
    | undefined;
  /** Password to use to connect to the database */
  password?:
    | string
    | undefined;
  /** required* New contexts values */
  setAs: string;
  /** The JDBC database connection URL */
  url?:
    | string
    | undefined;
  /** Username to use to connect to the database */
  username?: string | undefined;
  globalOptions: GlobalOptions | undefined;
}

export interface Response {
  message: string;
}

function createBaseSetContextsRequest(): SetContextsRequest {
  return {
    changelogFile: "",
    changesetAuthor: undefined,
    changesetId: undefined,
    changesetPath: undefined,
    contextFilter: undefined,
    dbms: undefined,
    defaultCatalogName: undefined,
    defaultSchemaName: undefined,
    driver: undefined,
    driverPropertiesFile: undefined,
    forceReplace: undefined,
    labelFilter: undefined,
    password: undefined,
    setAs: "",
    url: undefined,
    username: undefined,
    globalOptions: undefined,
  };
}

export const SetContextsRequest = {
  encode(message: SetContextsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.changelogFile !== "") {
      writer.uint32(10).string(message.changelogFile);
    }
    if (message.changesetAuthor !== undefined) {
      writer.uint32(18).string(message.changesetAuthor);
    }
    if (message.changesetId !== undefined) {
      writer.uint32(26).string(message.changesetId);
    }
    if (message.changesetPath !== undefined) {
      writer.uint32(34).string(message.changesetPath);
    }
    if (message.contextFilter !== undefined) {
      writer.uint32(42).string(message.contextFilter);
    }
    if (message.dbms !== undefined) {
      writer.uint32(50).string(message.dbms);
    }
    if (message.defaultCatalogName !== undefined) {
      writer.uint32(58).string(message.defaultCatalogName);
    }
    if (message.defaultSchemaName !== undefined) {
      writer.uint32(66).string(message.defaultSchemaName);
    }
    if (message.driver !== undefined) {
      writer.uint32(74).string(message.driver);
    }
    if (message.driverPropertiesFile !== undefined) {
      writer.uint32(82).string(message.driverPropertiesFile);
    }
    if (message.forceReplace !== undefined) {
      writer.uint32(88).bool(message.forceReplace);
    }
    if (message.labelFilter !== undefined) {
      writer.uint32(98).string(message.labelFilter);
    }
    if (message.password !== undefined) {
      writer.uint32(106).string(message.password);
    }
    if (message.setAs !== "") {
      writer.uint32(114).string(message.setAs);
    }
    if (message.url !== undefined) {
      writer.uint32(122).string(message.url);
    }
    if (message.username !== undefined) {
      writer.uint32(130).string(message.username);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetContextsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetContextsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.changelogFile = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.changesetAuthor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.changesetId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.changesetPath = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.contextFilter = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.dbms = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.defaultCatalogName = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.defaultSchemaName = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.driver = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.driverPropertiesFile = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.forceReplace = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.labelFilter = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.password = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.setAs = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.url = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.username = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
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

  fromJSON(object: any): SetContextsRequest {
    return {
      changelogFile: isSet(object.changelogFile) ? globalThis.String(object.changelogFile) : "",
      changesetAuthor: isSet(object.changesetAuthor) ? globalThis.String(object.changesetAuthor) : undefined,
      changesetId: isSet(object.changesetId) ? globalThis.String(object.changesetId) : undefined,
      changesetPath: isSet(object.changesetPath) ? globalThis.String(object.changesetPath) : undefined,
      contextFilter: isSet(object.contextFilter) ? globalThis.String(object.contextFilter) : undefined,
      dbms: isSet(object.dbms) ? globalThis.String(object.dbms) : undefined,
      defaultCatalogName: isSet(object.defaultCatalogName) ? globalThis.String(object.defaultCatalogName) : undefined,
      defaultSchemaName: isSet(object.defaultSchemaName) ? globalThis.String(object.defaultSchemaName) : undefined,
      driver: isSet(object.driver) ? globalThis.String(object.driver) : undefined,
      driverPropertiesFile: isSet(object.driverPropertiesFile)
        ? globalThis.String(object.driverPropertiesFile)
        : undefined,
      forceReplace: isSet(object.forceReplace) ? globalThis.Boolean(object.forceReplace) : undefined,
      labelFilter: isSet(object.labelFilter) ? globalThis.String(object.labelFilter) : undefined,
      password: isSet(object.password) ? globalThis.String(object.password) : undefined,
      setAs: isSet(object.setAs) ? globalThis.String(object.setAs) : "",
      url: isSet(object.url) ? globalThis.String(object.url) : undefined,
      username: isSet(object.username) ? globalThis.String(object.username) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: SetContextsRequest): unknown {
    const obj: any = {};
    if (message.changelogFile !== "") {
      obj.changelogFile = message.changelogFile;
    }
    if (message.changesetAuthor !== undefined) {
      obj.changesetAuthor = message.changesetAuthor;
    }
    if (message.changesetId !== undefined) {
      obj.changesetId = message.changesetId;
    }
    if (message.changesetPath !== undefined) {
      obj.changesetPath = message.changesetPath;
    }
    if (message.contextFilter !== undefined) {
      obj.contextFilter = message.contextFilter;
    }
    if (message.dbms !== undefined) {
      obj.dbms = message.dbms;
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
    if (message.forceReplace !== undefined) {
      obj.forceReplace = message.forceReplace;
    }
    if (message.labelFilter !== undefined) {
      obj.labelFilter = message.labelFilter;
    }
    if (message.password !== undefined) {
      obj.password = message.password;
    }
    if (message.setAs !== "") {
      obj.setAs = message.setAs;
    }
    if (message.url !== undefined) {
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

  create<I extends Exact<DeepPartial<SetContextsRequest>, I>>(base?: I): SetContextsRequest {
    return SetContextsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetContextsRequest>, I>>(object: I): SetContextsRequest {
    const message = createBaseSetContextsRequest();
    message.changelogFile = object.changelogFile ?? "";
    message.changesetAuthor = object.changesetAuthor ?? undefined;
    message.changesetId = object.changesetId ?? undefined;
    message.changesetPath = object.changesetPath ?? undefined;
    message.contextFilter = object.contextFilter ?? undefined;
    message.dbms = object.dbms ?? undefined;
    message.defaultCatalogName = object.defaultCatalogName ?? undefined;
    message.defaultSchemaName = object.defaultSchemaName ?? undefined;
    message.driver = object.driver ?? undefined;
    message.driverPropertiesFile = object.driverPropertiesFile ?? undefined;
    message.forceReplace = object.forceReplace ?? undefined;
    message.labelFilter = object.labelFilter ?? undefined;
    message.password = object.password ?? undefined;
    message.setAs = object.setAs ?? "";
    message.url = object.url ?? undefined;
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

export interface SetContextsService {
  execute(request: SetContextsRequest): Promise<Response>;
}

export const SetContextsServiceServiceName = "liquibase.pro.SetContextsService";
export class SetContextsServiceClientImpl implements SetContextsService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || SetContextsServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: SetContextsRequest): Promise<Response> {
    const data = SetContextsRequest.encode(request).finish();
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
