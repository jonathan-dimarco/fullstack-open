const PersonForm = ({
  submitHandler,
  newName,
  nameHandler,
  newNumber,
  numberHandler,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>
          Name:
          <input name="name" value={newName} onChange={nameHandler} />
        </label>
      </div>
      <label>
        Number:
        <input name="number" value={newNumber} onChange={numberHandler} />
      </label>
      <div>
        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
};

export default PersonForm;
