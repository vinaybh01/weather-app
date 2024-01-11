import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    await axios.post(
      "http://localhost:3000/user/register",

      {
        username: email,
        password: password,
      }
    );
    navigate("/login");
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
          Already have account?{" "}
          <span
            onClick={() => {
              navigate("/login");
            }}
            style={{ fontWeight: "600", cursor: "pointer" }}
          >
            LOGIN
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
