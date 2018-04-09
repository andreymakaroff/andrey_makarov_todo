export class Time extends React.Component {
  state = {
    time: '',
  };

  componentDidMount() {
    this.timer = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateTime = () => {
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    this.setState({
      time
    });
  };

  render() {
    const { time } = this.state;
    return <p>{ time }</p>;
  }
}
