import './profile.scss';

import { Form } from '../../../components/Form';
import { updateUser } from '../../../services';

export class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.onLogin = this.props.onLogin;
    this.state = {
      loading: false
    };
  }

  submit = (fields) => {
    updateUser(fields)
      .then((data) => {
        this.onLogin(data);
      })
      .catch(err => console.log('Can\'t login:', err));
  };

  render() {
    const { loading } = this.state;
    return (

      loading ? <Loader /> :
        <main className="main pt-4">
          <Form
            onSubmit={(fields) => this.submit(fields)}
            disabled={['email']}
            skipped={['firstName']}
          />
        </main>
    );
  }
}
