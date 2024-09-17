import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        name="add"
        id="add"
        placeholder="Enter the task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => setTodo([...todo, task])}>Add Todo</button>
      <ul>
        {todo.map((elem, i) => (
          <li>
            {elem}{" "}
            <button
              onClick={() => {
                let tem = [...todo];
                tem.splice(i, 1);
                setTodo(tem);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
