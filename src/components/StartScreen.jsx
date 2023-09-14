// src/components/StartScreen.js
import React from 'react';
import { Link } from 'react-router-dom';
import './StartScreen.css';

const StartScreen = () => {
  return (
    <div className="start-screen">
    <div className="start-screen-header">
      <h1>Connect 4</h1>
      <p>Get ready to connect!</p>
    </div>
    <div className="start-screen-button">
      <Link to="/board">
        <button>Start Game</button>
      </Link>
      <Link to="/History">
      <button>view history</button>
        </Link>
    </div>
  </div>
);
};

export default StartScreen;
