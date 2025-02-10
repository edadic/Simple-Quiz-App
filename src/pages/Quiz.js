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
    <div>
      <h2>Quiz Page</h2>
      {questions.length > 0 ? (
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <p>{question.question}</p>
              <ul>
                {Object.entries(question.answers).map(([key, answer]) =>
                  answer ? (
                    <li key={key}>
                      <label>
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

      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default Quiz;
