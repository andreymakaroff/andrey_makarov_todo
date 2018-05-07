import { ToastContainer } from 'react-toastr';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './styles.scss';
import { Routing } from './Routing/';
import { Header, Footer } from './parts/';
import { Loader } from './pages/';
import { checkUser, errObserver } from './services';
import { setUser } from './store';

export class AppComponent extends Component {
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

    errObserver.addObserver((err = 'Something wrong') => this.props.user !== false && this.container.error(
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
        <Header />
        <main className="container main">
          {
            user !== undefined ?
              <Routing
                user={user}
              /> :
              <Loader />
          }
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStoreToProps = ({ user }) => ({
  user
});

export const App = withRouter(connect(mapStoreToProps)(AppComponent));
