import Ship from './ship';

const GameBoard = (player, size) => {
  const shipName = ['destroyer', 'submarine', 'battleship', 'carrier'];
  const getRandom = (max) => Math.floor(Math.random() * Math.floor(max));

  const initShips = () => {
    const newShips = [];
    for (let i = 0; i < shipName.length; i += 1) {
      const position = [getRandom(size - 1), getRandom(size - 1)];
      const newShip = Ship(shipName[i], position, 'V');
      for (let j = 4 - i; j > 0; j -= 1) newShips.push(newShip);
    }
    return newShips;
  };

  const initMarks = () => {
    const newMarks = [];
    for (let i = 0; i < size; i += 1) {
      const row = [];
      for (let j = 0; j < size; j += 1) {
        row[j] = 0;
      }
      newMarks.push(row);
    }
    return newMarks;
  }

  const init = () => {
    const status = {
      'player': player,
      'marks': initMarks(),
      'ships': initShips()
    };
    return status;
  }

  const board = init();

  const getPlayer = () => board.player;

  const getMarks = () => board.marks;

  const getShip = (idx) => board.ships[idx];

  const clearBoard = () => {
    board.marks = [];
  }

  return {
    getPlayer,
    getMarks,
    getShip,
    clearBoard,
  }
};

export default GameBoard;
