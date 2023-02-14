// Write a function to update players objects

const UI = {
  PLAY: document.getElementById("playBtn"),
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
  TURN_DISPLAY: document.querySelector(".turn"),
  ROUND_NUMBER: document.querySelector(".roundNumber"),
  SECTORS: document.querySelectorAll(".sector"),
};

const gameBoard = { sector: ["", "", "", "", "", "", "", "", ""] };

const Player = (name) => {
  const makeTurn = () => {
    console.log("waiting for sector selection...");
  };
  return { name, makeTurn };
};

let playerOne = Player();
let playerTwo = Player();

const game = (() => {
  let count = 0;

  const countRound = () => {
    count++;
    console.log(`Round number upd... current round is ${count}`);
    if (count <= 9) {
      UI.ROUND_NUMBER.textContent = count;
    } else {
    }
  };
  const currentRound = () => count;
  const isItPlayerOneTurn = () => {
    let round = currentRound();
    if (Number(round) % 2 === 0) {
      return false;
    } else return true;
  };
  const playRound = () => {
    countRound();
    console.log(playerOne.name);
    console.log("checking who is playing...");
    if (isItPlayerOneTurn() === true) {
      console.log("First player turn");
      UI.TURN_DISPLAY.textContent = `${playerOne.name} is playing`;
      playerOne.makeTurn();
    } else {
      console.log("Second player turn");
      UI.TURN_DISPLAY.textContent = `${playerTwo.name} is playing`;
      playerTwo.makeTurn();
    }
  };
  const addMark = (index, mark) => {
    console.log(`Sector ${index} is selected! The mark is ${mark}`);
    gameBoard.sector[index] = mark;
    updateBoard();
    checkResult(mark);
  };
  const checkResult = (mark) => {
    if (
      (gameBoard.sector[0] === mark &&
        gameBoard.sector[1] === mark &&
        gameBoard.sector[2] === mark) ||
      (gameBoard.sector[3] === mark &&
        gameBoard.sector[4] === mark &&
        gameBoard.sector[5] === mark) ||
      (gameBoard.sector[6] === mark &&
        gameBoard.sector[7] === mark &&
        gameBoard.sector[8] === mark) ||
      (gameBoard.sector[0] === mark &&
        gameBoard.sector[3] === mark &&
        gameBoard.sector[6] === mark) ||
      (gameBoard.sector[1] === mark &&
        gameBoard.sector[4] === mark &&
        gameBoard.sector[7] === mark) ||
      (gameBoard.sector[2] === mark &&
        gameBoard.sector[5] === mark &&
        gameBoard.sector[8] === mark) ||
      (gameBoard.sector[0] === mark &&
        gameBoard.sector[4] === mark &&
        gameBoard.sector[8] === mark) ||
      (gameBoard.sector[2] === mark &&
        gameBoard.sector[4] === mark &&
        gameBoard.sector[6] === mark)
    ) {
      restartGame(mark);
    } else playRound();
  };
  const restartGame = (mark) => {
    if (mark === "X") {
      alert(`${playerOne.name} is a winner!`);
    } else alert(`${playerTwo.name} is a winner!`);

    gameBoard.sector.forEach((e, index) => {
      gameBoard.sector[index] = "";
    });

    for (let sector in UI.BOARD) {
      UI.BOARD[sector].textContent = "";
    }
    count = 0;
    UI.TURN_DISPLAY.textContent = "";
    UI.ROUND_NUMBER.textContent = "";
    playerOne.name = "";
    playerTwo.name = "";
    form.playerOneName.value = "";
    form.playerTwoName.value = "";
  };
  const updateBoard = () =>
    gameBoard.sector.forEach((e, index) => {
      String(index);
      for (let sector in UI.BOARD) {
        if (String(index) === UI.BOARD[sector].id) {
          UI.BOARD[sector].textContent = e;
        }
      }
    });
  const start = () => {
    UI.PLAY.addEventListener("click", (e) => {
      e.preventDefault();
      if (form.playerOneName.value === "" || form.playerTwoName.value === "") {
        console.log("Enter Players Names!");
      } else if (Number(UI.ROUND_NUMBER.textContent) > 0) {
      } else {
        playerOne.name = form.playerOneName.value;
        playerTwo.name = form.playerTwoName.value;
        playRound();
      }
    });
  };
  const eventHandler = () => {
    UI.SECTORS.forEach((sector) => {
      sector.addEventListener("click", (sector) => {
        let index = sector.target.id;
        if (
          gameBoard.sector[index] === "X" ||
          gameBoard.sector[index] === "O" ||
          UI.ROUND_NUMBER.textContent === ""
        ) {
        } else {
          let mark = "";
          if (isItPlayerOneTurn() === true) {
            mark = "X";
            addMark(index, mark);
          } else {
            mark = "O";
            addMark(index, mark);
          }
        }
      });
    });
  };
  return {
    eventHandler,
    start,
  };
})();

game.start();
game.eventHandler();
