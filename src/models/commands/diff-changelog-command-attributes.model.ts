export interface DiffChangelogCommandAttributes {
	/**
	 * Path to file where diff output will be saved
	 */
	outputFile?: string;
	/** Changeset contexts to generate */
	contextFilter?: string;
	/** Specifies the author for changesets in the generated changelog */
	author?: string;
	/** Types of objects to compare */
	diffTypes?: string;
	/** [PRO] Sets the return code for all drift types found in diff or diffchangelog operations. Options are 0, 1, 2, 3, 4 */
	driftSeverity?: number;
	/** [PRO] Sets the return code for "changed" type drift found in diff or diffchangelog operations. Options are 0, 1, 2, 3, 4 */
	driftSeverityChanged?: number;
	/** [PRO] Sets the return code for "missing" type drift found in diff or diffchangelog operations. Options are 0, 1, 2, 3, 4 */
	driftSeverityMissing?: number;
	/** [PRO] Sets the return code for "unexpected" type drift found in diff or diffchangelog operations. Options are 0, 1, 2, 3, 4 */
	driftSeverityUnexpected?: number;
	/** The JDBC driver class */
}
