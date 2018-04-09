import './header.scss';

import { Navigation } from '../Navigation';
import { ButtonSwitcher } from '../ButtonSwitcher';
import { Time } from '../Time';


export class Header extends React.Component {
  state = {
    visible: true,
  };

  toggleVisible = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <header className="header">
        <a href="/" className="logo">
          <img
            src="https://avatars3.githubusercontent.com/u/11967728?s=460&v=4"
            alt="logo"
          />
        </a>
        { visible ? <Time /> : null}
        <button onClick={this.toggleVisible}>destroy</button>
        <Navigation isLogin />
      </header>
    );
  }
}
