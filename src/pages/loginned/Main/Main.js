import { Link } from 'react-router-dom';

import './main.scss';

import { getInfo } from '../../../services';

export class Main extends React.Component {
  state = {
    total: '',
    done: '',
    inProgress: '',
    waiting: '',
    userName: 'Ilia !'
  };

  componentDidMount() {
    getInfo()
      .then(task => this.setState({ ...task }));
  }

  render() {

    const { userName, total, done, inProgress, waiting } = this.state;

    return (
      <main className="main pt-4">
        <div className="card userInfo">
            <div className="card-body">
              <h5 className="card-title">Hello, {userName}</h5>
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