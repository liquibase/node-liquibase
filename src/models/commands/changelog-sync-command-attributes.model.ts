export interface ChangelogSyncCommandAttributes {
  /** required* The root changelog file */
  changelogFile: string;
  /** Context string to use for filtering */
  contextFilter?: string;
}
