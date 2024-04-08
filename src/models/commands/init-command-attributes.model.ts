export interface InitCommandAttributes {
  /** Recursive copy files from the source directory */
  recursive?: boolean;
  /** Path to the directory where the project files will be created */
  source?: string;
  /** Source directory where the project files will be copied from */
  target?: string;
  /** Format of the project changelog sql|xml|json|yaml|yml */
  format?: string;
  /** For remote project locations, do not delete temporary project files */
  keepTempFiles?: boolean;
  /** File with default Liquibase properties */
  projectDefaultsFile?: string;
  /** Relative or fully qualified path to the directory where the project files will be created */
  projectDir?: string;
  /** Allow interactive prompts for init project */
  projectGuide?: string;
  /** Network address to bind to */
  bindAddress?: string;
  /** Port to run h2 database on */
  dbPort?: number;
  /** Whether to open a browser to the database's web interface */
  launchBrowser?: boolean;
  /** Password to use for created h2 user */
  password?: string;
  /** Username to create in h2 */
  username?: string;
  /** Port to run h2's web interface on */
  webPort?: number;
}
