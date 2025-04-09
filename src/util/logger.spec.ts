import { LiquibaseConfig } from '../models';
import { LiquibaseLogLevels } from '../enums';
import { Logger } from './logger';

describe('Logger', () => {
	let oldNodeEnv: string | undefined;
	let instance: Logger;
	const mockConfig = {} as LiquibaseConfig;

	beforeEach(() => {
		instance = new Logger(mockConfig);

		oldNodeEnv = process.env.NODE_ENV;
		const nonTestNodeEnv = 'not-test';
		process.env.NODE_ENV = nonTestNodeEnv;
	});

	afterEach(() => {
		process.env.NODE_ENV = oldNodeEnv;
	});

	describe('#log', () => {
		it('should delegate to #_log', () => {
			spyOn<any>(instance, '_log');
			const mockMessage = 'test';
			instance.log(mockMessage);

			expect(instance['_log']).toHaveBeenCalledWith(mockMessage);
		});
	});

	describe('#warn', () => {
		it('should delegate to #_warn', () => {
			spyOn<any>(instance, '_warn');
			const mockMessage = 'test';
			instance.warn(mockMessage);

			expect(instance['_warn']).toHaveBeenCalledWith(mockMessage);
		});
	});

	describe('#error', () => {
		it('should delegate to #_error', () => {
			spyOn<any>(instance, '_error');
			const mockMessage = 'test';
			instance.error(mockMessage);

			expect(instance['_error']).toHaveBeenCalledWith(mockMessage);
		});
	});

	describe('#_log', () => {
		it('should delegate to console.log if #logLevel permits', () => {
			jest.spyOn<any, any>(instance, 'logLevel', 'get').mockReturnValue(LiquibaseLogLevels.Info);
			spyOn(console, 'log');
			const mockMessage = 'test';

			instance['_log'](mockMessage);
			expect(console.log).toHaveBeenCalled();
		});

		it('should not delegate if LiquibaseLogLevel is off', () => {
			jest.spyOn<any, any>(instance, 'logLevel', 'get').mockReturnValue(LiquibaseLogLevels.Off);
			spyOn(console, 'log');
			const mockMessage = 'test';

			instance['_log'](mockMessage);
			expect(console.log).not.toHaveBeenCalled();
		});
	});

	describe('#_warn', () => {
		it('should delegate to console.warn if #logLevel permits', () => {
			jest.spyOn<any, any>(instance, 'logLevel', 'get').mockReturnValue(LiquibaseLogLevels.Warning);
			spyOn(console, 'warn');
			const mockMessage = 'test';

			instance['_warn'](mockMessage);
			expect(console.warn).toHaveBeenCalled();
		});

		it('should not delegate if LiquibaseLogLevel is off', () => {
			jest.spyOn<any, any>(instance, 'logLevel', 'get').mockReturnValue(LiquibaseLogLevels.Off);
			spyOn(console, 'warn');
			const mockMessage = 'test';

			instance['_warn'](mockMessage);
			expect(console.warn).not.toHaveBeenCalled();
		});
	});

	describe('#_error', () => {
		it('should delegate to console.error if #logLevel permits', () => {
			jest.spyOn<any, any>(instance, 'logLevel', 'get').mockReturnValue(LiquibaseLogLevels.Severe);
			spyOn(console, 'error');
			const mockMessage = 'test';

			instance['_error'](mockMessage);
			expect(console.error).toHaveBeenCalled();
		});

		it('should not delegate if LiquibaseLogLevel is off', () => {
			jest.spyOn<any, any>(instance, 'logLevel', 'get').mockReturnValue(LiquibaseLogLevels.Off);
			spyOn(console, 'error');
			const mockMessage = 'test';

			instance['_error'](mockMessage);
			expect(console.error).not.toHaveBeenCalled();
		});
	});
});
