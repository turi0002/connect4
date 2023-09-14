import { useState } from 'react'
import './App.css'
import Board from './components/Board';
import './components/BoardItem'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BoardItem from './components/BoardItem'
import StartScreen from './components/StartScreen'
import History from './components/History';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<StartScreen />} />
          <Route path="/board" element={<Board/>} />
          <Route path="/History" element={<History/>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
