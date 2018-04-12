import './buttonSwitcher.scss';

export class ButtonSwitcher extends React.Component {
  state = {
    active: false,
    nearestUser: {
      userName: '',
      distance: '',
    },
    location: {
      latitude: '',
      longitude: '',
    }
  };

  constructor(props) {
    super(props);
    this.getGeo();
  }

  handlerBtn = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };

  calcNearest = (users) => {
    let distance = Infinity;
    let userName = '';
    users.forEach((user) => {
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
        const result = Math.floor(12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km

        if (distance > result) {
          distance = result;
          userName = currentName;
        }
      };
      calcDistance(lat1, lon1, lat2, lon2);
    });
    this.setState({
      nearestUser: {
        userName,
        distance
      }
    });
  };
  handlerBtnNearest = () => {
    const asyncFn = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      await this.calcNearest(users);
    };
    asyncFn();
  };

  getGeo = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
        });
      },
      () => {
        console.log('Geo Location not supported');
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
        <div>Geo here:
          <div>
            latitude:{this.state.location.latitude}
          </div>
          <div>
            longitude:{this.state.location.longitude}
          </div>
        </div>

        <button
          onClick={this.handlerBtnNearest}
        >
          fetch and calc nearest user
        </button>

        {
          this.state.nearestUser.distance &&
          <p>
            {this.state.nearestUser.userName}<br />
            {this.state.nearestUser.distance} km.
          </p>
        }
        <p>
          {this.state.active && 'Hidden text here!'}
        </p>
      </div>
    );
  }
}
