/**
 * @file Jest configuration.
 */

enum RootDir {
  TEST = 'src/test'
}

interface JestConfig {
  rootDir: RootDir;
  testRegex: string;
  setupFiles: string[];
}

const jestConfig: JestConfig = {
  rootDir: RootDir.TEST,
  testRegex: '/src/test/.*test\\.js$',
  setupFiles: ['<rootDir>/setup.js'],
};

export default jestConfig;