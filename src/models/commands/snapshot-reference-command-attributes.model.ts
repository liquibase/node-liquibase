export interface SnapshotReferenceCommandAttributes {
  /** The default catalog name to use for the reference database connection */
  referenceDefaultCatalogName?: string | undefined;
  /** The default schema name to use for the reference database connection */
  referenceDefaultSchemaName?: string | undefined;
  /** The JDBC driver class for the reference database */
  referenceDriver?: string | undefined;
  /** The JDBC driver properties file for the reference database */
  referenceDriverPropertiesFile?: string | undefined;
  /** Reference catalog to use for Liquibase objects */
  referenceLiquibaseCatalogName?: string | undefined;
  /** Reference schema to use for Liquibase objects */
  referenceLiquibaseSchemaName?: string | undefined;
  /** The reference database password */
  referencePassword?: string | undefined;
  /** required* The JDBC reference database connection URL */
  referenceUrl: string;
  /** The reference database username */
  referenceUsername?: string | undefined;
  /** Output format to use (JSON or YAML) */
  snapshotFormat?: string | undefined;
}
