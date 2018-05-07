import { Route, Switch, Redirect } from 'react-router-dom';

import { TaskList, Task, Main, NotFound, Contacts,Profile } from '../pages';

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
              path="/tasks/:task"  // dinamic routing
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
    )
  }
}

