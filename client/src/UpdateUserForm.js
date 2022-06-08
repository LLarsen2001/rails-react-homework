import axios from "axios";
import { useState } from "react";

const UpdateAnimalForm = (props) => {
  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(`/api/users/${props.id}`, {
        name,
        age,
      });
      console.log(res);
      props.updateUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(props);
  return (
    <div>
      <div>
        <button onClick={() => setShow(!show)}>Edit</button>
        {show && (
          <>
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
              <button>Save Changes</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
export default UpdateAnimalForm;
