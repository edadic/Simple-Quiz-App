import "../styles/Results.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 }; // Default if no state

  return (
    <div className="results-container">
      <h2>Quiz Results</h2>
      <p className="results-score">
        Your Score: {score} / {total}
      </p>

      <div className="results-buttons">
        <button onClick={() => navigate("/")}>Go Home</button>
        <button onClick={() => navigate("/quiz")}>Retake Quiz</button>
      </div>
    </div>
  );
};

export default Results;
