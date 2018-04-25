import { Loginned } from './Loginned';
import { UnLoginned } from './UnLoginned';


export const Routing = ({ user, setLoginState }) => (
  <React.Fragment>
    {user ?
      <Loginned />
      :
      <UnLoginned onLogin={setLoginState} />
    }
  </React.Fragment>
);

