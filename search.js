const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

let currentPage = 1;
const resultsPerPage = 10;

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "styles.css";
document.head.appendChild(link);

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";
  currentPage = 1;

  if (query) {
    fetchResults(query, currentPage);
  }
});

function fetchResults(query, page) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then((response) => response.json())
    .then((data) => {
      const meals = data.meals || [];
      displayResults(meals, page);
    })
    .catch((error) => {
      console.error("Error fetching search results:", error);
    });
}

function displayResults(meals, page) {
  searchResults.innerHTML = "";
  const start = (page - 1) * resultsPerPage;
  const end = start + resultsPerPage;
  const paginatedMeals = meals.slice(start, end);

  paginatedMeals.forEach((meal) => {
    const link = document.createElement("a");
    link.href = `search.html?id=${meal.idMeal}`;
    link.textContent = meal.strMeal;
    searchResults.appendChild(link);
  });

  createPagination(meals.length, page);
}

function createPagination(totalResults, currentPage) {
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const pagination = document.createElement("div");
  pagination.className = "pagination";

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.className = "page-button";
    pageButton.disabled = i === currentPage;
    pageButton.addEventListener("click", () => {
      fetchResults(searchInput.value.toLowerCase(), i);
    });
    pagination.appendChild(pageButton);
  }

  searchResults.appendChild(pagination);
}
