export interface LiquibaseConfig {
    /**
   * Absolute path to your Liquibase executable.
   */
    liquibase?: string;
    /**
   * Absolute path to your Liquibase executable.
   */
    liquibasePropertiesFile?: string;
    /**
   * Absolute path to your Change Log File
   */
    changeLogFile: string;
    /**
   * JDBC connection string
   */
    url: string;
    /**
   * username
   */
    username: string;
    /**
   * password
   */
    password: string;
    /**
   * Your Liquibase Pro License key
   */
    liquibaseProLicenseKey?: string;
    /**
   * Absolute path to your JDBC driver jar file
   */
    classpath: string;
    /**
     * JDBC connection string for ref database
     */
    referenceUrl?: string;
    /**
     * username for ref database
     */
    referenceUsername?: string;
    /**
     * password for ref database
     */
    referencePassword?: string;
}
