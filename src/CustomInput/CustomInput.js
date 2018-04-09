import './customInput.scss';

export class CustomInput extends React.Component {
  state = {
    editable: false,
    value: 'vdfvd',
    // value: '',
  };

  constructor(props){
    super(props);
  }

  handleBlur(e) {
    this.setState({
      editable: false,
      value: e.target.value
    });
    this.props.onloose(e.target.value);
  }

  handleEditField(e) {
    this.setState({ value: e.target.value });
    // this.props.onloose(e.target.value);
  }

  handleStartEditField = () => {
    this.setState({
      editable: true,
    });
  };

  render() {
    const { editable, value } = this.state;

    return (
      <div>
        {
          editable ? (
            <input
              type="text"
              className="customInput__input"
              value={value}
              onBlur={e => this.handleBlur(e)}
              onChange={e => this.handleEditField(e)}
            />) :
            <span
              onClick={this.handleStartEditField}
              className="customInput__value"
            >{value}</span>
        }
      </div>
    );
  }
}
