import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css";

const Formz = (props) => {
  const [term, setTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        className="input"
        value={term}
        placeholder="Enter task"
        onChange={(e) => {
          setTerm(e.target.value);
        
        }}
      ></input>
      <button
        onClick={props.onClick}
        className="btn btn-primary btn-sm m-2"
      >
        Add task
      </button>
      <button onClick={props.onReset}>Mark all as done</button>
    </div>
  );
};

export default Formz;
