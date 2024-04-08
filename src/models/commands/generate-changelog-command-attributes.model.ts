export interface GenerateChangeLogCommandAttributes {
  /** Specifies the author for changesets in the generated changelog */
  author?: string;
  /** Changelog file to write results */
  changelogFile?: string;
  /** Changeset contexts to generate */
  contextFilter?: string;
  /** Directory to write table data to */
  dataOutputDirectory?: string;
  /** The default catalog name to use for the database connection */
  defaultCatalogName?: string;
  /** The default schema name to use for the database connection */
  defaultSchemaName?: string;
  /** Types of objects to compare */
  diffTypes?: string;
  /** Objects to exclude from diff */
  excludeObjects?: string;
  /** If true, the catalog will be included in generated changeSets. Defaults to false. */
  includeCatalog?: boolean;
  /** Objects to include in diff */
  includeObjects?: string;
  /** If true, the schema will be included in generated changeSets. Defaults to false. */
  includeSchema?: boolean;
  /** Include the tablespace attribute in the changelog. Defaults to false. */
  includeTablespace?: boolean;
  /** Changeset labels to generate */
  labelFilter?: string;
  /** Output schemas names. This is a CSV list. */
  outputSchemas?: string;
  /** Flag to allow overwriting of output changelog file. Default: false */
  overwriteOutputFile?: boolean;
  /** Sets replaceIfExists="true" for changes of these types (supported types: createFunction, createPackage, createPackageBody, createProcedure, createTrigger, createView) */
  replaceIfExistsTypes?: string;
  /** Sets runOnChange="true" for changesets containing solely changes of these types (e. g. createView, createProcedure, ...). */
  runOnChangeTypes?: string;
  /** Schemas to include in diff */
  schemas?: string;
  /** If true, will add 'OR REPLACE' option to the create view change object */
  useOrReplaceOption?: boolean;
}
