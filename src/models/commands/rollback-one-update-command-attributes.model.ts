export interface RollbackOneUpdateCommandAttributes {
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
  /** Context string to use for filtering */
  contextFilter?:
    | string
    | undefined;
  /** The deployment ID of the update to rollback */
  deploymentId?:
    | string
    | undefined;
  /** A required safety flag to indicate you intend to use this feature */
  force?:
    | boolean
    | undefined;
  /** Label expression to use for filtering */
  labelFilter?:
    | string
    | undefined;
  /** The path to the script to use to perform the rollback */
  rollbackScript?:
    | string
    | undefined;
}
