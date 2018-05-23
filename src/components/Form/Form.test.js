import { shallow } from 'enzyme';
import { Form } from './Form';


describe('<Form/>', () => {
  it('getDerivedStateFromProps', () => {
    const wrapper = shallow(<Form />);
    const testValue = 'test';
    wrapper.setProps({ data:{ email: testValue }});
    expect(wrapper.state().email).toEqual({ value: testValue });
  });
});
