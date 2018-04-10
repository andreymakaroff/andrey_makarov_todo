import './tabs.scss';
import { TabNav } from './TabNav';
import { Tab } from './Tab';

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }

  clickTab = (id) => {
    this.setState({ id });
  };

  render() {
    const tabs = this.props.children.filter(child => child.type === Tab);
    const links = tabs.map(tab => tab.props.title || 'No name tab');
    const contents = tabs.map(tab => tab.props.children);

    return (
      <section className="tab">
        <TabNav
          list={links}
          select={this.clickTab}
          activeIndex={this.state.id}
        />
        <div className="tab-content">
          {contents[this.state.id] }
        </div>

      </section>
    );
  }
}
