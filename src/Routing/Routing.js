import { Loginned } from './Loginned';
import { UnLoginned } from './UnLoginned';


export const Routing = ({ login, setLoginState }) => (
  <React.Fragment>
    {login ?
      <Loginned />
      :
      <UnLoginned onLogin={setLoginState} />
    }
  </React.Fragment>
);

