import { connect } from 'react-redux';
import Ionicon from 'react-ionicons';

import './header.scss';
import { Navigation } from '../Navigation';
import { logoutUserAsync } from '../../store';

export class HeaderContainer extends React.Component {
  handleLogout = () => {
    this.props.dispatch(logoutUserAsync());
  };

  render() {
    const { user } = this.props;
    return (
      <header className="header">
        <a href="/" className="logo">
          <img
            src="../images/logo.png"
            alt="logo"
          />
        </a>
        <Navigation user={user} />
        {user &&
        <button
          className='btn btn-secondary'
          onClick={() => this.handleLogout()}
        >
          <Ionicon
            icon="ios-log-out"
            fontSize="20px"
            color="#fff"
          />
          Logout
        </button>}
      </header>
    )
  }
}

const mapStoreToProps = ({ user }) => ({
  user
});

export const Header =  connect(mapStoreToProps)(HeaderContainer);
