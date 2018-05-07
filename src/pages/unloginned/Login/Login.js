import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './login.scss';

import { login } from '../../../services';
import { Form } from '../../../components/Form';
import { updateUser } from '../../../store';

export class LoginContainer extends Component {
  submit = (fields) => {
    login(fields)
      .then((data) => {
        this.props.dispatch(updateUser(data));
      })
      .catch(err => console.log('Can\'t login:', err));
  };

  render() {
    return (
      <div className="loginForm__wrapper">
        <Form
          onSubmit={fields => this.submit(fields)}
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
