import ReactDom from 'react-dom';

import './styles.scss';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { Form } from './Form';
import { CustomInput } from './CustomInput';

const fn = text => console.log(text);

const component = (
  <React.Fragment>
    <Header />
    <CustomInput onloose={fn} />
    <Form excluded={['email']} disabled={['first name']} />
    {/* <Form /> */}
    <Main />
    <Footer />
  </React.Fragment>
);

ReactDom.render(component, document.getElementById('app'));
