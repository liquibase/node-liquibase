'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var child_process = require('child_process');
var path = require('path');
var fs = require('fs');

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var CommandHandler = /*#__PURE__*/function () {
  function CommandHandler(config) {
    this.logger = new Logger(config);
  }

  var _proto = CommandHandler.prototype;

  _proto.spawnChildProcess = function spawnChildProcess(commandString) {
    var _this = this;

    this.logger.log("Running " + commandString + "...");
    return new Promise(function (resolve, reject) {
      child_process.exec(commandString, function (error, stdout, stderr) {
        _this.logger.log("\n " + stdout);

        if (error) {
          _this.logger.error("\n " + stderr); // error.stderr = stderr;


          return reject(error);
        }

        resolve(stdout);
      });
    });
  };

  return CommandHandler;
}();

var FileHelper = /*#__PURE__*/function () {
  function FileHelper() {}

  FileHelper.readFileContent = function readFileContent(absolutePathToPropertyFile) {
    return fs.readFileSync(absolutePathToPropertyFile, {
      encoding: 'utf-8'
    });
  };

  _createClass(FileHelper, null, [{
    key: "bundledLiquibasePath",
    get: function get() {

      return this.bundledLiquibasePathForExternalConsumers;
    }
  }, {
    key: "bundledLiquibasePathForExternalConsumers",
    get: function get() {
      var liquibaseExecutablePath = path.join(__dirname, 'liquibase/liquibase');
      return liquibaseExecutablePath;
    }
  }, {
    key: "bundledLiquibasePathForInternalConsumers",
    get: function get() {
      var liquibaseExecutablePath = path.join(__dirname, '../../bin/liquibase/liquibase');
      return liquibaseExecutablePath;
    }
  }]);

  return FileHelper;
}();

(function (LiquibaseCommands) {
  LiquibaseCommands["CalculateCheckSum"] = "calculateCheckSum";
  LiquibaseCommands["ChangelogSync"] = "changelogSync";
  LiquibaseCommands["ChangelogSyncSql"] = "changelogSyncSQL";
  LiquibaseCommands["ChangelogSyncToTag"] = "changelogSyncToTag";
  LiquibaseCommands["ChangelogSyncToTagSql"] = "changelogSyncToTagSQL";
  LiquibaseCommands["ClearCheckSums"] = "clearCheckSums";
  LiquibaseCommands["DbDoc"] = "dbDoc";
  LiquibaseCommands["DeactivateChangeLog"] = "deactivateChangeLog";
  LiquibaseCommands["Diff"] = "diff";
  LiquibaseCommands["DiffChangeLog"] = "diffChangeLog";
  LiquibaseCommands["DropAll"] = "dropAll";
  LiquibaseCommands["FutureRollbackSql"] = "futureRollbackSQL";
  LiquibaseCommands["FutureRollbackCountSql"] = "futureRollbackCountSQL";
  LiquibaseCommands["GenerateChangeLog"] = "generateChangeLog";
  LiquibaseCommands["Help"] = "help";
  LiquibaseCommands["History"] = "history";
  LiquibaseCommands["ListLocks"] = "listLocks";
  LiquibaseCommands["MarkNextChangeSetRan"] = "markNextChangeSetRan";
  LiquibaseCommands["MarkNextChangeSetRanSql"] = "markNextChangeSetRanSQL";
  LiquibaseCommands["RegisterChangeLog"] = "registerChangeLog";
  LiquibaseCommands["ReleaseLocks"] = "releaseLocks";
  LiquibaseCommands["Rollback"] = "rollback";
  LiquibaseCommands["RollbackCount"] = "rollbackCount";
  LiquibaseCommands["RollbackCountSql"] = "rollbackCountSQL";
  LiquibaseCommands["RollbackSql"] = "rollbackSQL";
  LiquibaseCommands["RollbackToDate"] = "rollbackToDate";
  LiquibaseCommands["RollbackToDateSql"] = "rollbackToDateSQL";
  LiquibaseCommands["Snapshot"] = "snapshot";
  LiquibaseCommands["SnapshotReference"] = "snapshotReference";
  LiquibaseCommands["Status"] = "status";
  LiquibaseCommands["SyncHub"] = "syncHub";
  LiquibaseCommands["Tag"] = "tag";
  LiquibaseCommands["TagExists"] = "tagExists";
  LiquibaseCommands["UnexpectedChangeSets"] = "unexpectedChangeSets";
  LiquibaseCommands["Update"] = "update";
  LiquibaseCommands["UpdateSql"] = "updateSQL";
  LiquibaseCommands["UpdateCount"] = "updateCount";
  LiquibaseCommands["UpdateCountSql"] = "updateCountSQL";
  LiquibaseCommands["UpdateTestingRollback"] = "updateTestingRollback";
  LiquibaseCommands["UpdateToTag"] = "updateToTag";
  LiquibaseCommands["UpdateToTagSql"] = "updateToTagSQL";
  LiquibaseCommands["Validate"] = "validate";
})(exports.LiquibaseCommands || (exports.LiquibaseCommands = {}));

(function (LiquibaseLogLevels) {
  LiquibaseLogLevels["Off"] = "off";
  LiquibaseLogLevels["Severe"] = "severe";
  LiquibaseLogLevels["Warning"] = "warning";
  LiquibaseLogLevels["Info"] = "info";
  LiquibaseLogLevels["Debug"] = "debug";
})(exports.LiquibaseLogLevels || (exports.LiquibaseLogLevels = {}));

var MSSQL_DEFAULT_CONFIG = {
  url: 'jdbc:sqlserver://<IP_OR_HOSTNAME>:;database=sqlserver;',
  changeLogFile: '/examples/change-log-examples/mssql/changelog.xml',
  username: 'sa',
  password: '',
  classpath: /*#__PURE__*/path.join(__dirname, '../../../drivers/mssql-jdbc-7.4.1.jre8.jar')
};

