"use strict";
const cardContent = document.getElementById("cardContent");
let totalOrderPrice = document.getElementById("totalOrderPrice");
const serviceProduct = document.getElementById("serviceProduct");
const discountPrice = document.getElementById("discountPrice");
const discountInput = document.getElementById("discountInput");
const discountBtn = document.getElementById("discountBtn");
const whlolePayment = document.getElementById("payment");

let mainPrice = 0;

const db = [
  {
    productName: "همبرگر مخصوص",
    productPrice: 10000,
    productImg: "./assets/img/hamburger.png",
    count: 0,
    id: 1,
    totalPrice: 0,
  },
  {
    productName: "همبرگر معمولی",
    productPrice: 8000,
    productImg: "./assets/img/hamburger.png",
    count: 0,
    id: 2,
    totalPrice: 0,
  },

  {
    productName: "همبرگر مخصوص با قارچ و پنیر",
    productPrice: 20000,
    productImg: "./assets/img/hamburger.png",
    count: 0,
    id: 3,
    totalPrice: 0,
  },
  {
    productName: "همبرگر معمولی با قارچ و پنیر",
    productPrice: 10000,
    productImg: "./assets/img/hamburger.png",
    count: 0,
    id: 4,
    totalPrice: 0,
  },
  {
    productName: " سیب زمینی سرخ کرده",
    productPrice: 10000,
    productImg: "./assets/img/french_fries.png",
    count: 0,
    id: 5,
    totalPrice: 0,
  },
  {
    productName: " سیب زمینی سرخ کرده ویژه",
    productPrice: 25000,
    productImg: "./assets/img/french_fries.png",
    count: 0,
    id: 6,
    totalPrice: 0,
  },
  {
    productName: "نوشابه",
    productPrice: 5000,
    productImg: "./assets/img/soda.png",
    count: 0,
    id: 7,
    totalPrice: 0,
  },

  {
    productName: " نوشابه رژیمی",
    productPrice: 6000,
    productImg: "./assets/img/soda.png",
    count: 0,
    id: 8,
    totalPrice: 0,
  },
  {
    productName: " سالاد سزار",
    productPrice: 25000,
    productImg: "./assets/img/ceasar.png",
    count: 0,
    id: 9,
    totalPrice: 0,
  },

  {
    productName: " سالاد فصل",
    productPrice: 8000,
    productImg: "./assets/img/salad.png",
    count: 0,
    id: 10,
    totalPrice: 0,
  },
];

function renderUi() {
  cardContent.innerHTML = "";
  db.map((element) => {
    cardContent.innerHTML += ` <div class="col-lg-5 col-md-5 col-sm-11 col-10 p-1 bg-white rounded-2 cards">
    <div class="row text-start">
      <div class="col-lg-9 col-md-8 col-sm-9 col-8 mdResponsive">
        <div class="card-body">
          <p class="card-title text fw-bolder fs-6 ">${element.productName}</p>
          <p class="card-text text-muted" dir="rtl">
            ${element.productPrice} <span class="span">تومان</span>
          </p>

          <div
            class="flex-row-reverse d-flex justify-content-between "
          >
            <div
              class="btn-group buttons "
              role="group"
              aria-label="Basic example"
            >
              <button class="rounded-end-1 bgc-btn p-2  p-sm-0 p-md-0 p-lg-0 border-0 width70" id=${element.id} onclick="handleMinus(this)">
                <img
                  src="./assets/img/minus.png"
                  class="img-fluid w-50 "
                  alt=""
                />
              </button>
              <button
                class="btn rounded-0 w-50 py-0 bgc-btn-center p-2"
              >${element.count}</button>
              <button class="rounded-start-1 p-2 p-sm-0 p-md-0 p-lg-0 bgc-btn text-center withAdd70 border-0  " id=${element.id} onclick="handleAdd(this)">
                <img
                  src="./assets/img/add.png"
                  class="img-fluid w-50 "
                  alt=""
                />
              </button>
            </div>

            <span class="text-muted " dir="rtl">${element.totalPrice} تومان</span>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-3 col-4 align-content-stretch">
        <img
          src=${element.productImg}
          class="img-thumbnail border-0 rounded-start tasvir "
          alt="..."
        />
      </div>
    </div>
  </div>`;
  });

  totalOrderPrice.textContent = `${mainPrice} تومان `;
  serviceProduct.textContent = `${mainPrice * 0.05} تومان`;

  whlolePayment.textContent = ` ${
    parseInt(totalOrderPrice.textContent) + parseInt(serviceProduct.textContent)
  } تومان `;
}
renderUi();

// ..........................payment & discount..................//
discountBtn.addEventListener("click", addDiscount);
function addDiscount() {
  discountPrice.textContent = `${discountPercent()} درصد`;
  let discount1 = 100 - parseInt(discountPrice.textContent);
  let test = mainPrice + parseInt(serviceProduct.textContent);
  console.log(test);
  console.log(discount1);
  whlolePayment.textContent = `${(test * discount1) / 100} تومان`;
}

// ............................adding food........................//

function handleAdd(event) {
  const addBtnId = event.id;
  // console.log(elmId);
  db.find((el) => {
    if (addBtnId == el.id) {
      el.count += 1;
      el.totalPrice += el.productPrice;
      mainPrice += el.productPrice;
      renderUi();
    }
  });
}

// ............................minusing food.......................//
function handleMinus(event) {
  const minusBtnId = event.id;
  db.find((el) => {
    if (minusBtnId == el.id && el.count >= 1) {
      el.count -= 1;
      el.totalPrice -= el.productPrice;
      mainPrice -= el.productPrice;
      renderUi();
    }
  });
}
// .............................discounting........................//
function discountPercent() {
  const test = discountInput.value;
  if (test === "Golden") return 30;
  if (test === "Silver") return 20;
  if (test === "Bronze") return 10;
  return 0;
}
