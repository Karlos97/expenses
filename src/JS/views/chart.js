export { chart };
import {randomColors} from "../models/functions.js";

let ctx = document.getElementById("myChart").getContext("2d");
let chart = new Chart(ctx, {
  type: "doughnut",

  data: {
    datasets: [
      {
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  },
  options: {
    aspectRatio:1,
    legend: {
      labels: {
        fontColor: "#FFF",
      },
    },
  },
});
randomColors()
