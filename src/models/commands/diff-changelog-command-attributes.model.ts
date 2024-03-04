export interface DiffChangelogCommandAttributes {
  /**
   * Path to file where diff output will be saved
   */
  outputFile?: string;
  /** Changeset contexts to generate */
  contextFilter?: string | undefined;
  /** Specifies the author for changesets in the generated changelog */
  author?: string | undefined;
  /** Types of objects to compare */
  diffTypes?: string | undefined;
  /** [PRO] Sets the return code for all drift types found in diff or diffchangelog operations. Options are 0, 1, 2, 3, 4 */
  driftSeverity?: number | undefined;
  /** [PRO] Sets the return code for "changed" type drift found in diff or diffchangelog operations. Options are 0, 1, 2, 3, 4 */
  driftSeverityChanged?: number | undefined;
  /** [PRO] Sets the return code for "missing" type drift found in diff or diffchangelog operations. Options are 0, 1, 2, 3, 4 */
  driftSeverityMissing?: number | undefined;
  /** [PRO] Sets the return code for "unexpected" type drift found in diff or diffchangelog operations. Options are 0, 1, 2, 3, 4 */
  driftSeverityUnexpected?: number | undefined;
  /** The JDBC driver class */
}
