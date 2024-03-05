export interface InitCopyCommandAttributes {
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
}
