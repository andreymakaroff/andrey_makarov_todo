import { Link } from 'react-router-dom';

import './main.scss';

import { getInfo } from '../../services';

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
      <main className="main">
        <div className="userInfo__wrapper">
          <h2>Hello, {userName}</h2>

          <div>You have {total} tasks</div>
          <div>Done: {done}</div>
          <div>In progress: {inProgress}</div>
          <div>Waiting: {waiting}</div>
          <Link
            className="userInfo__link"
            to="/tasks"
          >
            Go to the task list
          </Link>
        </div>
      </main>
    );
  }
}