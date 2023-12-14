const recipeForm = document.getElementById('recipeForm');
const recipeList = document.getElementById('recipeList');

recipeForm.addEventListener('submit', addEditRecipe);

function addEditRecipe(event) {
  event.preventDefault();
  
  const title = document.getElementById('recipeTitle').value;
  const description = document.getElementById('recipeDescription').value;
  const ingredients = document.getElementById('recipeIngredients').value;

  if (title && description && ingredients) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${title}</strong>: ${description} - Ingredients: ${ingredients}`;
    
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function () {
      editRecipe(listItem, title, description, ingredients);
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      listItem.remove();
    };

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    recipeList.appendChild(listItem);
    
    clearForm();
  } else {
    alert('Please fill in all fields.');
  }
}

function editRecipe(listItem, title, description, ingredients) {
  document.getElementById('recipeTitle').value = title;
  document.getElementById('recipeDescription').value = description;
  document.getElementById('recipeIngredients').value = ingredients;

  listItem.remove();
}

function deleteRecipe() {
  clearForm();
  const recipeItems = document.querySelectorAll('#recipeList li');
  if (recipeItems.length === 0) {
    alert('No recipes to delete.');
    return;
  }
  
  recipeItems[recipeItems.length - 1].remove();
}

function clearForm() {
  recipeForm.reset();
}
