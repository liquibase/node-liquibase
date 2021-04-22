export interface SyncHubCommandAttributes {
    /**
     * Specifies the connection needed for the syncHub command to synchronize the local DATABASECHANGELOG table with Liquibase Hub.
     */
    hubConnectionId?: string;
}
