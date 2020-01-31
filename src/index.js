import GameBoard from './assets/js/game-board';
import Player from './assets/js/player';
import UI from './ui';
import './assets/stylesheet/style.scss';

const Controller = (() => {
  const button = document.getElementById('start-button');
  let gameOver = false;

  const showWinMessage = (winner) => {
    const msg = winner === 'Human' ? 'Congrats, You win!' : 'Sorry, Computer won! ....';
    UI.updateMessage(msg);
  }

  const computerRun = (computer, humanBoard) => {
    const { row, col } = computer.getNextStep();
    computer.check(row, col);
    const status = humanBoard.receiveAttack(row, col);
    UI.renderCell(status, row, col, 'Human');
    UI.renderScores(humanBoard);

    UI.updateMessage("Your turn now ... ");
    gameOver = humanBoard.isAllSunk();
    if (gameOver) showWinMessage('Computer');
  };

  const runGame = (human, computer, humanBoard, computerBoard) => {
    const cells = document.getElementById('computer-table').querySelectorAll('.cell');

    const handleClick = (e) => {
      if (gameOver) return;
      const row = e.target.getAttribute('row');
      const col = e.target.getAttribute('col');
      const status = computerBoard.receiveAttack(row, col);

      human.check(row, col);
      UI.renderCell(status, row, col, 'Computer');
      UI.renderScores(computerBoard);
      gameOver = computerBoard.isAllSunk();

      if (gameOver) {
        showWinMessage('Human');
      } else {
        UI.updateMessage("Computer is thinking .... ");
        computerRun(computer, humanBoard);
      }
    };

    cells.forEach(cell => {
      cell.addEventListener('click', (e) => handleClick(e));
    });
  };

  const init = () => {
    button.addEventListener('click', () => {
      const human = Player();
      const computer = Player();
      const humanBoard = GameBoard('Human');
      const computerBoard = GameBoard('Computer');
      gameOver = false;

      humanBoard.placeShips();
      computerBoard.placeShips();

      UI.renderTable(humanBoard);
      UI.renderTable(computerBoard);

      UI.renderScores(humanBoard);
      UI.renderScores(computerBoard);

      runGame(human, computer, humanBoard, computerBoard);
    });

  };

  return {
    init,
  };
})();

Controller.init();
