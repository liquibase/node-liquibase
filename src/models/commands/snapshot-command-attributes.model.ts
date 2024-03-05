export interface SnapshotCommandAttributes {
  /** The schemas to snapshot */
  schemas?: string | undefined;
  /** [PRO] Types of objects to snapshot: Catalog, CheckConstraint, Column, DatabasePackage, DatabasePackageBody, ForeignKey, Function, Index, PrimaryKey, Schema, Sequence, StoredProcedure, Synonym, Table, Trigger, UniqueConstraint, View */
  snapshotFilters?: string | undefined;
  /** Output format to use (JSON, YAML, or TXT) */
  snapshotFormat?: string | undefined;
}
