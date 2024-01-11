import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "70px",
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="logo">
        <p style={{ margin: "0px 36px", fontSize: "22px", fontWeight: "600" }}>
          WEATHER CHECK
        </p>
      </div>
      <div className="sigin" style={{ margin: "0px 20px" }}>
        <button
          style={{ margin: "0px 10px" }}
          onClick={() => {
            navigate("/register");
          }}
        >
          REGISTER
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default Navbar;
