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

  render() {
    return (
      <section className="tab">
        <TabNav
          list={
            this.props.tabs.map(({id, title}) => ({id, title}))
          }
          select={this.clickTab}
        />
        <TabContent content={this.state.content}/>
      </section>
    );
  }
}
