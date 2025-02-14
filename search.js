const searchInput = document.getElementById("searchInput");
      const searchResults = document.getElementById("searchResults");

      searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = ""; // Clear previous results

        if (query) {
          fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then((response) => response.json())
            .then((data) => {
              const meals = data.meals || []; // Handle case where no meals are found

              meals.forEach((meal) => {
                const link = document.createElement("a");
                link.href = `search.html?id=${meal.idMeal}`;
                link.textContent = meal.strMeal;
                searchResults.appendChild(link);
              });
            })
            .catch((error) => {
              console.error("Error fetching search results:", error);
            });
        }
      });