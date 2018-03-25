import ReactDom from 'react-dom';

import { Header } from './Header';

const component = (
  <React.Fragment>
    <Header />
  </React.Fragment>
);

ReactDom.render(component, document.getElementById('app'));
