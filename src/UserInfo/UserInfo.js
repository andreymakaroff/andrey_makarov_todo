import './userInfo.scss';

export class UserInfo extends React.Component {
  state = {
    taskTotal: 10,
    taskDone: 3,
    taskInProgress: 3,
    taskWaiting: 3,
    userName: 'Ilia !'
  };

  render() {
    return (
      <div className="userInfo__wrapper">
        <h2>Hello, {this.state.userName}</h2>

        <div>You have {this.state.taskTotal} tasks</div>
        <div>Done: {this.state.taskDone}</div>
        <div>In progress: {this.state.taskInProgress}</div>
        <div>Waiting: {this.state.taskWaiting}</div>

        <a href="/">Go to the task list</a>
      </div>
    );
  }
}
