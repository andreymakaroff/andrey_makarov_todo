import { Route, Switch, Redirect } from 'react-router-dom';
import { Async } from '../components';
import { Main, NotFound, Contacts, Task } from '../pages';

export class Loginned extends Component {
  render() {
    const TaskList = () => <Async name="TaskList" path="pages/loginned/TaskList" />;
    // const Task = () => <Async name="Task" path="pages/loginned/Task" />;
    const Profile = () => <Async name="Profile" path="pages/loginned/Profile" />;
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={Main}
        />
        <Route
          exact
          path="/tasks"
          component={TaskList}
        />
        <Route
          path="/tasks/:task" // dinamic routing
          component={Task}
        />
        <Route
          path="/contacts"
          component={Contacts}
        />
        <Route
          path="/profile"
          component={Profile}
        />
        <Route
          path="/home"
          component={Main}
        />
        <Redirect from="/login" to="/" />
        <Route
          render={({ location }) => <NotFound location={location} />}
        />
      </Switch>
    );
  }
}

