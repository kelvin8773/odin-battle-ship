import Ship from '../../src/assets/js/ship';

const shipParams1 = ['destroyer', [2, 3], 'H'];
const shipParams2 = ['submarine', [0, 1], 'H'];
const shipParams3 = ['battleship', [4, 7], 'V'];
const shipParams4 = ['carrier', [2, 9], 'V'];


test('ship length', () => {
  const myShip = Ship(...shipParams1);
  expect(myShip.length()).toBe(1);
});

test('ship status', () => {
  const battleShip = Ship(...shipParams3);
  expect(battleShip.getStatus().type).toBe('battleship');
  // expect(battleShip.getStatus().position).toBe([4, 7]);
  expect(battleShip.getStatus().direction).toBe('V');
  expect(battleShip.getStatus().size).toBe(3);
})


test('ship hit', () => {
  const otherShip = Ship(...shipParams2);
  expect(otherShip.hit(1)).toBe(true);
  expect(otherShip.hit(1)).toBe(false);
});

test('ship isSunk', () => {
  const sinkShip = Ship(...shipParams4);
  const shipSize = sinkShip.getStatus().size;
  expect(sinkShip.isSunk()).toBe(false);
  for (let i = 1; i <= shipSize; i += 1) {
    sinkShip.hit(i);
  }
  expect(sinkShip.isSunk()).toBe(true);
});