var POSTGRESQL_DEFAULT_CONFIG = {
  changeLogFile: '/node_modules/examples/change-log-examples/postgreSQL/changelog.xml',
  url: 'jdbc:postgresql://localhost:5432/postgres',
  username: 'postgres',
  password: '',
  classpath: /*#__PURE__*/path.join(__dirname, 'drivers/postgresql-42.2.8.jar')
};

var LIQUIBASE_LABEL = '[NODE-LIQUIBASE]';

var Logger = /*#__PURE__*/function () {
  function Logger(config) {
    this.config = config;
  }

  var _proto = Logger.prototype;

  _proto.log = function log(message) {
    return this._log(message);
  };

  _proto.warn = function warn(message) {
    return this._warn(message);
  };

  _proto.error = function error(message) {
    return this._error(message);
  };

  _proto._log = function _log(message) {
    var levels = [exports.LiquibaseLogLevels.Debug, exports.LiquibaseLogLevels.Info, exports.LiquibaseLogLevels.Severe, exports.LiquibaseLogLevels.Warning];

    if (!this.shouldOperate(levels)) {
      return;
    }

    return console.log(LIQUIBASE_LABEL + " " + message);
  };

  _proto._warn = function _warn(message) {
    var levels = [exports.LiquibaseLogLevels.Severe, exports.LiquibaseLogLevels.Warning];

    if (!this.shouldOperate(levels)) {
      return;
    }

    return console.warn('\x1b[33m%s\x1b[0m', LIQUIBASE_LABEL + " " + message);
  };

  _proto._error = function _error(message) {
    var levels = [exports.LiquibaseLogLevels.Severe];

    if (!this.shouldOperate(levels)) {
      return;
    }

    return console.error('\x1b[31m%s\x1b[0m', LIQUIBASE_LABEL + " " + message);
  };

  _proto.shouldOperate = function shouldOperate(acceptableLogLevels) {
    return acceptableLogLevels.indexOf(this.logLevel) > -1;
  };

  _createClass(Logger, [{
    key: "logLevel",
    get: function get() {
      var _this$config;

      return ((_this$config = this.config) == null ? void 0 : _this$config.logLevel) || exports.LiquibaseLogLevels.Severe;
    }
  }]);

  return Logger;
}();

var CommandsWithPositionalArguments;

(function (CommandsWithPositionalArguments) {
  CommandsWithPositionalArguments["futureRollbackCount"] = "futureRollbackCount";
  CommandsWithPositionalArguments["futureRollbackFromTag"] = "futureRollbackFromTag";
  CommandsWithPositionalArguments["futureRollbackSQl"] = "futureRollbackSQl";
  CommandsWithPositionalArguments["rollback"] = "rollback";
  CommandsWithPositionalArguments["rollbackCount"] = "rollbackCount";
  CommandsWithPositionalArguments["rollbackCountSQL"] = "rollbackCountSQL";
  CommandsWithPositionalArguments["rollbackDate"] = "rollbackDate";
  CommandsWithPositionalArguments["rollbackSql"] = "rollbackSql";
  CommandsWithPositionalArguments["rollbackToDate"] = "rollbackToDate";
  CommandsWithPositionalArguments["rollbackToDateSQL"] = "rollbackToDateSQL";
  CommandsWithPositionalArguments["tag"] = "tag";
})(CommandsWithPositionalArguments || (CommandsWithPositionalArguments = {}));

