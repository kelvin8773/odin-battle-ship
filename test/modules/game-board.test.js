import GameBoard from '../../src/assets/js/game-board';

test('GameBoard init Test', () => {
  const myBoard = GameBoard('player1', 10);
  const yourBoard = GameBoard('player2', 10);

  expect(myBoard.getPlayer()).toBe('player1');
  expect(yourBoard.getPlayer()).toBe('player2');

  expect(myBoard.getShip(2).getStatus().type).toBe('destroyer');
  expect(myBoard.getShip(5).getStatus().type).toBe('submarine');
  expect(yourBoard.getShip(8).getStatus().type).toBe('battleship');

})