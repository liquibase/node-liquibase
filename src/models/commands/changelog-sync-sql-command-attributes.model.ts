export interface ChangelogSyncSqlCommandAttributes {
  /** required* The root changelog file */
  changelogFile: string;
  /** Context string to use for filtering */
  contextFilter?: string | undefined;
  /** Control whether names of objects in the default catalog are fully qualified or not. If true they are. If false, only objects outside the default catalog are fully qualified */
  outputDefaultCatalog?: boolean | undefined;
  /** Control whether names of objects in the default schema are fully qualified or not. If true they are. If false, only objects outside the default schema are fully qualified */
  outputDefaultSchema?: boolean | undefined;
}
