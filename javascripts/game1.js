const ingredients = document.querySelectorAll('.ingredient');
ingredients.forEach(ingredient => {
  ingredient.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
  });
});

const dishes = document.querySelectorAll('.dish');
dishes.forEach(dish => {
  dish.addEventListener('dragover', function(e) {
    e.preventDefault();
  });

  dish.addEventListener('drop', function(e) {
    e.preventDefault();
    const ingredientId = e.dataTransfer.getData('text');
    const ingredient = document.getElementById(ingredientId);
    if (ingredient) {
      dish.appendChild(ingredient);
    }
  });
});

function checkAnswers() {
  const answers = {
    tabbouleh: 'parsley',
    kebab: 'meat',
    baklava: 'phyllo'
  };
  let score = 0;
  for (const dishId in answers) {
    const dish = document.getElementById(dishId);
    const ingredient = answers[dishId];
    if (dish.children.length > 0 && dish.children[0].id === ingredient) {
      score++;
    }
  }
  alert('Your score: ' + score + '/3');
}
