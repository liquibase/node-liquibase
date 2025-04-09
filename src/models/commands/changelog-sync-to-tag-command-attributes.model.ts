export interface ChangelogSyncToTagCommandAttributes {
	/**
	 * The tag you can add to changesets to determine which changesets in the changelog to evaluate based on their tags.
	 */
	tag: string;
	/** required* The root changelog file */
	changelogFile: string;
	/** Context string to use for filtering */
	contextFilter?: string;
}
