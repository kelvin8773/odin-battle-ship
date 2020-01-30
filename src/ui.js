const UI = (() => {
  const humanTable = document.getElementById('human-table');
  const computerTable = document.getElementById('computer-table');
  const humanScores = document.getElementById('human-scores');
  const computerScores = document.getElementById('computer-scores');

  const labelChars = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const labelNumbers = [' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const renderTable = board => {
    const table = board.type === 'Human' ? humanTable : computerTable;
    table.innerHTML = '';
    for (let r = 0; r <= 10; r += 1) {
      const row = document.createElement('tr');
      for (let c = 0; c <= 10; c += 1) {
        const block = (r === 0 || c === 0) ? document.createElement('th') : document.createElement('td');
        if (r === 0) block.innerText = labelChars[c];
        if (c === 0) block.innerText = labelNumbers[r];

        if (r !== 0 && c !== 0) {
          const status = board.markers[r - 1][c - 1];
          switch (status) {
            case board.status.fill:
              if (board.type === 'Human')
                block.className = 'status-fill';
              break;
            case board.status.around:
              if (board.type === 'Human')
                block.className = 'status-around';
              break;
            case board.status.miss:
              block.className = 'status-miss';
              break;
            case board.status.hit:
              block.className = 'status-hit';
              break;
            default:
              block.className = 'status-empty';
          }
        }

        row.appendChild(block);
      }
      table.appendChild(row);
    }

  };

  const renderScores = board => {
    const ships = board.ships;
    const scores = board.type === 'Human' ? humanScores : computerScores;
    scores.innerHTML = "";

    let idx = 0;
    for (let i = 0; i < 4; i += 1) {
      const line = document.createElement('p');
      for (let j = 0; j <= i; j += 1) {
        const ship = document.createElement('span');
        for (const unit of ships[idx].units) {
          const block = document.createElement('small');
          block.innerText = "◼";
          switch (unit) {
            case -1:
              block.className = 'ship-hit';
              break;
            default:
              block.className = 'ship-normal';
          };
          ship.appendChild(block);
        }
        idx = idx + 1;
        line.appendChild(ship);
      }
      scores.appendChild(line);
    }
  }


  return {
    renderTable,
    renderScores,
  }

})();

export default UI;
