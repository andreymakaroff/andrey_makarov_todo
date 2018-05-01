import { Link } from 'react-router-dom';

import './registration.scss';

import { Loader } from '../Loader';
import { registrationUser } from '../../services';

export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null
    };
  }

  submit = (e) => {
    const {
      firstname,
      lastname,
      email,
      password,
      password2
    } = e.target;
    e.preventDefault();

    password.value === password2.value ?
      registrationUser({
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value
      })
        .then(() => {
          this.props.history.push('/thank_you_page');
        })
        .catch((error) => {
          this.setState({ error });
          console.log('Can\'t register:', error);
        })
      :
      this.setState({ error: 'password fields must be same!' });
  };

  render() {
    const { loading, error } = this.state;
    return (

      loading ? <Loader /> :
      <div className="registrationForm__wrapper">
        <form
          className="registrationForm"
          onSubmit={e => this.submit(e)}
        >
          <input
            type="text"
            placeholder="email"
            name="email"
            defaultValue="asd@a.com"
            required
          />
          <br />
          <input
            type="text"
            placeholder="firstname"
            name="firstname"
            defaultValue="asd"
            required
          />
          <br />
          <input
            type="text"
            placeholder="Name"
            name="lastname"
            defaultValue="asd"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            defaultValue="parolka"
            required
          />
          <br />
          <input
            type="password"
            name="password2"
            placeholder="Password"
            defaultValue="parolka"
            required
          />
          <br />
          {error && <p className="registrationForm__error">{error}</p>}
          <input
            type="submit"
            value="Логин"
          />
        </form>

        <Link
          className="registrationForm__link"
          to="/login"
        >
            Go to login page
        </Link>

      </div>

    );
  }
}
