const refs = {
  loginForm: document.querySelector(".login-form"),
  inputEmail: document.querySelector('[name="email"]'),
  inputPassword: document.querySelector('[name="password"]'),
};

refs.loginForm.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();

  if (
    refs.loginForm.elements.email.value.trim() === "" ||
    refs.loginForm.elements.password.value.trim() === ""
  ) {
    alert("All form fields must be filled in");
  } else {
    const result = {
      [refs.inputEmail.getAttribute("name")]:
        refs.loginForm.elements.email.value.trim(),
      [refs.inputPassword.getAttribute("name")]:
        refs.loginForm.elements.password.value.trim(),
    };
    console.log(result);
    refs.loginForm.reset();
  }
}
