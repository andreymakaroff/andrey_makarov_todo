import { Link } from 'react-router-dom';

import { getTasks, deleteTask } from '../../../services/index';
import './taskList.scss';

import { shortDaysWeek } from '../../../constants';
import { Tabs, Tab } from '../../../components/Tabs';

export class TaskList extends Component {
  date = new Date().getDay();

  state = {
    taskInWeek: [],
    selectedIndex: this.date,
  };

  componentDidMount() {
    this.updateTaskList();
  }

  handleAddNew = (day) => {
    this.props.history.push(`tasks/newTask/?day=${day}`);
  };

  updateTaskList = () => {
    console.log('sss');
    getTasks()
      .then(taskInWeek => this.setState({ taskInWeek })); // загружаем taskInWeek
  };

  handleDeleteTask = (id) => {
    deleteTask(id)
      .then(() => this.updateTaskList());
  };

  render() {
    const { taskInWeek, selectedIndex } = this.state;
    return (

      <Tabs selectedIndex={selectedIndex}>
        {taskInWeek.map((tasks, index) => (
          <Tab
            key={index}
            title={shortDaysWeek[index]}
          >
            <ol>
              {tasks.map(task =>
                (<li key={task.id}>
                  <Link to={{
                    pathname: `tasks/${task.id}`,
                  }}>
                    {task.title}
                  </Link>
                  <button onClick={() => this.handleDeleteTask(task.id)}>del</button>
                </li>)
              )}
            </ol>
            <button onClick={() => this.handleAddNew(index)}>Add new</button>
          </Tab>)
        )}
      </Tabs>
    );
  }
}
