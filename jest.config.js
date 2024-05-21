/**
 * @file Jest configuration.
 */
import type { Config } from '@jest/types';
const config: Config.InitialOptions = {
  rootDir: 'src/test',
  testRegex: '/src/test/.*test\\.js$',
  setupFiles: ['<rootDir>/setup.js'],
};
export default config;