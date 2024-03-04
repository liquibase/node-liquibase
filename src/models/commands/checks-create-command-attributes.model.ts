export interface ChecksCreateCommandAttributes {
  /** required* One or more comma-separated relative path(s) to the checks-settings files (or to a directory of files) to be bundled into the checks-package. If the value is a directory, all files will be added to the 'checks-package-name' object, but not recursively. */
  packageContents: string;
  /** Relative or fully qualified path and filename of the checks-package file to be created */
  packageFile?: string | undefined;
  /** required* The literal name of the checks-package object to be created inside the checks-package yaml file */
  packageName: string;
}
