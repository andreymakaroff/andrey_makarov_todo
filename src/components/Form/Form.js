import './form.scss';

export class Form extends Component {
  static get fields() {
    return [
      { id: 'email', label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/ },
      { id: 'firstName', label: 'first name', reg: /^[^ ]{3,20}$/ },
      { id: 'lastName', label: 'last name', reg: /^[^ ]{3,20}$/ },
      { id: 'password', label: 'password', reg: /^[^ ]{6,20}$/, secure: true },
      { id: 'repeatPassword', label: 'repeat password', reg: /^[^ ]{6,20}$/, secure: true }
    ];
  }

  constructor(props) {
    super(props);

    this.fields = Form.fields;

    this.state = {
      error: ''
    };
    this.fields.forEach(field => (this.state[field.id] = { value: '' }));
  }

  static getDerivedStateFromProps(nextProps) {
    if (!nextProps.data) {
      return null;
    }

    const state = {};

    Form.fields.forEach(({ id }) => (state[id] = { value: nextProps.data[id] }));

    return state;
  }

  setValue = ({ target }) => {
    this.setState({
      [target.name]: { value: target.value }
    });
  };

  validate = (index) => {
    const field = this.fields[index];
    const stateField = this.state[field.id];

    if (field.reg.test(stateField.value)) {
      stateField.error = '';
    } else {
      stateField.error = `${field.label} is invalid`;
    }

    this.setState({
      [field.id]: stateField
    });
  };

  getDisabledState() {
    return this.getActualFields()
      .some(({ id }) => {
        const { value, error } = this.state[id];
        return !value || error;
      });
  }

  save = (event) => {
    const { state } = this;
    let error = '';

    event.preventDefault();


    // console.log(this.props.excluded.indexOf('repeatPassword')

    if ((this.props.excluded.indexOf('repeatPassword') === -1)&&(state.password.value !== state.repeatPassword.value)) {
      error = 'Passwords should be the same';
    }

    this.setState({ error });

    if (error) return;

    this.props.onSubmit(this.getFormValue());
  };

  getFormValue() {
    const form = {};

    this.fields
      .filter(field => !this.props.excluded.includes(field.id))
      .filter(field => !this.props.skipped.includes(field.id))
      .forEach(field => form[field.id] = this.state[field.id].value);

    return form;
  }

  getActualFields() {
    return this.fields
      .filter(field => !this.props.excluded.includes(field.id))
      .filter(field => !this.props.skipped.includes(field.id))
      .filter(field => !this.props.disabled.includes(field.id));
  }

  render() {
    const { state, fields } = this;
    const { excluded, disabled } = this.props;

    return (
      <form
        className="form"
        onSubmit={this.save}
      >
        <div>{fields
          .filter(({ id }) => !excluded.includes(id))
          .map(({ label, secure, id }, index) => {
            const stateField = state[id];

            return (
              <div
                className="form-group"
                key={label}
              >
                <label htmlFor={label}>{label}</label>
                <input
                  type={secure ? 'password' : 'text'}
                  name={id}
                  id={id}
                  className={stateField.error ? 'error form-control' : 'correct form-control'}
                  placeholder={label.toUpperCase()}
                  value={stateField.value}
                  onChange={this.setValue}
                  onBlur={() => this.validate(index)}
                  disabled={disabled.includes(id)}
                />
                {stateField.error && <span className="form-text text-muted">{stateField.error}</span>}
              </div>
            );
          })}
        </div>

        {state.error && <div className="alert alert-danger">{state.error}</div>}

        <input
          type="submit"
          value="Save"
          className="btn btn-primary"
          disabled={this.getDisabledState()}
        />
      </form>
    );
  }
}

Form.defaultProps = {
  excluded: [],
  disabled: [],
  skipped: [],
  onSubmit: _=>_
};