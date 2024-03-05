export interface UpdateOneChangesetCommandAttributes {
  /** Fully-qualified class which specifies a ChangeExecListener */
  changeExecListenerClass?:
    | string
    | undefined;
  /** Path to a properties file for the ChangeExecListenerClass */
  changeExecListenerPropertiesFile?:
    | string
    | undefined;
  /** required* The root changelog file */
  changelogFile: string;
  /** required* Author of the changeset to execute */
  changesetAuthor: string;
  /** required* Id of the changeset to execute */
  changesetId: string;
  /** required* Path to the changeset to execute */
  changesetPath: string;
  /** Context string to use for filtering */
  contextFilter?:
    | string
    | undefined;
  /** Label expression to use for filtering */
  labelFilter?:
    | string
    | undefined;
}
