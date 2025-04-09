export interface RollbackOneChangesetCommandAttributes {
	/** Fully-qualified class which specifies a ChangeExecListener */
	changeExecListenerClass?: string;
	/** Path to a properties file for the ChangeExecListenerClass */
	changeExecListenerPropertiesFile?: string;
	/** required* The root changelog file */
	changelogFile: string;
	/** required* The author of the changeset to rollback */
	changesetAuthor: string;
	/** required* The id of the changeset to rollback */
	changesetId: string;
	/** required* The target database password */
	changesetPath: string;
	/** Context string to use for filtering */
	contextFilter?: string;
	/** A required safety flag to indicate you intend to use this feature */
	force?: boolean;
	/** Label expression to use for filtering */
	labelFilter?: string;
	/** The path to the script to use to perform the rollback */
	rollbackScript?: string;
}
