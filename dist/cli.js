#!/usr/bin/env node
"use strict";
// src/enums/liquibase-commands.enum.ts
var LiquibaseCommands;
(function(LiquibaseCommands2) {
  LiquibaseCommands2["CalculateCheckSum"] = "calculateCheckSum";
  LiquibaseCommands2["ChangelogSync"] = "changelogSync";
  LiquibaseCommands2["ChangelogSyncSql"] = "changelogSyncSQL";
  LiquibaseCommands2["ChangelogSyncToTag"] = "changelogSyncToTag";
  LiquibaseCommands2["ChangelogSyncToTagSql"] = "changelogSyncToTagSQL";
  LiquibaseCommands2["ClearCheckSums"] = "clearCheckSums";
  LiquibaseCommands2["DbDoc"] = "dbDoc";
  LiquibaseCommands2["DeactivateChangeLog"] = "deactivateChangeLog";
  LiquibaseCommands2["Diff"] = "diff";
  LiquibaseCommands2["DiffChangeLog"] = "diffChangeLog";
  LiquibaseCommands2["DropAll"] = "dropAll";
  LiquibaseCommands2["FutureRollbackSql"] = "futureRollbackSQL";
  LiquibaseCommands2["FutureRollbackCountSql"] = "futureRollbackCountSQL";
  LiquibaseCommands2["GenerateChangeLog"] = "generateChangeLog";
  LiquibaseCommands2["Help"] = "help";
  LiquibaseCommands2["History"] = "history";
  LiquibaseCommands2["ListLocks"] = "listLocks";
  LiquibaseCommands2["MarkNextChangeSetRan"] = "markNextChangeSetRan";
  LiquibaseCommands2["MarkNextChangeSetRanSql"] = "markNextChangeSetRanSQL";
  LiquibaseCommands2["RegisterChangeLog"] = "registerChangeLog";
  LiquibaseCommands2["ReleaseLocks"] = "releaseLocks";
  LiquibaseCommands2["Rollback"] = "rollback";
  LiquibaseCommands2["RollbackCount"] = "rollbackCount";
  LiquibaseCommands2["RollbackCountSql"] = "rollbackCountSQL";
  LiquibaseCommands2["RollbackSql"] = "rollbackSQL";
  LiquibaseCommands2["RollbackToDate"] = "rollbackToDate";
  LiquibaseCommands2["RollbackToDateSql"] = "rollbackToDateSQL";
  LiquibaseCommands2["Snapshot"] = "snapshot";
  LiquibaseCommands2["SnapshotReference"] = "snapshotReference";
  LiquibaseCommands2["Status"] = "status";
  LiquibaseCommands2["SyncHub"] = "syncHub";
  LiquibaseCommands2["Tag"] = "tag";
  LiquibaseCommands2["TagExists"] = "tagExists";
  LiquibaseCommands2["UnexpectedChangeSets"] = "unexpectedChangeSets";
  LiquibaseCommands2["Update"] = "update";
  LiquibaseCommands2["UpdateSql"] = "updateSQL";
  LiquibaseCommands2["UpdateCount"] = "updateCount";
  LiquibaseCommands2["UpdateCountSql"] = "updateCountSQL";
  LiquibaseCommands2["UpdateTestingRollback"] = "updateTestingRollback";
  LiquibaseCommands2["UpdateToTag"] = "updateToTag";
  LiquibaseCommands2["UpdateToTagSql"] = "updateToTagSQL";
  LiquibaseCommands2["Validate"] = "validate";
})(LiquibaseCommands || (LiquibaseCommands = {}));

// src/enums/liquibase-log-levels.enum.ts
var LiquibaseLogLevels;
(function(LiquibaseLogLevels2) {
  LiquibaseLogLevels2["Off"] = "off";
  LiquibaseLogLevels2["Severe"] = "severe";
  LiquibaseLogLevels2["Warning"] = "warning";
  LiquibaseLogLevels2["Info"] = "info";
  LiquibaseLogLevels2["Debug"] = "debug";
})(LiquibaseLogLevels || (LiquibaseLogLevels = {}));

// src/util/command-handler.ts
var _child_process = require('child_process');
var CommandHandler = class {
  constructor(config) {
    this.logger = new Logger(config);
  }
  spawnChildProcess(commandString2) {
    this.logger.log(`Running ${commandString2}...`);
    return new Promise((resolve, reject) => {
      _child_process.exec.call(void 0, commandString2, (error, stdout, stderr) => {
        this.logger.log(`
 ${stdout}`);
        if (error) {
          this.logger.error(`
 ${stderr}`);
          return reject(error);
        }
        resolve(stdout);
      });
    });
  }
};

