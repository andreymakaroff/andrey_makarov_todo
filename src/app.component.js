import { ToastContainer } from 'react-toastr';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './styles.scss';
import { Routing } from './Routing/';
import { Header, Footer } from './parts/';
import { Loader } from './pages/';
import { getUser, removeUser } from './store';
import { setError } from "./store";

export class AppComponent extends Component {

  componentDidUpdate(prevProps, prevState) {
    if (this.props.error) {
      this.container.error(  // this.container  - like link for ref
        <strong>{this.props.error}</strong>,
        <em>Error</em>
      );
      this.props.dispatch(setError(''));
    }
  }

  componentDidMount() {
    this.props.dispatch(getUser());
  }

  render() {
    const { user, error } = this.props;

    return (
      <React.Fragment>
        <ToastContainer
          ref={ref => this.container = ref}
          className="toast-top-right"
        />
        <Header />
        <main className="container main">
          {
            user !== false ?
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

const mapStoreToProps = ({ user, error }) => ({
  user,
  error
});

export const App = withRouter(connect(mapStoreToProps)(AppComponent));
