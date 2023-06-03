import './App.css';
import { useState } from 'react';


function Square({value, onSquareClick }) {
 return <button className="square" onClick={onSquareClick}>{value}</button>;
}

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null))

  function handleCLick(i) {
    const nextSquare = square.slice();
    nextSquare[i] = 'X';
    setSquare(nextSquare);
  }

  return (
    <div>
      <div className="board-row">
      <Square value={square[0]} onSquareClick={() => handleCLick(0)} />
      <Square value={square[1]} onSquareClick={() => handleCLick(1)} />
      <Square value={square[2]} onSquareClick={() => handleCLick(2)} />
      </div>
      <div className="board-row">
      <Square  value={square[3]} onSquareClick={() => handleCLick(3)} />
      <Square value={square[4]} onSquareClick={() => handleCLick(4)} />
      <Square value={square[5]} onSquareClick={() => handleCLick(5)} />
      </div>
      <div className="board-row">
      <Square value={square[6]} onSquareClick={() => handleCLick(6)} />
      <Square value={square[7]} onSquareClick={() => handleCLick(7)} />
      <Square value={square[8]} onSquareClick={() => handleCLick(8)} />
      </div>
    </div>
  )
}


