import { STATUS, SHIP_TYPES } from './constants';

const Ship = (type) => {
  const getShipLength = (type) => SHIP_TYPES[type];
  const length = getShipLength(type);
  const units = new Array(length).fill(STATUS.fill);
  const coordinates = new Array(length);
  const setCoordinate = (pos, row, col) => { coordinates[pos] = [row, col]; };
  const hit = (pos) => { units[pos] = STATUS.hit; };
  const isSunk = () => units.every((unit) => unit === STATUS.hit);

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