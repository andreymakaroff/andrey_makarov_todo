import { ToastContainer } from 'react-toastr';
import { connect } from 'react-redux';

import './styles.scss';
import { Routing } from './Routing/';
import { Header, Footer } from './parts/';
import { Loader } from './pages/';
import { checkUser, logout, errObserver } from './services';
import { removeUser, setUser } from './store';
import { withRouter } from 'react-router-dom';

export class AppComponent extends Component {
  state = {
    user: undefined,
  };

  makeLogout = () => {
    logout()
      .then(() => {
        this.props.dispatch(removeUser());
      });
  };

  setLoginState = (user) => {
    this.props.dispatch(setUser(user));
  };

  componentDidMount() {

    checkUser()
      .then((data) => {
        this.setLoginState(data);
      })
      .catch((err) => {
        this.setLoginState(null);
        console.log('cant login', err);
      });

    errObserver.addObserver((err = 'Something wrong') => this.state.user !== false && this.container.error(
      <strong>{err}</strong>,
      <em>Error</em>
    ));
  }


  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <ToastContainer
          ref={ref => this.container = ref}
          className="toast-top-right"
        />
        <Header
          user={user}
          logout={this.makeLogout}
        />
        <main className="container main">
          {
            user !== undefined ?
              <Routing
                user={user}
                setLoginState={this.setLoginState}
              /> :
              <Loader />
          }
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}


// const mapStoreToProps = state => ({
//   user: state.user
// });
const mapStoreToProps = ({ user }) => ({
  user
});


export const App =  withRouter(connect(mapStoreToProps)(AppComponent));
