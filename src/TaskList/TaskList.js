import './taskList.scss';

import { Tabs, Tab } from '../Tabs';

export class TaskList extends Component {
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
    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const tasksPerWeek = [
      [
        {
          "description": "Some description is here",
          "title": "Read book",
          "day": 0,
          "id": "00",
          "done": true
        },
        {
          "description": "",
          "title": "Write new article",
          "day": 0,
          "id": "01",
          "done": false
        },
        {
          "title": "Do exercises",
          "day": 0,
          "id": "02"
        },
        {
          "title": "Cleaning Room",
          "day": 0,
          "id": "03"
        },
        {
          "title": "Change oil",
          "day": 0,
          "id": "04"
        },
        {
          "title": "New 10",
          "description": "",
          "day": "0",
          "id": "05"
        },
        {
          "title": "New 02",
          "description": "",
          "day": "0",
          "id": "06"
        }
      ],
      [
        {
          "description": "Make home tasks (math, geo)",
          "title": "Make homework",
          "day": 1,
          "id": "10"
        }
      ],
      [
        {
          "description": "",
          "title": "Go to gym",
          "day": "2",
          "id": "20"
        },
        {
          "description": "OKEY",
          "title": "Play PC",
          "day": "2",
          "id": "21"
        }
      ],
      [],
      [],
      [
        {
          "title": "Visit grandma",
          "day": 5,
          "id": "50",
          "done": true
        }
      ],
      [
        {
          "description": "watch King Lion, How to Train Your Dragon",
          "title": "Watch cartoons",
          "day": 6,
          "id": "60"
        }
      ]
    ];

    return (
      <Tabs>
        {tasksPerWeek.map((tasks, index) =>
          <Tab
            title={days[index]}
            key={index}
          >
            <ol>
              {tasks.map(task => <li key={tasks.id}>{task.title}</li>)}
            </ol>
            <button>Add new</button>
          </Tab>
        )}
      </Tabs>
    );
  }
}
