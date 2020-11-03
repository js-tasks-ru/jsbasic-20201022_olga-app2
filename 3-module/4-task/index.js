/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  return users
    .reduce((result, current) => {
      if (current.age <= age) {
        result = result + current.name + ', ' + current.balance + `\n`;
      }

      return result;
    }, '')
    .trim();
}
