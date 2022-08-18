import React from "react";

const Items = (props) => {
  return (
    <div>
      <div className="Box">
        <input
          checked={props.isCompleted}
          type="checkbox"
          onChange={() => props.underLine(props.id)}
        />
        <span className={`${props.isCompleted ? "Text" : ""}`}>
          {props.title}
        </span>
        <hr />
      </div>
    </div>
  );
};

export default Items;
