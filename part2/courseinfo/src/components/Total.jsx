const Total = ({ parts }) => {
  let sum = parts.reduce((acc, part) => acc + part.exercises, 0);
  return <strong>Total of {sum} exercises</strong>;
};

export default Total;
