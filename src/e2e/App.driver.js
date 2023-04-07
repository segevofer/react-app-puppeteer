const appDriver = (page) => ({
  newGame: async (player1, player2) => {
    await page.type('[data-testid="player1-input"]', player1);
    await page.type('[data-testid="player2-input"]', player2);
    await page.click('[data-testid="new-game"]');
  },
  getPlayer1Title: () => {
    return page.$eval('[data-testid="player1-name"]', (el) => el.innerText);
  },
  getPlayer2Title: () => {
    return page.$eval('[data-testid="player2-name"]', (el) => el.innerText);
  },
  clickCellAt: (index) => {
    return page.$$eval(
      '[data-testid="cell"]',
      (cells, i) => cells[i].click(),
      index
    );
  },
  getACellValueAt: (index) => {
    return page.$$eval(
      '[data-testid="cell"]',
      (cells, i) => cells[i].innerText,
      index
    );
  },
  getWinnerMessage: () => {
    return page.$eval('[data-testid="winner-message"]', (el) => el.innerText);
  },
  hasWinner: async () => {
    return !!(await page.$('[data-testid="winner-message"]'));
  },
});

module.exports = appDriver;
