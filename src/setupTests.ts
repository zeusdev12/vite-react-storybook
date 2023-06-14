import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
configure({ adapter: new Adapter() });
