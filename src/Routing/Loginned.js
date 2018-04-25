import { Route, Switch, Redirect } from 'react-router-dom';

import { TaskList } from '../pages/TaskList';
import { Task } from '../pages/Task';
import { Main } from '../parts/Main';
import { NotFound } from '../pages/NotFound';

export class Loginned extends Component {

  render() {
    return(
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
              path="/tasks/:task"
              component={Task}
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
    )
  }
}

