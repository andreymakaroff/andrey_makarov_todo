export const Numbers = ({
  from, to, even, odd
}) => {
  const arr = [];
  for (let i = from; i <= to; i++) {
    if (odd) {
      if (i % 2) {
        arr.push(i);
      }
    } else if (even) {
      if (!(i % 2)) {
        arr.push(i);
      }
    } else {
      arr.push(i);
    }
  }

  return (
    <ul>
      {arr.map(item => <li>{item}</li>)}
    </ul>
  );
};
