// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './navigation.scss';
// import { Form } from '../Form/Form';

export const Navigation = ({ user, login, logout }) => {
  const isLogin = location.pathname !== '/login';
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            activeClassName="active"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tasks"
            activeClassName="active"
          >
            tasks
          </NavLink>
        </li>

        {isLogin &&
        <li>
          <NavLink to="/login">
            Login
          </NavLink>
        </li>
        }
      </ul>
    </nav>
  )
};


// Form.propTypes = {
//   isLogin: PropTypes.array
// };
//
// Form.defaultProps = {
//   isLogin: []
// };
