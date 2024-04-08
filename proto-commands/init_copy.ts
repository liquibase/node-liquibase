/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/** Copy project files from the source directory to the target directory. */
export interface Init {
}

export interface Init_CopyRequest {
  /** Recursive copy files from the source directory */
  recursive?: boolean;
  /** Path to the directory where the project files will be created */
  source?: string;
  /** Source directory where the project files will be copied from */
  target?: string;
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

function createBaseInit_CopyRequest(): Init_CopyRequest {
  return { recursive: undefined, source: undefined, target: undefined, globalOptions: undefined };
}

export const Init_CopyRequest = {
  encode(message: Init_CopyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recursive !== undefined) {
      writer.uint32(8).bool(message.recursive);
    }
    if (message.source !== undefined) {
      writer.uint32(18).string(message.source);
    }
    if (message.target !== undefined) {
      writer.uint32(26).string(message.target);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Init_CopyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInit_CopyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.recursive = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.source = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.target = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): Init_CopyRequest {
    return {
      recursive: isSet(object.recursive) ? globalThis.Boolean(object.recursive) : undefined,
      source: isSet(object.source) ? globalThis.String(object.source) : undefined,
      target: isSet(object.target) ? globalThis.String(object.target) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: Init_CopyRequest): unknown {
    const obj: any = {};
    if (message.recursive !== undefined) {
      obj.recursive = message.recursive;
    }
    if (message.source !== undefined) {
      obj.source = message.source;
    }
    if (message.target !== undefined) {
      obj.target = message.target;
    }
    if (message.globalOptions !== undefined) {
      obj.globalOptions = GlobalOptions.toJSON(message.globalOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Init_CopyRequest>, I>>(base?: I): Init_CopyRequest {
    return Init_CopyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Init_CopyRequest>, I>>(object: I): Init_CopyRequest {
    const message = createBaseInit_CopyRequest();
    message.recursive = object.recursive ?? undefined;
    message.source = object.source ?? undefined;
    message.target = object.target ?? undefined;
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

export interface InitCopyService {
  execute(request: Init_CopyRequest): Promise<Response>;
}

export const InitCopyServiceServiceName = "liquibase.pro.InitCopyService";
export class InitCopyServiceClientImpl implements InitCopyService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || InitCopyServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: Init_CopyRequest): Promise<Response> {
    const data = Init_CopyRequest.encode(request).finish();
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
