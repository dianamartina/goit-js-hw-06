const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener("input", () => {
  let fontSize = Number(inputEl.value);
  textEl.style.fontSize = `${fontSize}px`;
});
