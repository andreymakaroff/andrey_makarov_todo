import { Link } from 'react-router-dom';

import './thankYouPage.scss';

export const ThankYouPage = () => (
  <div className="thankYouPage">
    <h2>
      Great! , <br />
      Account was successfully created.
    </h2>
    <Link
      className=""
      to="/login"
    >
         Go to login
    </Link>
    <br />
  </div>
);
