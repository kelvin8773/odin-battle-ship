import Ship from '../../src/assets/js/ship';

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
  otherShip.hit(1);
  otherShip.hit(4);
  expect(otherShip.units[0]).toBe(-1);
  expect(otherShip.units[3]).toBe(-1);
});

test('ship isSunk', () => {
  const sinkShip = Ship('destroyer');
  sinkShip.hit(1);
  expect(sinkShip.isSunk()).toBe(true);
});