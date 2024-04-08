/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/** Creates the directory and files needed to run Liquibase commands. Run without any flags on the CLI, or set via Environment variable, etc. will launch an interactive guide to walk users through setting up the necessary project's default and changelog files. This guide can be turned off by setting the 'liquibase.command.init.project.projectGuide=off' */
export interface Init {
}

export interface Init_ProjectRequest {
  /** Relative or fully qualified path to the changelog file */
  changelogFile?: string;
  /** Format of the project changelog sql|xml|json|yaml|yml */
  format?: string;
  /** For remote project locations, do not delete temporary project files */
  keepTempFiles?: boolean;
  /** Password to use to connect to the database */
  password?: string;
  /** File with default Liquibase properties */
  projectDefaultsFile?: string;
  /** Relative or fully qualified path to the directory where the project files will be created */
  projectDir?: string;
  /** Allow interactive prompts for init project */
  projectGuide?: string;
  /** The JDBC database connection URL */
  url?: string;
  /** Username to use to connect to the database */
  username?: string;
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

function createBaseInit_ProjectRequest(): Init_ProjectRequest {
  return {
    changelogFile: undefined,
    format: undefined,
    keepTempFiles: undefined,
    password: undefined,
    projectDefaultsFile: undefined,
    projectDir: undefined,
    projectGuide: undefined,
    url: undefined,
    username: undefined,
    globalOptions: undefined,
  };
}

export const Init_ProjectRequest = {
  encode(message: Init_ProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.changelogFile !== undefined) {
      writer.uint32(10).string(message.changelogFile);
    }
    if (message.format !== undefined) {
      writer.uint32(18).string(message.format);
    }
    if (message.keepTempFiles !== undefined) {
      writer.uint32(24).bool(message.keepTempFiles);
    }
    if (message.password !== undefined) {
      writer.uint32(34).string(message.password);
    }
    if (message.projectDefaultsFile !== undefined) {
      writer.uint32(42).string(message.projectDefaultsFile);
    }
    if (message.projectDir !== undefined) {
      writer.uint32(50).string(message.projectDir);
    }
    if (message.projectGuide !== undefined) {
      writer.uint32(58).string(message.projectGuide);
    }
    if (message.url !== undefined) {
      writer.uint32(66).string(message.url);
    }
    if (message.username !== undefined) {
      writer.uint32(74).string(message.username);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Init_ProjectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInit_ProjectRequest();
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

          message.format = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.keepTempFiles = reader.bool();
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

          message.projectDefaultsFile = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.projectDir = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.projectGuide = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.url = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.username = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
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

  fromJSON(object: any): Init_ProjectRequest {
    return {
      changelogFile: isSet(object.changelogFile) ? globalThis.String(object.changelogFile) : undefined,
      format: isSet(object.format) ? globalThis.String(object.format) : undefined,
      keepTempFiles: isSet(object.keepTempFiles) ? globalThis.Boolean(object.keepTempFiles) : undefined,
      password: isSet(object.password) ? globalThis.String(object.password) : undefined,
      projectDefaultsFile: isSet(object.projectDefaultsFile)
        ? globalThis.String(object.projectDefaultsFile)
        : undefined,
      projectDir: isSet(object.projectDir) ? globalThis.String(object.projectDir) : undefined,
      projectGuide: isSet(object.projectGuide) ? globalThis.String(object.projectGuide) : undefined,
      url: isSet(object.url) ? globalThis.String(object.url) : undefined,
      username: isSet(object.username) ? globalThis.String(object.username) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: Init_ProjectRequest): unknown {
    const obj: any = {};
    if (message.changelogFile !== undefined) {
      obj.changelogFile = message.changelogFile;
    }
    if (message.format !== undefined) {
      obj.format = message.format;
    }
    if (message.keepTempFiles !== undefined) {
      obj.keepTempFiles = message.keepTempFiles;
    }
    if (message.password !== undefined) {
      obj.password = message.password;
    }
    if (message.projectDefaultsFile !== undefined) {
      obj.projectDefaultsFile = message.projectDefaultsFile;
    }
    if (message.projectDir !== undefined) {
      obj.projectDir = message.projectDir;
    }
    if (message.projectGuide !== undefined) {
      obj.projectGuide = message.projectGuide;
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

  create<I extends Exact<DeepPartial<Init_ProjectRequest>, I>>(base?: I): Init_ProjectRequest {
    return Init_ProjectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Init_ProjectRequest>, I>>(object: I): Init_ProjectRequest {
    const message = createBaseInit_ProjectRequest();
    message.changelogFile = object.changelogFile ?? undefined;
    message.format = object.format ?? undefined;
    message.keepTempFiles = object.keepTempFiles ?? undefined;
    message.password = object.password ?? undefined;
    message.projectDefaultsFile = object.projectDefaultsFile ?? undefined;
    message.projectDir = object.projectDir ?? undefined;
    message.projectGuide = object.projectGuide ?? undefined;
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

export interface InitProjectService {
  execute(request: Init_ProjectRequest): Promise<Response>;
}

export const InitProjectServiceServiceName = "liquibase.pro.InitProjectService";
export class InitProjectServiceClientImpl implements InitProjectService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || InitProjectServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: Init_ProjectRequest): Promise<Response> {
    const data = Init_ProjectRequest.encode(request).finish();
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
