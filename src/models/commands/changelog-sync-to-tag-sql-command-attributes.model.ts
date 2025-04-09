export interface ChangelogSyncToTagSQLCommandAttributes {
	/**
	 * The tag you can add to changesets to determine which changesets in the changelog to evaluate based on their tags.
	 */
	tag: string;
	/** required* The root changelog file */
	changelogFile: string;
	/** Context string to use for filtering */
	contextFilter?: string;
	/** Control whether names of objects in the default catalog are fully qualified or not. If true they are. If false, only objects outside the default catalog are fully qualified */
	outputDefaultCatalog?: boolean;
	/** Control whether names of objects in the default schema are fully qualified or not. If true they are. If false, only objects outside the default schema are fully qualified */
	outputDefaultSchema?: boolean;
}
