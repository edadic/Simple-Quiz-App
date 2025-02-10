import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 }; // Default if no state

  return (
    <div>
      <h2>Quiz Results</h2>
      <p>Your Score: {score} / {total}</p>
      
      <button onClick={() => navigate("/")}>Go Home</button>
      <button onClick={() => navigate("/quiz")}>Retake Quiz</button>
    </div>
  );
};

export default Results;
