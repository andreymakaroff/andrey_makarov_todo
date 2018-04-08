import './form.scss';
import PropTypes from 'prop-types';

export class Form extends Component {
  constructor(props) {
    super(props);

    this.fields = [
      { label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/ },
      { label: 'first name', reg: /^[^ ]{3,20}$/ },
      { label: 'last name', reg: /^[^ ]{3,20}$/ },
      { label: 'password', reg: /^[^ ]{6,20}$/, secure: true },
      { label: 'repeat password', reg: /^[^ ]{6,20}$/, secure: true },
    ];

    this.state = {error: ''};
    this.fields.forEach(field => (this.state[field.label] = { value: '' }));
  }

  setValue = ({ target }) => {
    this.setState({
      [target.name]: { value: target.value }
    });
  }

  save = (event) => {
    const { state } = this;
    let error = '';

    event.preventDefault();
    if (state['password'].value !== state['repeat password'].value){
      error = 'Password should be same';
    }

    this.setState({ error });

    if (error) return;

    console.log(this.getFormValues());
  }

  validate = (index) => {
    const field = this.fields[index];
    let stateField = this.state[field.label];

    if (field.reg.test(stateField.value)) {
      stateField.error = '';
    } else {
      stateField.error = `${field.label} is invalid`;
    }

    this.setState({
      [field.label]: stateField
    });
  }

  getDisabledState()  {
    const { excluded = [], disabled = [] } = this.props;

    return this.fields
      .filter(({label}) => !excluded.includes(label) && !disabled.includes(label))
      .some(({label}) => {
        const {value, error} = this.state[label];
        return !value || error;
      });
  }

  getFormValues()  {
    const form = {};

    this.fields.forEach((field) => {
      form[field.label] = this.state[field.label].value
    });

    return form;
  }

  render() {
    const { state, fields } = this;
    const { excluded, disabled } = this.props;

    return (
      <form
        className="form"
        onSubmit={this.save}
      >
        <ul>{fields
          .filter(({label}) => !excluded.includes(label))
          .map(({ label, secure }, index) => {
          const stateField = state[label]; // this.state['email'] = { value: '' }

          return (
            <li key={label}>
              <input
                type={secure ? 'password' : 'text'}
                name={label}
                disabled={disabled.includes(label)}
                className={stateField.error === '' ? 'correct' : 'error'}
                placeholder={label.toUpperCase()}
                value={stateField.value}
                onChange={this.setValue}
                onBlur={() => this.validate(index)}
              />
              {stateField.error && <span>{stateField.error}</span>}
            </li>
          );
        })}
        </ul>
        {state.error && <span>{state.error}</span>}
        <input
          type="submit"
          value="Save"
          disabled={this.getDisabledState()}
        />
      </form>
    );
  }
}

Form.propTypes = {
  excluded: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.arrayOf(PropTypes.string)
};

Form.defaultProps = {
  excluded: [],
  disabled: []
};
