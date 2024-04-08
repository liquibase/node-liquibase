/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/** Generate a changelog */
export interface GenerateChangelogRequest {
  /** Specifies the author for changesets in the generated changelog */
  author?:
    | string
    | undefined;
  /** Changelog file to write results */
  changelogFile?:
    | string
    | undefined;
  /** Changeset contexts to generate */
  contextFilter?:
    | string
    | undefined;
  /** Directory to write table data to */
  dataOutputDirectory?:
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
  /** Types of objects to compare */
  diffTypes?:
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
  /** Objects to exclude from diff */
  excludeObjects?:
    | string
    | undefined;
  /** If true, the catalog will be included in generated changeSets. Defaults to false. */
  includeCatalog?:
    | boolean
    | undefined;
  /** Objects to include in diff */
  includeObjects?:
    | string
    | undefined;
  /** If true, the schema will be included in generated changeSets. Defaults to false. */
  includeSchema?:
    | boolean
    | undefined;
  /** Include the tablespace attribute in the changelog. Defaults to false. */
  includeTablespace?:
    | boolean
    | undefined;
  /** Changeset labels to generate */
  labelFilter?:
    | string
    | undefined;
  /** Output schemas names. This is a CSV list. */
  outputSchemas?:
    | string
    | undefined;
  /** Flag to allow overwriting of output changelog file. Default: false */
  overwriteOutputFile?:
    | boolean
    | undefined;
  /** Password to use to connect to the database */
  password?:
    | string
    | undefined;
  /** Sets replaceIfExists="true" for changes of these types (supported types: createFunction, createPackage, createPackageBody, createProcedure, createTrigger, createView) */
  replaceIfExistsTypes?:
    | string
    | undefined;
  /** Sets runOnChange="true" for changesets containing solely changes of these types (e. g. createView, createProcedure, ...). */
  runOnChangeTypes?:
    | string
    | undefined;
  /** Schemas to include in diff */
  schemas?:
    | string
    | undefined;
  /** When true will skip object sorting. This can be useful on databases that have a lot of packages/procedures that are linked to each other */
  skipObjectSorting?:
    | boolean
    | undefined;
  /** required* The JDBC database connection URL */
  url: string;
  /** If true, will add 'OR REPLACE' option to the create view change object */
  useOrReplaceOption?:
    | boolean
    | undefined;
  /** Username to use to connect to the database */
  username?: string | undefined;
  globalOptions: GlobalOptions | undefined;
}

export interface Response {
  message: string;
}

function createBaseGenerateChangelogRequest(): GenerateChangelogRequest {
  return {
    author: undefined,
    changelogFile: undefined,
    contextFilter: undefined,
    dataOutputDirectory: undefined,
    defaultCatalogName: undefined,
    defaultSchemaName: undefined,
    diffTypes: undefined,
    driver: undefined,
    driverPropertiesFile: undefined,
    excludeObjects: undefined,
    includeCatalog: undefined,
    includeObjects: undefined,
    includeSchema: undefined,
    includeTablespace: undefined,
    labelFilter: undefined,
    outputSchemas: undefined,
    overwriteOutputFile: undefined,
    password: undefined,
    replaceIfExistsTypes: undefined,
    runOnChangeTypes: undefined,
    schemas: undefined,
    skipObjectSorting: undefined,
    url: "",
    useOrReplaceOption: undefined,
    username: undefined,
    globalOptions: undefined,
  };
}

