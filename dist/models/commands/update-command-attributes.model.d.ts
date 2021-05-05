export interface UpdateCommandAttributes {
    /**
     * Tags you can add to changesets to determine which changesets in the changelog to evaluate based on their labels
     */
    labels?: string;
    /**
     * Expressions you can add to changesets to determine which changesets in the changelog to evaluate based on their contexts
     */
    contexts?: string;
<<<<<<< HEAD
=======
    /**
     * Specifies in what Schema the Liquibase DATABASECHANGELOG and DATABASECHANGELOGLOCK tables will be managed
     */
    liquibaseSchemaName?: string;
    /**
     * For MSSQL only: Specifies in what Catalog the Liquibase DATABASECHANGELOG and DATABASECHANGELOGLOCK tables will be managed
     */
    liquibaseCatalogName?: string;
>>>>>>> 9a30a6c0331722a4bd54a1749a85aafb9e3baa64
}
