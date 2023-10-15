import React, { useState } from "react";
import swal from "sweetalert";
import "./itemList.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "mdbreact/dist/css/mdb.css";

const ListItems = (props) => {
  const getBadgeClasses = (item) => {
   
    let classes = "form-control-new-";
    classes += item.status === "Completed" ? "completed" : "notcompleted";
  
    return classes;
  };

  const getPillClasses = (item) => {
    let classes = "badge badge-pill badge-";
    classes += item.status === "Completed" ? "primary" : "warning";
    return classes;
  };

  const items = props.items;
  const listItems = items.map((item) => {
  
    return (
      <div className="list" key={item.key}>
        <div className="newRow">
          <input
            type="text"
            className={getBadgeClasses(item)}
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
        </div>
        <div className="newButtonRow">
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              swal("Deleted !", "Task deleted :)", "error");
              props.deleteItem(item.key);
            }}
          >
            Delete Task !
          </button>
          <button
            className="btn dusty-grass-gradient btn-sm"
            onClick={() => {
              swal("Done !", "Marked as done :)", "success");
              props.markdoneItem(item);
            }}
          >
            Mark as Done !
          </button>
          <button
            className="btn sunny-morning-gradient btn-sm"
            onClick={() => {
              swal("Pending !", "Marked as pending :)", "info");
              props.markincompleteItem(item);
            }}
          >
            Mark as incomplete !
          </button>
          <span className={getPillClasses(item)}>
            Status: {item.status}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <span>{listItems}</span>
    </div>
  );
};

export default ListItems;
