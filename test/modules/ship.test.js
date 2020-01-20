import Ship from '../../src/assets/js/ship';

test('ship length', () => {
  const myShip = Ship;
  myShip.init(5);
  expect(myShip.length()).toBe(5);
});

test('ship hit', () => {
  const otherShip = Ship;
  otherShip.init(5);
  expect(otherShip.hit(3)).toBe(true);
  expect(otherShip.hit(3)).toBe(false);
});

test('ship isSunk', () => {
  const sinkShip = Ship;
  const shipSize = 6;
  sinkShip.init(shipSize);
  expect(sinkShip.isSunk()).toBe(false);
  for (let i = 1; i <= shipSize; i += 1) {
    sinkShip.hit(i);
  }
  expect(sinkShip.isSunk()).toBe(true);
});