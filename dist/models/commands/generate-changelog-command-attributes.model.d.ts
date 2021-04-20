export interface GenerateChangeLogCommandAttributes {
    /**
     * Specifies the default database catalog to use.
     */
    defaultCatalogName?: string;
    /**
     * Specifies the default database schema to use.
     */
    defaultSchemaName?: string;
    /**
     * Specifies database schemas you want to include.
     */
    schemas?: Array<string>;
    /**
     * Uses the names as schemaName instead of the real names on the generateChangeLog command.
     */
    outputSchemaAs?: Array<string>;
    /**
     * Includes the catalog in a generated changesets if the value is true. The default value is false.
     */
    includeCatalog: boolean;
    /**
     * Includes the schema in a generated changesets if the value is true. The default value is false.
     */
    includeSchema?: boolean;
    /**
     * Includes the tablespace of tables and indexes in a generated changesets if the value is true. The default value is false.
     */
    includeTablespace?: boolean;
    /**
     * Sends the data output as a CSV file in the given directory.
     */
    dataOutputDirectory?: string;
    /**
     * Includes a list of diff types in a changelog file expressed as a comma-separated list (without spaces)
     * from: catalog, tables, functions, views, columns, indexes, foreignkeys, primarykeys,
     * uniqueconstraints, data, storedprocedure, triggers, sequences.
     */
    diffTypes?: string;
}
