import './buttonSwitcher.scss';

export class ButtonSwitcher extends React.Component {
  state = {
    active: false,
    user: '',
    users: [],
    nearestUser: {
      userName: '',
      distance: '',
    },
    location: {
      latitude: '',
      longitude: '',
    }
  };
  constructor(props){
    super(props);
    this.getGeo();
  }

  handlerBtn = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };
  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => this.setState({
        users,
      }))
  };
  handlerBtnNearest = () => {
    let distance = Infinity;
    let userName = '';
    this.state.users.map(user => {
      const currentName = user.name;
      const lat1 = user.address.geo.lat;
      const lon1 = user.address.geo.lng;
      const lat2 = this.state.location.latitude;
      const lon2 = this.state.location.longitude;

      const calcDistance = (lat1, lon1, lat2, lon2) => {
        const p = Math.PI / 180;
        const c = Math.cos;
        const a = 0.5 - c((lat2 - lat1) * p) / 2 +
          c(lat1 * p) * c(lat2 * p) *
          (1 - c((lon2 - lon1) * p)) / 2;

        const result = 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
        if (distance > result) {
          distance = result;
          userName = currentName;
        }
        console.log(result, currentName);
      };
      console.log(calcDistance(lat1, lon1, lat2, lon2));
    });
    this.setState({
      nearestUser: {
        userName,
        distance
      }
    });
  };
  getGeo = () => {
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
        <br/>

        <button
          className={`buttonSwitcher__btn ${this.state.active && 'active'}`}
          onClick={this.getUsers}
        >
          getUsers
        </button>
        <button
          className={`buttonSwitcher__btn ${this.state.active && 'active'}`}
          onClick={this.handlerBtnNearest}
        >
          handlerBtnNearest
        </button>

        <b>
          {this.state.user}
        </b>
        <b>
          {this.state.nearestUser.userName}<br/>
          {this.state.nearestUser.distance}
        </b>

        <p>
          {this.state.active && 'Hidden text here!'}
        </p>
      </div>
    );
  }
}
