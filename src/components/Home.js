import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";


function Home() {
 
  return (
    <div className="tab-container">
      <div className="tabs">
        <NavLink to="/polling" className="nav-link">
          Start Polling
        </NavLink>
        <NavLink to="/result" className="nav-link">
          Result
        </NavLink>
      </div>
      
    </div>
  );
}

export default Home;
