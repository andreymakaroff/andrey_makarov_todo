import './header.scss'

import { Navigation } from '../Navigation';

export const Header = () => (
  <header className="header">
    <img
      className="logo"
      src="https://avatars3.githubusercontent.com/u/11967728?s=460&v=4"
      alt=""
    />
    <Navigation isLogin />
  </header>
);
