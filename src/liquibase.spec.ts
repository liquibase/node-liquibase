import {
  CalculateCheckSumCommandAttributes,
  ChangelogSyncCommandAttributes,
  ChangelogSyncToTagCommandAttributes,
  ChangelogSyncToTagSQLCommandAttributes,
  ChecksBulkSetCommandAttributes,
  ChecksCopyCommandAttributes,
  ChecksCreateCommandAttributes,
  ChecksCustomizeCommandAttributes,
  ChecksDeleteCommandAttributes,
  ChecksDisableCommandAttributes,
  ChecksEnableCommandAttributes,
  ChecksResetCommandAttributes,
  ChecksRunCommandAttributes,
  ChecksShowCommandAttributes,
  DbDocCommandAttributes,
  DiffChangelogCommandAttributes,
  DiffCommandAttributes,
  ExecuteSqlCommandAttributes,
  FlowCommandAttributes,
  FutureRollbackCountSQLCommandAttributes,
  GenerateChangeLogCommandAttributes,
  InitCommandAttributes,
  Liquibase,
  RollbackCommandAttributes,
  RollbackCountCommandAttributes,
  RollbackCountSQLCommandAttributes,
  RollbackSQLCommandAttributes,
  RollbackToDateCommandAttributes,
  RollbackToDateSQLCommandAttributes,
  RollbackOneChangesetCommandAttributes,
  RollbackOneChangesetSQLCommandAttributes,
  RollbackOneUpdateCommandAttributes,
  RollbackOneUpdateSQLCommandAttributes,
  SetContextsCommandAttributes,
  SetLabelsCommandAttributes,
  SnapshotCommandAttributes,
  SnapshotReferenceCommandAttributes,
  SyncHubCommandAttributes,
  TagCommandAttributes,
  TagExistsCommandAttributes,
  UpdateCommandAttributes,
  UpdateCountCommandAttributes,
  UpdateCountSQLCommandAttributes,
  UpdateSQLCommandAttributes,
  UpdateToTagCommandAttributes,
  UpdateToTagSQLCommandAttributes,
  UpdateOneChangesetCommandAttributes,
  UpdateOneChangesetSQLCommandAttributes
} from './index';
import { LiquibaseConfig } from './models/index';
import { POSTGRESQL_DEFAULT_CONFIG } from './constants/defaults/postgresql-default.config';
import { join } from 'path';
import { LiquibaseCommands } from './enums';
require('dotenv').config();

