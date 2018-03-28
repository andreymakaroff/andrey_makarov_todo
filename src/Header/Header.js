import './header.scss';

import { Navigation } from '../Navigation';
import { ButtonSwitcher } from '../ButtonSwitcher';

export const Header = () => (
  <header className="header">
    <a href="/" className="logo">
      <img
        src="https://avatars3.githubusercontent.com/u/11967728?s=460&v=4"
        alt="logo"
      />
    </a>
    <ButtonSwitcher />
    <Navigation isLogin />
  </header>
);
