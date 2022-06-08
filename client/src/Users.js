import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import UserForm from "./UserForm";
import UpdateForm from "./UpdateUserForm";

function Users() {
  const [Users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const addUser = (User) => {
    setUsers([User, ...Users]);
  };

  const deleteUser = (id) => {
    let newUsers = Users.filter((d) => d.id !== id);
    setUsers(newUsers);
  };
  const updateUser = (User) => {
    let updatedUser = Users.map((d) => (d.id === User.id ? User : d));
    setUsers(updatedUser);
  };
  const getUsers = async () => {
    try {
      let res = await axios.get("/api/users");
      // it is not always going to be res.data
      console.log("res", res);
      setUsers(res.data);
      setLoading(false);
    } catch (err) {
      // check
      alert("error occured");
      setError(err);
      setLoading(false);
    }
  };

  const renderUsers = () => {
    if (loading) {
      return <p>loading</p>;
    }
    if (error) {
      return <p>{JSON.stringify(error)}</p>;
    }
    return Users.map((d) => {
      return (
        <div key={d.id} style={{ margin: "20px", border: "1px solid" }}>
          <h1>Name: {d.username}</h1>
          <h2>
            Age:
            {d.age}
          </h2>
          <button onClick={() => deleteUser(d.id)}>delete</button>
          <UpdateForm {...d} updateUser={updateUser} />
        </div>
      );
    });
  };

  return (
    <div className="User comp">
      <UserForm addUser={addUser} />
      <h1>Users</h1>
      <div>{renderUsers()}</div>
    </div>
  );
}

export default Users;
