import './tabs.scss';

export const TabNav = ({ list, select, activeIndex }) => {
  const onClick = (e, id) => {
    select(id);
    e.preventDefault();
  };

  return (
    <nav className="nav-tab">
      <ul>
        {list.map((el, index) =>
          (<li
            key={index}
            className={activeIndex === index ? 'active' : ''}
          >
            <a
              href="/"
              onClick={e => onClick(e, index)}
            >
              {el}
            </a>
          </li>))
        }
      </ul>
    </nav>);
};

