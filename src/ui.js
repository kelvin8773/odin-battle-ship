import {
  STATUS, NUMBERS_LABEL, CHARS_LABEL,
} from './assets/js/constants';

const UI = (() => {
  const messageBar = document.getElementById('message-bar');
  const humanTable = document.getElementById('human-table');
  const computerTable = document.getElementById('computer-table');
  const humanScores = document.getElementById('human-scores');
  const computerScores = document.getElementById('computer-scores');

  const renderCell = (status, row, col, type) => {
    const table = type === 'Human' ? humanTable : computerTable;
    const cells = table.querySelectorAll('.cell');

    cells.forEach((cell) => {
      if (cell.getAttribute('row') == row && cell.getAttribute('col') == col) {
        switch (status) {
          case STATUS.around:
            cell.className = 'status-around cell';
            break;
          case STATUS.miss:
            cell.className = 'status-miss cell';
            break;
          case STATUS.hit:
            cell.className = 'status-hit cell';
            break;
          default:
            cell.className = 'status-empty cell';
        }
      }
    });
  };

  const renderTable = (board) => {
    const table = board.type === 'Human' ? humanTable : computerTable;
    table.innerHTML = '';
    for (let r = 0; r <= 10; r += 1) {
      const row = document.createElement('tr');
      for (let c = 0; c <= 10; c += 1) {
        const block = (r === 0 || c === 0) ? document.createElement('th') : document.createElement('td');
        block.setAttribute('row', r - 1);
        block.setAttribute('col', c - 1);
        if (r === 0) block.innerText = CHARS_LABEL[c];
        if (c === 0) block.innerText = NUMBERS_LABEL[r];

        if (r !== 0 && c !== 0) {
          const status = board.markers[r - 1][c - 1];
          switch (status) {
            case STATUS.fill:
              block.className = board.type === 'Human' ? 'status-fill cell' : 'cell';
              break;
            case STATUS.around:
              block.className = 'cell';
              break;
            default:
              block.className = 'status-empty cell';
          }
        }

        row.appendChild(block);
      }
      table.appendChild(row);
    }
  };

  const renderScores = (board) => {
    const scores = board.type === 'Human' ? humanScores : computerScores;
    scores.innerHTML = '';

    let idx = 0;
    for (let i = 0; i < 4; i += 1) {
      const line = document.createElement('p');
      for (let j = 0; j <= i; j += 1) {
        const ship = document.createElement('span');
        for (const unit of board.ships[idx].units) {
          const block = document.createElement('small');
          block.innerText = '◼';
          switch (unit) {
            case STATUS.hit:
              block.className = 'ship-hit';
              break;
            default:
              block.className = 'ship-normal';
          }
          ship.appendChild(block);
        }
        idx += 1;
        line.appendChild(ship);
      }
      scores.appendChild(line);
    }
  };

  const updateMessage = (msg) => {
    messageBar.className = msg.includes('win') ? 'text-note show-info' : 'show-info';
    messageBar.innerText = msg;
  };

  const hideMessage = (time) => {
    setTimeout(() => {
      messageBar.innerText = '-';
      messageBar.className = 'hide-info';
    }, time * 1000);
  };

  const renderShipAround = (board, ship) => {
    ship.coordinates.forEach((cor) => {
      const [row, col] = cor;

      for (let r = row - 1; r <= row + 1; r += 1) {
        if (r > 9 || r < 0) continue;
        for (let c = col - 1; c <= col + 1; c += 1) {
          if (c > 9 || c < 0) continue;
          if (board.markers[r][c] === STATUS.around) {
            board.markers[r][c] = STATUS.reveal;
            renderCell(STATUS.around, r, c, board.type);
          }
        }
      }
    });
  };

  return {
    renderCell,
    renderTable,
    renderScores,
    updateMessage,
    hideMessage,
    renderShipAround,
  };
})();

export default UI;
