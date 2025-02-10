import "../styles/Quiz.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuizQuestions } from "../services/quizService";

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchQuizQuestions();
      setQuestions(data);
    };
    getQuestions();
  }, []);

  // Timer logic
  useEffect(() => {
    if (timeLeft === 0) {
      moveToNextQuestion();
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimeLeft(30);
    } else {
      handleSubmit();
    }
  };

  const handleAnswerSelect = (answerKey) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: answerKey,
    }));
    moveToNextQuestion();
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

  if (questions.length === 0) {
    return <p className="loading-text">Loading questions...</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
      <div className="timer">Time Left: {timeLeft}s</div>
      <div className="question-card">
        <p className="quiz-question">{currentQuestion.question}</p>
        <ul className="quiz-options">
          {Object.entries(currentQuestion.answers).map(([key, answer]) =>
            answer ? (
              <li key={key} className="quiz-option-item">
                <button
                  onClick={() => handleAnswerSelect(key)}
                  className={`quiz-option ${
                    userAnswers[currentQuestionIndex] === key ? "selected" : ""
                  }`}
                >
                  {answer}
                </button>
              </li>
            ) : null
          )}
        </ul>
      </div>
      {currentQuestionIndex === questions.length - 1 && (
        <button onClick={handleSubmit} className="submit-button">
          Submit Quiz
        </button>
      )}
    </div>
  );
};

export default Quiz;
