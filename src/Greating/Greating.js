export const Greating = ({ name }) => {
  let partOfDay = '';
  const hours = new Date().getHours();

  if (hours > 3 && hours <= 12) {
    partOfDay = 'morning';
  } else if (hours > 12 && hours <= 18) {
    partOfDay = 'afternoon';
  } else if (hours > 18 && hours <= 22) {
    partOfDay = 'evening';
  } else {
    partOfDay = 'night';
  }

  return <div>Good {partOfDay}{name && `, ${name}`}!</div>;
};
