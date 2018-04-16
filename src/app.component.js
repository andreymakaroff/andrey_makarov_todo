import './styles.scss';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { Form } from './Form';
import { Tabs, Tab } from './Tabs';
import { TaskList } from './TaskList';


import { UserList } from './UserList';
import { Gallery } from './Gallery';


export const App = () => (
  <React.Fragment>
    <Header />
    <TaskList />

    <Tabs selectedIndex={1}>
      <Tab title="tab 1">
        <UserList />
      </Tab>

      <Tab title="tab 2">
        <Gallery />
      </Tab>
    </Tabs>

    <Form excluded={['email']} disabled={['first name']} />
    {/* <Form /> */}
    <Main />
    <Footer />
  </React.Fragment>
);

