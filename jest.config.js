/**
 * @file Jest configuration.
 */
type JestConfig = {
  rootDir: string;
  testRegex: string;
  setupFiles: string[];
const config: JestConfig = {
  rootDir: 'src/test',
  testRegex: '/src/test/.*test\\.js$',
  setupFiles: ['<rootDir>/setup.js'],
export default config;