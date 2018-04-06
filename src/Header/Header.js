import './header.scss';

import { Navigation } from '../Navigation';
import { ButtonSwitcher } from '../ButtonSwitcher';

export const Header = () => (
  <header className="header">
    <a href="/" className="logo">
      <img
        src="../images/bg.jpg"
        alt="logo"
      />
    </a>
    <ButtonSwitcher />
    <Navigation isLogin />
  </header>
);
