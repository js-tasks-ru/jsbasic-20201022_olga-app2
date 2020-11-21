/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  for (let key in friends) {
    let li = document.createElement('li');
    li.textContent = `${friends[key].firstName} ${friends[key].lastName}`;
    ul.append(li);
  }

  return ul;
}
