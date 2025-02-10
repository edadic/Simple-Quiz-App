import "../styles/Home.css";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Quiz App</h1>
      <Link to="/quiz">
        <button className="start-button">Start Quiz</button>
      </Link>
    </div>
  );
}

export default Home;
