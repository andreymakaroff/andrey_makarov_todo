import { Route, Switch, Redirect } from 'react-router-dom';

import { Login, Registration, ThankYouPage } from '../pages/';


export class UnLoginned extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return(
          <Switch>
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
            <Redirect to="/login" />
          </Switch>
    )
  }
}

