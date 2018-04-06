import ReactDom from 'react-dom';

import './styles.scss';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { Form } from './Form';

const component = (
  <React.Fragment>
    <Header />
    <Form excluded={['email']} disabled={['first name']} />
    {/* <Form /> */}
    <Main />
    <Footer />
  </React.Fragment>
);

ReactDom.render(component, document.getElementById('app'));
