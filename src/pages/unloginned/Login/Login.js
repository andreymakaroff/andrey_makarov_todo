import { Link } from 'react-router-dom';

import './login.scss';

import { Loader } from '../../common/Loader';
import { login } from '../../../services';
import { Form } from '../../../components/Form';

export class Login extends Component   {

  constructor(props) {
    super(props);
    this.onLogin = this.props.onLogin;
    this.state = {
      loading: false
    };
  }

  submit = (fields) => {
    login(fields)
      .then((data) => {
        this.onLogin(data);
      })
      .catch(err => console.log('Can\'t login:', err));
  };

  render() {
    const { loading } = this.state;
    return (

      loading ? <Loader /> :
        <div className="loginForm__wrapper">
          <Form
            onSubmit={(fields) => this.submit(fields)}
            excluded={['firstName', 'lastName', 'repeatPassword']}
            skipped={['firstName', 'lastName', 'repeatPassword']}
          />
          <br/>
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
