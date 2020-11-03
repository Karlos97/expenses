import { objects } from "./objects.js";
import { chart } from "../views/chart.js";


export function totalValue(){
    let totalVal = 0;
    [].forEach.call(objects.itemVal, (el) => {
      totalVal += Number(el.innerHTML);
    });
    objects.total.innerHTML = `${totalVal}`;
}

export function cleanInput(){
  inputDescr.value = ""
  inputVal.value = ""
}

export function addData(chart, label, data, id) {
  chart.data.labels.push(label);
  chart.data.datasets[0].data[id] = data;
  chart.update();
}
export function removeData(chart, descr, val) {
  const descrIndex = chart.data.labels.indexOf(descr);
  if (descrIndex > -1) {
    chart.data.labels.splice(descrIndex, 1);
  }
  const valIndex = chart.data.datasets[0].data.indexOf(val);
  if (valIndex > -1) {
    chart.data.datasets[0].data.splice(valIndex, 1);
  }
  chart.update();
}

export function randomColors(){
    for (let i = 0; i <= 100; i++) {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      chart.data.datasets[0].backgroundColor[i] = color + "66";
      chart.data.datasets[0].borderColor[i] = color;
    }
}