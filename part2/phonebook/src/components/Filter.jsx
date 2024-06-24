const Filter = ({ name, value, filterHandler }) => {
  return (
    <div>
      <label>
        {name}: <input name={name} value={value} onChange={filterHandler} />
      </label>
    </div>
  );
};

export default Filter;
