import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", number: 0 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const nameExists = persons.some((person) => person.name === newName);
    const numberExists = persons.some((person) => person.number === newNumber);

    if (nameExists) {
      alert(`${newName} is already added in the phonebook!`);
    } else if (numberExists) {
      alert(`The number ${newNumber} is already added in the phonebook!`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };

      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          <label>
            name:{" "}
            <input name="name" value={newName} onChange={handleNameChange} />
          </label>
        </div>
        <label>
          number:{" "}
          <input
            name="number"
            value={newNumber}
            onChange={handleNumberChange}
          />
        </label>
        <div></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
