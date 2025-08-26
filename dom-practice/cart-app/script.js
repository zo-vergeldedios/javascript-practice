const cart = document.getElementById("cart");
const addButton = document.getElementById("addItem");

const items = [
  { name: "Hat", icon: "🧢", price: 10 },
  { name: "Shoes", icon: "👟", price: 50 },
  { name: "Backpack", icon: "🎒", price: 30 },
  { name: "Sunglasses", icon: "🕶️", price: 25 },
  { name: "Watch", icon: "⌚", price: 80 },
  { name: "Gift Box", icon: "🎁", price: 40 },
];

// Event delegation for remove buttons
cart.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove")) {
    let item = event.target.parentNode; // <li> to remove
    item.remove();
  }
});

// Add new random items
addButton.addEventListener("click", () => {
  // Pick a random item
  const randomIndex = Math.floor(Math.random() * items.length);
  const randomItem = items[randomIndex];

  // Create new <li> with random icon and name
  const newItem = document.createElement("li");
  newItem.innerHTML = `
    <span>${randomItem.icon} ${randomItem.name} - $${randomItem.price}</span>
    <button class="remove">Remove</button>
  `;
  cart.appendChild(newItem);
});
