import React from "react";
import "./Drop.css";

const Drop = ({ publish, index, toggledrop }) => {
  const renderAnswer = () => {
    if (publish.question === "Area Of Interest" || publish.question === "Publications") {
      if (Array.isArray(publish.answer)) {
        return (
          <ul className="area-list">
            {publish.answer.map((item, i) => (
              <li key={i}>'{item}'</li>
            ))}
          </ul>
        );
      } else if (typeof publish.answer === "string") {
        const items = publish.answer.split(",").map((item) => item.trim());
        return (
          <ul className="area-list">
            {items.map((item, i) => (
              <li key={i}>'{item}'</li>
            ))}
          </ul>
        );
      }
    }
    return <p>{publish.answer}</p>;
  };

  return (
    <div
      className={"drop " + (publish.open ? "open" : "")}
      key={index}
      onClick={() => toggledrop(index)}
    >
      <div className="drop-question"> 
        <span className="question-label">{publish.question}</span>
      </div>
      <div className="drop-answer">{renderAnswer()}</div>
    </div>
  );
};

export default Drop;