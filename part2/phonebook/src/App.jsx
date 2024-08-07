import { useEffect, useState } from "react";
import personsService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personsService
      .getAll()
      .then((initialPersons) => {
        //console.log(initialPersons);
        setPersons(initialPersons);
      })
      .catch((error) => alert(`${error.message}`));
  }, []);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const personsToShow =
    filter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  const addPerson = (event) => {
    event.preventDefault();

    const nameExists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    const numberExists = persons.some((person) => person.number === newNumber);

    if (numberExists) {
      alert(`The number ${newNumber} is already added in the phonebook!`);
    } else if (nameExists) {
      if (
        window.confirm(
          `${newName} is already added in the phonebook, replace the old number with a new one?`
        )
      ) {
        const person = persons.find(
          (person) => person.name.toLowerCase() === newName.toLowerCase()
        );

        const newPerson = {
          ...person,
          number: newNumber,
        };

        personsService
          .update(person.id, newPerson)
          .then(
            (updatedPerson) =>
              setPersons(
                persons.map((p) => (p.id !== person.id ? p : updatedPerson))
              ),
            setNewName(""),
            setNewNumber("")
          )
          .catch((error) => alert(`${error.message}`));
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      personsService
        .create(newPerson)
        .then((person) => {
          //console.log(person);
          setPersons(persons.concat(person));
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => alert(`${error.message}`));
    }
  };

  const deletePerson = (id) => {
    console.log(id);
    const personToDelete = persons.filter((person) => person.id === id);
    const name = personToDelete[0].name;
    if (window.confirm(`Delete ${name}?`)) {
      personsService
        .remove(id)
        .then((removedPerson) => {
          console.log(`${name} deleted succesfully`);
          setPersons(
            persons.filter((person) => person.id !== removedPerson.id)
          );
        })
        .catch((error) => alert(`${error.message}`));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter name="Filter" value={filter} filterHandler={handleFilterChange} />

      <h2>Add a new Contact</h2>
      <PersonForm
        submitHandler={addPerson}
        newName={newName}
        nameHandler={handleNameChange}
        newNumber={newNumber}
        numberHandler={handleNumberChange}
      />

      <h2>Numbers</h2>
      <PersonList persons={personsToShow} deleteHandler={deletePerson} />
    </div>
  );
};

export default App;
