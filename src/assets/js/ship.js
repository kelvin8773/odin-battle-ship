const Ship = (type, position, direction) => {
  const init = () => {
    let size = 0;
    switch (type) {
      case 'destroyer':
        size = 1;
        break;
      case 'submarine':
        size = 2;
        break;
      case 'battleship':
        size = 3;
        break;
      case 'carrier':
        size = 4;
        break;
    }
    const array = new Array(size);
    for (let i = 0; i < size; i += 1) {
      array[i] = 'new';
    }
    return array;
  };

  const units = init();

  const status = {
    "type": type,
    "position": position,
    "direction": direction,
    "size": units.length
  };

  const getStatus = () => status;

  const length = () => units.length;

  const hit = (pos) => {
    if (units[pos - 1] === 'new') {
      units[pos - 1] = 'hit';
      return true;
    }
    return false;
  };

  const isSunk = () => units.every((unit) => unit === 'hit');

  return {
    getStatus,
    length,
    hit,
    isSunk,
  };
};

export default Ship;