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

    setTodos([...todos, newtodos]);
    setTask("");
    setDetail("");
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div>
      <form onSubmit={SubmitTask}>
        <label>Title</label>
        <input
          type="text"
          value={Task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        ></input>
        <label>Description</label>
        <input
          type="text"
          value={Detail}
          onChange={(event) => {
            setDetail(event.target.value);
          }}
        ></input>

        <button type="submit">Submit</button>
      </form>

      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo.id}>
              <p>{todo.Task}</p>
              <p>{todo.Detail}</p>
              <button type="button" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
