import React from "react";
import Question from "./Question";

const Questions = ({ data, activeId, toggleQuestion }) => {
  return (
    < >
      {data.map((question) => {
        return (
          <section key={question.id}>
            <Question
              question={question}
              activeId={activeId}
              toggleQuestion={toggleQuestion}
            />
          </section>
        );
      })}
    </>
  );
};

export default Questions;
