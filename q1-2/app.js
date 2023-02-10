"use strict";
// const selectLink = 'a[href*="://"]:not([href^="http://internal.com"])';
// let links = document.querySelectorAll(selectLink);

// links.forEach((link) => (link.style.color = "orange"));

// let link = document.querySelector("a");
// link.style.color = "orange";

let links = document.querySelectorAll("a");

for (let link of links) {
  let href = link.getAttribute("href");
  if (!href) continue; // no attribute

  if (!href.includes("://")) continue; // no protocol

  if (href.startsWith("http://internal.com")) continue; // internal

  link.style.color = "orange";
}
