import './main.scss';

import { UserInfo } from '../../UserInfo';

export class Main extends React.Component {
  render() {
    return (
      <main className="main" >
        <UserInfo />
      </main>
    );
  }
}
