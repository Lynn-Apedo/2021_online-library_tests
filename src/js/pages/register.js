import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../utils/api";
import axios from 'axios'

import Inputgroup from "../components/inputgroup";
import Button from "../components/button";
import Ban from "../components/ban";

const Register = () => {
  let history = useHistory();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (inputValue, inputName) => {
    if (inputName === "firstname") setFirstname(inputValue);
    if (inputName === "lastname") setLastname(inputValue);
    if (inputName === "email") setEmail(inputValue);
    if (inputName === "password") setPassword(inputValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      firstname,
      lastname,
      email,
      password,
      role: "admin",
    };

    // const result = await axios.post("/admin/register", body);

    try {
      const result = await api.post("/admin/register", body);
      console.log("RESULT", result.config.baseURL)
      console.log(result.status, "STATUS");
      if (result.status === 201) {
        history.push("/login");
        console.log("200 OK");
      }
    } catch (error) {
      console.log("connection failed");
      console.error(error.message);
    }
  };
  return (
    <div>
      <Ban />
      <h1>Register page !</h1>
      <form onSubmit={handleSubmit}>
        <Inputgroup type="text" name="firstname" value={handleChange} />
        <Inputgroup type="text" name="lastname" value={handleChange} />
        <Inputgroup type="email" name="email" value={handleChange} />
        <Inputgroup
          type="password"
          name="password"
          minlength="8"
          value={handleChange}
        />
        <Button name="Register" />
      </form>
    </div>
  );
};

export default Register;
