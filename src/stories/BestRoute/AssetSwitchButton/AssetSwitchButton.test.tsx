import { shallow } from 'enzyme'
import { AssetSwitchButton } from './AssetSwitchButton'

describe('Hello, Enzyme!', () => {
  it('renders', () => {
    const wrapper = shallow(<AssetSwitchButton/>)
    expect(wrapper.find('.asset-switch-button img')).not.toBeNull();
  })
})