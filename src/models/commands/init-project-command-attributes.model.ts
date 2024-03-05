export interface InitProjectCommandAttributes {
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
}
