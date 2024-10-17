const allListEl = document.querySelectorAll("li.item");
console.log("Number of categories: ", allListEl.length);

allListEl.forEach((element) => {
  console.log("Category: ", element.firstElementChild.textContent);
  console.log("Elements: ", element.lastElementChild.children.length);
});
