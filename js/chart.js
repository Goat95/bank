const mixedChart = new Chart(document.querySelector(".report-chart"), {
  data: {
    datasets: [
      {
        type: "bar",
        barThickness: 3,
        borderRadius: 4,
        data: [
          78000, 95000, 75000, 95000, 77000, 65000, 98000, 79000, 94000, 78000,
          65000, 84000, 95000, 81000, 84000,
        ],
        backgroundColor: "#38C976",
      },
      {
        type: "line",
        fill: false,
        borderDash: [5, 5],
        backgroundColor: "#FF5F00",
        borderColor: "#FF5F00",
        data: [
          62000, 64000, 65000, 66000, 70000, 72000, 75000, 76000, 77000, 79000,
          80000, 81000, 82000, 83000, 84000,
        ],
      },
    ],
    labels: [02, 04, 06, 08, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const spendChart = document.querySelector(".spend-chart");
const pieData = {
  주유비: 56000,
  건강관리비: 80000,
  외식비: 233000,
  장보기: 390000,
  상점: 46000,
};
const doughnutChart = c3.generate({
  bindto: spendChart,
  data: {
    json: [pieData],
    keys: {
      value: Object.keys(pieData),
    },
    type: "donut",
  },
  donut: {
    title: "123,456,789원",
  },
});
