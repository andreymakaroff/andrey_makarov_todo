import './styles.scss';
import { Routing } from './Routing/';
import { Header, Footer } from './parts/';
import { Loader } from './pages/';
import {checkUser, logout} from './services';

export class App extends Component {
  state = {
    user: undefined,
  };

  makeLogout = () => {
    logout()
      .then(() => {
        this.setState({ user: null });
      });
  };

  //     .then(() => {
  //       this.setState({ user: null });
  //     });
  //
  // }

  setLoginState = (user) => {
    this.setState({ user });
  };

  componentDidMount() {
    checkUser()
      .then((data) => {
        this.setLoginState(data);
      });
  }


  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <Header
          user={user}
          logout={this.makeLogout}
        />
        <main className="main">
          {
            user !== undefined ?
              <Routing
                user={user}
                setLoginState={this.setLoginState}
              /> :
              <Loader/>
          }
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}


