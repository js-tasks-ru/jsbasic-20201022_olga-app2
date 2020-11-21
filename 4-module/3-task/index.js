/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let tableBody = table.tBodies[0];

  for (let i = 0; i < tableBody.rows.length; i++) {
    let tableRow = tableBody.rows[i];

    if (!isNaN(tableRow.cells[1].textContent) && Number(tableRow.cells[1].textContent) < 18) {
      tableRow.style['text-decoration'] = 'line-through';
    }

    if (tableRow.cells[2].textContent === 'm') {
      tableRow.classList.add('male');
    } else {
      tableRow.classList.add('female');
    }

    if (tableRow.cells[3].hasAttribute('data-available')) {
      if (tableRow.cells[3].getAttribute('data-available') === 'true') {
        tableRow.classList.add('available');
      } else {
        tableRow.classList.add('unavailable');
      }
    } else {
      tableRow.setAttribute('hidden', true);
    }
  }
}
