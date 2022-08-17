import React from "react";

const Items = (props) => {

  return (
    <div>
      <div className="Box">
        <input type="checkbox" onChange={() => props.underLine(props.id)} />
        <span className={`${props.isCompleted ? "Text" : ""}`}>
          {props.id}
          {props.title}
        </span>
        <hr />
      </div>
    </div>
  );
};

export default Items;
