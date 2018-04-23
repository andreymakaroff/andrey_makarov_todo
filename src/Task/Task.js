import './task.scss';


export class Task extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props.location.state.task);
  }

  onChange = (e) => {
    const { target } = e;
    this.setState({
      [target.name]: target.value
    })
  }

  render() {
    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    return (
      <form >
        <p>Day: {days[this.state.day]}</p>
        <div>
          <input
            type="text"
            name="tasksName"
            value={this.state.title}
            onChange={this.onChange}
          />
        </div>
        <div>
          <textarea name="tasksDescr" rows="3">{this.state.description}</textarea>
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>
    );
  }
}
