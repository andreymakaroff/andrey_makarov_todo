import './styles.scss';
import { Routing } from './Routing/';

import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

export class App extends Component {
  state = {
    login: false,
    // login: true,
    user: '',
  };

  setLoginState = (login, user) => {
    this.setState({ login, user });
  };

  render() {
    const { login, user } = this.state;

    return (
      <React.Fragment>
        <Header
          login={login}
          user={user}
          logout={this.setLoginState}
        />
        <main className="main">
          <Routing
            login={login}
            setLoginState={this.setLoginState}
          />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}


