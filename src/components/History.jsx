import './History.css';
import { Link } from 'react-router-dom';

export default function History() {
    const pastWinners = JSON.parse(localStorage.getItem('1'))
    return (
        <div className="container">
      <div className="history">
        <h2>Game History</h2>
        {pastWinners.map((winner, index) => (
          <p key={index}>Game {index + 1}: {winner} won</p>
        ))}
        </div>
        <Link to="/">
      <button className='back-button'>back to main screen</button>
        </Link>
      </div>
    );
  }
  