const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingredient) => {
  let listEl = document.createElement("li");
  listEl.textContent = ingredient;
  listEl.classList.add("item");
  document.querySelector("ul#ingredients").appendChild(listEl);
});
