/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/** Launches H2, an included open source in-memory database. This Java application is shipped with Liquibase, and is useful in the Getting Started experience and for testing out Liquibase commands. */
export interface Init {
}

export interface Init_StartH2Request {
  /** Network address to bind to */
  bindAddress?: string;
  /** Port to run h2 database on */
  dbPort?: number;
  /** Whether to open a browser to the database's web interface */
  launchBrowser?: boolean;
  /** Password to use for created h2 user */
  password?: string;
  /** Username to create in h2 */
  username?: string;
  /** Port to run h2's web interface on */
  webPort?: number;
  globalOptions: GlobalOptions | undefined;
}

export interface Response {
  message: string;
}

function createBaseInit(): Init {
  return {};
}

export const Init = {
  encode(_: Init, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Init {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInit();
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

  fromJSON(_: any): Init {
    return {};
  },

  toJSON(_: Init): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Init>, I>>(base?: I): Init {
    return Init.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Init>, I>>(_: I): Init {
    const message = createBaseInit();
    return message;
  },
};

function createBaseInit_StartH2Request(): Init_StartH2Request {
  return {
    bindAddress: undefined,
    dbPort: undefined,
    launchBrowser: undefined,
    password: undefined,
    username: undefined,
    webPort: undefined,
    globalOptions: undefined,
  };
}

export const Init_StartH2Request = {
  encode(message: Init_StartH2Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bindAddress !== undefined) {
      writer.uint32(10).string(message.bindAddress);
    }
    if (message.dbPort !== undefined) {
      writer.uint32(16).int32(message.dbPort);
    }
    if (message.launchBrowser !== undefined) {
      writer.uint32(24).bool(message.launchBrowser);
    }
    if (message.password !== undefined) {
      writer.uint32(34).string(message.password);
    }
    if (message.username !== undefined) {
      writer.uint32(42).string(message.username);
    }
    if (message.webPort !== undefined) {
      writer.uint32(48).int32(message.webPort);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Init_StartH2Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInit_StartH2Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bindAddress = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.dbPort = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.launchBrowser = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.password = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.username = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.webPort = reader.int32();
          continue;
        case 7:
          if (tag !== 58) {
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

  fromJSON(object: any): Init_StartH2Request {
    return {
      bindAddress: isSet(object.bindAddress) ? globalThis.String(object.bindAddress) : undefined,
      dbPort: isSet(object.dbPort) ? globalThis.Number(object.dbPort) : undefined,
      launchBrowser: isSet(object.launchBrowser) ? globalThis.Boolean(object.launchBrowser) : undefined,
      password: isSet(object.password) ? globalThis.String(object.password) : undefined,
      username: isSet(object.username) ? globalThis.String(object.username) : undefined,
      webPort: isSet(object.webPort) ? globalThis.Number(object.webPort) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: Init_StartH2Request): unknown {
    const obj: any = {};
    if (message.bindAddress !== undefined) {
      obj.bindAddress = message.bindAddress;
    }
    if (message.dbPort !== undefined) {
      obj.dbPort = Math.round(message.dbPort);
    }
    if (message.launchBrowser !== undefined) {
      obj.launchBrowser = message.launchBrowser;
    }
    if (message.password !== undefined) {
      obj.password = message.password;
    }
    if (message.username !== undefined) {
      obj.username = message.username;
    }
    if (message.webPort !== undefined) {
      obj.webPort = Math.round(message.webPort);
    }
    if (message.globalOptions !== undefined) {
      obj.globalOptions = GlobalOptions.toJSON(message.globalOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Init_StartH2Request>, I>>(base?: I): Init_StartH2Request {
    return Init_StartH2Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Init_StartH2Request>, I>>(object: I): Init_StartH2Request {
    const message = createBaseInit_StartH2Request();
    message.bindAddress = object.bindAddress ?? undefined;
    message.dbPort = object.dbPort ?? undefined;
    message.launchBrowser = object.launchBrowser ?? undefined;
    message.password = object.password ?? undefined;
    message.username = object.username ?? undefined;
    message.webPort = object.webPort ?? undefined;
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

export interface InitStartH2Service {
  execute(request: Init_StartH2Request): Promise<Response>;
}

export const InitStartH2ServiceServiceName = "liquibase.InitStartH2Service";
export class InitStartH2ServiceClientImpl implements InitStartH2Service {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || InitStartH2ServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: Init_StartH2Request): Promise<Response> {
    const data = Init_StartH2Request.encode(request).finish();
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
