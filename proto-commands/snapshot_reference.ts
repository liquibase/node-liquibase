/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/** Capture the current state of the reference database */
export interface SnapshotReferenceRequest {
  /** The default catalog name to use for the reference database connection */
  referenceDefaultCatalogName?: string;
  /** The default schema name to use for the reference database connection */
  referenceDefaultSchemaName?: string;
  /** The JDBC driver class for the reference database */
  referenceDriver?: string;
  /** The JDBC driver properties file for the reference database */
  referenceDriverPropertiesFile?: string;
  /** Reference catalog to use for Liquibase objects */
  referenceLiquibaseCatalogName?: string;
  /** Reference schema to use for Liquibase objects */
  referenceLiquibaseSchemaName?: string;
  /** The reference database password */
  referencePassword?: string;
  /** required* The JDBC reference database connection URL */
  referenceUrl: string;
  /** The reference database username */
  referenceUsername?: string;
  /** Output format to use (JSON or YAML) */
  snapshotFormat?: string;
  globalOptions: GlobalOptions | undefined;
}

export interface Response {
  message: string;
}

function createBaseSnapshotReferenceRequest(): SnapshotReferenceRequest {
  return {
    referenceDefaultCatalogName: undefined,
    referenceDefaultSchemaName: undefined,
    referenceDriver: undefined,
    referenceDriverPropertiesFile: undefined,
    referenceLiquibaseCatalogName: undefined,
    referenceLiquibaseSchemaName: undefined,
    referencePassword: undefined,
    referenceUrl: "",
    referenceUsername: undefined,
    snapshotFormat: undefined,
    globalOptions: undefined,
  };
}

