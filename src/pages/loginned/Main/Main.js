import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './main.scss';
import { getInfoAsync } from '../../../store';

export class MainContainer extends React.Component {
  componentDidMount() {
    this.props.getInfo();
  }

  render() {
    const { user, info } = this.props;

    return (
      <main className="main pt-4">
        <div className="card userInfo">
          <div className="card-body">
            <h5 className="card-title">Hello, {user.firstName}!</h5>
            <div>You have {info.total} tasks</div>
            <div>Done: {info.done}</div>
            <div>In progress: {info.inProgress}</div>
            <div>Waiting: {info.waiting}</div>
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

const mapStoreToProps = ({ user, info }) => ({
  user,
  info
});

const mapDispatchToProps = dispatch => ({
  getInfo() { dispatch(getInfoAsync()); }
});

export const Main = connect(mapStoreToProps, mapDispatchToProps)(MainContainer);
