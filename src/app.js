import ReactDom from 'react-dom';

import { Header } from './Header';
import { Greating } from './Greating';
import { Numbers } from './Numbers';
import { UsersList } from './UsersList';

const component = (
  <React.Fragment>
    <Header />
    <Greating name="Petro" />
    <div style={{ display: 'flex' }}>
      <Numbers
        from={1}
        to={10}
        odd
      />
      <Numbers
        from={1}
        to={10}
        even
      />
      <Numbers
        from={1}
        to={10}
      />
    </div>
    <UsersList />
  </React.Fragment>
);

ReactDom.render(component, document.getElementById('app'));
