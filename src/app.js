import ReactDom from 'react-dom';

import './styles.scss';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { Form } from './Form';
import { Tabs, Tab } from './Tabs';
import { TaskList } from './TaskList';

const tabs = [
  { id: 0, title: 'Tab 1', content: 'Some text is here' },
  { id: 1, title: 'Tab 2', content: 'Another content' },
  { id: 2, title: 'Tab 1', content: 'Third text' }
];


const component = (
  <React.Fragment>
    <Header />
    <TaskList />
    <Tabs>

      <Tab title="tab 1">
        <h2>Head 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae, blanditiis error excepturi fuga inventore maiores minima natus nihil officiis perferendis porro quam quibusdam quos rerum temporibus, velit vitae? Ipsum.</p>
      </Tab>

      <Tab title="tab 2">
        <h2>Head 2</h2>
        <p>uibusdam quos rerum temporibus, velit vitae? Ipsum.</p>
      </Tab>

    </Tabs>

    <Form excluded={['email']} disabled={['first name']} />
    {/* <Form /> */}
    <Main />
    <Footer />
  </React.Fragment>
);

ReactDom.render(component, document.getElementById('app'));
