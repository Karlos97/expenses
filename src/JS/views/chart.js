export { dps, chart };

let dps = [];
let chart = new CanvasJS.Chart("chartContainer", {
  // theme: "dark2",
  backgroundColor: "transparent",
  exportFileName: "Doughnut Chart",
  exportEnabled: true,
  animationEnabled: true,
  title: {
    fontColor: "rgba(255, 255, 255, 0.774)",
    text: "Monthly Expense",
  },
  legend: {
    fontColor: "",
    cursor: "pointer",
    itemclick: explodePie,
  },
  data: [
    {
      type: "doughnut",
      indexLabelFontColor: "rgba(255, 255, 255, 0.774)",
      innerRadius: 90,
      showInLegend: false,
      toolTipContent: "<b>{name}</b>: {y}$  (#percent%)",
      // toolTipContent: "<b>{name}</b>: {y} PLN (#percent%)",
      // indexLabel: "{name} - #percent%",
      indexLabel: "{name} - #total%",
      // dataPoints: [
        
      dataPoints: dps,
      // [
      // { y: 90, name: "Food" },
      // { y: 10, name: "Insurance" },
      // { y: 300, name: "Travelling" },
      // { y: 800, name: "Housing" },
      // { y: 150, name: "Education" },
      // { y: 150, name: "Shopping" },
      // { y: 250, name: "Others" },
      // ],
    },
    
  ],
  
});
    // dps.push({ y: 1, name: "asd" });
    // dps.push({ y: 10, name: "as" });
    chart.render();

function explodePie(e) {
  if (
    typeof e.dataSeries.dataPoints[e.dataPointIndex].exploded === "undefined" ||
    !e.dataSeries.dataPoints[e.dataPointIndex].exploded
  ) {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
  } else {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
  }
    e.chart.render();
}
