import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "../App";

const appDriver = () => {
  let wrapper;

  return {
    render: () => {
      wrapper = render(<App />);
      return wrapper;
    },
    newGame: (player1Name, player2Name) => {
      const player1Input = wrapper.getByTestId("player1-input");
      const player2Input = wrapper.getByTestId("player2-input");
      const newGameButton = wrapper.getByTestId("new-game");

      fireEvent.change(player1Input, { target: { value: player1Name } });
      fireEvent.change(player2Input, { target: { value: player2Name } });

      fireEvent.click(newGameButton);
    },
    clickCellAt: (index) => {
      const cell = wrapper.getAllByTestId("cell")[index];
      return fireEvent.click(cell);
    },
    getCellAt: (index) => {
      const cell = wrapper.getAllByTestId("cell")[index];
      return cell.textContent;
    },
    getWinnerMessage: () => {
      const winnerMessage = wrapper.getByTestId("winner-message");
      return winnerMessage.textContent;
    },
  };
};

export default appDriver;
