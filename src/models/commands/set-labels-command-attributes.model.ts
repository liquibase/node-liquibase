export interface SetLabelsCommandAttributes {
  /** required* The root changelog file */
  changelogFile: string;
  /** The author of the changeset to modify */
  changesetAuthor?: string;
  /** The id of the changeset to modify */
  changesetId?: string;
  /** The changeset path */
  changesetPath?: string;
  /** Changeset contexts to match */
  contextFilter?: string;
  /** The database to filter by */
  dbms?: string;
  /** Replace the labels if true */
  forceReplace?: boolean;
  /** Changeset labels to match */
  labelFilter?: string;
  /** required* New label values */
  setAs: string;
}
