/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/** null */
export interface Checks {
}

export interface Checks_CreateRequest {
  /** required* One or more comma-separated relative path(s) to the checks-settings files (or to a directory of files) to be bundled into the checks-package. If the value is a directory, all files will be added to the 'checks-package-name' object, but not recursively. */
  packageContents: string;
  /** Relative or fully qualified path and filename of the checks-package file to be created */
  packageFile?:
    | string
    | undefined;
  /** required* The literal name of the checks-package object to be created inside the checks-package yaml file */
  packageName: string;
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

function createBaseChecks_CreateRequest(): Checks_CreateRequest {
  return { packageContents: "", packageFile: undefined, packageName: "", globalOptions: undefined };
}

export const Checks_CreateRequest = {
  encode(message: Checks_CreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packageContents !== "") {
      writer.uint32(10).string(message.packageContents);
    }
    if (message.packageFile !== undefined) {
      writer.uint32(18).string(message.packageFile);
    }
    if (message.packageName !== "") {
      writer.uint32(26).string(message.packageName);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Checks_CreateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChecks_CreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.packageContents = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.packageFile = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.packageName = reader.string();
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

  fromJSON(object: any): Checks_CreateRequest {
    return {
      packageContents: isSet(object.packageContents) ? globalThis.String(object.packageContents) : "",
      packageFile: isSet(object.packageFile) ? globalThis.String(object.packageFile) : undefined,
      packageName: isSet(object.packageName) ? globalThis.String(object.packageName) : "",
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: Checks_CreateRequest): unknown {
    const obj: any = {};
    if (message.packageContents !== "") {
      obj.packageContents = message.packageContents;
    }
    if (message.packageFile !== undefined) {
      obj.packageFile = message.packageFile;
    }
    if (message.packageName !== "") {
      obj.packageName = message.packageName;
    }
    if (message.globalOptions !== undefined) {
      obj.globalOptions = GlobalOptions.toJSON(message.globalOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Checks_CreateRequest>, I>>(base?: I): Checks_CreateRequest {
    return Checks_CreateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Checks_CreateRequest>, I>>(object: I): Checks_CreateRequest {
    const message = createBaseChecks_CreateRequest();
    message.packageContents = object.packageContents ?? "";
    message.packageFile = object.packageFile ?? undefined;
    message.packageName = object.packageName ?? "";
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

export interface ChecksCreateService {
  execute(request: Checks_CreateRequest): Promise<Response>;
}

export const ChecksCreateServiceServiceName = "liquibase.pro.ChecksCreateService";
export class ChecksCreateServiceClientImpl implements ChecksCreateService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ChecksCreateServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: Checks_CreateRequest): Promise<Response> {
    const data = Checks_CreateRequest.encode(request).finish();
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
