import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
// import AnimalForm from "./AnimalForm";

function App() {
  const [animals, setAnimals] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAnimals();
  }, []);

  const getAnimals = async() =>{
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
  }

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
          <h1>
            {d.name}: {d.age}
          </h1>
        </div>
      );
    });
  };

  return <div className="App">
    <h1>Animals</h1>
    <div>{renderAnimals()}</div>
  </div>;
}

export default App;