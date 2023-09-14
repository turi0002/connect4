import { useState } from 'react';
import './BoardItem.css'

function BoardItem(props) {
  const [color, setColor] = useState("white")
  const itemStyle = {
    gridColumn: `${props.x} / span 1`, 
    gridRow: `${props.y} / span 1`,
    backgroundColor: props.backgroundColorMain || color
  };
  
  return (
    <>
    <div style={itemStyle} onClick={isLower} className='cell' id={`${props.x},${props.y}`}  ></div>
    </>
  )
  
  function isLower(){
    if(props.winner===""){
    for(let i=6;i>(props.y)-1;i--){
    const wantedDiv = document.getElementById(`${props.x},${i}`)
    if(wantedDiv.style.backgroundColor ==="white"){
      if(props.turn=="red"){
        wantedDiv.style.backgroundColor=props.turn
        props.setTurn("yellow")
      }
      else {
        wantedDiv.style.backgroundColor=props.turn
        props.setTurn("red")
    }
      break;
    }
    
  }
  }
}
}
export default BoardItem