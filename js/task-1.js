const refs = {
  categories: document.querySelectorAll("#categories .item"),
};

console.log(`Number of categories: ${refs.categories.length}`);

refs.categories.forEach((category) => {
  const title = category.querySelector("h2");
  console.log(`Category: ${title.textContent}`);

  const elements = category.querySelectorAll("ul li");
  console.log(`Elements: ${elements.length}`);
});
