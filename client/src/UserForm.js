import axios from "axios";
import { useState } from "react";
import UpdateForm from "./UpdateAnimalForm";

const AnimalForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, age });
    try {
      let res = await axios.post("/api/users", { name, age });
      console.log(res.data);
      props.addUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <p>name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
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
export default AnimalForm;
