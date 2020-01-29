import Ship from './assets/js/ship';
import GameBoard from './assets/js/game-board';
import './assets/stylesheet/style.sass';

const Controller = (() => {
  const init = () => {
    const myBoard = GameBoard();
    myBoard.placeShips();
    // myBoard.markers
    // myBoard.isAllSunk();

    return true;
  };

  return {
    init,
  };
})();

Controller.init();

export default Controller;
