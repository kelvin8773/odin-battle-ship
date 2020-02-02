import _ from 'lodash';
import Player from '../../src/assets/js/player';
import { STATUS } from '../../src/assets/js/constants';

test('Player human check steps', () => {
  const human = Player();
  const row = _.random(9);
  const col = _.random(9);
  const status = STATUS.empty;

  expect(human.steps.length).toBe(0);
  expect(human.possibleSteps.length).toBe(100);
  human.check(status, row, col);
  expect(human.possibleSteps.length).toBe(99);
  expect(human.possibleSteps.includes(`${row}+${col}`)).toBe(false);
});

test('Player computer check next steps', () => {
  const computer = Player();
  const [row, col] = computer.getNextStep();
  const status = STATUS.fill;

  expect(computer.possibleSteps.length).toBe(100);
  computer.check(status, row, col);
  expect(computer.possibleSteps.length).toBe(99);
  expect(computer.possibleSteps.includes(`${row}+${col}`)).toBe(false);
});
