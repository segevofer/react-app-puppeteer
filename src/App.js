import React, { useState } from "react";
import Registration from "./Registration";
import Game from "./Game";
import { gameStatus } from "./gameService";
import "./App.css";

const App = () => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [winner, setWinner] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleCellClick = (rowIndex, colIndex) => {
    const newBoard = board.map((row) => [...row]);
    newBoard[rowIndex][colIndex] = currentPlayer;
    if (gameStatus(newBoard) === currentPlayer) {
      setWinner(currentPlayer);
    }
    const nextPlayer = currentPlayer === "X" ? "O" : "X";
    setBoard(newBoard);
    setCurrentPlayer(nextPlayer);
  };

  const onNewGame = ({ player1Name, player2Name }) => {
    setPlayer1Name(player1Name);
    setPlayer2Name(player2Name);
  };

  return (
    <div className="App">
      <Registration onNewGame={onNewGame} />
      <Game
        onCellClicked={handleCellClick}
        board={board}
        player1Name={player1Name}
        player2Name={player2Name}
      />
      {winner && (
        <div data-testid="winner-message">
          {`${winner === "X" ? player1Name : player2Name} won!`}
        </div>
      )}
    </div>
  );
};

export default App;
