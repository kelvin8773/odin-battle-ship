import Ship from '../../src/assets/js/ship';
import { STATUS } from '../../src/assets/js/constants';

test('ship length', () => {
  const myShip = Ship('submarine');
  expect(myShip.length).toBe(2);
});

test('ship coordinates', () => {
  const battleShip = Ship('battleship');
  battleShip.setCoordinate(0, 3, 4);
  expect(battleShip.coordinates[0]).toStrictEqual([3, 4]);
});

test('ship hit', () => {
  const otherShip = Ship('carrier');
  otherShip.hit(0);
  otherShip.hit(3);
  expect(otherShip.units[0]).toBe(STATUS.hit);
  expect(otherShip.units[3]).toBe(STATUS.hit);
});

test('ship isSunk', () => {
  const sinkShip = Ship('destroyer');
  sinkShip.hit(0);
  expect(sinkShip.isSunk()).toBe(true);
});