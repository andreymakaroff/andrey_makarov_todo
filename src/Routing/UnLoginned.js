import { Route, Switch, Redirect } from 'react-router-dom';

import { Login, Registration, ThankYouPage, Contacts } from '../pages/';

export class UnLoginned extends Component {
  render() {
    return(
          <Switch>
            {/*<Route*/}
              {/*path="/"*/}
              {/*exact*/}
              {/*render={}*/}
            {/*/>*/}
            <Route
              path="/login"
              render={() => <Login onLogin={this.props.onLogin} />}
            />
            <Route
              path="/registration"
              render={() => <Registration />}
              component={Registration}
            />
            <Route
              path="/thank_you_page"
              render={() => <ThankYouPage />}
              component={ThankYouPage}
            />
            <Route
              path="/contacts"
              render={() => <Contacts />}
            />
            <Redirect to="/login" />
          </Switch>
    )
  }
}

