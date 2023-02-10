"use strict";
const listUl = document.getElementById("list-ul");

let listLi = prompt("Enter a list");
while (listLi !== null && listLi !== undefined && listLi !== " ") {
  let li = document.createElement("li");
  li.innerText = listLi;
  listUl.appendChild(li);
  listLi = prompt("Enter a list");
}
