import { Loginned } from './Loginned';
import { UnLoginned } from './UnLoginned';


export const Routing = ({ user }) => (
  <React.Fragment>
    {user ?
      <Loginned />
      :
      <UnLoginned />
    }
  </React.Fragment>
);

