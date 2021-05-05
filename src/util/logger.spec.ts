import { LiquibaseLogLevels } from "../enums";
import { Logger } from "./logger";

describe('Logger', () => {
	let oldNodeEnv: string | undefined;

	beforeEach(() => {
		oldNodeEnv = process.env.NODE_ENV;
		const nonTestNodeEnv = 'not-test';
		process.env.NODE_ENV = nonTestNodeEnv;
	});

	afterEach(() => {
		process.env.NODE_ENV = oldNodeEnv;
	});

	describe('#log', () => {
		it('should delegate to #_log', () => {
			spyOn<any>(Logger, '_log');
			const mockMessage = 'test';
			Logger.log(mockMessage);

			expect(Logger['_log']).toHaveBeenCalledWith(mockMessage);
		});
	});

	describe('#warn', () => {
		it('should delegate to #_warn', () => {
			spyOn<any>(Logger, '_warn');
			const mockMessage = 'test';
			Logger.warn(mockMessage);

			expect(Logger['_warn']).toHaveBeenCalledWith(mockMessage);
		});
	});

	describe('#error', () => {
		it('should delegate to #_error', () => {
			spyOn<any>(Logger, '_error');
			const mockMessage = 'test';
			Logger.error(mockMessage);

			expect(Logger['_error']).toHaveBeenCalledWith(mockMessage);
		});
	});

	describe('#_log', () => {
		it('should delegate to console.log if #logLevel permits', () => {
			jest.spyOn<any, any>(Logger, 'logLevel', 'get').mockReturnValue(LiquibaseLogLevels.Info);
			spyOn(console, 'log');
			const mockMessage = 'test';

			Logger['_log'](mockMessage);
			expect(console.log).toHaveBeenCalled();
		});

		it('should not delegate if LiquibaseLogLevel is off', () => {
			jest.spyOn<any, any>(Logger, 'logLevel', 'get').mockReturnValue(LiquibaseLogLevels.Off);
			spyOn(console, 'log');
			const mockMessage = 'test';

			Logger['_log'](mockMessage);
			expect(console.log).not.toHaveBeenCalled();
		});
	});

	describe('#_warn', () => {
		it('should delegate to console.warn if #logLevel permits', () => {
			jest.spyOn<any, any>(Logger, 'logLevel', 'get').mockReturnValue(LiquibaseLogLevels.Warning);
			spyOn(console, 'warn');
			const mockMessage = 'test';

			Logger['_warn'](mockMessage);
			expect(console.warn).toHaveBeenCalled();
		});

		it('should not delegate if LiquibaseLogLevel is off', () => {
			jest.spyOn<any, any>(Logger, 'logLevel', 'get').mockReturnValue(LiquibaseLogLevels.Off);
			spyOn(console, 'warn');
			const mockMessage = 'test';

			Logger['_warn'](mockMessage);
			expect(console.warn).not.toHaveBeenCalled();
		});
	});

	describe('#_error', () => {
		it('should delegate to console.error if #logLevel permits', () => {
			jest.spyOn<any, any>(Logger, 'logLevel', 'get').mockReturnValue(LiquibaseLogLevels.Severe);
			spyOn(console, 'error');
			const mockMessage = 'test';

			Logger['_error'](mockMessage);
			expect(console.error).toHaveBeenCalled();
		});

		it('should not delegate if LiquibaseLogLevel is off', () => {
			jest.spyOn<any, any>(Logger, 'logLevel', 'get').mockReturnValue(LiquibaseLogLevels.Off);
			spyOn(console, 'error');
			const mockMessage = 'test';

			Logger['_error'](mockMessage);
			expect(console.error).not.toHaveBeenCalled();
		});
	});

});
