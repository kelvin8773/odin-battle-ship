import _ from 'lodash';

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

  const check = (row, col) => {
    steps.push(`${row}+${col}`);
    _.remove(possibleSteps, (step) => step === `${row}+${col}`);
  };

  const getNextStep = () => {
    const leftStepsCount = possibleSteps.length;
    const nextStep = possibleSteps[_.random(leftStepsCount - 1)].split('+');

    return {
      row: parseInt(nextStep[0], 10),
      col: parseInt(nextStep[1], 10),
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
