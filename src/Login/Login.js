import './login.scss';

import { Loader } from '../Loader';

export class Login extends Component   {

  constructor(props) {
    super(props);
    this.onLogin = this.props.onLogin;
    this.state = {
      loading: false
    };
  }

  submit = (e) => {
    e.preventDefault();
    const value = e.target.name.value;
    this.setState({
      loading: true
    });

    setTimeout(() => {
      this.onLogin(true, value);
    }, 500);
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
          name="name"
          required
        />
        <input
          type="password"
          placeholder="Password"
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
