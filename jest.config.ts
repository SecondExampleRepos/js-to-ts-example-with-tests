/**
 * @file Jest configuration.
 */

interface JestConfig {
  rootDir: string;
  testRegex: string;
  setupFiles: string[];
}

const jestConfig: JestConfig = {
  rootDir: 'src/test',
  testRegex: '/src/test/.*test\\.js$',
  setupFiles: ['<rootDir>/setup.js'],
};

export default jestConfig;
