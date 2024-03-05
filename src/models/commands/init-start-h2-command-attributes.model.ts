export interface InitStartH2CommandAttributes {
  /** Network address to bind to */
  bindAddress?:
  | string
  | undefined;
  /** Port to run h2 database on */
  dbPort?:
  | number
  | undefined;
  /** Whether to open a browser to the database's web interface */
  launchBrowser?:
  | boolean
  | undefined;
  /** Password to use for created h2 user */
  password?:
  | string
  | undefined;
  /** Username to create in h2 */
  username?:
  | string
  | undefined;
  /** Port to run h2's web interface on */
  webPort?: number | undefined;
}
