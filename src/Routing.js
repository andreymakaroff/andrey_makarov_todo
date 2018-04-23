import { Route, Switch, Redirect } from 'react-router-dom';

import { Login } from './Login';
import { TaskList } from './TaskList';
import { Task } from './Task';
import { Main } from './Main';

export class Routing extends Component {
  state = {
    name: false,
    // login: props.login
  };

  // onLogin = (login) => {
  //   this.setState({ login });
  // };
  // componentDidMount(){
  //   setTimeout(() => this.setState({login: true}), 200);
  // }

  render() {
    return(
      <React.Fragment>
        {this.props.login ?
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
              render={(props) => (
                <h1>
                  Page <em>{props.location.pathname.replace('/', '')}</em> - not exist
                  <br/>This page does not exist
                </h1>
              )}
            />
          </Switch> :
          <Switch>
            <Route
              path="/login"
              render={() => <Login onLogin={this.onLogin} />}
            />
            <Redirect to="/login" />
          </Switch>
        }

      </React.Fragment>
    )
  }
}

