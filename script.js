const nav = document.querySelector(".hamburger");

nav.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const navBoxes = document.querySelectorAll(".nav-box");

  navBoxes.forEach((navBox) => {
    navBox.addEventListener("click", function () {
      // Remove active class from all nav-boxes
      navBoxes.forEach((box) => {
        box.classList.remove("nav-box-active");
      });

      // Add active class to the clicked nav-box
      this.classList.add("nav-box-active");
    });
  });
});

const data = {
  labels: ["dock 1", "dock 2", "dock 3", "dock 4", "dock 5", "bound"],
  datasets: [
    {
      label: "Bar",
      data: [100, 200, 400, 450, 300, 550],
      fill: false,
      backgroundColor: "#FB6340",
      borderWidth: 1,
      barPercentage: 0.2,
    },
  ],
};

// Configuration object
const config = {
  type: "bar",
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: "Chart.js bar Chart - Cubic interpolation mode",
      },
    },

    animation: {
      easing: "linear",
      duration: 2000,
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false,
        },
      },
      y: {
        display: true,
        title: {
          display: false,
          text: "Value",
        },
        suggestedMin: 0,
        suggestedMax: 200,
        ticks: {
          precision: 0,
          stepSize: 200,
          color: "grey",
        },
        grid: {
          color: "#233554",
          borderWidth: 1,
          borderDash: "dotted",
        },
      },
    },
  },
};

// Clone the configuration for the second canvas
const config2 = JSON.parse(JSON.stringify(config));
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, config);

// Create chart instance for the second canvas
var ctx2 = document.getElementById("myChart1").getContext("2d");
var myChart2 = new Chart(ctx2, config2);

const config3 = JSON.parse(JSON.stringify(config2));
// Create chart instance for the second canvas
var ctx3 = document.getElementById("myChart2").getContext("2d");
var myChart3 = new Chart(ctx3, config2);

//Wave effect for chart
function updateChart() {
  const data = myChart.data.datasets[0].data;
  data.forEach((value, index) => {
    data[index] = (value + 20) % 100;
  });
  myChart.update();
  setTimeout(updateChart, 2000);
}
// updateChart();

//line chart

const Linedata = {
  labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
  datasets: [
    {
      label: "Line",
      data: [200, 300, 350, 120, 350, 110, 480],
      fill: false,
      borderColor: "#4d8cf4",
      tension: 0.4,
    },
  ],
};

// Configuration object
const Lineconfig = {
  type: "line",
  data: Linedata,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: "Chart.js Line Chart - Cubic interpolation mode",
      },
    },
    animation: {
      easing: "linear",
      duration: 2000,
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false,
        },
      },
      y: {
        display: true,
        title: {
          display: false,
          text: "Value",
        },
        suggestedMin: 0,
        suggestedMax: 500,
        ticks: {
          precision: 0,
          stepSize: 250,
        },
        grid: {
          color: "#233554",
          borderWidth: 1,
          borderDash: "dotted",
        },
      },
    },
  },
};
// Create the chart
var Linectx = document.getElementById("myLineChart").getContext("2d");
var myLineChart = new Chart(Linectx, Lineconfig);

const Lineconfig2 = JSON.parse(JSON.stringify(Lineconfig));
var Linectx2 = document.getElementById("myLineChart2").getContext("2d");
var myLineChart2 = new Chart(Linectx2, Lineconfig2);
//Wave effect for chart
function updateChart() {
  const data = myLineChart.data.datasets[0].data;
  data.forEach((value, index) => {
    data[index] = (value + 20) % 100;
  });
  const data2 = myLineChart2.data.datasets[0].data;
  data2.forEach((value, index) => {
    data2[index] = (value + 20) % 100;
  });
  myLineChart.update();
  myLineChart2.update();
  setTimeout(updateChart, 2000);
}
updateChart();

//Pie chart

const piedata = {
  labels: ["Refund"],
  datasets: [
    {
      data: [78], // 78% value
      backgroundColor: "#147AD6", // Adjust color as needed
      hoverOffset: 4,
    },
  ],
};

// Configuration for the pie chart
const pieconfig = {
  type: "pie",
  data: piedata,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

// Create the pie chart
var pieChartCtx = document.getElementById("piechart").getContext("2d");
var myPieChart = new Chart(pieChartCtx, pieconfig);


var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("A pretty CSS popup.<br> Easily customizable.")
  .openPopup();
