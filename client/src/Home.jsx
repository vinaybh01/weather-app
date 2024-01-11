import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbarr from "./Navbarr";

function Home() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const location = useLocation();
  const name = location.state && location.state.name;

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/weather", {
        city: city,
      });
      const data = response.data;
      setResult(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbarr />
      <div
        className="box"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <h2 style={{ fontSize: "35px", paddingBottom: "10px" }}>
          Welcome Back {name}
        </h2>
        <h2>Enter your city</h2>
        <div className="submit">
          <input
            type="text"
            style={{ padding: "10px" }}
            onChange={(e) => {
              let val = e.target.value;
              setCity(val);
            }}
          />
          <button
            onClick={handleSubmit}
            style={{ padding: "10px", margin: "10px" }}
          >
            Submit
          </button>
        </div>
      </div>
      {result ? (
        <div>
          <div
            className="weather"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="left">
              <h2
                style={{
                  fontSize: "30px",
                  padding: "20px",
                  marginLeft: "45px",
                }}
              >
                Current Weather
              </h2>
              <div
                className="image"
                style={{ display: "flex", paddingLeft: "60px" }}
              >
                <img
                  src="https://cdn.pixabay.com/photo/2022/03/28/22/48/sun-7098480_1280.png"
                  alt=""
                  style={{
                    width: "150px",
                    height: "150px",
                    paddingRight: "20px",
                  }}
                />
                <p style={{ fontSize: "80px" }}>{result.feels_like}°C</p>
              </div>
            </div>
            <div
              className="right"
              style={{ display: "flex", padding: "20px", marginTop: "50px" }}
            >
              <div
                className="right01"
                style={{ fontSize: "20px", padding: "20px" }}
              >
                <p>Minimum Temp</p>
                <p>Maximum Temp</p>
                <p>Wind Speed</p>
                <p>Wind Degree</p>
              </div>
              <div
                className="right02"
                style={{ fontSize: "20px", padding: "20px" }}
              >
                <p>{result.min_temp}</p>
                <p>{result.max_temp}</p>
                <p>{result.wind_speed}</p>
                <p>{result.wind_degrees}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Home;
