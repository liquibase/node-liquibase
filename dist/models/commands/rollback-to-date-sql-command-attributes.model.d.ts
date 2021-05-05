export interface RollbackToDateSQLCommandAttributes {
    /**
     * The date and time your database rolls back to.
     * The date format is YYYY-MM-DD HH:MM:SS or YYYY-MM-DD'T'HH:MM:SS, however, it is possible to indicate the date or time only.
     */
    date: string;
}
