/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  const strLowerCase = str.toLowerCase();

  if (strLowerCase.includes("1xbet") || strLowerCase.includes("xxx") ) {
    return true;
  }

  return false;
}
