import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Start from "./Start";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Start />} />
          <Route exact path="/weather" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
