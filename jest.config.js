/**
 * @file Jest configuration.
 */

export enum JestConfig {
    RootDir = 'src/test',
    TestRegex = '/src/test/.*test\\.js$',
    SetupFiles = '<rootDir>/setup.js'
}

export interface JestConfiguration {
    rootDir: string;
    testRegex: string;
    setupFiles: string[];
}

const jestConfig: JestConfiguration = {
    rootDir: JestConfig.RootDir,
    testRegex: JestConfig.TestRegex,
    setupFiles: [JestConfig.SetupFiles],
};

export default jestConfig;