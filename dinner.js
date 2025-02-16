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

let products = [
  {
    strMeal: "BeaverTails",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg",
    idMeal: "52928",
    price: Math.floor(Math.random() * 1000) + 100,
  },
  {
    strMeal: "Breakfast Potatoes",
    strMealThumb: "https://www.themealdb.com/images/media/meals/1550441882.jpg",
    idMeal: "52965",
    price: Math.floor(Math.random() * 1000) + 100,
  },
  {
    strMeal: "Canadian Butter Tarts",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg",
    idMeal: "52923",
    price: Math.floor(Math.random() * 1000) + 100,
  },
  {
    strMeal: "Montreal Smoked Meat",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg",
    idMeal: "52927",
    price: Math.floor(Math.random() * 1000) + 100,
  },
  {
    strMeal: "Nanaimo Bars",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/vwuprt1511813703.jpg",
    idMeal: "52924",
    price: Math.floor(Math.random() * 1000) + 100,
  },
  {
    strMeal: "Pate Chinois",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg",
    idMeal: "52930",
    price: Math.floor(Math.random() * 1000) + 100,
  },
  {
    strMeal: "Pouding chomeur",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/yqqqwu1511816912.jpg",
    idMeal: "52932",
    price: Math.floor(Math.random() * 1000) + 100,
  },
  {
    strMeal: "Poutine",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg",
    idMeal: "52804",
    price: Math.floor(Math.random() * 1000) + 100,
  },
  {
    strMeal: "Rappie Pie",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg",
    idMeal: "52933",
    price: Math.floor(Math.random() * 1000) + 100,
  },
  {
    strMeal: "Split Pea Soup",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/xxtsvx1511814083.jpg",
    idMeal: "52925",
    price: Math.floor(Math.random() * 1000) + 100,
  },
  {
    strMeal: "Sugar Pie",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg",
    idMeal: "52931",
    price: Math.floor(Math.random() * 1000) + 100,
  },
  {
    strMeal: "Timbits",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg",
    idMeal: "52929",
    price: Math.floor(Math.random() * 1000) + 100,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src = "${value.strMealThumb}"/>
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
    totalPrice = totalPrice + value.price * value.quantity;
    count = count + value.quantity;
    if (value != null) {
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
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = `₹${totalPrice.toLocaleString()}`;
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
