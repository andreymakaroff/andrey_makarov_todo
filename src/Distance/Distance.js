export class Distance extends React.Component {
  state = {
    nearestUser: ''
  };


  calcDistance = (lat1, lon1, lat2, lon2) => {
    const lat2 =

    const p = Math.PI / 180;
    const c = Math.cos;
    const a = 0.5 - c((lat2 - lat1) * p) / 2 +
      c(lat1 * p) * c(lat2 * p) *
      (1 - c((lon2 - lon1) * p)) / 2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  };

  render() {
    return (
      <div>
        <button>
          Get position!
        </button>
        <button onClick={this.calcDistance}>
          Get nearest user!
        </button>
        <p>{this.nearestUser}</p>
      </div>
    );
  }
}
