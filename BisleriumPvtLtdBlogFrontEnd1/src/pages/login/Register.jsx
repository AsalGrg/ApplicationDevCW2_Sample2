import { Button, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import register_user from "../../services/registerUser";

const Register = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleRegisterUser() {
    const res = await register_user({
      email: email,
      password: password,
      username: username,
    });


    if (res.ok) {
      console.log('here')
      return navigate(`/verifyEmail?email=${email}&token=`);
    }
  }
  return (
    <div
      className="d-flex w-100 align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <div
        className="w-25"
        style={{
          height: "300px",
        }}
      >
        <div className="d-flex flex-column gap-3">
          <h1 className="display-6 fw-bold text-center">Register</h1>

          <TextInput
            label="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />

          <TextInput
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <Button onClick={handleRegisterUser}>Register</Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
