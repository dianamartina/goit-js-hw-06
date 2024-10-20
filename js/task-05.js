const inputEl = document.getElementById("name-input");
const inputOutput = document.getElementById("name-output");

inputEl.addEventListener("input", (event) => {
  inputOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    inputOutput.textContent = "Anonymous";
  }
});
