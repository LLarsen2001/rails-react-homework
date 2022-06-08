import axios from "axios";
import { useState } from "react";

const UpdateForm = (props) => {
  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);
  const [species, setSpecies] = useState(props.species);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(`/api/animals/${props.id}`, {
        name,
        age,
        species,
      });
      console.log(res);
      props.updateAnimal(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(props);
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <p>name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>species</p>
        <input value={species} onChange={(e) => setSpecies(e.target.value)} />
        <p>age</p>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default UpdateForm;
