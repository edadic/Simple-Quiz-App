import React, { useState, useEffect } from "react";
import "../styles/Results.css";
import { useNavigate, useLocation } from "react-router-dom";
import Confetti from "react-confetti";

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const percentage = (score / total) * 100;
    if (percentage >= 75) {
      setShowConfetti(true);
    }
  }, [score, total]);

  const getFeedbackMessage = () => {
    const percentage = (score / total) * 100;
    if (percentage === 100) {
      return "Perfect Score! 🎉 You’re a quiz master!";
    } else if (percentage >= 75) {
      return "Great job! You’re almost there! 😊";
    } else if (percentage >= 50) {
      return "Good effort! Keep practicing! 💪";
    } else {
      return "Don’t give up! Try again and improve! 🌟";
    }
  };

  const handleRetry = () => {
    navigate("/quiz");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleShare = () => {
    const shareText = `I scored ${score} out of ${total} on this fun quiz! Can you beat my score? 😄`;
    const shareUrl = "https://github.com/edadic/Simple-Quiz-App.git";
    const shareMessage = `${shareText} Check it out here: ${shareUrl}`;
    navigator.clipboard.writeText(shareMessage);
    alert("Result copied to clipboard! Share it with your friends!");
  };

  return (
    <div className="results-container">
      {showConfetti && <Confetti />}
      <h1>Quiz Results</h1>
      <div className="score-display">
        <h2>Your Score</h2>
        <p>
          <span className="score">{score}</span> / {total}
        </p>
      </div>
      <p className="feedback-message">{getFeedbackMessage()}</p>
      <div className="results-actions">
        <button onClick={handleRetry} className="retry-button">
          Play Again
        </button>
        <button onClick={handleShare} className="share-button">
          Share Results
        </button>
        <button onClick={handleHome} className="retry-button">
            Home
        </button>
      </div>
    </div>
  );
};

export default Results;
