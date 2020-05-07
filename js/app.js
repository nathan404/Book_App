document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#delete-all');
  button.addEventListener('click', handleButtonClick);
  
})

const handleFormSubmit = function (event) {
  event.preventDefault();
  const listItem = document.createElement('li');
  const title = document.createElement('h2');
  const author = document.createElement('h3');
  const category = document.createElement('p');
  const deleteParagraph = document.createElement('p');
  const deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', handleDeleteClick);
  deleteButton.textContent = 'Delete';
  deleteParagraph.appendChild(deleteButton);
  title.textContent = event.target.title.value;
  author.textContent = event.target.author.value;
  category.textContent = event.target.category.value;
  listItem.appendChild(title);
  listItem.appendChild(author);
  listItem.appendChild(category);
  listItem.appendChild(deleteParagraph);
  const list = document.querySelector('#reading-list');
  list.appendChild(listItem);
  this.reset();
}

const handleButtonClick = function () {
  const list = document.querySelector('#reading-list');
  let listItem = list.firstElementChild;
  while (listItem) {
    list.removeChild(listItem);
    listItem = list.firstElementChild;
  }
}

const handleDeleteClick = function() {
  this.parentNode.parentNode.remove();
}