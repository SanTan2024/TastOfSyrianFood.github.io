// API credentials
const APP_ID = '06fbe3bc';
const APP_KEY = 'a73ff53b5d6fa3902d39ca2ca4764a22';

// DOM elements
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const suggestBtn = document.querySelector('#suggest-btn');
const resultsSection = document.querySelector('#results');
const loadMoreBtn = document.querySelector('#load-more-btn');

// API variables
let searchQuery = '';
let from = 0;
let to = 9;
let recipes = [];

// Event listeners
searchForm.addEventListener('submit', handleSearch);
searchBtn.addEventListener('click', handleSearch);
suggestBtn.addEventListener('click', suggestRecipe);
loadMoreBtn.addEventListener('click', loadMore);

function handleSearch(event) {
  event.preventDefault();
  console.log('Search button clicked');
  searchQuery = searchInput.value.trim();
  if (searchQuery !== '') {
    from = 0;
    to = 9;
    resultsSection.innerHTML = '';
    fetchRecipes(searchQuery, from, to);
  }
}



// Fetch recipes
async function fetchRecipes(query, from, to, clearResults) {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${from}&to=${to}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (clearResults) {
      recipes = data.hits;
      resultsSection.innerHTML = '';
    } else {
      recipes = [...recipes, ...data.hits];
    }
    displayRecipes(recipes);
  } catch (error) {
    console.log(error);
  }
}

// Display recipes
function displayRecipes(recipes) {
  if (recipes.length > 0) {
    resultsSection.innerHTML = '';
    recipes.forEach((recipe) => {
      const recipeCard = `
        <div class="recipe">
          <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
          <h2>${recipe.recipe.label}</h2>
          <p><strong>Calories:</strong> ${Math.round(recipe.recipe.calories)}</p>
          <a href="${recipe.recipe.url}" target="_blank">Get the recipe now !!!</a>
        </div>
      `;
      resultsSection.insertAdjacentHTML('beforeend', recipeCard);
    });
    if (recipes.length >= 10) {
      loadMoreBtn.style.display = 'block';
    } else {
      loadMoreBtn.style.display = 'block';
    }
  } else {
    resultsSection.innerHTML = '<p>No recipes found.</p>';
    loadMoreBtn.style.display = 'none';
  }
}

// Load more recipes
function loadMore() {
  from += 10;
  to += 10;
  fetchRecipes(searchQuery, from, to, false);
}

// Suggest recipe
async function suggestRecipe() {
  const randomQuery = getRandomQuery();
  const url = `https://api.edamam.com/search?q=${randomQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=2`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const suggestedRecipes = data.hits;
    let recipeCards = '';
    suggestedRecipes.forEach((recipe) => {
      const suggestedRecipe = recipe.recipe;
      const recipeCard = `
        <div class="recipe">
          <img src="${suggestedRecipe.image}" alt="${suggestedRecipe.label}">
          <h2>${suggestedRecipe.label}</h2>
          <p><strong>Calories:</strong> ${Math.round(suggestedRecipe.calories)}</p>
          <a href="${suggestedRecipe.url}" target="_blank">Get the special recipe now !!!</a>
        </div>
      `;
      recipeCards += recipeCard;
    });
    resultsSection.innerHTML = recipeCards;
    loadMoreBtn.style.display = 'none';
  } catch (error) {
    console.log(error);
  }
}

// Get random query
function getRandomQuery() {
  const queries = ['syrian chicken', 'syrian beef', 'syrian pork', 'syrian fish', 'syrian shrimp', 'syrian tofu', 'syrian lentils', 'syrian beans', 'syrian rice', 'syrian pasta', 'syrian potatoes',  'syrian carrots', 'syrian broccoli', 'syrian cauliflower', 'syrian spinach', 'syrian kale', 'syrian lettuce', 'syrian cucumber', 'syrian tomatoes', 'syrian bell peppers', 'syrian onions', 'syrian garlic', 'syrian ginger', 'syrian lemon', 'syrian lime', 'syrian orange', 'syrian grapefruit', 'syrian apples', 'syrian bananas', 'syrian berries', 'syrian avocado', 'syrian olives', 'syrian coconut', 'syrian almonds', 'syrian cashews', 'syrian peanuts', 'syrian walnuts', 'syrian pistachios', 'syrian hazelnuts', 'syrian sunflower seeds', 'syrian pumpkin seeds', 'syrian chia seeds', 'syrian flaxseeds', 'syrian sesame seeds', 'syrian poppy seeds', 'syrian honey', 'syrian maple syrup', 'syrian agave nectar', 'syrian coconut sugar', 'syrian brown sugar', 'syrian white sugar', 'syrian molasses', 'syrian balsamic vinegar', 'syrian red wine vinegar', 'syrian apple cider vinegar', 'syrian soy sauce', 'syrian tamari', 'syrian hoisin sauce', 'syrian fish sauce', 'syrian mayonnaise', 'syrian mustard', 'syrian ketchup', 'syrian hot sauce', 'syrian salsa', 'syrian hummus', 'syrian yogurt', 'syrian sour cream', 'syrian cream cheese', 'syrian cheddar cheese', 'syrian parmesan cheese', 'syrian feta cheese', 'syrian mozzarella cheese', 'syrian goat cheese', 'syrian blue cheese', 'syrian eggs', 'syrian milk', 'syrian butter', 'syrian flour', 'syrian yeast', 'syrian baking powder', 'syrian baking soda', 'syrian cocoa powder', 'syrian chocolate chips', 'syrian vanilla extract', 'syrian cinnamon', 'syrian nutmeg', 'syrian cloves', 'syrian cardamom', 'syrian rosemary', 'syrian thyme', 'syrian basil', 'syrian oregano', 'syrian paprika', 'syrian cumin', 'syrian coriander', 'syrian turmeric'];
  const randomNumber = Math.floor(Math.random() * queries.length);
  return queries[randomNumber];
}