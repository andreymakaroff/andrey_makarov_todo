// import PropTypes from 'prop-types';
import {NavLink, withRouter} from 'react-router-dom';

import './navigation.scss';
import {connect} from "react-redux";
import {AppComponent} from "../../app.component";

export const NavigationInner = ({ user }) => {
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
                Task List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                activeClassName="active"
              >
                {user.firstName}`s profile
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
      </ul>
    </nav>
  )
};


export const Navigation = withRouter(NavigationInner);   // not work