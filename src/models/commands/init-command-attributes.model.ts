export interface InitCommandAttributes {
  /** Recursive copy files from the source directory */
  recursive?:
  | boolean
  | undefined;
  /** Path to the directory where the project files will be created */
  source?:
  | string
  | undefined;
  /** Source directory where the project files will be copied from */
  target?: string | undefined;
  /** Format of the project changelog sql|xml|json|yaml|yml */
  format?:
  | string
  | undefined;
  /** For remote project locations, do not delete temporary project files */
  keepTempFiles?:
  | boolean
  | undefined;
  /** File with default Liquibase properties */
  projectDefaultsFile?:
  | string
  | undefined;
  /** Relative or fully qualified path to the directory where the project files will be created */
  projectDir?:
  | string
  | undefined;
  /** Allow interactive prompts for init project */
  projectGuide?:
  | string
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
