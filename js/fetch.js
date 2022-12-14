const firstPage = document.querySelector(".first");
const secondPage = document.querySelector(".second");
const thirdPage = document.querySelector(".third");

// First Page
const accountNumber = firstPage.querySelector(".account__number");
const accountBalance = firstPage.querySelector(".account__balance strong");
const accountTitle = firstPage.querySelector(".account__title");
const todayList = firstPage.querySelector(".today-list .list ul");
const yesterdayList = firstPage.querySelector(".yesterday-list .list ul");
const twodaysagoList = firstPage.querySelector(".twodaysago-list .list ul");
const todayExpenses = firstPage.querySelector(".today .expenses > span");
const yesterdayExpenses = firstPage.querySelector(
  ".yesterday .expenses > span"
);
const twodaysagoExpenses = firstPage.querySelector(
  ".twodaysago .expenses > span"
);

// Second Page
const accountNumber2 = secondPage.querySelector(".account__number");
const accountBalance2 = secondPage.querySelector(".account__balance strong");
const accountTitle2 = secondPage.querySelector(".account__title");
const todayList2 = secondPage.querySelector(".today-list .list ul");
const yesterdayList2 = secondPage.querySelector(".yesterday-list .list ul");
const twodaysagoList2 = secondPage.querySelector(".twodaysago-list .list ul");
const todayExpenses2 = secondPage.querySelector(".today .expenses > span");
const yesterdayExpenses2 = secondPage.querySelector(
  ".yesterday .expenses > span"
);
const twodaysagoExpenses2 = secondPage.querySelector(
  ".twodaysago .expenses > span"
);

// Third Page
const accountNumber3 = thirdPage.querySelector(".account__number");
const accountBalance3 = thirdPage.querySelector(".account__balance strong");
const accountTitle3 = thirdPage.querySelector(".account__title");
const todayList3 = thirdPage.querySelector(".today-list .list ul");
const yesterdayList3 = thirdPage.querySelector(".yesterday-list .list ul");
const twodaysagoList3 = thirdPage.querySelector(".twodaysago-list .list ul");
const todayExpenses3 = thirdPage.querySelector(".today .expenses > span");
const yesterdayExpenses3 = thirdPage.querySelector(
  ".yesterday .expenses > span"
);
const twodaysagoExpenses3 = thirdPage.querySelector(
  ".twodaysago .expenses > span"
);

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    getData(data);
  });

