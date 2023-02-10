"use strict";
const ageTable = document.getElementById("age-table");
const labelsInTable = document.querySelectorAll("table label");
const firstTdTable = document.querySelector("table td:first-child");
const form = document.querySelector("form[name='search']");
const formFirstInput = document.querySelector(
  "form[name='search'] input:nth-of-type(1)"
);
const formLastInput = document.querySelector(
  "form[name='search'] input:nth-child(2)"
);

console.log(
  ageTable,
  labelsInTable,
  firstTdTable,
  form,
  formFirstInput,
  formLastInput
);
