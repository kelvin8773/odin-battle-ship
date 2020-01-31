const STATUS = {
  fill: 2,
  around: 1,
  empty: 0,
  miss: -1,
  hit: -2,
};

const SHIP_TYPES = {
  'carrier': 4,
  'battleship': 3,
  'submarine': 2,
  'destroyer': 1,
}

const CHARS_LABEL = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const NUMBERS_LABEL = [' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];


export {
  STATUS,
  CHARS_LABEL,
  NUMBERS_LABEL,
  SHIP_TYPES,
}