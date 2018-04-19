import { Route, Switch, Redirect } from 'react-router-dom';

import { Login } from './Login';
import { TaskList } from './TaskList';
import { Main } from './Main';

export class Routing extends Component {
  // state = {
  //   name: false
  // };
  //
  // onLogin = (login) => {
  //   this.setState({ login });
  // };
  // componentDidMount(){
  //   setTimeout(() => this.setState({login:true}), 2000)
  // }

  render(){
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
              path="/tasks"
              component={TaskList}
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

