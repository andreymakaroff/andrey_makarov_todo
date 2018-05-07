import { Route, Switch, Redirect } from 'react-router-dom';

import { Login, Registration, ThankYouPage, Contacts } from '../pages/';

export class UnLoginned extends Component {
  render() {
    return(
          <Switch>
            <Route
              path="/login"
              component={Login}
            />
            <Route
              path="/registration"
              component={Registration}
            />
            <Route
              path="/thank_you_page"
              component={ThankYouPage}
            />
            <Route
              path="/contacts"
              component={Contacts}
            />
            <Redirect to="/login" />
          </Switch>
    )
  }
}

