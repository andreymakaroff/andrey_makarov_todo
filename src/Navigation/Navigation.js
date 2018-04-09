import PropTypes from 'prop-types';

import './navigation.scss';
import { Form } from '../Form/Form';

export const Navigation = (props) => (
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Product</a></li>
      {
        props.isLogin &&
        <li><a href="#">My Account</a></li>
      }
    </ul>
  </nav>
);


Form.propTypes = {
  isLogin: PropTypes.array
};

Form.defaultProps = {
  isLogin: []
};
