import "../styles/Quiz.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuizQuestions } from "../services/quizService";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchQuizQuestions();
      setQuestions(data);
    };
    getQuestions();
  }, []);

  const handleAnswerSelect = (questionIndex, answerKey) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answerKey,
    }));
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correct_answer) {
        score++;
      }
    });

    navigate("/results", { state: { score, total: questions.length } });
  };

  return (
    <div className="quiz-container">
      <h2>Quiz Page</h2>
      {questions.length > 0 ? (
        <ul className="quiz-questions">
          {questions.map((question, index) => (
            <li key={index} className="quiz-question">
              <p>{question.question}</p>
              <ul className="quiz-options">
                {Object.entries(question.answers).map(([key, answer]) =>
                  answer ? (
                    <li key={key}>
                      <label className="quiz-option-label">
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={key}
                          checked={userAnswers[index] === key}
                          onChange={() => handleAnswerSelect(index, key)}
                        />
                        {answer}
                      </label>
                    </li>
                  ) : null
                )}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading questions...</p>
      )}

      <button className="submit-button" onClick={handleSubmit}>
        Submit Quiz
      </button>
    </div>
  );
};

export default Quiz;
