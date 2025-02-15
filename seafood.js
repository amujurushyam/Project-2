document.addEventListener("DOMContentLoaded", () => {
  const recipeList = document.getElementById("recipe-list");
  let currentIndex = 0;

  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((response) => response.json())
    .then((data) => {
      data.meals.forEach((meal) => {
        const recipe = document.createElement("div");
        recipe.classList.add("recipe");

        const recipeImg = document.createElement("img");
        recipeImg.src = meal.strMealThumb;
        recipeImg.alt = meal.strMeal;

        const recipeName = document.createElement("div");
        recipeName.classList.add("name");
        recipeName.textContent = meal.strMeal;

        const addToCart = document.createElement("button");
        addToCart.classList.add("add-to-cart3");
        addToCart.innerHTML = "To Know More...";
        addToCart.addEventListener("click", () => {
          window.location.href = `seafood.html?id=${meal.idMeal}`;
      });

        recipe.appendChild(recipeImg);
        recipe.appendChild(recipeName);
        recipe.appendChild(addToCart);
        recipeList.appendChild(recipe);
      });

      const totalRecipes = data.meals.length;

      setInterval(() => {
        currentIndex = (currentIndex + 1) % totalRecipes;
        recipeList.style.transform = `translateX(-${
          currentIndex * (100 / totalRecipes)
        }%)`;
      }, 3000);
    })
    .catch((error) => console.error("Error fetching the recipes:", error));
});
