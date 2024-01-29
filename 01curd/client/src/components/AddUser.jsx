import React, {useState } from "react";
import axios from 'axios';


const AddUser = () => {

    const users = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      };

  const [user, setUser] = useState(users);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]:value });
  };

  const submitForm = async(e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/create", user)
      .then((response) => {
        console.log(response);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="firstname">FirstName</label>
        <input
          type="text"
          onChange={inputHandler}
          autoComplete="off"
          name="firstname"
          placeholder="Type..."
        />

        <label htmlFor="firstname">lastname</label>
        <input
          type="text"
          onChange={inputHandler}
          autoComplete="off"
          name="lastname"
          placeholder="Type..."
        />

        <label htmlFor="firstname">email</label>
        <input
          type="text"
          onChange={inputHandler}
          autoComplete="off"
          name="email"
          placeholder="Type..."
        />

        <label htmlFor="firstname">password</label>
        <input
          type="text"
          onChange={inputHandler}
          autoComplete="off"
          name="password"
          placeholder="Type..."
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddUser;
