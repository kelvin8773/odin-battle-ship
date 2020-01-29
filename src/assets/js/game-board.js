import _ from 'lodash';
import Ship from './ship';

const GameBoard = () => {
  const status = {
    fill: 2,
    around: 1,
    empty: 0,
    miss: -1,
    hit: -2,
  };

  const markers = Array.from(Array(10), () => Array(10).fill(status.empty));

  const makeShips = () => {
    const shipTypes = ['carrier', 'battleship', 'submarine', 'destroyer'];
    const ships = [];
    for (let i = 1; i <= 4; i += 1) {
      for (let j = 1; j <= i; j += 1) {
        const ship = Ship(shipTypes[i - 1]);
        ships.push(ship);
      }
    }
    return ships;
  };

  const ships = makeShips();

  const markAround = (row, col) => {
    for (let r = row - 1; r <= row + 1; r += 1) {
      if (r > 9 || r < 0) break;
      for (let c = col - 1; c <= col + 1; c += 1) {
        if (c > 9 || c < 0) break;
        if (markers[r][c] === status.empty) markers[r][c] = status.around;
      }
    }
  };

  const placeShip = (startRow, startCol, direction, ship) => {
    for (let i = 0; i < ship.length; i += 1) {
      const row = (direction === 'H') ? startRow : startRow + i;
      const col = (direction === 'H') ? startCol + i : startCol;

      ship.setCoordinate(i, row, col);
      markAround(row, col);
      markers[row][col] = status.fill;
    }
  };

  const checkValid = (startRow, startCol, direction, length) => {
    for (let i = 0; i < length; i += 1) {
      const row = (direction === 'H') ? startRow : startRow + i;
      const col = (direction === 'V') ? startCol : startCol + i;
      if (row > 9 || col > 9) return false;
      if (markers[row][col] === status.fill || markers[row][col] === status.around) return false;
    }

    return { row: startRow, col: startCol, direction };
  };

  const placeShips = () => {
    const randomIdx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => 0.5 - Math.random());

    for (let i = 0; i < ships.length; i += 1) {
      const ship = ships[randomIdx[i]];
      const { length } = ship;
      let validPlace = false;
      while (validPlace === false) {
        const direction = _.random(0, 1) === 0 ? 'H' : 'V';
        const startRow = (direction === 'H') ? _.random(0, 9) : _.random(0, 9 - ship.length + 1);
        const startCol = (direction === 'V') ? _.random(0, 9) : _.random(0, 9 - ship.length + 1);
        validPlace = checkValid(startRow, startCol, direction, length);
      }
      const { row, col, direction } = validPlace;
      placeShip(row, col, direction, ship);
    }
  };

  const receiveAttack = (row, col) => {
    if (markers[row][col] === status.empty) {
      markers[row][col] = status.miss;
    } else if (markers[row][col] === status.fill) {
      markers[row][col] = status.hit;
    }
  };

  const isAllSunk = () => {
    let fillCount = 0;
    markers.forEach((line) => {
      fillCount += line.filter((x) => x === status.fill).length;
    });

    return fillCount === 0;
  };

  return {
    markers,
    ships,
    placeShips,
    receiveAttack,
    isAllSunk,
  };
};

export default GameBoard;
