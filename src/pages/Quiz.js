import React, { useEffect, useState } from "react";
import { fetchQuizQuestions } from "../services/quizService";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchQuizQuestions();
      setQuestions(data);
    };
    getQuestions();
  }, []);

  return (
    <div>
      <h2>Quiz Page</h2>
      {questions.length > 0 ? (
        <ul>
          {questions.map((question, index) => (
            <li key={index}>{question.question}</li>
          ))}
        </ul>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default Quiz;
