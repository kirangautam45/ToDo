import React from "react";

const Button = (props) => {
  
  return (
    <div>
      <button className="add_button" onClick={props.addNewTask}>
     <b>+</b>
      </button>
    </div>
  );
};

export default Button;
