import { Link } from 'react-router-dom';

import './registration.scss';

import { Loader } from '../../common/Loader';
import { registrationUser } from '../../../services';
import { Form } from '../../../components/Form';

export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  submit = (fields) => {
    registrationUser(fields)
      .then(() => {
        this.props.history.push('/thank_you_page');
      })
      .catch((error) => {
        // this.setState({error});
        console.log('Can\'t register:', error);
      });
  };

  render() {
    const { loading } = this.state;
    return (

      loading ? <Loader /> :
      <div className="registrationForm__wrapper">
        <Form onSubmit={fields => this.submit(fields)} />
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