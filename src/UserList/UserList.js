import './userList.scss';
import { UserPosts } from '../UserPosts';

export class UserList extends React.Component {
  state = {
    users: [],
    posts: [],
    currentUser: '',
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => this.setState({
        users: users.sort((prev, next) => prev.name > next.name)
      }));
  };

  getUserPosts = (id, userName) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
      .then(data => data.json())
      .then(posts => this.setState({
        posts,
        currentUser: userName
      }));
  };
  render() {
    return (
      <div className="userList">
        {
          this.state.users.length > 0 ?
            <ul className="userList__list">
              {this.state.users.map(user => (
                <li
                  onClick={() => this.getUserPosts(user.id, user.name)}
                  key={user.id}
                >
                  {user.name}
                </li>
              ))}
            </ul> : <div>No Users</div>
        }
        <UserPosts
          posts={this.state.posts}
          currentUser={this.state.currentUser}
        />

      </div>
    );
  }
}
