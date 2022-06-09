import axios from "axios";
import { useState } from "react";
import UpdateForm from "./UpdateAnimalForm";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ username, age });
    try {
      let res = await axios.post("/api/users", { username, age });
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
        <p>Username</p>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
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
export default UserForm;
