export interface SetLabelsCommandAttributes {
  /** required* The root changelog file */
  changelogFile: string;
  /** The author of the changeset to modify */
  changesetAuthor?: string | undefined;
  /** The id of the changeset to modify */
  changesetId?: string | undefined;
  /** The changeset path */
  changesetPath?: string | undefined;
  /** Changeset contexts to match */
  contextFilter?: string | undefined;
  /** The database to filter by */
  dbms?: string | undefined;
  /** Replace the labels if true */
  forceReplace?: boolean | undefined;
  /** Changeset labels to match */
  labelFilter?: string | undefined;
  /** required* New label values */
  setAs: string;
}
