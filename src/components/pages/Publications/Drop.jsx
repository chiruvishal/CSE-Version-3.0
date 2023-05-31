import React from "react";
import "./Drop.css";
const Drop = ({publish , index, toggledrop }) => {
  return (
    <div
      className={"drop " + (publish.open ? "open" : "")}
      key={index}
      onClick={() => toggledrop(index)}
    >
      <div className="drop-question">{publish.question}</div>
      <div className="drop-answer">{publish.answer}</div>
    </div>
  );
};

export default Drop;