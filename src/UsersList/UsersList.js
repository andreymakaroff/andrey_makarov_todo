import { users } from '../constants';
import { UserName } from '../UserName';

export const UsersList = () => (
  <ul>
    {users.map(user => <li key={user.id}><UserName user={user} /></li>)}
    {/* <CmpntName firstName=''  lastName='' age='' /> // но так слишком просто, прокинул объект */}
  </ul>
);

