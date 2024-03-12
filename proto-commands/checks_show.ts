/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/** List available checks, their configuration options, and current settings */
export interface Checks {
}

export interface Checks_ShowRequest {
  /** Allows automatic backup and updating of liquibase.checks.conf file when new quality checks are available, or for file format changes. Options: [on|off] */
  autoUpdate?: string;
  /** Only show the listed rules. Use rule shortnames separated with commas to list all required rules. Checks to exclude can be prefixed with the ! character. Use 'all', to select all the rules (used by default, if the parameter isn't set). */
  checkName?: string;
  /** If using a checks packages file, optionally specify which packages should be run from the file as a comma separated list. */
  checksPackages?: string;
  /** Relative or fully qualified path to a configuration file for checks execution */
  checksSettingsFile?: string;
  /** Only show the listed columns. Column options: id,checkname,type,priority,shortname,scope,enabled,severity,customization,description,file. Use commas to separate column names. Use 'all' to select all the columns. */
  showCols?: string;
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

function createBaseChecks_ShowRequest(): Checks_ShowRequest {
  return {
    autoUpdate: undefined,
    checkName: undefined,
    checksPackages: undefined,
    checksSettingsFile: undefined,
    showCols: undefined,
    globalOptions: undefined,
  };
}

export const Checks_ShowRequest = {
  encode(message: Checks_ShowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.autoUpdate !== undefined) {
      writer.uint32(10).string(message.autoUpdate);
    }
    if (message.checkName !== undefined) {
      writer.uint32(18).string(message.checkName);
    }
    if (message.checksPackages !== undefined) {
      writer.uint32(26).string(message.checksPackages);
    }
    if (message.checksSettingsFile !== undefined) {
      writer.uint32(34).string(message.checksSettingsFile);
    }
    if (message.showCols !== undefined) {
      writer.uint32(42).string(message.showCols);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Checks_ShowRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChecks_ShowRequest();
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

          message.checksPackages = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.checksSettingsFile = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.showCols = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): Checks_ShowRequest {
    return {
      autoUpdate: isSet(object.autoUpdate) ? globalThis.String(object.autoUpdate) : undefined,
      checkName: isSet(object.checkName) ? globalThis.String(object.checkName) : undefined,
      checksPackages: isSet(object.checksPackages) ? globalThis.String(object.checksPackages) : undefined,
      checksSettingsFile: isSet(object.checksSettingsFile) ? globalThis.String(object.checksSettingsFile) : undefined,
      showCols: isSet(object.showCols) ? globalThis.String(object.showCols) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: Checks_ShowRequest): unknown {
    const obj: any = {};
    if (message.autoUpdate !== undefined) {
      obj.autoUpdate = message.autoUpdate;
    }
    if (message.checkName !== undefined) {
      obj.checkName = message.checkName;
    }
    if (message.checksPackages !== undefined) {
      obj.checksPackages = message.checksPackages;
    }
    if (message.checksSettingsFile !== undefined) {
      obj.checksSettingsFile = message.checksSettingsFile;
    }
    if (message.showCols !== undefined) {
      obj.showCols = message.showCols;
    }
    if (message.globalOptions !== undefined) {
      obj.globalOptions = GlobalOptions.toJSON(message.globalOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Checks_ShowRequest>, I>>(base?: I): Checks_ShowRequest {
    return Checks_ShowRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Checks_ShowRequest>, I>>(object: I): Checks_ShowRequest {
    const message = createBaseChecks_ShowRequest();
    message.autoUpdate = object.autoUpdate ?? undefined;
    message.checkName = object.checkName ?? undefined;
    message.checksPackages = object.checksPackages ?? undefined;
    message.checksSettingsFile = object.checksSettingsFile ?? undefined;
    message.showCols = object.showCols ?? undefined;
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

export interface ChecksShowService {
  execute(request: Checks_ShowRequest): Promise<Response>;
}

export const ChecksShowServiceServiceName = "liquibase.pro.ChecksShowService";
export class ChecksShowServiceClientImpl implements ChecksShowService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ChecksShowServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: Checks_ShowRequest): Promise<Response> {
    const data = Checks_ShowRequest.encode(request).finish();
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
