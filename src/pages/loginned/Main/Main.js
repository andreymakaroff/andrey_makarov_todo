import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './main.scss';
import { getInfo } from '../../../services';

export class MainContainer extends React.Component {
  state = {
    total: '',
    done: '',
    inProgress: '',
    waiting: '',
  };

  componentDidMount() {
    getInfo()
      .then(task => this.setState({ ...task }));
  }

  render() {
    const {
      total,
      done,
      inProgress,
      waiting
    } = this.state;
    const { firstName } = this.props.user;

    return (
      <main className="main pt-4">
        <div className="card userInfo">
          <div className="card-body">
            <h5 className="card-title">Hello, {firstName}!</h5>
            <div>You have {total} tasks</div>
            <div>Done: {done}</div>
            <div>In progress: {inProgress}</div>
            <div>Waiting: {waiting}</div>
            <br />
            <Link
              className="btn btn-primary"
              to="/tasks"
            >
              Go to the task list
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

const mapStoreToProps = ({ user }) => ({
  user
});

export const Main = connect(mapStoreToProps)(MainContainer);
