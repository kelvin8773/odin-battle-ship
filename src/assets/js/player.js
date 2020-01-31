import _ from 'lodash';
import { STATUS } from './constants';

const Player = () => {
  const steps = [];
  const getAllSteps = () => {
    const allSteps = [];
    for (let r = 0; r < 10; r += 1) {
      for (let c = 0; c < 10; c += 1) {
        allSteps.push(`${r}+${c}`);
      }
    }
    return allSteps;
  };

  const possibleSteps = getAllSteps();

  const check = (status, row, col) => {
    if (status === STATUS.hit) steps.push(`${status}+${row}+${col}`);
    _.remove(possibleSteps, (step) => step === `${row}+${col}`);
  };

  const getNextStep = (board) => {
    const stepsCount = possibleSteps.length;
    const step = possibleSteps[_.random(stepsCount - 1)].split('+');
    let nextStep = [
      parseInt(step[0], 10),
      parseInt(step[1], 10),
    ];

    if (steps.length !== 0) {
      const { row, col } = getPreviousStep();
      const ship = board.findShip(row, col)[0];

      if (!ship.isSunk()) {
        const potentialSteps = [
          [row - 1, col],
          [row + 1, col],
          [row, col - 1],
          [row, col + 1]
        ];

        for (const step of potentialSteps) {
          const [r, c] = step;
          if (r <= 9 && r >= 0) {
            if (c <= 9 && c >= 0) {
              if (board.markers[r][c] !== STATUS.miss &&
                board.markers[r][c] !== STATUS.hit &&
                board.markers[r][c] !== STATUS.reveal) {
                nextStep = [r, c];
                break;
              };
            };
          };
        };
      };
    };

    return nextStep;
  };

  const getPreviousStep = () => {
    if (steps.length === 0) return false;
    const pre1Step = steps[steps.length - 1].split('+');

    return {
      status: parseInt(pre1Step[0], 10),
      row: parseInt(pre1Step[1], 10),
      col: parseInt(pre1Step[2], 10),
    };
  };

  return {
    steps,
    possibleSteps,
    check,
    getNextStep,
  };
};

export default Player;
