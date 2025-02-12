const url1 = "https://67aa184d65ab088ea7e5a1d5.mockapi.io/food-data";

async function fetchFood() {
  try {
    const response = await fetch(url1);
    if (!response.ok) {
      throw new Error("Failed to retrieve data");
    }
    const data = await response.json();
    const foodItems = data;
    const cardContainer = document.getElementById("contact-tab-pane");

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
      button.className = "add-to-cart1";
      button.textContent = "Add to Cart";

      // Add event listener for navigation
      button.addEventListener("click", () => {
        window.location.href = "signup.html";
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
