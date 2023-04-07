import puppeteer from "puppeteer";
const appDriver = require("./App.driver");

describe("Tic Tac Toe", () => {
  let browser;
  let driver;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    driver = appDriver(page);
    await page.goto("http://localhost:3000");
  });

  afterEach(async () => await browser.close());

  test("should start a new game", async () => {
    const player1 = "Ofer";
    const player2 = "Computer";
    await driver.newGame(player1, player2);
    const player1Name = await driver.getPlayer1Title();
    const player2Name = await driver.getPlayer2Title();
    expect(player1Name).toBe(player1);
    expect(player2Name).toBe(player2);
  });

  test('should show "X" after first player clicks', async () => {
    const player1 = "Ofer";
    const player2 = "Computer";
    await driver.newGame(player1, player2);
    expect(await driver.getACellValueAt(0)).toBe("");
    await driver.clickCellAt(0);
    expect(await driver.getACellValueAt(0)).toBe("X");
  });

  test("first player should win the game", async () => {
    const player1 = "Ofer";
    const player2 = "Computer";
    await driver.newGame(player1, player2);
    await driver.clickCellAt(0);
    await driver.clickCellAt(3);
    expect(await driver.hasWinner()).toBe(false);
    await driver.clickCellAt(1);
    await driver.clickCellAt(4);
    await driver.clickCellAt(2);
    expect(await driver.getWinnerMessage()).toBe(`${player1} won!`);
  });
});
