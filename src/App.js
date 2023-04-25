import React, { useState } from "react";

const App = () => {
  const [Task, setTask] = useState("");
  const [Detail, setDetail] = useState("");
  const [todos, setTodos] = useState([]);

  function SubmitTask(event) {
    event.preventDefault();

    if (Task === "" || Detail === "") {
      alert("Fill Required Details");
      return;
    }

    const newtodos = {
      id: todos.length + 1,
      Task,
      Detail,
    };

    setTodos(...todos, newtodos);
    setTask("");
    setDetail("");
  }
  return (
    <div>
      <form onSubmit={SubmitTask}>
        <label>Title</label>
        <input
          type="text"
          onChange={(event) => {
            setTask(event.target.value);
          }}
        ></input>
        <label>Description</label>
        <input
          type="text"
          onChange={(event) => {
            setDetail(event.target.value);
          }}
        ></input>

        <button type="submit">Submit</button>
      </form>

      <ul>
        {todos.map((todo, index) => {
          <li key={todo.id}>
            <p>{todo.Task}</p>
            <p>{todo.Detail}</p>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default App;
