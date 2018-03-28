import './buttonSwitcher.scss';

export class ButtonSwitcher extends React.Component {
  state = {
    active: false
  };

  handlerBtn = () => {
    this.setState(prevState => ({ active: !prevState.active }));
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

        <p>
          {this.state.active && 'Hidden text here!'}
        </p>
      </div>
    );
  }
}