describe('Liquibase', () => {
  let config: LiquibaseConfig;
  let instance: Liquibase;

  const validPostgresConfig: LiquibaseConfig = {
    ...POSTGRESQL_DEFAULT_CONFIG,
    changeLogFile: './examples/change-log-examples/postgreSQL/changelog.xml',
    classpath: join(__dirname, '../drivers/postgresql-42.4.2.jar'),
    username: 'yourusername',
    password: 'yoursecurepassword',
  };

  beforeEach(() => {
    config = {
      ...validPostgresConfig,
      classpath: undefined as any,
    };
    instance = new Liquibase(config);
  });

  describe('#constructor', () => {
    it('should create an instance', () => {
      expect(instance).toBeInstanceOf(Liquibase);
    });
  });

  describe('#status', () => {
    it('should call run method', async () => {
      const param = {} as UpdateCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.update(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#update', () => {
    it('should call run method', async () => {
      const param = {} as UpdateCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.update(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#updateSQL', () => {
    it('should call run method', async () => {
      const param = {} as UpdateSQLCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.updateSQL(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#updateCount', () => {
    it('should call run method', async () => {
      const param = {} as UpdateCountCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.updateCount(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#updateCountSQL', () => {
    it('should call run method', async () => {
      const param = {} as UpdateCountSQLCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.updateCountSQL(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#updateTestingRollback', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.updateTestingRollback();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#updateToTag', () => {
    it('should call run method', async () => {
      const param = {} as UpdateToTagCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.updateToTag(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#updateToTagSQL', () => {
    it('should call run method', async () => {
      const param = {} as UpdateToTagSQLCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.updateToTagSQL(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#updateOneChangeset', () => {
    it('should call run method', async () => {
      const param = {} as UpdateOneChangesetCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.updateOneChangeset(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#updateOneChangesetSQL', () => {
    it('should call run method', async () => {
      const param = {} as UpdateOneChangesetSQLCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.updateOneChangesetSQL(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#validate', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.validate();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#calculateCheckSum', () => {
    it('should call run method', async () => {
      const param = {} as CalculateCheckSumCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.calculateCheckSum(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#changelogSync', () => {
    it('should call run method', async () => {
      const param = {} as ChangelogSyncCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.changelogSync(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#changelogSyncSQL', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.changelogSyncSQL();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#changelogSyncToTag', () => {
    it('should call run method', async () => {
      const param = {} as ChangelogSyncToTagCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.changelogSyncToTag(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#changelogSyncToTagSQL', () => {
    it('should call run method', async () => {
      const param = {} as ChangelogSyncToTagSQLCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.changelogSyncToTagSQL(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#checksBulkSet', () => {
    it('should call run method', async () => {
      const param = {} as ChecksBulkSetCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.checksBulkSet(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#checksCopy', () => {
    it('should call run method', async () => {
      const param = {} as ChecksCopyCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.checksCopy(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#checksCreate', () => {
    it('should call run method', async () => {
      const param = {} as ChecksCreateCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.checksCreate(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#checksCustomize', () => {
    it('should call run method', async () => {
      const param = {} as ChecksCustomizeCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.checksCustomize(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#checksDelete', () => {
    it('should call run method', async () => {
      const param = {} as ChecksDeleteCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.checksDelete(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#checksDisable', () => {
    it('should call run method', async () => {
      const param = {} as ChecksDisableCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.checksDisable(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#checksEnable', () => {
    it('should call run method', async () => {
      const param = {} as ChecksEnableCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.checksEnable(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#checksReset', () => {
    it('should call run method', async () => {
      const param = {} as ChecksResetCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.checksReset(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#checksRun', () => {
    it('should call run method', async () => {
      const param = {} as ChecksRunCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.checksRun(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#checksShow', () => {
    it('should call run method', async () => {
      const param = {} as ChecksShowCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.checksShow(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#clearCheckSums', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.clearCheckSums();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#connect', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.connect();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#dbDoc', () => {
    it('should call run method', async () => {
      const param = {} as DbDocCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.dbDoc(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#deactivateChangeLog', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.deactivateChangeLog();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#diff', () => {
    it('should call run method', async () => {
      const param = {} as DiffCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.diff(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#diffChangeLog', () => {
    it('should call run method', async () => {
      const param = {} as DiffChangelogCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.diffChangelog(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#dropAll', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.dropAll();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#executeSql', () => {
    it('should call run method', async () => {
      const param = {} as ExecuteSqlCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.executeSql(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#flow', () => {
    it('should call run method', async () => {
      const param = {} as FlowCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.flow(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#futureRollbackSQL', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.futureRollbackSQL();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#futureRollbackCountSQL', () => {
    it('should call run method', async () => {
      const param = {} as FutureRollbackCountSQLCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.futureRollbackCountSQL(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#generateChangeLog', () => {
    it('should call run method', async () => {
      const param = {} as GenerateChangeLogCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.generateChangeLog(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#help', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.help();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#history', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.history();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#init', () => {
    it('should call run method', async () => {
      const param = {} as InitCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.init(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#listLocks', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.listLocks();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#markNextChangeSetRan', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.markNextChangeSetRan();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#markNextChangeSetRanSQL', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.markNextChangeSetRanSQL();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#registerChangeLog', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.registerChangeLog();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#releaseLocks', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.releaseLocks();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#rollback', () => {
    it('should call run method', async () => {
      const param = {} as RollbackCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.rollback(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#rollbackSQL', () => {
    it('should call run method', async () => {
      const param = {} as RollbackSQLCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.rollbackSQL(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#rollbackCount', () => {
    it('should call run method', async () => {
      const param = {} as RollbackCountCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.rollbackCount(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#rollbackCountSQL', () => {
    it('should call run method', async () => {
      const param = {} as RollbackCountSQLCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.rollbackCountSQL(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#rollbackToDate', () => {
    it('should call run method', async () => {
      const param = {} as RollbackToDateCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.rollbackToDate(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#rollbackToDateSQL', () => {
    it('should call run method', async () => {
      const param = {} as RollbackToDateSQLCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.rollbackToDateSQL(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#rollbackOneChangeset', () => {
    it('should call run method', async () => {
      const param = {} as RollbackOneChangesetCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.rollbackOneChangeset(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#rollbackOneChangesetSQL', () => {
    it('should call run method', async () => {
      const param = {} as RollbackOneChangesetSQLCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.rollbackOneChangesetSQL(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#rollbackOneUpdate', () => {
    it('should call run method', async () => {
      const param = {} as RollbackOneUpdateCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.rollbackOneUpdate(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#rollbackOneUpdateSQL', () => {
    it('should call run method', async () => {
      const param = {} as RollbackOneUpdateSQLCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.rollbackOneUpdateSQL(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#setContexts', () => {
    it('should call run method', async () => {
      const param = {} as SetContextsCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.setContexts(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#setLabels', () => {
    it('should call run method', async () => {
      const param = {} as SetLabelsCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.setLabels(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#snapshot', () => {
    it('should call run method', async () => {
      const param = {} as SnapshotCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.snapshot(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#snapshotReference', () => {
    it('should call run method', async () => {
      const param = {} as SnapshotReferenceCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.snapshotReference(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#status', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.status();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#syncHub', () => {
    it('should call run method', async () => {
      const param = {} as SyncHubCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.syncHub(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#tag', () => {
    it('should call run method', async () => {
      const param = {} as TagCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.tag(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#tagExists', () => {
    it('should call run method', async () => {
      const param = {} as TagExistsCommandAttributes;
      spyOn<any>(instance, 'run');

      instance.tagExists(param);
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#unexpectedChangeSets', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.unexpectedChangeSets();
      expect(instance['run']).toHaveBeenCalled();
    });
  });

  describe('#run', () => {
    it('should delegate to #spawnChildProcess', async (done) => {
      spyOn<any>(instance, 'spawnChildProcess');
      const mockAction = LiquibaseCommands.Status;
      const mockParams = undefined;
      await instance['run'](mockAction, mockParams);
      expect(instance['spawnChildProcess']).toHaveBeenCalledWith(expect.stringContaining('status'));
      done();
    });
  });
});
