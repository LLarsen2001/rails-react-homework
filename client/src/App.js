import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [animals, setAnimals] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAnimals();
  }, []);

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
        </div>
      );
    });
  };

  return (
    <div className="App">
      <h1>Animals</h1>
      <div>{renderAnimals()}</div>
    </div>
  );
}

export default App;