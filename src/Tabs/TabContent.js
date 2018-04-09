import PropTypes from 'prop-types';
import { Tabs } from './Tabs';

export const TabContent = ({ content }) => (
  <section className="tab-content">
    <div>{content}</div>
  </section>
);


TabContent.propTypes = {
  content: PropTypes.string,
};

TabContent.defaultProps = {
  content: '',
};
