import { Link } from 'react-router-dom';

import './registration.scss';

import { Loader } from '../../common/Loader';
import { registrationUserFetch } from '../../../services';
import { Form } from '../../../components/Form';

export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  submit = (fields) => {
    this.setState({loading: true});
    registrationUserFetch(fields)
      .then(() => {
        this.setState({ loading: false });
        this.props.history.push('/thank-you-page');
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log('Can\'t register:', error);
      });
  };

  render() {
    const { loading } = this.state;
    return (

      loading ? <Loader /> :
      <div className="registrationForm__wrapper">
        <Form onSubmit={this.submit} />
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
