import {
  getTask,
  updateTask,
  createTask
} from '../../services';
import { shortDaysWeek } from '../../constants';

export class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      id: null,
    };
  }

  componentDidMount() {
    const { task } = this.props.match.params;

    if (task === 'newTask') {
      this.setState({ day: this.getDay() });
      return;
    }

    getTask(task)
      .then(task => this.setState({ ...task }));
  }

  getDay() {
    return this.props.location.search.replace(/\D+/, '') || '';
  }

  handleUpdateTask = (event) => {
    const { task } = this.props.match.params;

    event.preventDefault();

    if (task === 'newTask') {
      const { day, title, description } = this.state;
      createTask({ day, title, description })
        .then(this.props.history.push('/tasks'));
      return;
    }

    updateTask(this.state)
      .then(this.props.history.push('/tasks'));
  };

  onChange = (event) => {
    const { target } = event;

    this.setState({ [target.name]: target.value });
  };

  render() {
    const { title, description, day } = this.state;

    return (
      <form
        onSubmit={this.handleUpdateTask}
      >
        <p>Day: {shortDaysWeek[day]}</p>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.onChange}
          placeholder="Enter a title"
          required
        />
        <br />
        <br />
        <textarea
          name="description"
          cols="30"
          rows="10"
          value={description}
          onChange={this.onChange}
        />

        <br />
        <br />
        <input
          type="submit"
          value="Save"
        />
      </form>
    );
  }
}