export const SnapshotReferenceRequest = {
  encode(message: SnapshotReferenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.referenceDefaultCatalogName !== undefined) {
      writer.uint32(10).string(message.referenceDefaultCatalogName);
    }
    if (message.referenceDefaultSchemaName !== undefined) {
      writer.uint32(18).string(message.referenceDefaultSchemaName);
    }
    if (message.referenceDriver !== undefined) {
      writer.uint32(26).string(message.referenceDriver);
    }
    if (message.referenceDriverPropertiesFile !== undefined) {
      writer.uint32(34).string(message.referenceDriverPropertiesFile);
    }
    if (message.referenceLiquibaseCatalogName !== undefined) {
      writer.uint32(42).string(message.referenceLiquibaseCatalogName);
    }
    if (message.referenceLiquibaseSchemaName !== undefined) {
      writer.uint32(50).string(message.referenceLiquibaseSchemaName);
    }
    if (message.referencePassword !== undefined) {
      writer.uint32(58).string(message.referencePassword);
    }
    if (message.referenceUrl !== "") {
      writer.uint32(66).string(message.referenceUrl);
    }
    if (message.referenceUsername !== undefined) {
      writer.uint32(74).string(message.referenceUsername);
    }
    if (message.snapshotFormat !== undefined) {
      writer.uint32(82).string(message.snapshotFormat);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotReferenceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotReferenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.referenceDefaultCatalogName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.referenceDefaultSchemaName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.referenceDriver = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.referenceDriverPropertiesFile = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.referenceLiquibaseCatalogName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.referenceLiquibaseSchemaName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.referencePassword = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.referenceUrl = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.referenceUsername = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.snapshotFormat = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
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

  fromJSON(object: any): SnapshotReferenceRequest {
    return {
      referenceDefaultCatalogName: isSet(object.referenceDefaultCatalogName)
        ? globalThis.String(object.referenceDefaultCatalogName)
        : undefined,
      referenceDefaultSchemaName: isSet(object.referenceDefaultSchemaName)
        ? globalThis.String(object.referenceDefaultSchemaName)
        : undefined,
      referenceDriver: isSet(object.referenceDriver) ? globalThis.String(object.referenceDriver) : undefined,
      referenceDriverPropertiesFile: isSet(object.referenceDriverPropertiesFile)
        ? globalThis.String(object.referenceDriverPropertiesFile)
        : undefined,
      referenceLiquibaseCatalogName: isSet(object.referenceLiquibaseCatalogName)
        ? globalThis.String(object.referenceLiquibaseCatalogName)
        : undefined,
      referenceLiquibaseSchemaName: isSet(object.referenceLiquibaseSchemaName)
        ? globalThis.String(object.referenceLiquibaseSchemaName)
        : undefined,
      referencePassword: isSet(object.referencePassword) ? globalThis.String(object.referencePassword) : undefined,
      referenceUrl: isSet(object.referenceUrl) ? globalThis.String(object.referenceUrl) : "",
      referenceUsername: isSet(object.referenceUsername) ? globalThis.String(object.referenceUsername) : undefined,
      snapshotFormat: isSet(object.snapshotFormat) ? globalThis.String(object.snapshotFormat) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: SnapshotReferenceRequest): unknown {
    const obj: any = {};
    if (message.referenceDefaultCatalogName !== undefined) {
      obj.referenceDefaultCatalogName = message.referenceDefaultCatalogName;
    }
    if (message.referenceDefaultSchemaName !== undefined) {
      obj.referenceDefaultSchemaName = message.referenceDefaultSchemaName;
    }
    if (message.referenceDriver !== undefined) {
      obj.referenceDriver = message.referenceDriver;
    }
    if (message.referenceDriverPropertiesFile !== undefined) {
      obj.referenceDriverPropertiesFile = message.referenceDriverPropertiesFile;
    }
    if (message.referenceLiquibaseCatalogName !== undefined) {
      obj.referenceLiquibaseCatalogName = message.referenceLiquibaseCatalogName;
    }
    if (message.referenceLiquibaseSchemaName !== undefined) {
      obj.referenceLiquibaseSchemaName = message.referenceLiquibaseSchemaName;
    }
    if (message.referencePassword !== undefined) {
      obj.referencePassword = message.referencePassword;
    }
    if (message.referenceUrl !== "") {
      obj.referenceUrl = message.referenceUrl;
    }
    if (message.referenceUsername !== undefined) {
      obj.referenceUsername = message.referenceUsername;
    }
    if (message.snapshotFormat !== undefined) {
      obj.snapshotFormat = message.snapshotFormat;
    }
    if (message.globalOptions !== undefined) {
      obj.globalOptions = GlobalOptions.toJSON(message.globalOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SnapshotReferenceRequest>, I>>(base?: I): SnapshotReferenceRequest {
    return SnapshotReferenceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SnapshotReferenceRequest>, I>>(object: I): SnapshotReferenceRequest {
    const message = createBaseSnapshotReferenceRequest();
    message.referenceDefaultCatalogName = object.referenceDefaultCatalogName ?? undefined;
    message.referenceDefaultSchemaName = object.referenceDefaultSchemaName ?? undefined;
    message.referenceDriver = object.referenceDriver ?? undefined;
    message.referenceDriverPropertiesFile = object.referenceDriverPropertiesFile ?? undefined;
    message.referenceLiquibaseCatalogName = object.referenceLiquibaseCatalogName ?? undefined;
    message.referenceLiquibaseSchemaName = object.referenceLiquibaseSchemaName ?? undefined;
    message.referencePassword = object.referencePassword ?? undefined;
    message.referenceUrl = object.referenceUrl ?? "";
    message.referenceUsername = object.referenceUsername ?? undefined;
    message.snapshotFormat = object.snapshotFormat ?? undefined;
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

export interface SnapshotReferenceService {
  execute(request: SnapshotReferenceRequest): Promise<Response>;
}

export const SnapshotReferenceServiceServiceName = "liquibase.SnapshotReferenceService";
export class SnapshotReferenceServiceClientImpl implements SnapshotReferenceService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || SnapshotReferenceServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: SnapshotReferenceRequest): Promise<Response> {
    const data = SnapshotReferenceRequest.encode(request).finish();
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
