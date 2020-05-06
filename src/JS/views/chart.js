var chart = new CanvasJS.Chart("chartContainer", {
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
      showInLegend: true,
      toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
      indexLabel: "{name} - #percent%",
      dataPoints: [
        { y: 450, name: "Food" },
        { y: 120, name: "Insurance" },
        { y: 300, name: "Travelling" },
        { y: 800, name: "Housing" },
        { y: 150, name: "Education" },
        { y: 150, name: "Shopping" },
        { y: 250, name: "Others" },
      ],
    },
  ],
});
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