function getData(data) {
  // Get Account Title
  accountTitle.textContent = Object.keys(data)[0];
  accountTitle2.textContent = Object.keys(data)[1];
  accountTitle3.textContent = Object.keys(data)[2];

  // Get Account Info
  accountNumber.textContent = data.?????????.????????????;
  accountBalance.textContent = `${Number(data.?????????.????????????).toLocaleString(
    "ko-KR"
  )}???`;
  accountNumber2.textContent = data.????????????.????????????;
  accountBalance2.textContent = `${Number(
    data.????????????.????????????
  ).toLocaleString("ko-KR")}???`;
  accountNumber3.textContent = data.???????????????.????????????;
  accountBalance3.textContent = `${Number(
    data.???????????????.????????????
  ).toLocaleString("ko-KR")}???`;

  // Get Date
  const dt = new Date();
  const year = dt.getFullYear();
  const month = dt.getMonth() + 1;
  const day = dt.getDate();
  const day2 = day - 1;
  const day3 = day - 2;
  const todayDate = `${year}-${month >= 10 ? month : "0" + month}-${
    day >= 10 ? day : "0" + day
  }`;
  const yesterdayDate = `${year}-${month >= 10 ? month : "0" + month}-${
    day2 >= 10 ? day2 : "0" + day2
  }`;
  const twodaysagoDate = `${year}-${month >= 10 ? month : "0" + month}-${
    day3 >= 10 ? day3 : "0" + day3
  }`;

  let sum1 = 0;
  sum2 = 0;
  sum3 = 0;
  sum4 = 0;
  sum5 = 0;
  sum6 = 0;
  sum7 = 0;
  sum8 = 0;
  sum9 = 0;
  for (let i = 0; i < data.?????????.log.length; i++) {
    if (data.?????????.log[i].date === todayDate) {
      const liEl = document.createElement("li");
      const spanEl = document.createElement("span");
      const spanEl2 = document.createElement("span");
      const today = todayList.appendChild(liEl);
      const todayHistory = today.appendChild(spanEl);
      const todayPrice = today.appendChild(spanEl2);
      todayHistory.className = "history";
      todayPrice.className = "price";
      todayHistory.textContent = data.?????????.log[i].history;
      todayPrice.textContent = `${Number(
        data.?????????.log[i].price
      ).toLocaleString("ko-KR")}???`;
      if (data.?????????.log[i].income === "in") {
        todayPrice.className = "price-income";
        todayPrice.textContent = `+ ${Number(
          data.?????????.log[i].price
        ).toLocaleString("ko-KR")}???`;
        sum1 -= data.?????????.log[i].price;
      } else {
        sum1 += data.?????????.log[i].price;
      }
      todayExpenses.textContent = `${Number(sum1).toLocaleString("ko-KR")}???`;
    } else if (data.?????????.log[i].date === yesterdayDate) {
      const liEl = document.createElement("li");
      const spanEl = document.createElement("span");
      const spanEl2 = document.createElement("span");
      const yesterday = yesterdayList.appendChild(liEl);
      const yesterdayHistory = yesterday.appendChild(spanEl);
      const yesterdayPrice = yesterday.appendChild(spanEl2);
      yesterdayHistory.className = "history";
      yesterdayPrice.className = "price";
      yesterdayHistory.textContent = data.?????????.log[i].history;
      yesterdayPrice.textContent = `${Number(
        data.?????????.log[i].price
      ).toLocaleString("ko-KR")}???`;
      if (data.?????????.log[i].income === "in") {
        yesterdayPrice.className = "price-income";
        yesterdayPrice.textContent = `+ ${Number(
          data.?????????.log[i].price
        ).toLocaleString("ko-KR")}???`;
        sum2 -= data.?????????.log[i].price;
      } else {
        sum2 += data.?????????.log[i].price;
      }
      yesterdayExpenses.textContent = `${Number(sum2).toLocaleString(
        "ko-KR"
      )}???`;
    } else if (data.?????????.log[i].date === twodaysagoDate) {
      const liEl = document.createElement("li");
      const spanEl = document.createElement("span");
      const spanEl2 = document.createElement("span");
      const twodaysago = twodaysagoList.appendChild(liEl);
      const twodaysagoHistory = twodaysago.appendChild(spanEl);
      const twodaysagoPrice = twodaysago.appendChild(spanEl2);
      twodaysagoHistory.className = "history";
      twodaysagoPrice.className = "price";
      twodaysagoHistory.textContent = data.?????????.log[i].history;
      twodaysagoPrice.textContent = `${Number(
        data.?????????.log[i].price
      ).toLocaleString("ko-KR")}???`;
      if (data.?????????.log[i].income === "in") {
        twodaysagoPrice.className = "price-income";
        twodaysagoPrice.textContent = `+ ${Number(
          data.?????????.log[i].price
        ).toLocaleString("ko-KR")}???`;
        sum3 -= data.?????????.log[i].price;
      } else {
        sum3 += data.?????????.log[i].price;
      }
      twodaysagoExpenses.textContent = `${Number(sum3).toLocaleString(
        "ko-KR"
      )}???`;
    }
  }

  for (let i = 0; i < data.????????????.log.length; i++) {
    if (data.????????????.log[i].date === todayDate) {
      const liEl = document.createElement("li");
      const spanEl = document.createElement("span");
      const spanEl2 = document.createElement("span");
      const today = todayList2.appendChild(liEl);
      const todayHistory = today.appendChild(spanEl);
      const todayPrice = today.appendChild(spanEl2);
      todayHistory.className = "history";
      todayPrice.className = "price";
      todayHistory.textContent = data.????????????.log[i].history;
      todayPrice.textContent = `${Number(
        data.????????????.log[i].price
      ).toLocaleString("ko-KR")}???`;
      if (data.????????????.log[i].income === "in") {
        todayPrice.className = "price-income";
        todayPrice.textContent = `+ ${Number(
          data.????????????.log[i].price
        ).toLocaleString("ko-KR")}???`;
        sum4 -= data.????????????.log[i].price;
      } else {
        sum4 += data.????????????.log[i].price;
      }
      todayExpenses2.textContent = `${Number(sum4).toLocaleString("ko-KR")}???`;
    } else if (data.????????????.log[i].date === yesterdayDate) {
      const liEl = document.createElement("li");
      const spanEl = document.createElement("span");
      const spanEl2 = document.createElement("span");
      const yesterday = yesterdayList2.appendChild(liEl);
      const yesterdayHistory = yesterday.appendChild(spanEl);
      const yesterdayPrice = yesterday.appendChild(spanEl2);
      yesterdayHistory.className = "history";
      yesterdayPrice.className = "price";
      yesterdayHistory.textContent = data.????????????.log[i].history;
      yesterdayPrice.textContent = `${Number(
        data.????????????.log[i].price
      ).toLocaleString("ko-KR")}???`;
      if (data.????????????.log[i].income === "in") {
        yesterdayPrice.className = "price-income";
        yesterdayPrice.textContent = `+ ${Number(
          data.????????????.log[i].price
        ).toLocaleString("ko-KR")}???`;
        sum5 -= data.????????????.log[i].price;
      } else {
        sum5 += data.????????????.log[i].price;
      }
      yesterdayExpenses2.textContent = `${Number(sum5).toLocaleString(
        "ko-KR"
      )}???`;
    } else if (data.????????????.log[i].date === twodaysagoDate) {
      const liEl = document.createElement("li");
      const spanEl = document.createElement("span");
      const spanEl2 = document.createElement("span");
      const twodaysago = twodaysagoList2.appendChild(liEl);
      const twodaysagoHistory = twodaysago.appendChild(spanEl);
      const twodaysagoPrice = twodaysago.appendChild(spanEl2);
      twodaysagoHistory.className = "history";
      twodaysagoPrice.className = "price";
      twodaysagoHistory.textContent = data.????????????.log[i].history;
      twodaysagoPrice.textContent = `${Number(
        data.????????????.log[i].price
      ).toLocaleString("ko-KR")}???`;
      if (data.????????????.log[i].income === "in") {
        twodaysagoPrice.className = "price-income";
        twodaysagoPrice.textContent = `+ ${Number(
          data.????????????.log[i].price
        ).toLocaleString("ko-KR")}???`;
        sum6 -= data.????????????.log[i].price;
      } else {
        sum6 += data.????????????.log[i].price;
      }
      twodaysagoExpenses2.textContent = `${Number(sum6).toLocaleString(
        "ko-KR"
      )}???`;
    }
  }

  for (let i = 0; i < data.???????????????.log.length; i++) {
    if (data.???????????????.log[i].date === todayDate) {
      const liEl = document.createElement("li");
      const spanEl = document.createElement("span");
      const spanEl2 = document.createElement("span");
      const today = todayList3.appendChild(liEl);
      const todayHistory = today.appendChild(spanEl);
      const todayPrice = today.appendChild(spanEl2);
      todayHistory.className = "history";
      todayPrice.className = "price";
      todayHistory.textContent = data.???????????????.log[i].history;
      todayPrice.textContent = `${Number(
        data.???????????????.log[i].price
      ).toLocaleString("ko-KR")}???`;
      if (data.???????????????.log[i].income === "in") {
        todayPrice.className = "price-income";
        todayPrice.textContent = `+ ${Number(
          data.???????????????.log[i].price
        ).toLocaleString("ko-KR")}???`;
        sum7 -= data.???????????????.log[i].price;
      } else {
        sum7 += data.???????????????.log[i].price;
      }
      todayExpenses3.textContent = `${Number(sum7).toLocaleString("ko-KR")}???`;
    } else if (data.???????????????.log[i].date === yesterdayDate) {
      const liEl = document.createElement("li");
      const spanEl = document.createElement("span");
      const spanEl2 = document.createElement("span");
      const yesterday = yesterdayList3.appendChild(liEl);
      const yesterdayHistory = yesterday.appendChild(spanEl);
      const yesterdayPrice = yesterday.appendChild(spanEl2);
      yesterdayHistory.className = "history";
      yesterdayPrice.className = "price";
      yesterdayHistory.textContent = data.???????????????.log[i].history;
      yesterdayPrice.textContent = `${Number(
        data.???????????????.log[i].price
      ).toLocaleString("ko-KR")}???`;
      if (data.???????????????.log[i].income === "in") {
        yesterdayPrice.className = "price-income";
        yesterdayPrice.textContent = `+ ${Number(
          data.???????????????.log[i].price
        ).toLocaleString("ko-KR")}???`;
        sum8 -= data.???????????????.log[i].price;
      } else {
        sum8 += data.???????????????.log[i].price;
      }
      yesterdayExpenses3.textContent = `${Number(sum8).toLocaleString(
        "ko-KR"
      )}???`;
    } else if (data.???????????????.log[i].date === twodaysagoDate) {
      const liEl = document.createElement("li");
      const spanEl = document.createElement("span");
      const spanEl2 = document.createElement("span");
      const twodaysago = twodaysagoList3.appendChild(liEl);
      const twodaysagoHistory = twodaysago.appendChild(spanEl);
      const twodaysagoPrice = twodaysago.appendChild(spanEl2);
      twodaysagoHistory.className = "history";
      twodaysagoPrice.className = "price";
      twodaysagoHistory.textContent = data.???????????????.log[i].history;
      twodaysagoPrice.textContent = `${Number(
        data.???????????????.log[i].price
      ).toLocaleString("ko-KR")}???`;
      if (data.???????????????.log[i].income === "in") {
        twodaysagoPrice.className = "price-income";
        twodaysagoPrice.textContent = `+ ${Number(
          data.???????????????.log[i].price
        ).toLocaleString("ko-KR")}???`;
        sum9 -= data.???????????????.log[i].price;
      } else {
        sum9 += data.???????????????.log[i].price;
      }
      twodaysagoExpenses3.textContent = `${Number(sum9).toLocaleString(
        "ko-KR"
      )}???`;
    }
  }
}
