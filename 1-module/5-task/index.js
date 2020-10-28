/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  let strEnd = "…";

  if (str.length >= maxlength) {
    return str.slice(0, maxlength - strEnd.length) + strEnd;
  }

  return str;
}
