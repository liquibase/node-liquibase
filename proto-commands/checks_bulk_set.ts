/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/**
 * [PRO]
 * Set the properties of all qualifying checks with one command
 */
export interface Checks {
}

export interface Checks_BulkSetRequest {
  /** Allows automatic backup and updating of liquibase.checks.conf file when new quality checks are available, or for file format changes. Options: [on|off] */
  autoUpdate?: string;
  /** Relative or fully qualified path to a configuration file for checks execution */
  checksSettingsFile?: string;
  /** Disable all qualifying checks in the checks settings file */
  disable?: boolean;
  /** Enable all qualifying checks in the checks settings file */
  enable?: boolean;
  /** Do not ask for confirmation when running this command */
  force?: boolean;
  /** Set the severity of all checks to the value specified */
  severity?: string;
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

function createBaseChecks_BulkSetRequest(): Checks_BulkSetRequest {
  return {
    autoUpdate: undefined,
    checksSettingsFile: undefined,
    disable: undefined,
    enable: undefined,
    force: undefined,
    severity: undefined,
    globalOptions: undefined,
  };
}

export const Checks_BulkSetRequest = {
  encode(message: Checks_BulkSetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.autoUpdate !== undefined) {
      writer.uint32(10).string(message.autoUpdate);
    }
    if (message.checksSettingsFile !== undefined) {
      writer.uint32(18).string(message.checksSettingsFile);
    }
    if (message.disable !== undefined) {
      writer.uint32(24).bool(message.disable);
    }
    if (message.enable !== undefined) {
      writer.uint32(32).bool(message.enable);
    }
    if (message.force !== undefined) {
      writer.uint32(40).bool(message.force);
    }
    if (message.severity !== undefined) {
      writer.uint32(50).string(message.severity);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Checks_BulkSetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChecks_BulkSetRequest();
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

          message.checksSettingsFile = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.disable = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.enable = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.force = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.severity = reader.string();
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

  fromJSON(object: any): Checks_BulkSetRequest {
    return {
      autoUpdate: isSet(object.autoUpdate) ? globalThis.String(object.autoUpdate) : undefined,
      checksSettingsFile: isSet(object.checksSettingsFile) ? globalThis.String(object.checksSettingsFile) : undefined,
      disable: isSet(object.disable) ? globalThis.Boolean(object.disable) : undefined,
      enable: isSet(object.enable) ? globalThis.Boolean(object.enable) : undefined,
      force: isSet(object.force) ? globalThis.Boolean(object.force) : undefined,
      severity: isSet(object.severity) ? globalThis.String(object.severity) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: Checks_BulkSetRequest): unknown {
    const obj: any = {};
    if (message.autoUpdate !== undefined) {
      obj.autoUpdate = message.autoUpdate;
    }
    if (message.checksSettingsFile !== undefined) {
      obj.checksSettingsFile = message.checksSettingsFile;
    }
    if (message.disable !== undefined) {
      obj.disable = message.disable;
    }
    if (message.enable !== undefined) {
      obj.enable = message.enable;
    }
    if (message.force !== undefined) {
      obj.force = message.force;
    }
    if (message.severity !== undefined) {
      obj.severity = message.severity;
    }
    if (message.globalOptions !== undefined) {
      obj.globalOptions = GlobalOptions.toJSON(message.globalOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Checks_BulkSetRequest>, I>>(base?: I): Checks_BulkSetRequest {
    return Checks_BulkSetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Checks_BulkSetRequest>, I>>(object: I): Checks_BulkSetRequest {
    const message = createBaseChecks_BulkSetRequest();
    message.autoUpdate = object.autoUpdate ?? undefined;
    message.checksSettingsFile = object.checksSettingsFile ?? undefined;
    message.disable = object.disable ?? undefined;
    message.enable = object.enable ?? undefined;
    message.force = object.force ?? undefined;
    message.severity = object.severity ?? undefined;
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

export interface ChecksBulkSetService {
  execute(request: Checks_BulkSetRequest): Promise<Response>;
}

export const ChecksBulkSetServiceServiceName = "liquibase.pro.ChecksBulkSetService";
export class ChecksBulkSetServiceClientImpl implements ChecksBulkSetService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ChecksBulkSetServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: Checks_BulkSetRequest): Promise<Response> {
    const data = Checks_BulkSetRequest.encode(request).finish();
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
