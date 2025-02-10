import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Home.css";
import logo from "../assets/logo.jpg";

function Home() {
  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
    <motion.img 
        src={logo} 
        alt="Quiz App Logo" 
        className="logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />

      <motion.h1 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Welcome to the Quiz App
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Test your knowledge with fun and interactive quizzes!
      </motion.p>

      <Link to="/quiz">
        <motion.button 
          className="start-button"
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
        >
          Start Quiz
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default Home;
