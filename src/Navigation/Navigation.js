import './navigation.scss';

export const Navigation = (props) => (
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Product</a></li>
      {
        props.isLogin &&
        <li><a href="#">My Account</a></li>
      }
    </ul>
  </nav>
);
