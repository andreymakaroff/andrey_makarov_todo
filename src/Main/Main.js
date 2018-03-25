import './main.scss';

import { Aside } from '../Aside';
import { Content } from '../Content';

export const Main = () => (
  <main className="main">
    <Aside />
    <Content />
  </main>
);
