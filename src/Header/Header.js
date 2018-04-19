import './header.scss';

import { Navigation } from '../Navigation';
import { ButtonSwitcher } from '../ButtonSwitcher';

export const Header = ({user, login, logout}) => (
  <header className="header">
    <a href="/" className="logo">
      <img
        src="../images/bg.jpg"
        alt="logo"
      />
    </a>
    <ButtonSwitcher />
    <Navigation user={user} />
    {login && <button onClick={() => logout()}>Logout</button>}
  </header>
);
