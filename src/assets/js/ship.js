import _ from 'lodash';

const Ship = (type) => {
  const getShipLength = (type) => {
    switch (type) {
      case 'destroyer':
        return 1;
      case 'submarine':
        return 2;
      case 'battleship':
        return 3;
      case 'carrier':
        return 4;
    }
  };

  const length = getShipLength(type);
  const status = {
    normal: 0,
    hit: -1
  };

  const units = new Array(length).fill(status.normal);

  const coordinates = new Array(length);

  const setCoordinate = (pos, row, col) => coordinates[pos] = [row, col];

  const hit = (pos) => units[pos - 1] = status.hit;

  const isSunk = () => units.every(unit => unit === status.hit);

  return {
    length,
    coordinates,
    setCoordinate,
    units,
    hit,
    isSunk,
  };

};

export default Ship;