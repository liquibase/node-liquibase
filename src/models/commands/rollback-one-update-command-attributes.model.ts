export interface RollbackOneUpdateCommandAttributes {
	/** Fully-qualified class which specifies a ChangeExecListener */
	changeExecListenerClass?: string;
	/** Path to a properties file for the ChangeExecListenerClass */
	changeExecListenerPropertiesFile?: string;
	/** required* The root changelog file */
	changelogFile: string;
	/** Context string to use for filtering */
	contextFilter?: string;
	/** The deployment ID of the update to rollback */
	deploymentId?: string;
	/** A required safety flag to indicate you intend to use this feature */
	force?: boolean;
	/** Label expression to use for filtering */
	labelFilter?: string;
	/** The path to the script to use to perform the rollback */
	rollbackScript?: string;
}
