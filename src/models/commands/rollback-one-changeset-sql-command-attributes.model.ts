export interface RollbackOneChangesetSQLCommandAttributes {
  /** Fully-qualified class which specifies a ChangeExecListener */
  changeExecListenerClass?: string | undefined;
  /** Path to a properties file for the ChangeExecListenerClass */
  changeExecListenerPropertiesFile?: string | undefined;
  /** required* The root changelog file */
  changelogFile: string;
  /** required* The author of the changeset to rollback */
  changesetAuthor: string;
  /** required* The id of the changeset to rollback */
  changesetId: string;
  /** required* The target database password */
  changesetPath: string;
  /** Context string to use for filtering */
  contextFilter?: string | undefined;
  /** A required safety flag to indicate you intend to use this feature */
  force?: boolean | undefined;
  /** Label expression to use for filtering */
  labelFilter?: string | undefined;
  /** The path to the script to use to perform the rollback */
  rollbackScript?: string | undefined;
}
