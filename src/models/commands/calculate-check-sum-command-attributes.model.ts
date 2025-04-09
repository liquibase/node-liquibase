export interface CalculateCheckSumCommandAttributes {
	/**
	 * Tag defined as a number or a descriptive name that is unique to each changeset.
	 * Requires the following format for the calculateCheckSum <id> command: filepath::id::author.
	 */
	changesetAuthor?: string;
	changesetId?: string;
	changesetIdentifier?: string;
	changesetPath?: string;
}
