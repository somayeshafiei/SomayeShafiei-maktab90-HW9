"use strict";
const hider = document.getElementById("hider");
const text = document.getElementById("text");
hider.addEventListener("click", cleaning);
function cleaning() {
  text.remove();

  setTimeout(() => {
    hider.remove();
  }, 1000);
}
