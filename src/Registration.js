import React, { useState } from "react";

const Registration = ({ onNewGame }) => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  return (
    <div>
      <input
        onChange={(el) => {
          setPlayer1Name(el.target.value);
        }}
        data-testid="player1-input"
      />
      <input
        onChange={(el) => {
          setPlayer2Name(el.target.value);
        }}
        data-testid="player2-input"
      />
      <button
        onClick={() =>
          onNewGame({
            player1Name,
            player2Name,
          })
        }
        data-testid="new-game"
      >
        New Game
      </button>
    </div>
  );
};

export default Registration;
