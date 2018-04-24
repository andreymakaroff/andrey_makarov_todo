import './notFound.scss';

export const NotFound = ({ location }) => (
  <div className="notFound">
    <h1>
      Page <em>{location.pathname.replace('/', '')}</em> - not exist
      <br />This page does not exist
    </h1>
    <img
      src="../images/404.png"
      alt="logo"
    />
  </div>
);
