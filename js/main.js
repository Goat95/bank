const firstPage = document.querySelector(".first");
const secondPage = document.querySelector(".second");
const thirdPage = document.querySelector(".third");

// Range
const range1 = firstPage.querySelector(".range");
const range2 = secondPage.querySelector(".range");
const range3 = thirdPage.querySelector(".range");
range1.addEventListener("input", function (e) {
  const val = e.target.value;
  range1.style.background =
    "linear-gradient(to right, #FFDB4C 0%, #FFDB4C " +
    val +
    "%, #d5d4d3 " +
    val +
    "%, #d5d4d3 100%)";
});
range2.addEventListener("input", function (e) {
  const val = e.target.value;
  range2.style.background =
    "linear-gradient(to right, #4C89FF 0%, #4C89FF " +
    val +
    "%, #d5d4d3 " +
    val +
    "%, #d5d4d3 100%)";
});
range3.addEventListener("input", function (e) {
  const val = e.target.value;
  range3.style.background =
    "linear-gradient(to right, #C64CFF 0%, #C64CFF " +
    val +
    "%, #d5d4d3 " +
    val +
    "%, #d5d4d3 100%)";
});

// Shutter Button
const shutterBtn1 = firstPage.querySelector(".shutter");
const shutterBtn2 = secondPage.querySelector(".shutter");
const shutterBtn3 = thirdPage.querySelector(".shutter");
const sectionEl1 = firstPage.querySelector(".account__history__list");
const sectionEl2 = secondPage.querySelector(".account__history__list");
const sectionEl3 = thirdPage.querySelector(".account__history__list");
shutterBtn1.addEventListener("click", function (e) {
  e.preventDefault();
  sectionEl1.classList.toggle("active");
});
shutterBtn2.addEventListener("click", function (e) {
  e.preventDefault();
  sectionEl2.classList.toggle("active");
});
shutterBtn3.addEventListener("click", function (e) {
  e.preventDefault();
  sectionEl3.classList.toggle("active");
});

// Swiper
new Swiper(".page", {
  slidesPerView: 1,
});
new Swiper(".account__history__list .swiper", {
  slidesPerView: 2,
});

// Modal
const piggyBankBtn = document.querySelector(".piggybank-btn");
const closeBtn = document.querySelector(".modal-close");
piggyBankBtn.addEventListener("click", addPiggyBank);
closeBtn.addEventListener("click", offClick);
function addPiggyBank(e) {
  e.preventDefault();
  document.querySelector(".modal-wrap").style.display = "block";
  document.querySelector(".modal-bg").style.display = "block";
}
function offClick() {
  document.querySelector(".modal-wrap").style.display = "none";
  document.querySelector(".modal-bg").style.display = "none";
  piggyTitleInput.value = "";
  piggyMoneyInput.value = "";
}

// Make Piggy Bank
// const piggyForm = document.querySelector(".modal-form");
// const piggyMakeBtn = document.querySelector(".piggymake-btn");
// const piggyTitleInput = document.querySelector("#piggy-title");
// const piggyMoneyInput = document.querySelector("#piggy-money");
// function onSubmit(e) {
//   e.preventDefault();
//   const piggyTitle = piggyTitleInput.value;
//   const piggyMoney = piggyMoneyInput.value;
//   window.localStorage.setItem("title", piggyTitle);
//   window.localStorage.setItem("money", piggyMoney);
//   offClick();
// }

// if (localStorage.getItem("title") === null) {
//   piggyForm.addEventListener("submit", onSubmit);
// } else {
// }

// const makePiggyBank = (e) => {
//   const piggyBank = document.querySelector(".piggybank");
//   const divEl = document.createElement("div");
//   const piggybankItem = piggyBank.appendChild(divEl);
//   piggybankItem.className = "swiper-slide piggybank-item";
//   const spanEl1 = document.createElement("span");
//   const spanEl2 = document.createElement("span");
//   const title = piggybankItem.appendChild(spanEl1);
//   const price = piggybankItem.appendChild(spanEl2);

//   title.textContent = window.localStorage.getItem("title");
//   price.textContent = window.localStorage.getItem("money");
// };
// piggyBankBtn.addEventListener("click", makePiggyBank);
