import { Route } from 'react-router-dom';

import './styles.scss';
import { Routing } from './Routing';

import { Header } from './Header';
import { Footer } from './Footer';

export class App extends Component {
  state = {
    login: true
  };

  setLoginState = (login) => {
    this.setState({ login });
  };

  render() {
    const { login } = this.state;

    return (
      <React.Fragment>
        <Header
          login={login}
          setLoginState={this.setLoginState}
        />
        <Routing
          login={login}
          setLoginState={this.setLoginState}
        />
        <Footer/>
      </React.Fragment>
    );
  }
}


