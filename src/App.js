import React, { useState, useEffect } from "react";

import axios from "axios";

const App = () => {
  const [title, setTask] = useState("");
  const [description, setDetail] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/getAllTodos").then((res) => {
      console.log(res.data.message);
      setTodos(res.data.message);
    });
  }, []);

  async function SubmitTask(event) {
    try {
      event.preventDefault();

      if (title === "" || description === "") {
        alert("Fill Required Details");
        return;
      }

      const response = await axios.post("http://localhost:5000/api/addTodo", {
        title: title,
        description: description,
      });

      console.log(response);
      setTodos([...todos, response.data.message]);
      setTask("");
      setDetail("");
    } catch (error) {
      if (error && error.response) {
        console.log(error.response.message);
        return;
      }
      console.log(error.message);
    }
  }

  async function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo._id !== id);
    await axios.delete("http://localhost:5000/api/removeTodoById/" + id);
    setTodos(newTodos);
  }

  return (
    <div>
      <form onSubmit={SubmitTask}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        ></input>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(event) => {
            setDetail(event.target.value);
          }}
        ></input>

        <button type="submit">Submit</button>
      </form>

      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo._id}>
              <p>{todo.title}</p>
              <p>{todo.description}</p>
              <button type="button" onClick={() => deleteTodo(todo._id)}>
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
