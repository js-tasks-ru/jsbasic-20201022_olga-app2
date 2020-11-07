/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let tableRow = table.rows[i];
    tableRow.cells[i].style.backgroundColor = 'red';
  }
}