// src/util/file-helper.ts
var _path = require('path');
var _fs = require('fs');
var FileHelper = class {
  static get bundledLiquibasePath() {
    if (process.env.NODE_ENV === "test") {
      return this.bundledLiquibasePathForInternalConsumers;
    }
    return this.bundledLiquibasePathForExternalConsumers;
  }
  static readFileContent(absolutePathToPropertyFile) {
    return _fs.readFileSync.call(void 0, absolutePathToPropertyFile, {encoding: "utf-8"});
  }
  static get bundledLiquibasePathForExternalConsumers() {
    const liquibaseExecutablePath = _path.join.call(void 0, __dirname, "liquibase/liquibase");
    return liquibaseExecutablePath;
  }
  static get bundledLiquibasePathForInternalConsumers() {
    const liquibaseExecutablePath = _path.join.call(void 0, __dirname, "../../bin/liquibase/liquibase");
    return liquibaseExecutablePath;
  }
};

// src/constants/defaults/mssql-default.config.ts

var MSSQL_DEFAULT_CONFIG = {
  url: "jdbc:sqlserver://<IP_OR_HOSTNAME>:;database=sqlserver;",
  changeLogFile: "/examples/change-log-examples/mssql/changelog.xml",
  username: "sa",
  password: "",
  classpath: _path.join.call(void 0, __dirname, "../../../drivers/mssql-jdbc-7.4.1.jre8.jar")
};

// src/constants/defaults/postgresql-default.config.ts

var POSTGRESQL_DEFAULT_CONFIG = {
  changeLogFile: "/node_modules/examples/change-log-examples/postgreSQL/changelog.xml",
  url: "jdbc:postgresql://localhost:5432/postgres",
  username: "postgres",
  password: "",
  classpath: _path.join.call(void 0, __dirname, "drivers/postgresql-42.2.8.jar")
};

// src/constants/tokens/liquibase-label.ts
var LIQUIBASE_LABEL = "[NODE-LIQUIBASE]";

// src/util/logger.ts
var Logger = class {
  constructor(config) {
    this.config = config;
  }
  log(message) {
    return this._log(message);
  }
  warn(message) {
    return this._warn(message);
  }
  error(message) {
    return this._error(message);
  }
  _log(message) {
    const levels = [
      LiquibaseLogLevels.Debug,
      LiquibaseLogLevels.Info,
      LiquibaseLogLevels.Severe,
      LiquibaseLogLevels.Warning
    ];
    if (!this.shouldOperate(levels)) {
      return;
    }
    return console.log(`${LIQUIBASE_LABEL} ${message}`);
  }
  _warn(message) {
    const levels = [LiquibaseLogLevels.Severe, LiquibaseLogLevels.Warning];
    if (!this.shouldOperate(levels)) {
      return;
    }
    return console.warn("[33m%s[0m", `${LIQUIBASE_LABEL} ${message}`);
  }
  _error(message) {
    const levels = [LiquibaseLogLevels.Severe];
    if (!this.shouldOperate(levels)) {
      return;
    }
    return console.error("[31m%s[0m", `${LIQUIBASE_LABEL} ${message}`);
  }
  shouldOperate(acceptableLogLevels) {
    return acceptableLogLevels.indexOf(this.logLevel) > -1;
  }
  get logLevel() {
    var _a;
    if (process.env.NODE_ENV === "test") {
      return LiquibaseLogLevels.Off;
    }
    return ((_a = this.config) == null ? void 0 : _a.logLevel) || LiquibaseLogLevels.Severe;
  }
};

// src/cli.ts
var commandString = getCommandString();
new CommandHandler({}).spawnChildProcess(commandString);
function getCommandString() {
  const args = process.argv.slice(2);
  const argsWereProvided = (args == null ? void 0 : args.length) > 0;
  const errorMessage = "CLI call signature does not match the expected format. Please verify you have passed required arguments and parameters.";
  if (!argsWereProvided) {
    throw new Error(errorMessage);
  }
  const firstArg = args[0];
  const firstArgWasAKnownCommand = Object.values(LiquibaseCommands).includes(firstArg);
  const firstArgWasAFlag = firstArg.substr(0, 2) === "--";
  if (firstArgWasAKnownCommand || firstArgWasAFlag) {
    args.unshift(FileHelper.bundledLiquibasePath);
  }
  return args.join(" ");
}
