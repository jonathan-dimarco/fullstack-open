const PersonList = ({ persons, deleteHandler }) => {
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => deleteHandler(person.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
