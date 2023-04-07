import React from "react";

const Game = ({ player1Name, player2Name, board, onCellClicked }) => {
  return (
    <div>
      <span data-testid="player1-name">{player1Name}</span>
      <span data-testid="player2-name">{player2Name}</span>
      <table role="grid">
        <tbody>
          {board.map((row, rIndex) => (
            <tr key={rIndex}>
              {row.map((cell, cIndex) => (
                <td
                  key={cIndex}
                  role="gridcell"
                  data-testid="cell"
                  onClick={() => onCellClicked(rIndex, cIndex)}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Game;
