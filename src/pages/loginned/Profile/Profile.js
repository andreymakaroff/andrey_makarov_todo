import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './profile.scss';
import { Form } from '../../../components/Form';
import { updateUser } from '../../../services';
import { updateUser as updateUserStore } from '../../../store';
import { Loader } from '../../common/Loader';

export class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  submit = (fields) => {
    this.setState({ loading: true });
    updateUser(fields)
      .then(() => {
        // this.setState({ loading: false });
        this.props.dispatch(updateUserStore(fields));
      })
      .then(this.props.history.push('/'))
      .catch(err => {
        // this.setState({ loading: false });
        console.log('Can\'t change profile:', err);
      });
  };

  render() {
    const { loading } = this.state;
    const { email, firstName, lastName } = this.props.user;
    return (

      loading ? <Loader /> :
        <main className="main pt-4">
          <Form
            data={{
              email,
              firstName,
              lastName
            }}
            onSubmit={this.submit}
            disabled={['email']}
            skipped={['password', 'repeatPassword']}
          />
        </main>
    );
  }
}


const mapStoreToProps = ({ user }) => ({
  user
});

export const Profile =  withRouter(connect(mapStoreToProps)(ProfileContainer));