export const GenerateChangelogRequest = {
  encode(message: GenerateChangelogRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.author !== undefined) {
      writer.uint32(10).string(message.author);
    }
    if (message.changelogFile !== undefined) {
      writer.uint32(18).string(message.changelogFile);
    }
    if (message.contextFilter !== undefined) {
      writer.uint32(26).string(message.contextFilter);
    }
    if (message.dataOutputDirectory !== undefined) {
      writer.uint32(34).string(message.dataOutputDirectory);
    }
    if (message.defaultCatalogName !== undefined) {
      writer.uint32(42).string(message.defaultCatalogName);
    }
    if (message.defaultSchemaName !== undefined) {
      writer.uint32(50).string(message.defaultSchemaName);
    }
    if (message.diffTypes !== undefined) {
      writer.uint32(58).string(message.diffTypes);
    }
    if (message.driver !== undefined) {
      writer.uint32(66).string(message.driver);
    }
    if (message.driverPropertiesFile !== undefined) {
      writer.uint32(74).string(message.driverPropertiesFile);
    }
    if (message.excludeObjects !== undefined) {
      writer.uint32(82).string(message.excludeObjects);
    }
    if (message.includeCatalog !== undefined) {
      writer.uint32(88).bool(message.includeCatalog);
    }
    if (message.includeObjects !== undefined) {
      writer.uint32(98).string(message.includeObjects);
    }
    if (message.includeSchema !== undefined) {
      writer.uint32(104).bool(message.includeSchema);
    }
    if (message.includeTablespace !== undefined) {
      writer.uint32(112).bool(message.includeTablespace);
    }
    if (message.labelFilter !== undefined) {
      writer.uint32(122).string(message.labelFilter);
    }
    if (message.outputSchemas !== undefined) {
      writer.uint32(130).string(message.outputSchemas);
    }
    if (message.overwriteOutputFile !== undefined) {
      writer.uint32(136).bool(message.overwriteOutputFile);
    }
    if (message.password !== undefined) {
      writer.uint32(146).string(message.password);
    }
    if (message.replaceIfExistsTypes !== undefined) {
      writer.uint32(154).string(message.replaceIfExistsTypes);
    }
    if (message.runOnChangeTypes !== undefined) {
      writer.uint32(162).string(message.runOnChangeTypes);
    }
    if (message.schemas !== undefined) {
      writer.uint32(170).string(message.schemas);
    }
    if (message.skipObjectSorting !== undefined) {
      writer.uint32(176).bool(message.skipObjectSorting);
    }
    if (message.url !== "") {
      writer.uint32(186).string(message.url);
    }
    if (message.useOrReplaceOption !== undefined) {
      writer.uint32(192).bool(message.useOrReplaceOption);
    }
    if (message.username !== undefined) {
      writer.uint32(202).string(message.username);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(210).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateChangelogRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateChangelogRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.author = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.changelogFile = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contextFilter = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dataOutputDirectory = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.defaultCatalogName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.defaultSchemaName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.diffTypes = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.driver = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.driverPropertiesFile = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.excludeObjects = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.includeCatalog = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.includeObjects = reader.string();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.includeSchema = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.includeTablespace = reader.bool();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.labelFilter = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.outputSchemas = reader.string();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.overwriteOutputFile = reader.bool();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.password = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.replaceIfExistsTypes = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.runOnChangeTypes = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.schemas = reader.string();
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.skipObjectSorting = reader.bool();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.url = reader.string();
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.useOrReplaceOption = reader.bool();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.username = reader.string();
          continue;
        case 26:
          if (tag !== 210) {
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

  fromJSON(object: any): GenerateChangelogRequest {
    return {
      author: isSet(object.author) ? globalThis.String(object.author) : undefined,
      changelogFile: isSet(object.changelogFile) ? globalThis.String(object.changelogFile) : undefined,
      contextFilter: isSet(object.contextFilter) ? globalThis.String(object.contextFilter) : undefined,
      dataOutputDirectory: isSet(object.dataOutputDirectory)
        ? globalThis.String(object.dataOutputDirectory)
        : undefined,
      defaultCatalogName: isSet(object.defaultCatalogName) ? globalThis.String(object.defaultCatalogName) : undefined,
      defaultSchemaName: isSet(object.defaultSchemaName) ? globalThis.String(object.defaultSchemaName) : undefined,
      diffTypes: isSet(object.diffTypes) ? globalThis.String(object.diffTypes) : undefined,
      driver: isSet(object.driver) ? globalThis.String(object.driver) : undefined,
      driverPropertiesFile: isSet(object.driverPropertiesFile)
        ? globalThis.String(object.driverPropertiesFile)
        : undefined,
      excludeObjects: isSet(object.excludeObjects) ? globalThis.String(object.excludeObjects) : undefined,
      includeCatalog: isSet(object.includeCatalog) ? globalThis.Boolean(object.includeCatalog) : undefined,
      includeObjects: isSet(object.includeObjects) ? globalThis.String(object.includeObjects) : undefined,
      includeSchema: isSet(object.includeSchema) ? globalThis.Boolean(object.includeSchema) : undefined,
      includeTablespace: isSet(object.includeTablespace) ? globalThis.Boolean(object.includeTablespace) : undefined,
      labelFilter: isSet(object.labelFilter) ? globalThis.String(object.labelFilter) : undefined,
      outputSchemas: isSet(object.outputSchemas) ? globalThis.String(object.outputSchemas) : undefined,
      overwriteOutputFile: isSet(object.overwriteOutputFile)
        ? globalThis.Boolean(object.overwriteOutputFile)
        : undefined,
      password: isSet(object.password) ? globalThis.String(object.password) : undefined,
      replaceIfExistsTypes: isSet(object.replaceIfExistsTypes)
        ? globalThis.String(object.replaceIfExistsTypes)
        : undefined,
      runOnChangeTypes: isSet(object.runOnChangeTypes) ? globalThis.String(object.runOnChangeTypes) : undefined,
      schemas: isSet(object.schemas) ? globalThis.String(object.schemas) : undefined,
      skipObjectSorting: isSet(object.skipObjectSorting) ? globalThis.Boolean(object.skipObjectSorting) : undefined,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      useOrReplaceOption: isSet(object.useOrReplaceOption) ? globalThis.Boolean(object.useOrReplaceOption) : undefined,
      username: isSet(object.username) ? globalThis.String(object.username) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: GenerateChangelogRequest): unknown {
    const obj: any = {};
    if (message.author !== undefined) {
      obj.author = message.author;
    }
    if (message.changelogFile !== undefined) {
      obj.changelogFile = message.changelogFile;
    }
    if (message.contextFilter !== undefined) {
      obj.contextFilter = message.contextFilter;
    }
    if (message.dataOutputDirectory !== undefined) {
      obj.dataOutputDirectory = message.dataOutputDirectory;
    }
    if (message.defaultCatalogName !== undefined) {
      obj.defaultCatalogName = message.defaultCatalogName;
    }
    if (message.defaultSchemaName !== undefined) {
      obj.defaultSchemaName = message.defaultSchemaName;
    }
    if (message.diffTypes !== undefined) {
      obj.diffTypes = message.diffTypes;
    }
    if (message.driver !== undefined) {
      obj.driver = message.driver;
    }
    if (message.driverPropertiesFile !== undefined) {
      obj.driverPropertiesFile = message.driverPropertiesFile;
    }
    if (message.excludeObjects !== undefined) {
      obj.excludeObjects = message.excludeObjects;
    }
    if (message.includeCatalog !== undefined) {
      obj.includeCatalog = message.includeCatalog;
    }
    if (message.includeObjects !== undefined) {
      obj.includeObjects = message.includeObjects;
    }
    if (message.includeSchema !== undefined) {
      obj.includeSchema = message.includeSchema;
    }
    if (message.includeTablespace !== undefined) {
      obj.includeTablespace = message.includeTablespace;
    }
    if (message.labelFilter !== undefined) {
      obj.labelFilter = message.labelFilter;
    }
    if (message.outputSchemas !== undefined) {
      obj.outputSchemas = message.outputSchemas;
    }
    if (message.overwriteOutputFile !== undefined) {
      obj.overwriteOutputFile = message.overwriteOutputFile;
    }
    if (message.password !== undefined) {
      obj.password = message.password;
    }
    if (message.replaceIfExistsTypes !== undefined) {
      obj.replaceIfExistsTypes = message.replaceIfExistsTypes;
    }
    if (message.runOnChangeTypes !== undefined) {
      obj.runOnChangeTypes = message.runOnChangeTypes;
    }
    if (message.schemas !== undefined) {
      obj.schemas = message.schemas;
    }
    if (message.skipObjectSorting !== undefined) {
      obj.skipObjectSorting = message.skipObjectSorting;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.useOrReplaceOption !== undefined) {
      obj.useOrReplaceOption = message.useOrReplaceOption;
    }
    if (message.username !== undefined) {
      obj.username = message.username;
    }
    if (message.globalOptions !== undefined) {
      obj.globalOptions = GlobalOptions.toJSON(message.globalOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenerateChangelogRequest>, I>>(base?: I): GenerateChangelogRequest {
    return GenerateChangelogRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenerateChangelogRequest>, I>>(object: I): GenerateChangelogRequest {
    const message = createBaseGenerateChangelogRequest();
    message.author = object.author ?? undefined;
    message.changelogFile = object.changelogFile ?? undefined;
    message.contextFilter = object.contextFilter ?? undefined;
    message.dataOutputDirectory = object.dataOutputDirectory ?? undefined;
    message.defaultCatalogName = object.defaultCatalogName ?? undefined;
    message.defaultSchemaName = object.defaultSchemaName ?? undefined;
    message.diffTypes = object.diffTypes ?? undefined;
    message.driver = object.driver ?? undefined;
    message.driverPropertiesFile = object.driverPropertiesFile ?? undefined;
    message.excludeObjects = object.excludeObjects ?? undefined;
    message.includeCatalog = object.includeCatalog ?? undefined;
    message.includeObjects = object.includeObjects ?? undefined;
    message.includeSchema = object.includeSchema ?? undefined;
    message.includeTablespace = object.includeTablespace ?? undefined;
    message.labelFilter = object.labelFilter ?? undefined;
    message.outputSchemas = object.outputSchemas ?? undefined;
    message.overwriteOutputFile = object.overwriteOutputFile ?? undefined;
    message.password = object.password ?? undefined;
    message.replaceIfExistsTypes = object.replaceIfExistsTypes ?? undefined;
    message.runOnChangeTypes = object.runOnChangeTypes ?? undefined;
    message.schemas = object.schemas ?? undefined;
    message.skipObjectSorting = object.skipObjectSorting ?? undefined;
    message.url = object.url ?? "";
    message.useOrReplaceOption = object.useOrReplaceOption ?? undefined;
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

export interface GenerateChangelogService {
  execute(request: GenerateChangelogRequest): Promise<Response>;
}

export const GenerateChangelogServiceServiceName = "liquibase.GenerateChangelogService";
export class GenerateChangelogServiceClientImpl implements GenerateChangelogService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || GenerateChangelogServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: GenerateChangelogRequest): Promise<Response> {
    const data = GenerateChangelogRequest.encode(request).finish();
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
