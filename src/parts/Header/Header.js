import './header.scss';

import { Navigation } from '../Navigation';
import { ButtonSwitcher } from '../../components/ButtonSwitcher';

export const Header = ({ user, logout }) => (
  <header className="header">
    <a href="/" className="logo">
      <img
        src="../images/bg.jpg"
        alt="logo"
      />
    </a>
    <ButtonSwitcher />
    <Navigation user={user} />
    {user && <button onClick={() => logout()}>Logout</button>}
  </header>
);
