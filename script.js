const UI = {
  BOARD: {
    sector_0: document.getElementById("0"),
    sector_1: document.getElementById("1"),
    sector_2: document.getElementById("2"),
    sector_3: document.getElementById("3"),
    sector_4: document.getElementById("4"),
    sector_5: document.getElementById("5"),
    sector_6: document.getElementById("6"),
    sector_7: document.getElementById("7"),
    sector_8: document.getElementById("8"),
  },
};

const gameBoard = { sector: ["X", "O", "X", "O", "O", "", "", "X", ""] };

const current = { round: 0 };

const Player = (name) => {
  const makeTurn = () => {};
  return { name, makeTurn };
};

const game = (() => {
  let count = 0;
  console.log(`initial value: ${count}`);

  const updateBoard = () =>
    gameBoard.sector.forEach((e, index) => {
      String(index);
      for (let sector in UI.BOARD) {
        if (String(index) === UI.BOARD[sector].id) {
          UI.BOARD[sector].textContent = e;
        }
      }
    });
  const playRound = () => {};
  const checkResult = () => {};

  const countRound = () => {
    count++;
  };
  const checkWhosurn = () => {};
  const getCount = () => count;
  return {
    updateBoard,
    countRound,
    getCount,
  };
})();

game.countRound();
game.countRound();
game.countRound();
game.countRound();
game.countRound();

const res = game.getCount();
console.log(res);
