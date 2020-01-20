const Ship = (() => {
  const ship = new Array();
  const init = (size) => {
    for (let i = 0; i < size; i++) {
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

  const isSunk = () => ship.every(unit => unit === 'hit');

  return {
    init,
    length,
    hit,
    isSunk,
  };
})();

export default Ship;