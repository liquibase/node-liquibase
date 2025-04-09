export interface SnapshotCommandAttributes {
	/** The schemas to snapshot */
	schemas?: string;
	/** [PRO] Types of objects to snapshot: Catalog, CheckConstraint, Column, DatabasePackage, DatabasePackageBody, ForeignKey, Function, Index, PrimaryKey, Schema, Sequence, StoredProcedure, Synonym, Table, Trigger, UniqueConstraint, View */
	snapshotFilters?: string;
	/** Output format to use (JSON, YAML, or TXT) */
	snapshotFormat?: string;
}
