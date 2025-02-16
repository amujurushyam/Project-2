const url1 = "https://67aa1bf965ab088ea7e5ad7a.mockapi.io/one";

async function fetchFood() {
  try {
    const response = await fetch(url1);
    if (!response.ok) {
      throw new Error("Failed to retrieve data");
    }
    const data = await response.json();
    const foodItems = data;
    const cardContainer = document.getElementById("home-tab-pane");

    foodItems.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;

      const title = document.createElement("div");
      title.className = "card-title";
      title.textContent = item.name;

      const button = document.createElement("button");
      button.className = "add-to-cart";
      button.textContent = "Feautered Items";
      button.addEventListener("click", () => {
        alert(`Thank you for visiting. Feautered Items`);
      });

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(button);

      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error(error.message);
  }
}

fetchFood();
