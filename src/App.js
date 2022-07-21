import React, { useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Home from "./components/Home";
import Polling from "./components/Polling";
import Result from "./components/Result";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Routes, Route} from "react-router-dom";

import "./App.css";
import { useServer } from "./context";

function App() {
  const {dispatch} = useServer();
  const navigate = useNavigate();
  useEffect(() => {
    axios 
      .get(
        "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
      )
      .then((res) => {
        localStorage.setItem("pollData", JSON.stringify(res.data));
      });
  }, []);
  const logoutHandler = () => {
    console.log("dvg")
    dispatch({type:"logout"});
    navigate("/login")
  };

  return (
    <div className="App">
      <div className="header">
        <h1>DISHPOLL CONTEST</h1>
        <button className="logout" onClick={logoutHandler}>
        LOG OUT
      </button>
      </div>

      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/polling" element={<Polling />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
