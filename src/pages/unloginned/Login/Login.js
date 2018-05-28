import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './login.scss';
import { Form } from '../../../components/Form';

import { loginUserAsync } from '../../../store';

export class LoginContainer extends Component {
  submit = (fields) => {
    this.props.dispatch(loginUserAsync(fields));
  };

  render() {
    return (
      <div className="loginForm__wrapper">
        <Form
          onSubmit={this.submit}
          excluded={['firstName', 'lastName', 'repeatPassword']}
          skipped={['firstName', 'lastName', 'repeatPassword']}
        />
        <br />
        <Link
          className="loginForm__link"
          to="/registration"
        >
            I am new user (registration)
        </Link>
      </div>
    );
  }
}

const mapStoreToProps = ({ user }) => ({
  user
});

export const Login = connect(mapStoreToProps)(LoginContainer);
