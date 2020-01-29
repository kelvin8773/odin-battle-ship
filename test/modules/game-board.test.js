import _ from 'lodash';
import GameBoard from '../../src/assets/js/game-board';

test('GameBoard place Ships & isAllSunk', () => {
  const board = GameBoard();
  expect(board.isAllSunk()).toBe(true);
  board.placeShips();
  expect(board.isAllSunk()).toBe(false);
});

test('GameBoard ships & markers', () => {
  const board = GameBoard();
  expect(board.ships.length).toBe(10);
  expect(board.markers.length).toBe(10);
  expect(board.ships[0].coordinates[0]).toBe(undefined);
  board.placeShips();
  expect(board.ships[0].coordinates[0].length).toBe(2);
});

test('GameBoard receive Attack', () => {
  const myBoard = GameBoard();
  const row = _.random(9);
  const col = _.random(9);
  myBoard.placeShips();

  if (myBoard.markers[row][col] === myBoard.status.fill) {
    myBoard.receiveAttack(row, col);
    expect(myBoard.markers[row][col]).toBe(myBoard.status.hit);
  } else {
    myBoard.receiveAttack(row, col);
    expect(myBoard.markers[row][col]).toBe(myBoard.status.miss);
  }
});