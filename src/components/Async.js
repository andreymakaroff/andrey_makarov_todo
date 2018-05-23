export class Async extends Component {
  state = {
    Async: null,
    error: ''
  }

  async componentDidMount() {
    try {
      const module = await import(/* webpackChunkName: 'async-mode' */`../${this.props.path}/`);
      const Async = module && module[this.props.name];

      if (Async) {
        this.setState({ Async });
      }
    } catch (error) {
      this.setState({ error: String(error) });
    }
  }

  render() {
    const { Async, error } = this.state;
    return error ? <span>Unable to load {this.props.name}</span> : Async && <Async />;
  }
}
