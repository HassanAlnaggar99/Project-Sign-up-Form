const submit = document.querySelector("button");
submit.addEventListener("click", function(event) {
  const password = document.querySelector("#password")
  const confirmPassword = document.querySelector("#confirmPassword");
  if (password.value !== confirmPassword.value) {
    event.preventDefault();
    password.classList.add("error");
    confirmPassword.classList.add("error");

    const errorMessage = document.createElement("p");
    const fieldset = document.querySelector("fieldset");
    errorMessage.textContent = "* Passwords do not match";
    errorMessage.classList.add("error-message");
    fieldset.appendChild(errorMessage);
  }
});
