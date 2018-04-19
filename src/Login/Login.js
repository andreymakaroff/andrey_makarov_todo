import './login.scss';

export const Login = ({ onLogin }) => {
  const submit = (e) => {
    const value = e.target.name.value;

    e.preventDefault();

    setTimeout(() => {
      onLogin(value);
    }, 500);
  };
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        required
      />
      <input
        type="password"
        placeholder="Password"
        required
      />
      <input
        type="submit"
        value="Логин"
      />
    </form>
  );
};
