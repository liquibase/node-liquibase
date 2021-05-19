import {
  CalculateCheckSumCommandAttributes,
  ChangelogSyncToTagCommandAttributes,
  ChangelogSyncToTagSQLCommandAttributes,
  DbDocCommandAttributes,
  DiffChangelogCommandAttributes,
  DiffCommandAttributes,
  FutureRollbackCountSQLCommandAttributes,
  GenerateChangeLogCommandAttributes,
  Liquibase,
  RollbackCommandAttributes,
  RollbackCountCommandAttributes,
  RollbackCountSQLCommandAttributes,
  RollbackSQLCommandAttributes,
  RollbackToDateCommandAttributes,
  RollbackToDateSQLCommandAttributes,
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
    classpath: join(__dirname, '../drivers/postgresql-42.2.8.jar'),
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
      spyOn<any>(instance, 'run');

      instance.changelogSync();
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

  describe('#clearCheckSums', () => {
    it('should call run method', async () => {
      spyOn<any>(instance, 'run');

      instance.clearCheckSums();
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
    it('should delegate to #spawnChildProcess', async done => {
      spyOn<any>(instance, 'spawnChildProcess');
      const mockAction = LiquibaseCommands.Status;
      const mockParams = undefined;
      await instance['run'](mockAction, mockParams);
      expect(instance['spawnChildProcess']).toHaveBeenCalledWith(expect.stringContaining('status'));
      done();
    });
  });
});
