/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/**
 * [PRO]
 * Run a series of commands contained in one or more stages, as configured in a liquibase flow-file.
 */
export interface FlowRequest {
  /** The path to the configuration yaml file which contains one or more 'stages' of commands to be executed in a liquibase flow operation. Defaults to yaml file named "liquibase.flowfile.yaml" in the current working directory. */
  flowFile?:
    | string
    | undefined;
  /** Parse flow-file YAML to allow only Liquibase flow-file specific properties, indentations, and structure. */
  flowFileStrictParsing?:
    | boolean
    | undefined;
  /** The default interpreter used to execute shell commands. EXAMPLES: bash, sh, cmd. */
  flowShellInterpreter?:
    | string
    | undefined;
  /** Do not delete temporary files created by the shell command execution */
  flowShellKeepTempFiles?: boolean | undefined;
  globalOptions: GlobalOptions | undefined;
}

export interface Response {
  message: string;
}

function createBaseFlowRequest(): FlowRequest {
  return {
    flowFile: undefined,
    flowFileStrictParsing: undefined,
    flowShellInterpreter: undefined,
    flowShellKeepTempFiles: undefined,
    globalOptions: undefined,
  };
}

export const FlowRequest = {
  encode(message: FlowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.flowFile !== undefined) {
      writer.uint32(10).string(message.flowFile);
    }
    if (message.flowFileStrictParsing !== undefined) {
      writer.uint32(16).bool(message.flowFileStrictParsing);
    }
    if (message.flowShellInterpreter !== undefined) {
      writer.uint32(26).string(message.flowShellInterpreter);
    }
    if (message.flowShellKeepTempFiles !== undefined) {
      writer.uint32(32).bool(message.flowShellKeepTempFiles);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FlowRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.flowFile = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.flowFileStrictParsing = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.flowShellInterpreter = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.flowShellKeepTempFiles = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): FlowRequest {
    return {
      flowFile: isSet(object.flowFile) ? globalThis.String(object.flowFile) : undefined,
      flowFileStrictParsing: isSet(object.flowFileStrictParsing)
        ? globalThis.Boolean(object.flowFileStrictParsing)
        : undefined,
      flowShellInterpreter: isSet(object.flowShellInterpreter)
        ? globalThis.String(object.flowShellInterpreter)
        : undefined,
      flowShellKeepTempFiles: isSet(object.flowShellKeepTempFiles)
        ? globalThis.Boolean(object.flowShellKeepTempFiles)
        : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: FlowRequest): unknown {
    const obj: any = {};
    if (message.flowFile !== undefined) {
      obj.flowFile = message.flowFile;
    }
    if (message.flowFileStrictParsing !== undefined) {
      obj.flowFileStrictParsing = message.flowFileStrictParsing;
    }
    if (message.flowShellInterpreter !== undefined) {
      obj.flowShellInterpreter = message.flowShellInterpreter;
    }
    if (message.flowShellKeepTempFiles !== undefined) {
      obj.flowShellKeepTempFiles = message.flowShellKeepTempFiles;
    }
    if (message.globalOptions !== undefined) {
      obj.globalOptions = GlobalOptions.toJSON(message.globalOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FlowRequest>, I>>(base?: I): FlowRequest {
    return FlowRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FlowRequest>, I>>(object: I): FlowRequest {
    const message = createBaseFlowRequest();
    message.flowFile = object.flowFile ?? undefined;
    message.flowFileStrictParsing = object.flowFileStrictParsing ?? undefined;
    message.flowShellInterpreter = object.flowShellInterpreter ?? undefined;
    message.flowShellKeepTempFiles = object.flowShellKeepTempFiles ?? undefined;
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

export interface FlowService {
  execute(request: FlowRequest): Promise<Response>;
}

export const FlowServiceServiceName = "liquibase.pro.FlowService";
export class FlowServiceClientImpl implements FlowService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || FlowServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: FlowRequest): Promise<Response> {
    const data = FlowRequest.encode(request).finish();
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