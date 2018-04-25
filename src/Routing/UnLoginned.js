import { Route, Switch, Redirect } from 'react-router-dom';

import { Login } from '../pages/Login';


export class UnLoginned extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
          <Switch>
            <Route
              path="/login"
              render={() => <Login onLogin={this.props.onLogin} />}
            />
            <Redirect to="/login" />
          </Switch>
    )
  }
}

