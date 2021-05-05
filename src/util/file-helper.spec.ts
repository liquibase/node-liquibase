import { FileHelper } from "./file-helper";
import fs from 'fs';

describe('FileHelper', () => {
	describe('#get bundledLiquibasePath', () => {
		it('should handle internal consumers', () => {
			jest.spyOn<any, any>(FileHelper, 'bundledLiquibasePathForInternalConsumers', 'get');
			const test = FileHelper.bundledLiquibasePath;
			const expected = FileHelper['bundledLiquibasePathForInternalConsumers'];
			expect(test).toBe(expected);
		});

		it('should handle external consumers', () => {
			const oldNodeEnv = process.env.NODE_ENV;
			process.env.NODE_ENV = 'not-test';
			jest.spyOn<any, any>(FileHelper, 'bundledLiquibasePathForExternalConsumers', 'get');
			const test = FileHelper.bundledLiquibasePath;
			const expected = FileHelper['bundledLiquibasePathForExternalConsumers'];
			expect(test).toBe(expected);
			process.env.NODE_ENV = oldNodeEnv;
		});
	});

	describe('#readFileContent', () => {
		it('should delegate to readFileSync', () => {
			spyOn(fs, 'readFileSync');
			const mockPath = 'some/path';
			FileHelper.readFileContent(mockPath);

			expect(fs.readFileSync).toHaveBeenCalledWith(mockPath, { "encoding": "utf-8" });
		});
	});
});
