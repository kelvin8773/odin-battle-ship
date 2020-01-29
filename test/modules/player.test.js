import _ from 'lodash';
import Player from '../../src/assets/js/player';

test('Player human check steps', () => {
  const human = Player();
  const row = _.random(9);
  const col = _.random(9);

  expect(human.steps.length).toBe(0);
  expect(human.possibleSteps.length).toBe(100);
  human.check(row, col);
  expect(human.possibleSteps.length).toBe(99);
  expect(human.steps.length).toBe(1);
  expect(human.possibleSteps.includes(`${row}+${col}`)).toBe(false);
});

test('Player computer check next steps', () => {
  const computer = Player();
  const { row, col } = computer.getNextStep();

  expect(computer.possibleSteps.length).toBe(100);
  computer.check(row, col);
  expect(computer.possibleSteps.length).toBe(99);
  expect(computer.possibleSteps.includes(`${row}+${col}`)).toBe(false);
});
