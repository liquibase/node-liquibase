export interface GenerateChangeLogCommandAttributes {
  /** Specifies the author for changesets in the generated changelog */
  author?: string | undefined;
  /** Changelog file to write results */
  changelogFile?: string | undefined;
  /** Changeset contexts to generate */
  contextFilter?: string | undefined;
  /** Directory to write table data to */
  dataOutputDirectory?: string | undefined;
  /** The default catalog name to use for the database connection */
  defaultCatalogName?: string | undefined;
  /** The default schema name to use for the database connection */
  defaultSchemaName?: string | undefined;
  /** Types of objects to compare */
  diffTypes?: string | undefined;
  /** Objects to exclude from diff */
  excludeObjects?: string | undefined;
  /** If true, the catalog will be included in generated changeSets. Defaults to false. */
  includeCatalog?: boolean | undefined;
  /** Objects to include in diff */
  includeObjects?: string | undefined;
  /** If true, the schema will be included in generated changeSets. Defaults to false. */
  includeSchema?: boolean | undefined;
  /** Include the tablespace attribute in the changelog. Defaults to false. */
  includeTablespace?: boolean | undefined;
  /** Changeset labels to generate */
  labelFilter?: string | undefined;
  /** Output schemas names. This is a CSV list. */
  outputSchemas?: string | undefined;
  /** Flag to allow overwriting of output changelog file. Default: false */
  overwriteOutputFile?: boolean | undefined;
  /** Sets replaceIfExists="true" for changes of these types (supported types: createFunction, createPackage, createPackageBody, createProcedure, createTrigger, createView) */
  replaceIfExistsTypes?: string | undefined;
  /** Sets runOnChange="true" for changesets containing solely changes of these types (e. g. createView, createProcedure, ...). */
  runOnChangeTypes?: string | undefined;
  /** Schemas to include in diff */
  schemas?: string | undefined;
  /** If true, will add 'OR REPLACE' option to the create view change object */
  useOrReplaceOption?: boolean | undefined;
}
