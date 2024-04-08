export interface ExecuteSqlCommandAttributes {
  /** Delimiter to use when executing SQL script */
  delimiter?: string;
  /** SQL string to execute */
  sql?: string;
  /** SQL script to execute */
  sqlFile?: string;
}
