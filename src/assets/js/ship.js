const Ship = (() => {
  const ship = [];
  const init = (size) => {
    for (let i = 0; i < size; i += 1) {
      ship[i] = 'new';
    }
  };
  const length = () => ship.length;

  const hit = (pos) => {
    if (ship[pos - 1] === 'new') {
      ship[pos - 1] = 'hit';
      return true;
    }
    return false;
  };

  const isSunk = () => ship.every((unit) => unit === 'hit');

  return {
    init,
    length,
    hit,
    isSunk,
  };
})();

export default Ship;