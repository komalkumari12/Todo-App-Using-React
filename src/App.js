import React, { useState } from "react";

const App = () => {
  const [Task, setTask] = useState("");
  const [Description, setDescription] = useState("");
  const [todos, setTodo] = useState([]);
  console.log("Hello");

  const SubmitTask = function () {
    if (Task === "" || Description === "") {
      alert("Empty Fields");
      return;
    }

    //Add to Database
    const newTodo = {
      id: todos.length + 1,
      Task,
      Description,
    };
    setTodo([...todos, newTodo]);
    setTask("");
    setDescription("");
  };

  return (
    <div>
      <form>
        <label>Title</label>
        <input
          type="text"
          placeholder="Todo Task"
          onChange={(event) => {
            setTask(event.target.value);
          }}
        ></input>
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></input>

        <button type="submit" onSubmit={SubmitTask}>
          Submit
        </button>
      </form>
      <ul>
        {todos.map((App, id) => {
          <li key={App.id}>
            <p>{App.Task}</p>
            <p>{App.Description}</p>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default App;
