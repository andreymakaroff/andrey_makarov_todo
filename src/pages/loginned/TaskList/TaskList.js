import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Ionicon from 'react-ionicons';

import './taskList.scss';
import {shortDaysWeek} from '../../../constants';
import {Tab, Tabs} from '../../../components/Tabs';
import {deleteTask, getTasks, updateTask} from '../../../services';
import {updateTaskList as updateTaskListStore} from '../../../store';

export class TaskListContainer extends Component {
  date = new Date().getDay();

  state = {
    selectedIndex: this.date,
  };

  componentDidMount() {
    this.updateTaskList();
  }

  handleAddNew = (day) => {
    this.props.history.push(`tasks/newTask/?day=${day}`);
  };

  updateTaskList = () => {
    getTasks()
      .then((taskList) => {
        this.props.dispatch(updateTaskListStore(taskList));
      });
  };

  handleDeleteTask = (id) => {
    deleteTask(id)
      .then(() => this.updateTaskList());
  };

  handleDoneTask = (task) => {
    task.done = true;
    updateTask(task)
      .then(() => this.updateTaskList());
  };

  handleInProgressTask = (task) => {
    task.done = false;
    updateTask(task)
      .then(() => this.updateTaskList());
  };

  render() {
    const { selectedIndex } = this.state;
    const { taskList } = this.props;
    return (

      <Tabs selectedIndex={selectedIndex}>
        {taskList.map((tasks, index) => (
          <Tab
            key={index}
            title={shortDaysWeek[index]}
          >
            <ol>
              {tasks.map(task =>
                (<li key={task.id}>
                  <React.Fragment>
                    <Link to={{pathname: `tasks/${task.id}`}}>
                      {task.done ?
                        <del>{task.title}</del> :
                        <span>{task.title}</span>
                      }
                    </Link>
                    {task.done ? null
                      :
                      <React.Fragment>
                        <Ionicon
                          icon="ios-construct-outline"
                          fontSize="20px"
                          color="blue"
                          rotate={task.done === false}
                          onClick={() => this.handleInProgressTask(task)}
                        />
                        <Ionicon
                          icon="ios-checkmark-circle-outline"
                          fontSize="20px"
                          color="green"
                          onClick={() => this.handleDoneTask(task)}
                        />
                      </React.Fragment>
                    }
                    <Ionicon
                      icon="ios-close-circle-outline"
                      fontSize="20px"
                      color="red"
                      onClick={() => this.handleDeleteTask(task.id)}
                    />
                  </React.Fragment>
                </li>))}
            </ol>
            <button
              onClick={() => this.handleAddNew(index)}
              className="btn btn-primary"
            >
              <Ionicon
                color="#fff"
                icon="ios-add-circle-outline"
              />
              Add new
            </button>
          </Tab>)
        )}
      </Tabs>
    );
  }
}


const mapStoreToProps = ({ taskList }) => ({
  taskList
});


export const TaskList =  withRouter(connect(mapStoreToProps)(TaskListContainer));
