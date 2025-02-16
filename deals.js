let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [];
let listCards = [];

async function fetchProducts() {
  let response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
  );
  let data = await response.json();
  return data.meals.map((meal) => ({
    strMeal: meal.strMeal,
    strMealThumb: meal.strMealThumb,
    idMeal: meal.idMeal,
    price: Math.floor(Math.random() * 1000) + 100,
  }));
}

async function initApp() {
  products = await fetchProducts();
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
      <img src="${value.strMealThumb}"/>
      <div class="title">${value.strMeal}</div>
      <div class="price">₹${value.price.toLocaleString()}</div>
      <button onclick="addToCard(${key})">Add To Cart</button>
    `;
    list.appendChild(newDiv);
  });
}
initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
    alert(`"${products[key].strMeal}" has been added to the cart`);
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    if (value != null) {
      totalPrice += value.price * value.quantity;
      count += value.quantity;
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
        <div><img src="${value.strMealThumb}"/></div>
        <div>${value.strMeal}</div>
        <div>₹${value.price.toLocaleString()}</div>
        <div>
          <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
        </div>
      `;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = `₹${totalPrice.toLocaleString()}`;
  quantity.innerText = count;
}

total.addEventListener("click", () => {
  window.location.href = "check.html";
});

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
