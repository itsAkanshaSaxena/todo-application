import React from "react";


import "mdbreact/dist/css/mdb.css";
import "../App.css";

const NavBar = (props) => {
 
  return (
    <nav className="heavy-rain-gradient navbar navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img
            alt=""
            src="https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/src/og-image.png"
            height="60"
            loading="lazy"
          />
          <strong>
            {"  "}
            To-Do Application{" "}
          </strong>
          <span className="badge badge-pill badge-secondary">
            {props.totalTasks}
          </span>
          
          {JSON.parse(localStorage.getItem("isAuthenticated"))==true?<a
            className="logout-button"
            href=""
            onClick={() => localStorage.clear()}
          >
            Logout
          </a>:<></>}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
