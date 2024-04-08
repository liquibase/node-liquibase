export interface SnapshotReferenceCommandAttributes {
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
}
