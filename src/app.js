import ReactDom from 'react-dom';

import './styles.scss';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { Form } from './Form';
import { Tabs } from './Tabs';

const tabs = [
  { id: 0, title: 'Tab 1', content: 'Some text is here' },
  { id: 1, title: 'Tab 2', content: 'Another content' },
  { id: 2, title: 'Tab 1', content: 'Third text' }
];


const component = (
  <React.Fragment>
    <Header />
    <Tabs tabs={tabs} />
    <Form excluded={['email']} disabled={['first name']} />
    {/* <Form /> */}
    <Main />
    <Footer />
  </React.Fragment>
);

ReactDom.render(component, document.getElementById('app'));
