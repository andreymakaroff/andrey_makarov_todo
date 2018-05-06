// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './navigation.scss';
// import { Form } from '../Form/Form';

export const Navigation = ({ user, logout }) => {
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
            to="/contacts"
            activeClassName="active"
          >
            Contacts
          </NavLink>
        </li>

        {user ?
          <React.Fragment>
            <li>
              <NavLink
                to="/tasks"
                activeClassName="active"
              >
                {user && <strong>{user.firstName}</strong>} Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                activeClassName="active"
              >
                {user.firstName}
              </NavLink>
            </li>
          </React.Fragment>
          :
          <li>
            <NavLink
              to="/registration"
              activeClassName="active"
            >
              Create user
            </NavLink>
          </li>
        }

        {/*{!isLogin &&*/}
        {/*<li>*/}
          {/*<NavLink to="/login">*/}
            {/*Login*/}
          {/*</NavLink>*/}
        {/*</li>*/}
        {/*}*/}
      </ul>
    </nav>
  )
};

