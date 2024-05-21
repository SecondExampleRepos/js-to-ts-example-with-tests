/**
 * @file Jest configuration.
 */

export default {
    rootDir: 'src/test',
    testRegex: '/src/test/.*test\\.js$',
    setupFiles: ['<rootDir>/setup.js'],
};