import GameBoard from './assets/js/game-board';
import Player from './assets/js/player';
import UI from './ui';
import './assets/stylesheet/style.scss';

const Controller = (() => {
  const human = Player();
  const computer = Player();
  const humanBoard = GameBoard('Human');
  const computerBoard = GameBoard('Computer');

  const runHuman = () => {
    const { row, col } = human.getNextStep();
    human.check(row, col);
    computerBoard.receiveAttack(row, col);
    UI.renderTable(computerBoard);
    UI.renderScores(computerBoard);
  };

  const runComputer = () => {
    const { row, col } = computer.getNextStep();
    computer.check(row, col);
    humanBoard.receiveAttack(row, col);
    UI.renderTable(humanBoard);
    UI.renderScores(humanBoard);
  }

  const init = () => {
    humanBoard.placeShips();
    computerBoard.placeShips();

    UI.renderTable(humanBoard);
    UI.renderTable(computerBoard);

    UI.renderScores(humanBoard);
    UI.renderScores(computerBoard);

    const humanGame = setInterval(runHuman, 1000 * 3);
    const computerGame = setInterval(runComputer, 1000 * 3);

    document.getElementById('stop-button').addEventListener('click', () => {
      clearInterval(humanGame);
      clearInterval(computerGame);
    })

  };

  return {
    init,
  };
})();

Controller.init();

export default Controller;
