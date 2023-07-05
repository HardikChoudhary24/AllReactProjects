import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ question, activeId, toggleQuestion }) => {
  const { id, title, info } = question;
  const isActive = id === activeId;
  return (
    <div className="question" key={id}>
      <header>
        <h5>{title}</h5>
        <button
          type="button"
          className="question-btn"
          onClick={() => {
            toggleQuestion(id);
          }}
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{isActive && info}</p>
    </div>
  );
};

export default Question;
