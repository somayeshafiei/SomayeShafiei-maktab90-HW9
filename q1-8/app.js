"use strict";
const pane = document.querySelectorAll(".pane");
const deletBtn = document.createElement("button");
const container = document.querySelector(".container");
console.log(deletBtn);
console.log(pane);

container.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentNode.remove();
    console.log(container);
  }
});
[...pane].forEach((item) => {
  item.insertAdjacentHTML(
    "afterbegin",
    '<button class="remove-button">[x]</button>'
  );
});
