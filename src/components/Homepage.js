import React, { useState } from "react";
import "../App.css";
import swal from "sweetalert";
import ListItems from "./itemList";
import NavBar from "./navbar";



import "mdbreact/dist/css/mdb.css";

const Homepage = () => {
  const [currentItem, setCurrentItem] = useState({
    key: "",
    text: "",
    status: "",
  });
  const [items, setItems] = useState([
    { key: 4, text: "Do cool projects in React", status: "Completed" },
    { key: 9, text: "Learn JavaScript", status: "Not Completed" },
  ]);

  const checkComplete = () => {
    if (items.length === 0) {
      return (
        <div className="imagebox">
          <img
            className="img-completed"
            alt=""
            align="center"
            src="https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/public/completed.png"
          ></img>
        </div>
      );
    } else {
      return (
        <div className="imagebox">
          <img
            className="img-completed"
            alt=""
            align="center"
            src="https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/public/todo.png"
          ></img>
        </div>
      );
    }
  };

  const handleSubmit = () => {
    const newItem = currentItem;
    if (newItem.text !== "") {
      swal("Added !", "To Do Saved !", "success");
      setItems([...items, currentItem]);
      setCurrentItem({
        text: "",
        key: "",
        status: "",
      });
    }
  };

  const totalTasks = () => {
    return items.length;
  };

  const deleteItem = (key) => {
    const filteredItems = items.filter((item) => item.key !== key);
    setItems(filteredItems);
  };

  const markdoneItem = (item) => {
    const filteredItems = items.filter((itemz) => itemz.key !== item.key);
    var newItem = {
      key: item.key,
      text: item.text,
      status: "Completed",
    };

    setItems([...filteredItems, newItem]);
    setCurrentItem({
      text: "",
      key: "",
      status: "",
    });

    
  };

  const markincompleteItem = (item) => {
    const filteredItems = items.filter((itemz) => itemz.key !== item.key);
    var newItem = {
      key: item.key,
      text: item.text,
      status: "Not Completed",
    };

    setItems([...filteredItems, newItem]);
    setCurrentItem({
      text: "",
      key: "",
      status: "",
    });
    console.log("done filtered", item);
  };

  const setUpdate = (text, key) => {
    
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
      return "";
    });
    setItems([...items]);
  };
  const handleReset = () => {
    navigator.vibrate(100);
    swal("Completed !", "Marked all as done !", "warning");
    const items = [];
    setItems(items);
  };

  return (
    <React.Fragment>
      <NavBar totalTasks={items.length} />
      <div className="container-for-tasks">
        <div className="card">
          <div className="card-body">
            <input
              type="text"
              className="form-control"
              value={currentItem.text}
              placeholder="Enter tasks"
              onChange={(e) => {
                setCurrentItem({
                  text: e.target.value,
                  key: Date.now(),
                  status: "Not Completed",
                });
              }}
            ></input>
            <button
              type="button"
              className="btn winter-neva-gradient waves-effect waves-light "
              onClick={handleSubmit}
            >
              Add task
            </button>
            <button
              className="btn sunny-morning-gradient
 waves-effect waves-light "
              onClick={handleReset}
            >
              Mark all as done
            </button>
          </div>
          {checkComplete()}
        </div>
      </div>

      <main className="container">
        <ListItems
          items={items}
          status={items.status}
          markdoneItem={markdoneItem}
          markincompleteItem={markincompleteItem}
          setUpdate={setUpdate}
          deleteItem={deleteItem}
        />
      </main>
    </React.Fragment>
  );
};

export default Homepage;
