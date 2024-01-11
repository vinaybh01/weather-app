import React from "react";
import Navbar from "./Navbar";

function Start() {
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
        <h1>Welcome to Weather Check</h1>
      </div>
    </div>
  );
}

export default Start;
