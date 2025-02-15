document.addEventListener("DOMContentLoaded", () => {
    const categoriesDiv = document.getElementById("categories");
    const ingredientsDiv = document.getElementById("ingredients");
    const mainTitle = document.getElementById("main-title");
    
    function fetchCategories() {
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response => response.json())
        .then(data => {
          data.categories.forEach(category => {
            const categoryDiv = document.createElement("div");
            categoryDiv.className = "category";
            categoryDiv.innerHTML = `
              <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
              <h3>${category.strCategory}</h3>
            `;
            categoryDiv.addEventListener("click", () => {
              fetchRecipes(category.strCategory);
            });
            categoriesDiv.appendChild(categoryDiv);
          });
        });
    }

    function fetchRecipes(category) {
      categoriesDiv.style.display = "none";
      ingredientsDiv.style.display = "flex";
      mainTitle.innerText = `${category} Recipes`;

      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(response => response.json())
        .then(data => {
          ingredientsDiv.innerHTML = "";
          data.meals.forEach(meal => {
            const mealDiv = document.createElement("div");
            mealDiv.className = "category";
            mealDiv.innerHTML = `
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <h3>${meal.strMeal}</h3>
              <button onclick="showIngredients('${meal.idMeal}')">Show Ingredients</button>
            `;
            ingredientsDiv.appendChild(mealDiv);
          });
        });
    }

    window.showIngredients = function(mealId) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(response => response.json())
        .then(data => {
          const meal = data.meals[0];
          const ingredients = [];
          for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
              ingredients.push({
                ingredient: meal[`strIngredient${i}`],
                measure: meal[`strMeasure${i}`],
                image: `https://www.themealdb.com/images/ingredients/${meal[`strIngredient${i}`]}.png`
              });
            }
          }
          ingredientsDiv.innerHTML = `
            <h2>${meal.strMeal}</h2>
            ${ingredients.map(ing => `
              <div class="category">
                <img src="${ing.image}" alt="${ing.ingredient}">
                <p>${ing.ingredient} - ${ing.measure}</p>
              </div>
            `).join('')}
          `;
        });
    }

    fetchCategories();
  });