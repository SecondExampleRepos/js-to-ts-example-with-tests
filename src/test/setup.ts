/**
 * @file Tests setup.
 */

import '@babel/polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// SECOND AGENT: [MISSING CONTEXT] - Define new types and enums as needed