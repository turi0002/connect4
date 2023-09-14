import { useState, useEffect } from "react";
import BoardItem from "./BoardItem";
import "./Board.css";
import App from "../App";
import { Link } from 'react-router-dom';

function Board() {
  const [wholeBoard, setWholeBoard] = useState([
    ["1", "2", "3", "4", "5", "6", "7"],
    ["1", "2", "3", "4", "5", "6"],
  ]);
  const [render, setRendered] = useState(true);
  const [turn, setTurn] = useState(`red`);
  const [winner, setWinner] = useState("");
  const [realwinner, setRealWinner] = useState('red');
  const [pastWinners, setPastWinners] = useState([]);
  useEffect(() => {
    if(localStorage.getItem("1"!=null))
    localStorage.setItem("1", JSON.stringify(pastWinners))
  }, [App]);
  useEffect(() => {
    if(turn==="yellow"&& winner==="yellow")
    setWinner("red")
  else if(turn==="red"&& winner==="red")
  setWinner("yellow")
  }, [realwinner]);
  console.log(localStorage.getItem('1'));
  useEffect(() => {
    if (winner) {
      if(realwinner==="red"){
        const tempArray = JSON.parse(localStorage.getItem('1'))
        tempArray.push("yellow")
        localStorage.setItem('1',JSON.stringify(tempArray))
      }
    else if(realwinner==="yellow") {
      const tempArray = JSON.parse(localStorage.getItem('1'))
        console.log(tempArray);
        tempArray.push("red")
        localStorage.setItem('1',JSON.stringify(tempArray))
    }

    }
  }, [realwinner]);
  

  useEffect(() => {
    WiningY();
    winningX();
    WiningYx();
    WiningXy();
    // setRendered(!render);
  }, [turn]);

  function WiningY() {
    let m;
    let Ywinner = 0;
    for (let x = 1; x < 8; x++) {
      for (let y = 1; y < 7; y++) {
        const clickedDivY = document.getElementById(`${x},${y}`);
        if (isWiningY(x, y) === true) {
          Ywinner++;
          // console.log(Ywinner);
          if (Ywinner === 4) setWinner(turn);
        } else Ywinner = 0;
      }
    }
  }
  function WiningYx() {
    let Ywinner = 0;
    for (let x = 1; x < 8; x++) {
      for (let y = 1; y < 7; y++) {
        const clickedDivY = document.getElementById(`${x},${y}`);
        if (isWiningYx(x, y, Ywinner) === true) {
          Ywinner++;
          x++;
          if (Ywinner === 4) {
            setWinner(turn)};
        } else {
          Ywinner = 0;
        }
      }
    }
  }
  function WiningXy() {
    let Ywinner = 0;
    for (let x = 1; x < 8; x++) {
      for (let y = 6; y > 1; y--) {
        if (isWiningXy(x, y) === true) {
          Ywinner++;
          x++;
          // console.log(clickedDivY);
          if (Ywinner === 4) setWinner(turn);
        } else {
          Ywinner = 0;
        }
      }
    }
  }
  function winningX() {
    let winner = 0;
    for (let y = 1; y < 7; y++) {
      for (let x = 1; x < 8; x++) {
        const clickedDivY = document.getElementById(`${x},${y}`);
        if (isWiningX(x, y) == true) {
          winner++;
          if (winner === 4){  setWinner(turn)};
        } else winner = 0;
      }
    }
  }

  function isWiningY(x, y) {
    let finalAnswer;
    if (y < 6) {
      const answer = document.getElementById(`${x},${y + 1}`);
      if (answer.style.backgroundColor === realwinner) {
        if(realwinner==="red")
        setRealWinner("yellow");
        else
        setRealWinner("red")
        finalAnswer = true;
      } else return false;
    }
    return finalAnswer;
  }

  function isWiningX(x, y) {

    let finalAnswer;
    if (x < 8) {
      const answer = document.getElementById(`${x},${y}`);
      finalAnswer = true;
      if (answer.style.backgroundColor === realwinner) {
        if(realwinner==="red")
        setRealWinner("yellow");
        else
        setRealWinner("red")
        finalAnswer = true;
      } else return false;
    }
    return finalAnswer;
  }

  function isWiningYx(x, y) {
    // console.log(x, y);
    let finalAnswer;
    if (y <= 6 && x <= 7) {
      const answer = document.getElementById(`${x},${y}`);
      if (answer.style.backgroundColor === realwinner) {
        if(realwinner==="red")
        setRealWinner("yellow");
        else
        setRealWinner("red")
        finalAnswer = true;
      } else return false;
    }
    return finalAnswer;
  }
  function isWiningXy(x, y) {
    let finalAnswer;
    if (y > 1 && x < 7) {
      const answer = document.getElementById(`${x},${y}`);
      if (answer.style.backgroundColor === realwinner) {
        if(realwinner==="red")
        setRealWinner("yellow");
        else
        setRealWinner("red")
        finalAnswer = true;
      } else return false;
    }
    return finalAnswer;
  }



  return (
    <>
    <div>
    <div className="container">
      <div id="grid">
        {wholeBoard[0].map((rows, i) =>
          wholeBoard[1].map((colums, u) =>
            makeBoardItem(rows, colums, turn, setTurn, winner)
            
          )
        )}
        
      </div>
      {winner && <WinnerModal winner={winner} onClose={() => setWinner("")} />}
      </div>
      <Link to="/">
        <button>back to main screen</button>
      </Link>
      </div>
    </>
  );


  function whoWon(){
  if(realwinner==="yellow"){
    return "Red"
  }
 
else if(realwinner==="red"){
  return "Yellow"
}

  }
  
  function WinnerModal({ onClose }) {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Congratulations!</h2>
          <p>The winner is {whoWon()}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
  




  function makeBoardItem(x, y, turn, setTurn,backgroundColor) {
   
    return (
      <BoardItem
        x={x}
        y={y}
        turn={turn}
        setTurn={setTurn}
        winner={winner}
        id={x * y}
        key={x * y}
        backgroundColorMain = {backgroundColor}
      />
    );
  }
}

export default Board;
