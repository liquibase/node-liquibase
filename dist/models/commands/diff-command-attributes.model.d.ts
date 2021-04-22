export interface DiffCommandAttributes {
    /**
     * Path to file where diff output will be saved
     */
    outputFile?: string;
    /**
     * Liquibase allows you to use diffType attribute to filter the types of objects you want to compare.
     * Multiple filters can be added to the attribute as a comma-separated list.
     * If no diffTypes are specified, all objects are considered.
     */
    diffTypes?: string;
    /**
     * Starting with Liquibase 3.9.0, you can automate drift detection at scale in your database schemas
     * 	with the Liquibase Pro machine-readable JSON diff output.
     * The diff --format=json command is a Liquibase Pro extension to the existing diff command.
     */
    format?: string;
}
