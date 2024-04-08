/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/** Delete a check from the list of checks in this configuration */
export interface Checks {
}

export interface Checks_DeleteRequest {
  /** Allows automatic backup and updating of liquibase.checks.conf file when new quality checks are available, or for file format changes. Options: [on|off] */
  autoUpdate?: string;
  /** required* Name of check to delete */
  checkName: string;
  /** Relative or fully qualified path to a configuration file for checks execution */
  checksSettingsFile?: string;
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

function createBaseChecks_DeleteRequest(): Checks_DeleteRequest {
  return { autoUpdate: undefined, checkName: "", checksSettingsFile: undefined, globalOptions: undefined };
}

export const Checks_DeleteRequest = {
  encode(message: Checks_DeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.autoUpdate !== undefined) {
      writer.uint32(10).string(message.autoUpdate);
    }
    if (message.checkName !== "") {
      writer.uint32(18).string(message.checkName);
    }
    if (message.checksSettingsFile !== undefined) {
      writer.uint32(26).string(message.checksSettingsFile);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Checks_DeleteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChecks_DeleteRequest();
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
          if (tag !== 18) {
            break;
          }

          message.checkName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.checksSettingsFile = reader.string();
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

  fromJSON(object: any): Checks_DeleteRequest {
    return {
      autoUpdate: isSet(object.autoUpdate) ? globalThis.String(object.autoUpdate) : undefined,
      checkName: isSet(object.checkName) ? globalThis.String(object.checkName) : "",
      checksSettingsFile: isSet(object.checksSettingsFile) ? globalThis.String(object.checksSettingsFile) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: Checks_DeleteRequest): unknown {
    const obj: any = {};
    if (message.autoUpdate !== undefined) {
      obj.autoUpdate = message.autoUpdate;
    }
    if (message.checkName !== "") {
      obj.checkName = message.checkName;
    }
    if (message.checksSettingsFile !== undefined) {
      obj.checksSettingsFile = message.checksSettingsFile;
    }
    if (message.globalOptions !== undefined) {
      obj.globalOptions = GlobalOptions.toJSON(message.globalOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Checks_DeleteRequest>, I>>(base?: I): Checks_DeleteRequest {
    return Checks_DeleteRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Checks_DeleteRequest>, I>>(object: I): Checks_DeleteRequest {
    const message = createBaseChecks_DeleteRequest();
    message.autoUpdate = object.autoUpdate ?? undefined;
    message.checkName = object.checkName ?? "";
    message.checksSettingsFile = object.checksSettingsFile ?? undefined;
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

export interface ChecksDeleteService {
  execute(request: Checks_DeleteRequest): Promise<Response>;
}

export const ChecksDeleteServiceServiceName = "liquibase.pro.ChecksDeleteService";
export class ChecksDeleteServiceClientImpl implements ChecksDeleteService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ChecksDeleteServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: Checks_DeleteRequest): Promise<Response> {
    const data = Checks_DeleteRequest.encode(request).finish();
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
