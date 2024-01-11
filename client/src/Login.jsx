import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3000/user/login", {
      username: email,
      password: password,
    });
    let data = response.data;
    let name = data.user.username;
    setName(name);
    // localStorage.setItem("token", "something");

    navigate("/weather", { state: { name } });
  };

  return (
    <div className="div">
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div className="form">
          {" "}
          <label>
            <h2>Username</h2>
            <input
              type="text"
              onChange={(e) => {
                let elemt = e.target;
                setEmail(elemt.value);
              }}
              style={{ padding: "10px", margin: "10px 0" }}
            />
          </label>
          <label>
            <h2>Password</h2>
            <input
              type="password"
              onChange={(e) => {
                let elemt = e.target;
                setPassword(elemt.value);
              }}
              style={{ padding: "10px", margin: "10px 0" }}
            />
          </label>
        </div>
        <div className="submit">
          <button
            type="submit"
            onClick={handleSubmit}
            style={{ padding: "10px 62px", fontSize: "20px", margin: "10px 0" }}
          >
            SUBMIT
          </button>
        </div>
        <p style={{ fontSize: "18px", padding: "10px" }}>
          New User?{" "}
          <span
            onClick={() => {
              navigate("/register");
            }}
            style={{ fontWeight: "600", cursor: "pointer" }}
          >
            REGISTER
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
