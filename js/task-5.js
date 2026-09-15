function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("body"),
  changeColorBtn: document.querySelector(".change-color"),
  colorMessage: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", onChangeColorBtnClick);

function onChangeColorBtnClick() {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.colorMessage.textContent = color;
}
