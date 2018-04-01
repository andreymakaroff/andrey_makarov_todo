import './buttonSwitcher.scss';

export class ButtonSwitcher extends React.Component {
  state = {
    active: false,
    user: '',
    users: '',
    location: {
      latitude: '',
      longitude: '',
    }
  };

  handlerBtn = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };
  getUsers = () => {

  };
  handlerBtnNearest = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
        });
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(data => data.json())
          .then(users => this.setState({
            users: users.sort((prev, next) => prev.name > next.name)
          }));

        this.setState({
          user: 'fgbfgb'
        });
      },
      () => {
        alert("Geo Location not supported");
      }
    );
  };
  handlerBtnGeo = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
        });
      },
      () => {
        alert("Geo Location not supported");
      }
    );
  };

  render() {


    return (
      <div className="buttonSwitcher__wrapper">
        <button
          className={`buttonSwitcher__btn ${this.state.active && 'active'}`}
          onClick={this.handlerBtn}
        >
          {this.state.active ? 'Hide' : 'Show'}
        </button>
        <button
          className={`buttonSwitcher__btn ${this.state.active && 'active'}`}
          onClick={this.handlerBtnGeo}
        >
          GEO
          {this.state.location.latitude}
          {this.state.location.longitude}
        </button>
        <button
          className={`buttonSwitcher__btn ${this.state.active && 'active'}`}
          onClick={this.handlerBtnNearest}
        >
          nearest
          {this.state.user}
        </button>
        <b>
          {this.state.user}
        </b>
        <p>
          {this.state.active && 'Hidden text here!'}
        </p>
      </div>
    );
  }
}
