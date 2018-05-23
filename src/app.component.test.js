import { shallow } from 'enzyme';
import { AppComponent } from './app.component';

import { getUser, setError } from './store';

describe('<AppComponent/>', () => {
  it('should render component with "main" tag', () => {
    const wrapper = shallow(<AppComponent dispatch={_ => _} />);
    expect(wrapper.find('main').length).toBe(1);
  });

  it('should call dispatch() in didmount', () => {
    const fakeDispatch = jest.fn();
    const wrapper = shallow(<AppComponent dispatch={fakeDispatch} />);
    expect(fakeDispatch).toHaveBeenCalledWith(getUser());
  });

  it('should call container.error() if props.error exists', () => {
    const wrapper = shallow(<AppComponent dispatch={_ => _} />);
    const inst = wrapper.instance();
    inst.container = {
      error: jest.fn()
    };
    wrapper.setProps({ error: 'test' });
    expect(inst.container.error).toHaveBeenCalled();
  });

  it('should show Loader if user: false', () => {
    const wrapper = shallow(<AppComponent dispatch={_ => _} user={false} />);
    expect(wrapper.find('Loader').length).toBe(1);
  });

  it('should show Routing if user is defined', () => {
    const wrapper = shallow(<AppComponent dispatch={_ => _} user={{ user: 'asd' }} />);
    expect(wrapper.find('Routing').length).toBe(1);
  });
});
