export class Form extends React.Component {
  state = {
    name: undefined,
    age: undefined,
    role: undefined,
    authorized: false,
    users: ['Vasya', 'Petya', 'Admin']
  };


  handleChange = ({ target }) => {
    if ( target.type === 'checkbox') {
      this.setState({ [target.name]: target.checked });
      return;
    }
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { name, age, users, role, authorized } = this.state;
    return (
      <form>
        <input
          checked={authorized}
          type="checkbox"
          name="authorized"
          onChange={this.handleChange}
        />
        <select
          name="role"
          value={role}
          onChange={this.handleChange}
        >
          {users.map(user =>
            (<option
              key={user}
              value={user}
            >
              {user}
              </option>))}
        </select>
        <input
          type="text"
          onChange={this.handleChange}
          name="name"
          value={name}
        />
        <input
          type="number"
          onChange={this.handleChange}
          name="age"
          value={age}
        />
        <p>name: {
          name
        }</p>
        <p>age: {
          age
        }</p>
        <p>select: {
          role
        }</p>
        <button onClick={this.handleChange}>
          {
            name
          }
        </button>
      </form>
    );
  }
}
