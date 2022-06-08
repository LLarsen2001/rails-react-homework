import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import AnimalForm from "./AnimalForm";
import UpdateForm from "./UpdateAnimalForm";

function App() {
  const [animals, setAnimals] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAnimals();
  }, []);

  const addAnimal = (animal) => {
    setAnimals([animal, ...animals]);
  };

  const deleteAnimal = (id) => {
    let newAnimals = animals.filter((d) => d.id !== id);
    setAnimals(newAnimals);
  };
  const updateAnimal = (animal) => {
    let updatedAnimal = animals.map((d) => (d.id === animal.id ? animal : d));
    setAnimals(updatedAnimal);
  };
  const getAnimals = async () => {
    try {
      let res = await axios.get("/api/animals");
      // it is not always going to be res.data
      console.log("res", res);
      setAnimals(res.data);
      setLoading(false);
    } catch (err) {
      // check
      alert("error occured");
      setError(err);
      setLoading(false);
    }
  };

  const renderAnimals = () => {
    if (loading) {
      return <p>loading</p>;
    }
    if (error) {
      return <p>{JSON.stringify(error)}</p>;
    }
    return animals.map((d) => {
      return (
        <div key={d.id} style={{ margin: "20px", border: "1px solid" }}>
          <h1>Name: {d.name}</h1>
          <h2>Species: {d.species}</h2>
          <h2>
            Age:
            {d.age}
          </h2>
          <button onClick={() => deleteAnimal(d.id)}>delete</button>
          <UpdateForm {...d} updateAnimal={updateAnimal} />
        </div>
      );
    });
  };

  return (
    <div className="App">
      <AnimalForm addAnimal={addAnimal} />

      <h1>Animals</h1>
      <div>{renderAnimals()}</div>
    </div>
  );
}

export default App;
