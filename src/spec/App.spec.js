import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { act } from "react-dom/test-utils";
import App from "../App";
import appDriver from "./App.driver";

let driver;
beforeEach(() => {
  driver = appDriver();
});

test("renders without crashing", () => {
  const div = document.createElement("div");
  act(() => {
    const root = ReactDOMClient.createRoot(div);
    root.render(<App />);
    root.unmount();
  });
});

test('should show "O" after second player clicks', () => {
  const player1Name = "Ofer";
  const player2Name = "Computer";

  driver.render(<App />);
  driver.newGame(player1Name, player2Name);

  driver.clickCellAt(0);
  driver.clickCellAt(1);

  expect(driver.getCellAt(1)).toBe("O");
});

test('"O" should win the game', () => {
  const player1Name = "Ofer";
  const player2Name = "Computer";

  driver.render(<App />);
  driver.newGame(player1Name, player2Name);

  driver.clickCellAt(4);
  driver.clickCellAt(0);
  driver.clickCellAt(5);
  driver.clickCellAt(1);
  driver.clickCellAt(7);
  driver.clickCellAt(2);

  expect(driver.getWinnerMessage()).toBe(`${player2Name} won!`);
});
