const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", onNameInput);

function onNameInput() {
  if (refs.nameInput.value.trim() !== "") {
    refs.nameOutput.textContent = refs.nameInput.value.trim();
  } else {
    refs.nameOutput.textContent = "Anonymous";
  }
}
