import React from "react";
import "./todo.css";
const Header = (props) => {
  return (
    <>
      <div className="To_Body">
        <div>
          <h1 className="Header"> THINGS TO DO</h1>
        </div>
        <input
          className="Input_text"
          placeholder="Add New Items"
          value={props.addTask}
          onChange={(e) => props.setAddTask(e.target.value)}
          onKeyPress={props.handleKey}
        />
     
      </div>
    </>
  );
};

export default Header;
