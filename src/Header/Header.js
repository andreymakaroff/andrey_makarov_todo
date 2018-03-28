import './header.scss';

import { Navigation } from '../Navigation';

export const Header = () => (
  <header className="header">
    <a href="/" className="logo">
      <img
        src="https://avatars3.githubusercontent.com/u/11967728?s=460&v=4"
        alt="logo"
      />
    </a>
    <Navigation isLogin />
  </header>
);