var Liquibase = /*#__PURE__*/function () {
  /**
   * @description Returns an instance of a lightweight Node wrapper for Liquibase.
   *
   * @param config Configuration for an instance of `Liquibase`
   *
   * * @example
   * ```typescript
   * import {
   * 	LiquibaseConfig,
   * 	Liquibase,
   * 	POSTGRESQL_DEFAULT_CONFIG,
   * } from 'node-liquibase';
   *
   * const myConfig: LiquibaseConfig = {
   * 	...POSTGRESQL_DEFAULT_CONFIG,
   * 	url: 'jdbc:postgresql://localhost:5432/node_liquibase_testing',
   * 	username: 'yourusername',
   * 	password: 'yoursecurepassword',
   * };
   * const instance = new Liquibase(myConfig);
   *
   * async function doEet() {
   * 	await instance.status();
   * 	// await instance.update();
   * 	// await instance.dropAll();
   * }
   *
   * doEet();
   * ```
   */
  function Liquibase(config) {
    this.config = config;
    this.mergeConfigWithDefaults(config);
    this.commandHandler = new CommandHandler(this.config);
  }
  /**
   * The `update` command deploys any changes that are in the changelog file and that have not been deployed to your database yet.
   *
   * @param params Arguments/Attributes for the command
   *
   * @description The `update` command is typically used to apply database changes that are specified in the changelog file to your database.
   * When you run the `update` command, Liquibase sequentially reads changesets in the changelog file, then it compares the unique identifiers of id, author, and path to filename to the values stored in the DATABASECHANGELOG table.
   * - If the unique identifiers do not exist, Liquibase will apply the changeset to the database
   * - If the unique identifiers exist, the MD5Sum of the changeset is compared to the one in the database
   * - If they are different, Liquibase will produce an error message that someone has changed it unexpectedly. However, if the status of the runOnChange or runAlways changeset attribute is set to TRUE, Liquibase will re-apply the changeset
   *
   * {@link https://docs.liquibase.com/commands/community/update.html Documentation}
   */


  var _proto = Liquibase.prototype;

  _proto.update = function update(params) {
    return this.run(exports.LiquibaseCommands.Update, params);
  }
  /**
   * The `updateSQL` command is a helper command that allows you to inspect the SQL Liquibase will run while using the `update` command.
   *
   * @param params Arguments/Attributes for the command
   *
   * @description The `updateSQL` command is used when you want to inspect the raw SQL before running the `update` command, so you can correct any issues that may arise before running the command. Liquibase uses the raw SQL to apply database changes you have added to the changelog file.
   *
   * {@link https://docs.liquibase.com/commands/community/updatesql.html Documentation}
   */
  ;

  _proto.updateSQL = function updateSQL(params) {
    return this.run(exports.LiquibaseCommands.UpdateSql, params);
  }
  /**
   * The `updateCount <value>` command updates a specified number of changesets, where <value> is the number of changesets you want to update sequentially on your database.
   *
   * @param params Arguments/Attributes for the command
   *
   * @description The `updateCount <value>` command is mainly used when you want to apply changes and update changesets sequentially, starting with the changesets from the top of the changelog file until the number specified is reached.
   *
   * {@link https://docs.liquibase.com/commands/community/updatecount.html Documentation}
   */
  ;

  _proto.updateCount = function updateCount(params) {
    return this.run(exports.LiquibaseCommands.UpdateCount, params);
  }
  /**
   * The `updateCountSQL <value>` command is a helper command that inspects the SQL Liquibase will run while using the `updateCount <value>` command.
   *
   * @param params Arguments/Attributes for the command
   *
   * @description The `updateCountSQL <value>` command is used to inspect the raw SQL before running the `updateCount <value>` command, so you can correct any issues that may arise before running the command. Liquibase uses the raw SQL to apply a specified number of database changes you have added to the changelog file.
   *
   * {@link https://docs.liquibase.com/commands/community/updatecountsql.html Documentation}
   */
  ;

  _proto.updateCountSQL = function updateCountSQL(params) {
    return this.run(exports.LiquibaseCommands.UpdateCountSql, params);
  }
  /**
   * `updateTestingRollback` tests rollback support by deploying all pending changesets to the database, executes a rollback sequentially for the equal number of changesets that were deployed, and then runs the update again deploying all changesets to the database.
   *
   * @description `updateTestingRollback` is typically used when you want to test rollback functionality when deploying changesets in your changelog sequentially. Run `updateTestingRollback` only when all pending changelogs have been verified as ready to be deployed as you cannot specify changesets to exclude.
   * `updateTestingRollback` utilizes a multi-step operation and runs in sequential order:
   * - update changeset1; update changeset2; update changeset3
   * - rollback changeset3; rollback changeset2; rollback changeset1
   * - update changeset1; update changeset2 update changeset3
   *
   * {@link https://docs.liquibase.com/commands/community/updatetestingrollback.html Documentation}
   */
  ;

  _proto.updateTestingRollback = function updateTestingRollback() {
    return this.run(exports.LiquibaseCommands.UpdateTestingRollback);
  }
  /**
   * The `updateToTag <tag>` command applies sequential changes to your database from the newest changeset to the changeset with the tag you specified and applied earlier.
   *
   * @param params Arguments/Attributes for the command
   *
   * @description The `updateToTag <tag>` command is mainly used to apply changes sequentially, starting with the changesets from the top of the changelog file until the specified tag is reached. Even though there are other undeployed changes in the changelog, the command deploys only the changesets associated with a specific tag.
   *
   * {@link https://docs.liquibase.com/commands/community/updatetotag.html Documentation}
   */
  ;

  _proto.updateToTag = function updateToTag(params) {
    return this.run(exports.LiquibaseCommands.UpdateToTag, params);
  }
  /**
   * The `updateToTagSQL <tag>` command is a helper command that inspects the SQL Liquibase will run while using the `updateToTag <tag>` command.
   *
   * @param params Arguments/Attributes for the command
   *
   * @description The `updateToTagSQL <tag>` command is used to inspect the raw SQL before running the `updateToTag <tag>` command, so you can correct any issues that may arise before running the command. Liquibase uses the raw SQL to apply database changes you have added to the changelog file based on the tag specified.
   *
   * {@link https://docs.liquibase.com/commands/community/updatetotagsql.html Documentation}
   */
  ;

  _proto.updateToTagSQL = function updateToTagSQL(params) {
    return this.run(exports.LiquibaseCommands.UpdateToTagSql, params);
  }
  /**
   * The `validate` command checks and identifies any possible errors in a changelog that can cause the `update` command to fail.
   *
   * @description The `validate` command is mainly used when you want to detect if there are any issues with a changelog before running the `update` command.
   * With the help of the `validate` command, you can avoid a partial update, where only some changesets are applied due to an error in your changelog file.
   * Use the validate command to ensure that:
   * - The XML/YAML/JSON/formatted SQL is structured correctly
   * - Referenced files can be found
   * - There are no duplicated id/author/file combinations
   * - There aren't any checksum errors
   * - Any required or not allowed attributes are correct for your database
   *
   * {@link https://docs.liquibase.com/commands/community/validate.html Documentation}
   */
  ;

  _proto.validate = function validate() {
    return this.run(exports.LiquibaseCommands.Validate);
  }
  /**
   * The `calculateCheckSum <id>` command calculates and prints a checksum for the changeset with the specified id in the following format: filepath::id::author.
   *
   * @param params - Arguments/Attribute for the command.
   *
   * @description The `calculateCheckSum <id>` command is typically used to compute an MD5 checksum, which serves as a unique identifier for the changeset. As a result, you can see whether the changeset has been changed and whether it has to be deployed differently now.
   * When running the `calculateCheckSum <id>` command, the DATABASECHANGELOG table calculates an MD5 checksum for each entry based on the SQL script of the changeset. This checksum helps Liquibase detect differences between the changesets you want to deploy and the changesets that have already been run against the database.
   * The MD5SUM column in the DATABASECHANGELOG table contains a checksum of the changeset and any change made in the changeset will result in a different checksum.
   *
   * {@link https://docs.liquibase.com/commands/community/calculatechecksum.html Documentation}
   */
  ;

  _proto.calculateCheckSum = function calculateCheckSum(params) {
    return this.run(exports.LiquibaseCommands.CalculateCheckSum, params);
  }
  /**
   * The `rollback <tag>` command rolls back changes made to the database based on the specified tag.
   *
   * @param params - Arguments/Attribute for the command.
   *
   * @description The `rollback <tag>` command is typically used to revert all changes that were made to the database after the tag you specify.
   * When you run `rollback <tag>`, Liquibase will roll back sequentially all the deployed changes until it reaches the tag row in the DATABASECHANGELOG table.
   * For example, you can use the `rollback <tag>` command when you want to undo a series of changes made to your database related to a specific tag such as a numbered release.
   * If you have tags for release 1, release 2, and release 3, and need to make a correction in release 2, the `rollback <tag>` command will rollback release 3 first.
   *
   * {@link https://docs.liquibase.com/commands/community/rollbackbytag.html Documentation}
   */
  ;

  _proto.rollback = function rollback(params) {
    return this.run(exports.LiquibaseCommands.Rollback, params);
  }
  /**
   * The `rollbackSQL <tag>` is a helper command that produces the raw SQL Liquibase would run when using the rollback<tag> command.
   *
   * @param params - Arguments/Attribute for the command.
   *
   * @description The `rollbackSQL <tag>` command is typically used to inspect the SQL Liquibase uses to revert changes associated with a tag you specify when you run the `rollback <tag>` command.
   * It is best practice to use the `rollbackSQL <tag>` command before running the `rollback <tag>` command to ensure that you eliminate any potential risks.
   *
   * {@link https://docs.liquibase.com/commands/community/rollbacksqltag.html Documentation}
   */
  ;

  _proto.rollbackSQL = function rollbackSQL(params) {
    return this.run(exports.LiquibaseCommands.RollbackSql, params);
  }
  /**
   * The `rollbackCount <value>` command reverts a specified number of changesets, where <value> is the number of changesets you want to revert sequentially on your database.
   *
   * @param params - Arguments/Attribute for the command.
   *
   * @description The `rollbackCount <value>` command is used when you want to roll back changes sequentially,
   * starting with the most recent changes and working backward until the value specified is reached.
   *
   * {@link https://docs.liquibase.com/commands/community/rollbackcount.html Documentation}
   */
  ;

  _proto.rollbackCount = function rollbackCount(params) {
    return this.run(exports.LiquibaseCommands.RollbackCount, params);
  }
  /**
   * The `rollbackCountSQL <value>` command is a helper command that allows you to inspect the SQL Liquibase will run while using the `rollbackCount <value>` command.
   *
   * @param params - Arguments/Attribute for the command.
   *
   * @description The `rollbackCountSQL <value>` command is used when you want to inspect the raw SQL before running the `rollbackCount <value>` command,
   * so you can correct any issues that may arise before running the command.
   * Liquibase uses the raw SQL to revert any changesets between the most recent and the value you specified.
   *
   * {@link https://docs.liquibase.com/commands/community/rollbackcountsql.html Documentation}
   */
  ;

  _proto.rollbackCountSQL = function rollbackCountSQL(params) {
    return this.run(exports.LiquibaseCommands.RollbackCountSql, params);
  }
  /**
   * The `rollbackToDate` command reverts your database to the state it was in at the date and time you specify.
   *
   * @param params - Arguments/Attribute for the command.
   *
   * @description The `rollbackToDate` command is mainly used when you want to revert all changes made to your database from today's date to the date and time you specify.
   * The `rollbackToDate` command reverts those changesets to their previous state and allows you to target the date and time without impacting changes or deployments that came before the date and time you specified.
   *
   * {@link https://docs.liquibase.com/commands/community/rollbacktodate.html Documentation}
   */
  ;

  _proto.rollbackToDate = function rollbackToDate(params) {
    return this.run(exports.LiquibaseCommands.RollbackToDate, params);
  }
  /**
   * The `rollbackToDateSQL` command is a helper command that allows you to inspect the SQL Liquibase will run while using the rollbackToDate command.
   *
   * @param params - Arguments/Attribute for the command.
   *
   * @description The `rollbackToDateSQL` command is typically used when you want to inspect the raw SQL before running the rollbackToDate command,
   * so you can correct any issues that may arise before running the command.
   *
   * {@link https://docs.liquibase.com/commands/community/rollbacktodatesql.html Documentation}
   */
  ;

  _proto.rollbackToDateSQL = function rollbackToDateSQL(params) {
    return this.run(exports.LiquibaseCommands.RollbackToDateSql, params);
  }
  /**
   * The `snapshot` command captures the current state of the URL database, which is the target database.
   *
   * @param params - Arguments/Attribute for the command.
   *
   * @description The `snapshot` command is typically used when you want to see changes in your target database or keep a record of your current database state.
   * The `snapshot` command has two modes:
   * - When run without options, it gathers the current state of the database and shows a text-based version of the schema to STDOUT.
   * - When run with the --snapshotFormat=JSON option, it creates a JSON file that represents the current state of the URL database.
   * Alternatively, you can have a YAML-based output by using the --snapshotFormat=yaml attribute.
   *
   * {@link https://docs.liquibase.com/commands/community/snapshot.html Documentation}
   */
  ;

  _proto.snapshot = function snapshot(params) {
    return this.run(exports.LiquibaseCommands.Snapshot, params);
  }
  /**
   * The `snapshotReference` command captures the current state of the referenceURL database, which is the source database.
   *
   * @param params - Arguments/Attribute for the command.
   *
   * @description The `snapshotReference` command is typically used when you want to see changes in your source database or keep a record of your current database state.
   * The snapshot command has two modes:
   * - When run without options, it gathers the current state of the database and shows a text-based version of the schema to STDOUT.
   * - When run with the --snapshotFormat=JSON option, it creates a JSON file that represents the current state of the referenceURL database.
   * Alternatively, you can have a YAML-based output by using the --snapshotFormat=yaml attribute.
   *
   * {@link https://docs.liquibase.com/commands/community/snapshotreference.html Documentation}
   */
  ;

  _proto.snapshotReference = function snapshotReference(params) {
    return this.run(exports.LiquibaseCommands.SnapshotReference, params);
  }
  /**
   * The `status --verbose` command produces a list of pending changesets with additional information that includes the id, author, and file path name.
   * The `status --verbose` command does not modify the database.
   *
   * @description The `status --verbose` command is typically used when changesets were added to a changelog through source control by another developer.
   * The command confirms what has been deployed and what changesets are pending per author and corresponding ids.
   *
   * {@link https://docs.liquibase.com/commands/community/status-verbose.html Documentation}
   */
  ;

  _proto.status = function status() {
    return this.run(exports.LiquibaseCommands.Status);
  }
  /**
   * The `syncHub` command synchronizes the local DATABASECHANGELOG table with Liquibase Hub.
   *
   * @param params - Arguments/Attribute for the command.
   *
   * @description The `syncHub` command is typically used when you want to:
   * - Ensure that Liquibase Hub shows the latest results from your DATABASECHANGELOG table.
   * - Synchronize the DATABASECHANGELOG table of a new project that has pre-existing data in the DATABASECHANGELOG table.
   * - Synchronize your local data if update, rollback, changelogSync, or dropAll were run while Liquibase Hub was offline.
   * When you run the `syncHub` command, you will not see any operations added to the Project associated with your changelog.
   * syncHub cannot associate previous Liquibase operations, so you will not see any operations in Liquibase Hub.
   * You will only see changesets added to the changesets tab in your Liquibase Hub project.
   *
   * {@link https://docs.liquibase.com/commands/community/synchub.html Documentation}
   */
  ;

  _proto.syncHub = function syncHub(params) {
    return this.run(exports.LiquibaseCommands.SyncHub, params);
  }
  /**
   * The `tag <tag string>` command marks the current database state so you can roll back changes in the future.
   *
   * @param params - Arguments/Attribute for the command.
   *
   * @description The `tag <tag string>` command is typically used to mark the current database state, version, release, or any other information by adding the tag to the last row in the DATABASECHANGELOG table.
   * After setting the tag, you can use the `rollback <tag>` command to roll back all changes under this tag.
   *
   * {@link https://docs.liquibase.com/commands/community/tag.html Documentation}
   */
  ;

  _proto.tag = function tag(params) {
    return this.run(exports.LiquibaseCommands.Tag, params);
  }
  /**
   * The `tagExists <tag string>` command checks whether the tag you specify already exists in your database.
   *
   * @param params - Arguments/Attribute for the command.
   *
   * @description The `tagExists <tag string>` command is typically used to identify whether the specified tag exists in the database or specifically in the DATABASECHANGELOG table.
   * Running the `tagExists <tag string>` command checks for the tag and, based on whether it exists or not, provides the appropriate output.
   *
   * {@link https://docs.liquibase.com/commands/community/tagexists.html Documentation}
   */
  ;

  _proto.tagExists = function tagExists(params) {
    return this.run(exports.LiquibaseCommands.TagExists, params);
  }
  /**
   * The `unexpectedChangeSets` command produces a list of changesets that were run in the database but do not exist in the current changelog.
   *
   * @description The `unexpectedChangeSets` command is typically used to detect and compare the changes between the DATABASECHANGELOG table and the current changelog.
   * If any of the changesets in the DATABASECHANGELOG table do not exist in the current changelog, the `unexpectedChangeSets` command will detect those changesets and produce them in your output.
   * The `unexpectedChangeSets` command also produces all the changesets that were previously deployed and deleted from your current changelog.
   *
   * {@link https://docs.liquibase.com/commands/community/unexpectedchangesets.html Documentation}
   */
  ;

  _proto.unexpectedChangeSets = function unexpectedChangeSets() {
    return this.run(exports.LiquibaseCommands.UnexpectedChangeSets);
  }
  /**
   * `dropAll` drops all database objects owned by the user. `dropAll` will not drop functions, procedures, or packages for the community version of Liquibase. Functions, procedures, packages, and synonyms can only be dropped for Liquibase Pro supported objects.
   *
   * @description `dropAll` is typically used when there is a need to prepare an environment schema to be identical to another environment schema. `dropAll` is useful in the developer and test environments to remove unwanted objects to reset the database to “empty”.
   * The command makes it easier to standardize another schema, compared to manually deleting the objects, or dropping and recreating the desired schema.
   * `dropAll` should not be used in a production environment to prevent removal of required objects.
   *
   * {@link https://docs.liquibase.com/commands/community/dropall.html Documentation}
   */
  ;

  _proto.dropAll = function dropAll() {
    return this.run(exports.LiquibaseCommands.DropAll);
  }
  /**
   * The `futureRollbackSQL` command is a helper command that produces the raw SQL Liquibase would need to roll back changes that have not yet been deployed to your database.
   *
   * @description You can use the `futureRollbackSQL` command to inspect the raw SQL Liquibase would use to revert changes associated with undeployed changesets.
   * It is best practice to inspect SQL Liquibase would run when using the `update` command so you can review any changes the command would make to your database.
   *
   * {@link https://docs.liquibase.com/commands/community/futurerollbacksql.html Documentation}
   */
  ;

  _proto.futureRollbackSQL = function futureRollbackSQL() {
    return this.run(exports.LiquibaseCommands.FutureRollbackSql);
  }
  /**
   * The `futureRollbackCountSQL <value>` command generates the SQL that Liquibase would use to sequentially revert the number of changes associated with undeployed changesets, which are added to a changelog file.
   *
   * @param params Arguments/Attributes for the command
   *
   * @description The `futureRollbackCountSQL <value>` command is typically used to inspect the SQL before rolling back the number of changesets that you have not deployed to your database but added to your changelog. The command shows the output starting with the most recent changes until the value specified is reached.
   * It is best practice to inspect SQL, which Liquibase would run when using the rollback command so you can review any changes the command would make to your database.
   *
   * {@link https://docs.liquibase.com/commands/community/futurerollbackcountsql.html Documentation}
   */
  ;

  _proto.futureRollbackCountSQL = function futureRollbackCountSQL(params) {
    return this.run(exports.LiquibaseCommands.FutureRollbackCountSql, params);
  }
  /**
   * The `generateChangeLog` command creates a changelog file that has a sequence of changesets which describe how to re-create the current state of the database.
   *
   * @param params Arguments/Attributes for the command
   *
   * @description The `generateChangeLog` command is typically used when you want to capture the current state of a database, then apply those changes to any number of databases. This is typically only done when a project has an existing database, but hasn't used Liquibase before.
   * See {@link https://docs.liquibase.com/workflows/liquibase-community/existing-project.html How to set up Liquibase with an Existing Project and Multiple Environments} for more details.
   *
   * {@link https://docs.liquibase.com/commands/community/generatechangelog.html Documentation}
   */
  ;

  _proto.generateChangeLog = function generateChangeLog(params) {
    return this.run(exports.LiquibaseCommands.GenerateChangeLog, params);
  }
  /**
   * The `--help` command lists all the available Liquibase commands, required and optional parameters, and changelog property. The command also presents Liquibase Hub commands— registerChangeLog, syncHub, and the hubAPIKey property with the definitions.
   *
   * @description The `--help` command is typically used to check the syntax of commands, their definitions, and parameters. The command provides the output that includes the following:
   * - Standard commands
   * - Diff commands
   * - Documentation commands
   * - Maintenance commands
   * - Hub commands
   * - Required parameters
   * - Optional parameters
   * - Required diff parameters
   * - Optional diff parameters
   * - changelog properties
   * - Hub integration CLI parameter
   *
   * {@link https://docs.liquibase.com/commands/community/help.html Documentation}
   */
  ;

  _proto.help = function help() {
    return this.run(exports.LiquibaseCommands.Help);
  }
  /**
   * The `history` command is a helper command that lists out all your deploymentIds and all changesets associated with each deploymentId.
   *
   * @description The `history` command is typically used when you want to inspect a particular group of changes to ensure that they have been applied to the database.
   *
   * {@link https://docs.liquibase.com/commands/community/history.html Documentation}
   */
  ;

  _proto.history = function history() {
    return this.run(exports.LiquibaseCommands.History);
  }
  /**
   * `listLocks` returns the hostname, IP address, and the timestamp the Liquibase lock record was added to the DATABASECHANGELOGLOCK table.
   *
   * @description `listLocks` is typically used when an error occurs during a database deployment. The error might indicate that there is a lock record in the DATABASECHANGELOGLOCK table by another user that is preventing Liquibase from applying changes to the specified database.
   * `listLocks` will read the DATABASECHANGELOGLOCK table and return a list that includes the hostname, IP address, and the timestamp the lock record was granted to the DATABASECHANGELOGLOCK table and determines the connections to the DATABASECHANGELOGLOCK table based on the database URL.
   *
   * {@link https://docs.liquibase.com/commands/community/listlocks.html Documentation}
   */
  ;

  _proto.listLocks = function listLocks() {
    return this.run(exports.LiquibaseCommands.ListLocks);
  }
  /**
   * The `markNextChangeSetRan` command marks the next change you apply as executed in your database.
   *
   * @description The `markNextChangeSetRan` command is typically used when you have made a change manually, and the deployment is failing. Here is a use case that shows the whole process in more detail:
   * - You have a changelog with a specific changeset and want to create a table in your database, and then apply your changes manually without using Liquibase. In this case, there will be no record of this change in the DATABASECHANGELOG table.
   * - Then you decide to deploy the same changeset by using the `update` command, Liquibase checks the DATABASECHANGELOG table to see if there is such a changeset. Since there is no record of it, Liquibase tries to create a table, but as it already exists, you receive an error.
   * - As a result, Liquibase stops deployment at that specific changeset without executing it.
   * - Running the `markNextChangeSetRan` adds that changeset in the changelog as a record even though the table is already created. The command detects that the changeset was deployed.
   * Additionally, the best practice is to run the `markNextChangeSetRanSQL` helper command to inspect the `markNextChangeSetRan` SQL, so you can correct any issues that may arise before running the command.
   *
   * {@link https://docs.liquibase.com/commands/community/marknextchangesetran.html Documentation}
   */
  ;

  _proto.markNextChangeSetRan = function markNextChangeSetRan() {
    return this.run(exports.LiquibaseCommands.MarkNextChangeSetRan);
  }
  /**
   * The `markNextChangeSetRanSQL` command is a helper command that inspects the SQL Liquibase will run while using the markNextChangeSetRan command.
   *
   * @description The `markNextChangeSetRanSQL` command is used to inspect the raw SQL before running the markNextChangeSetRan command,
   * so you can correct any issues that may arise before running the command. Liquibase uses the raw SQL to mark the next changeset you apply as executed in your database and to keep that changeset in the changelog as a record assuming that it has already been deployed.
   *
   * {@link https://docs.liquibase.com/commands/community/marknextchangesetransql.html Documentation}
   */
  ;

  _proto.markNextChangeSetRanSQL = function markNextChangeSetRanSQL() {
    return this.run(exports.LiquibaseCommands.MarkNextChangeSetRanSql);
  }
  /**
   * The `registerChangeLog` command connects your local Liquibase activity to a specific Liquibase Hub Project. By registering your changelog, this activity will be visible only to one Project within one Organization in Liquibase Hub.
   *
   * @description The `registerChangeLog` command is used to connect an XML or formatted SQL changelog to your Liquibase Hub Project. Also, you can use JSON and YAML changelog formats (since 4.2.1).
   * The command also assigns the changeLogId to the changelog file that you register. The changeLogId is a unique identifier in your changelog, which is automatically added by the `registerChangeLog` command to provide real-time monitoring and reports.
   * You can connect the needed changelog file with your existing project or create a new project from the CLI.
   *
   * {@link https://docs.liquibase.com/commands/community/registerchangelog.html Documentation}
   */
  ;

  _proto.registerChangeLog = function registerChangeLog() {
    return this.run(exports.LiquibaseCommands.RegisterChangeLog);
  }
  /**
   * `releaseLocks` removes the specific Liquibase lock record from the DATABASECHANGELOGLOCK table in the needed database.
   *
   * @description `releaseLocks` is typically used when there was an interruption with the Liquibase process during deployment resulting from the DATABASECHANGELOGLOCK table being in a locked state.
   *
   * {@link https://docs.liquibase.com/commands/community/releaselocks.html Documentation}
   */
  ;

  _proto.releaseLocks = function releaseLocks() {
    return this.run(exports.LiquibaseCommands.ReleaseLocks);
  }
  /**
   * The `changelogSync` command marks all undeployed changes in your changelog as executed in your database.
   *
   * @description The `changelogSync` command is typically used when you want to baseline a new database environment.
   * An example use case for the `changelogSync` command is when you have a DEV environment with a set of objects used only in DEV, and you want to use the same changelog to manage a new TEST environment.
   * The TEST environment does not have or need, those DEV-only objects. To avoid deploying the DEV-only objects, you run the `changelogSync` command to mark those changes as executed in the DATABASECHANGELOG which tells Liquibase to treat these databases as equivalent.
   * You can also use the changeLogSync command to mark a change as executed if the object associated with the change was created manually on the database. By marking the changeset as executed, it prevents the next Liquibase update from failing as it tries to create an object that already exists.
   *
   * {@link https://docs.liquibase.com/commands/community/changelogsync.html Documentation}
   */
  ;

  _proto.changelogSync = function changelogSync() {
    return this.run(exports.LiquibaseCommands.ChangelogSync);
  }
  /**
   * The `changelogSyncSQL` is a helper command that produces the raw SQL Liquibase would run when using the changelogSync command.
   *
   * @description The `changelogSyncSQL` command is typically used when you want to inspect the SQL Liquibase will use to baseline a new database environment.
   * It is best practice to inspect any SQL that Liquibase would run when using the changelogSync command so you can review any changes the command would make to your database before running the command.
   *
   * {@link https://docs.liquibase.com/commands/community/changelogsyncsql.html Documentation}
   */
  ;

  _proto.changelogSyncSQL = function changelogSyncSQL() {
    return this.run(exports.LiquibaseCommands.ChangelogSyncSql);
  }
  /**
   * The `changelogSyncToTag` command marks all undeployed changesets from your changelog up to the specified tag as executed in your database. The command also marks the changeset with that tag as deployed.
   *
   * @param params Arguments/Attribute for the command.
   *
   * @description The `changelogSyncToTag` command is typically used when you want to baseline a new database environment with specific objects. An example use case for the `changelogSyncToTag` command is the following:
   * - You have a DEV environment with a set of objects used only in DEV, and you want to use the same changelog to manage a new TEST environment. The TEST environment does not have those DEV-only objects and needs only some of them.
   * - To deploy the needed DEV-only objects and avoid deploying the rest, you add a tag and run the `changelogSyncToTag` command to mark the changes related to that tag as executed in the DATABASECHANGELOG table.
   * - The command marks all changesets starting with the first changeset at the top of the DEV changelog file and moving down to the changesets up to and including the tag.
   * - Next, you deploy the changesets that were not marked as deployed in your database. Liquibase treats your DEV and TEST databases as equivalent.
   *
   * {@link https://docs.liquibase.com/commands/community/changelogsynctotag.html Documentation}
   */
  ;

  _proto.changelogSyncToTag = function changelogSyncToTag(params) {
    return this.run(exports.LiquibaseCommands.ChangelogSyncToTag, params);
  }
  /**
   * The `changelogSyncToTagSQL` is a helper command that produces the raw SQL that Liquibase would run when using the changelogSyncToTag command to mark all undeployed changesets associated with the specified tag as executed in your database.
   *
   * @param params Arguments/Attribute for the command.
   *
   * @description The `changelogSyncToTagSQL` command is typically used when you want to inspect the SQL Liquibase will use to baseline a new database environment.
   * It is best practice to inspect any SQL that Liquibase would run when using the changelogSyncToTag command so you can review any changes the command would make to your database before running it.
   * The changelogSyncToTag command marks all changesets starting with the first changeset at the top of the changelog file and moving down to the changeset up to and including the tag.
   *
   * {@link https://docs.liquibase.com/commands/community/changelogsynctotagsql.html Documentation}
   */
  ;

  _proto.changelogSyncToTagSQL = function changelogSyncToTagSQL(params) {
    return this.run(exports.LiquibaseCommands.ChangelogSyncToTagSql, params);
  }
  /**
   * The `clearCheckSums` clears all checksums and nullifies the MD5SUM column of the DATABASECHANGELOG table so they will be re-computed on the next database update.
   *
   * @description `clearCheckSums` is typically used when there is a [MD5Sum Check Failed] error message and there is a need to clear the checksums from the DATABASECHANGELOG table.
   *
   * {@link https://docs.liquibase.com/commands/community/clearchecksums.html Documentation}
   */
  ;

  _proto.clearCheckSums = function clearCheckSums() {
    return this.run(exports.LiquibaseCommands.ClearCheckSums);
  }
  /**
   * The `dbDoc <outputDirectory>` command generates documentation in a Javadoc format based on the existing database and changelogs.
   *
   * @param params Arguments/Attribute for the command.
   *
   * @description The `dbDoc <outputDirectory>` command is typically used to generate database documentation with the change information stored in the changelogs and the existing database.
   * It captures the current state of your database including everything that has been performed against it.
   *
   * {@link https://docs.liquibase.com/commands/community/dbdoc.html Documentation}
   */
  ;

  _proto.dbDoc = function dbDoc(params) {
    return this.run(exports.LiquibaseCommands.DbDoc, params);
  }
  /**
   * The `deactivateChangeLog` command removes the changelogID from your changelog file so it stops sending reports to Liquibase Hub.
   *
   * @description The `deactivateChangeLog` command is typically used when:
   * - You start using Liquibase Hub to keep a history of all your activity, but you have registered the wrong changelog file and want to keep it from reporting the activity to Liquibase Hub.
   * - You use a changelog file that is being secluded or refactored into other changelogs and do not want more than one source of changesets reporting to Liquibase Hub.
   * When you run the `deactivateChangeLog` command, it modifies a specific changelog file by removing changelogID to prevent it from sending the data. The command differs from the liquibase.hub.mode=off property, which is set in your defaults file (the liquibase.properties file) or passed as a JAVA property and prevents any changelog from sending data.
   *
   * {@link https://docs.liquibase.com/commands/community/deactivatechangelog.html Documentation}
   */
  ;

  _proto.deactivateChangeLog = function deactivateChangeLog() {
    return this.run(exports.LiquibaseCommands.DeactivateChangeLog);
  }
  /**
   * The `diff` command in Liquibase allows you to compare two databases of the same type, or different types, to one another.
   *
   * @param params Arguments/Attribute for the command.
   *
   * @description The `diff` command is typically used at the completion of a project to verify all expected changes are in the changelog or to detect drift between a model schema and a database's actual schema.
   * The `diff` command is also useful for the following tasks:
   * - Finding missing objects between one database and another
   * - Seeing that a change was made to your database
   * - Finding unexpected items in your database
   *
   * {@link https://docs.liquibase.com/commands/community/diff.html Documentation}
   */
  ;

  _proto.diff = function diff(params) {
    return this.run(exports.LiquibaseCommands.Diff, params);
  }
  /**
   * The `diffChangeLog` command allows you to receive information on differences between two databases you are comparing and creates a changelog file containing deployable changesets.
   * The `diffChangeLog` command points out the differences in general and generates changes to resolve most of them.
   *
   * @param params Arguments/Attribute for the command.
   *
   * @description The `diffChangeLog` command is typically used when you want to create a deployable changelog to synchronize multiple databases.
   * The `diffChangeLog` command also provides more information about:
   * - Missing objects in your database
   * - Changes made to your database
   * - Unexpected items in your database
   *
   * {@link https://docs.liquibase.com/commands/community/diffchangelog.html Documentation}
   */
  ;

  _proto.diffChangelog = function diffChangelog(params) {
    return this.run(exports.LiquibaseCommands.DiffChangeLog, params);
  };

  _proto.stringifyParams = function stringifyParams(action, commandParameters) {
    var commandAcceptsPropertyAsPositionalArgument = Object.values(CommandsWithPositionalArguments).includes(action);
    var commandString = '';
    var positionalArguments = '';

    for (var property in commandParameters) {
      var targetValue = commandParameters[property];

      if (commandAcceptsPropertyAsPositionalArgument) {
        positionalArguments += JSON.stringify(targetValue) + " ";
      } else {
        commandString += "--" + property + "=" + JSON.stringify(targetValue) + " ";
      }
    }

    return positionalArguments + " " + commandString;
  };

  _proto.loadParamsFromLiquibasePropertiesFileOnDemand = function loadParamsFromLiquibasePropertiesFileOnDemand(liquibasePropertyPath) {
    var paramsFromLiquibasePropertyFile = {};

    if (!liquibasePropertyPath) {
      return;
    }

    var fileContents = FileHelper.readFileContent(liquibasePropertyPath);
    var fileContentsLines = fileContents.split(/\r?\n/);
    fileContentsLines.forEach(function (line) {
      var keyValuePair = line.split(/=?:/, 2);
      var key = keyValuePair[0];
      var value = keyValuePair[1];

      if (paramsFromLiquibasePropertyFile.hasOwnProperty(key)) {
        paramsFromLiquibasePropertyFile[key.trim()] = value.trim();
      }
    });
    return paramsFromLiquibasePropertyFile;
  }
  /**
   * LEGACY CODE START
   */

  /**
   * Spawns a Liquibase command.
   * @param {*} action a string for the Liquibase command to run. Defaults to `'update'`
   * @param {*} params any parameters for the command
   * @returns {Promise} Promise of a node child process.
   */
  ;

  _proto.run = function run(action, params) {
    if (params === void 0) {
      params = {};
    }

    var paramsFromLiquibasePropertyFile = this.loadParamsFromLiquibasePropertiesFileOnDemand(this.config.liquibasePropertiesFile);

    var mergedParams = _extends({}, paramsFromLiquibasePropertyFile, this.config);

    var commandParamsString = this.stringifyParams(action, params);
    return this.spawnChildProcess(this.liquibasePathAndGlobalAttributes(mergedParams) + " " + action + " " + commandParamsString);
  }
  /**
   * Internal method that returns a node child process compatible command string.
   * @returns {string}
   * @private
   */
  ;

  _proto.liquibasePathAndGlobalAttributes = function liquibasePathAndGlobalAttributes(params) {
    var _this = this;

    var liquibasePathAndGlobalAttributes = "" + params.liquibase;
    Object.keys(params).forEach(function (key) {
      if (key === 'liquibase' || key === 'liquibasePropertiesFile') {
        return;
      }

      var value = _this.config[key];
      liquibasePathAndGlobalAttributes = liquibasePathAndGlobalAttributes + " --" + key + "=\"" + value + "\"";
    });
    return liquibasePathAndGlobalAttributes;
  }
  /**
   *
   * Internal method for executing a child process.
   * @param {*} commandString Liquibase commandString
   */
  ;

  _proto.spawnChildProcess = function spawnChildProcess(commandString) {
    return this.commandHandler.spawnChildProcess(commandString);
  }
  /**
   * For now, we will assume Postgres is the 'default' database type.
   * In the future we can be smarter about how we merge these configs.
   *
   * @param config User Provided `LiquibaseConfig`
   */
  ;

  _proto.mergeConfigWithDefaults = function mergeConfigWithDefaults(config) {
    var defaults = _extends({}, POSTGRESQL_DEFAULT_CONFIG, {
      liquibase: FileHelper.bundledLiquibasePath
    });

    this.config = Object.assign({}, defaults, config);
  };

  return Liquibase;
}();

exports.CommandHandler = CommandHandler;
exports.FileHelper = FileHelper;
exports.LIQUIBASE_LABEL = LIQUIBASE_LABEL;
exports.Liquibase = Liquibase;
exports.Logger = Logger;
exports.MSSQL_DEFAULT_CONFIG = MSSQL_DEFAULT_CONFIG;
exports.POSTGRESQL_DEFAULT_CONFIG = POSTGRESQL_DEFAULT_CONFIG;
//# sourceMappingURL=liquibase.cjs.development.js.map
