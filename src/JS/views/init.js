export { dps, chart };
// export default function init() {
let dps = [];
let chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  theme: "dark2",
  title: {
    text: "Expenses",
    horizontalAlign: "left",
  },
  data: [
    {
      type: "doughnut",
      startAngle: 60,
      //innerRadius: 60,
      indexLabelFontSize: 17,
      toolTipContent: "{name}: <strong>{y}$</strong>",
      indexLabel: "{name} - {y}$",
      dataPoints: dps,
    },
  ],
});
chart.render();
// }