import './tabs.scss';
import { TabNav } from './TabNav';
import { Tab } from './Tab';

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.selectedIndex ? props.selectedIndex : 0
    };
  }

  clickTab = (index) => {
    this.setState({ selectedIndex: index });
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
          activeIndex={this.state.selectedIndex}
        />
        <div className="tab-content">
          {contents[this.state.selectedIndex] }
        </div>

      </section>
    );
  }
}
