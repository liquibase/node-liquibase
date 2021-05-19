import { CommandHandler } from './command-handler';
import child_process from 'child_process';
import { LiquibaseConfig } from '../models';

describe('CommandHandler', () => {
  let instance: CommandHandler;
  const mockConfig = {} as LiquibaseConfig;

  beforeEach(() => {
    instance = new CommandHandler(mockConfig);
  });

  describe('#spawnChildProcess', () => {
    it('should delegate to child_process#exec', done => {
      spyOn(child_process, 'exec').and.callFake((_, cb) => Promise.resolve(cb()));
      const mockCommandString = 'status';
      instance.spawnChildProcess(mockCommandString).then(() => {
        expect(child_process.exec).toHaveBeenCalledWith(mockCommandString, expect.any(Function));
        done();
      });
    });
  });
});
