fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
  .then((response) => response.json)
  .then((data) => console.log(data.strMeal))
  .catch((error) => console.log(error));
