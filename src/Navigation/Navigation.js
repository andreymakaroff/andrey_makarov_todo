import './navigation.scss';

export const Navigation = ({ list }) => (
  <ul>
    {list.map(item => <li key={item}><a href={`/${item.toLowerCase()}`}>{item}</a></li>)}
  </ul>
);
