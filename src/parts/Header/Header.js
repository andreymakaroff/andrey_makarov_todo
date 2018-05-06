import './header.scss';

import { Navigation } from '../Navigation';

export const Header = ({ user, logout }) => (
  <header className="header">
    <a href="/" className="logo">
      <img
        src="../images/logo.png"
        alt="logo"
      />
    </a>
    <Navigation user={user} />
    {user && <button onClick={() => logout()}>Logout</button>}
  </header>
);
