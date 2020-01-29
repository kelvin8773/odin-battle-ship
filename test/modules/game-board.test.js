import GameBoard from '../../src/assets/js/game-board';

test('GameBoard receive Attack', () => {
  const myBoard = GameBoard();

  myBoard.receiveAttack(2, 4);
  expect(myBoard.markers[2][4]).toBe(-1);
});

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