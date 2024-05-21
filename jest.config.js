/**
 * @file Jest configuration.
 */

import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  rootDir: 'src/test',
  testRegex: '/src/test/.*test\\.ts$',
  setupFiles: ['<rootDir>/setup.ts'],
};

export default config;