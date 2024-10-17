const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = formEl.elements;
  if (email.value === "" || password.value === "") {
    alert("Please fill all the fields!");
  }

  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  event.currentTarget.reset();
});
