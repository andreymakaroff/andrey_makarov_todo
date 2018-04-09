import PropTypes from 'prop-types';

import './tabs.scss';
import { TabNav } from './TabNav';
import { TabContent } from './TabContent';

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      id: 0
    };
  }

  clickTab = (id) => {
    this.setState({
      content: this.props.tabs[id].content,
      id
    });
  }

  componentDidMount() {
    this.clickTab(0);
  }

  render() {
    return (
      <section className="tab">
        <TabNav
          list={
            this.props.tabs.map(({ id, title }) => ({ id, title }))
          }
          active={this.state.id}
          select={this.clickTab}
        />
        <TabContent content={this.state.content} />
      </section>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object),
};

Tabs.defaultProps = {
  tabs: [],
};

