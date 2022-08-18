import React, { useState } from "react";
import "./App.css";
import "./components/todo.css";
import Header from "./components/Header";
import Items from "./components/Items";

const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, task: "Go TO School", isCompleted: true },
    { id: 2, task: "Go TO Gym", isCompleted: false },
  ]);
  const [addTask, setAddTask] = useState();

  const addNewTask = () => {
    let num = todo.length + 1;
    let addNewItems = { id: num, task: addTask, isCompleted: false };
    setTodo([...todo, addNewItems]);
  };

  // to insert data on enter
  const handleKey = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      addNewTask();
      console.log("Enter");
    }
  };
  // action for check box
  const underLine = (id) => {
    console.log("check box trigger", id);
    const todoObject = todo[id];

    const newTodo = {
      ...todoObject,
      isCompleted: !todoObject.isCompleted,
    };

    const elementsBeforeSelectedTodo = todo.slice(0, id);
    const elementsAfterSelectedTodo = todo.slice(id + 1);

    const newTodos = [
      ...elementsBeforeSelectedTodo,
      newTodo,
      ...elementsAfterSelectedTodo,
    ];

    setTodo(newTodos);
  };
  console.log(todo);
  return (
    <div>
      <div div className="Body">
        <Header
          addTask={addTask}
          setAddTask={setAddTask}
          handleKey={handleKey}
        />
        {todo.map((item, index) => (
          <Items
            key={item.id}
            id={index}
            title={item.task}
            isCompleted={item.isCompleted}
            underLine={underLine}
            addNewTask={addNewTask}
          />
        ))}
        {/* <Button addNewTask={addNewTask} /> */}
      </div>
    </div>
  );
};

export default App;
