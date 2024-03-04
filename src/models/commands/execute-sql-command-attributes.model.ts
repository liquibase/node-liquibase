export interface ExecuteSqlCommandAttributes {
  /** Delimiter to use when executing SQL script */
  delimiter?: string | undefined;
  /** SQL string to execute */
  sql?: string | undefined;
  /** SQL script to execute */
  sqlFile?: string | undefined;
}
