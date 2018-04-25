import './login.scss';

import { Loader } from '../Loader';
import { login } from '../../services';

export class Login extends Component   {

  constructor(props) {
    super(props);
    this.onLogin = this.props.onLogin;
    this.state = {
      loading: false
    };
  }

  submit = (e) => {
    const { email, password } = e.target;
    e.preventDefault();

    login({
      email: email.value,
      password: password.value
    })
      .then((data) => {
        this.onLogin(data);
      });
  };

  render() {
    const { loading } = this.state;
    return (

      loading ? <Loader /> :
      <form
        className="loginForm"
        onSubmit={e => this.submit(e)}
      >
        <input
          type="text"
          placeholder="Name"
          name="email"
          defaultValue="admin@a.com"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          defaultValue="admin"
          required
        />
        <input
          type="submit"
          value="Логин"
        />
      </form>
    );
  }
}
