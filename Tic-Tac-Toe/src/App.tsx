import { useState } from "react";
import "./App.css";
import Bloack from "./components/Bloack";

const App: React.FC = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");

  const checkWinner = (state: number[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[b] && state[a] === state[c]) return true;
    }
    return false;
  };

  const handleBlockClick = (idx: number) => {
    const stateCopy = Array.from(state);

    if (stateCopy[idx] !== null) return;

    stateCopy[idx] = currentTurn;

    setState(stateCopy);

    // check if someone won
    const win = checkWinner(stateCopy);

    if (win) {
      alert(`${currentTurn} won the game`);
    }

    setCurrentTurn(currentTurn === "X" ? "O" : "X");
  };

  return (
    <div className="board">
      <div className="row">
        <Bloack value={state[0]} onClick={() => handleBlockClick(0)} />
        <Bloack value={state[1]} onClick={() => handleBlockClick(1)} />
        <Bloack value={state[2]} onClick={() => handleBlockClick(2)} />
      </div>
      <div className="row">
        <Bloack value={state[3]} onClick={() => handleBlockClick(3)} />
        <Bloack value={state[4]} onClick={() => handleBlockClick(4)} />
        <Bloack value={state[5]} onClick={() => handleBlockClick(5)} />
      </div>
      <div className="row">
        <Bloack value={state[6]} onClick={() => handleBlockClick(6)} />
        <Bloack value={state[7]} onClick={() => handleBlockClick(7)} />
        <Bloack value={state[8]} onClick={() => handleBlockClick(8)} />
      </div>
    </div>
  );
};

export default App;
