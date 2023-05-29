import React, { useState } from "react";

const todos = [
  {
    text: "This is a sampe todo",
    isDone: false,
  },
  {
    text: "This is a sampe todo",
    isDone: false,
  },
  {
    text: "This is a sampe todo",
    isDone: false,
  },
];
let [task] = todos;
let { text, value } = task;
const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  function handleTask(e) {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, task]);
    setTask("");
  }
  function handleDelete(index) {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
  }
  return (
    <div className="todos">
      <form className="form" onSubmit={handleTask}>
        <input
          type="text"
          name=""
          id=""
          value={task}
          placeholder="Enter Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {todos.map((todo, index) => (
        <div className="single-todo" key={index}>
          <div className="check-and-task">
            <input type="checkbox" name="" id="" />
            <h4>{todo}</h4>
          </div>
          <button onClick={handleDelete} className="trash">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
