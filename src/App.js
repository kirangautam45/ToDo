import React, { useState } from "react";
import "./App.css";
import "./components/todo.css";
import Header from "./components/Header";
import Items from "./components/Items";
import Button from "./components/Button";
const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, task: "Go TO School", isCompleted: true },
    { id: 2, task: "Go TO Gym", isCompleted: false },
  ]);
  const [addTask, setAddTask] = useState();

  const addNewTask = () => {
    let addNewItems = { task: addTask, isCompleted: false };
    setTodo([...todo, addNewItems]);
  };
  const underline = () => {
    console.log("check box trigger")
  };
  return (
    <div>
      <div div className="Body">
        <Header setAddTask={setAddTask} addTask={addTask} />

        {todo.map((item) => (
          <Items
            id={item.id}
            title={item.task}
            isCompleted={item.isCompleted}
            underline={underline}
          />
        ))}
        <Button addNewTask={addNewTask} />
      </div>
    </div>
  );
};

export default App;
