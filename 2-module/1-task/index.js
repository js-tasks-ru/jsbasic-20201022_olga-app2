/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let result = 0;

  for (let key in salaries) {
    if (salaries[key] && typeof salaries[key] == 'number') {
      result += salaries[key];
    }
  }

  return result;
}
