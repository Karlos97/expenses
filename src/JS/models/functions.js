import { objects } from "./objects.js";
import { chart } from "../views/chart.js";

export function init() {
  let cookieList = readCookie();
  cookieList.forEach((el) => {
    if (el[0]) {
      objects.historyList.innerHTML += `<option value=${el[0]} />`;
    }
  });
  return cookieList;
}
export function totalValue() {
  let totalVal = 0;
  [].forEach.call(objects.itemVal, (el) => {
    totalVal += Number(el.innerHTML);
  });
  objects.total.innerHTML = `${totalVal}`;
}

export function cleanInput() {
  inputDescr.value = "";
  inputVal.value = "";
  objects.inputDescr.focus();
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

export function randomColors() {
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

export function storeData(list, date, expireTimeInDays) {
  if (navigator.cookieEnabled) {
    const cookieName = encodeURIComponent(date);
    const cookieVal = encodeURIComponent(list);
    let cookieText = cookieName + "=" + cookieVal;

    if (typeof expireTimeInDays === "number") {
      const data = new Date();
      data.setTime(data.getTime() + expireTimeInDays * 24 * 60 * 60 * 1000);
      cookieText += "; expires=" + data.toGMTString();
    }

    document.cookie = cookieText;
  }
}
export function readCookie() {
  let cookieName, cookieValues;
  let cookieList = [];
  const cookie = document.cookie.split(/; */);
  cookie.forEach((el) => {
    const cookiePart = el.split("=");
    cookieName = decodeURIComponent(cookiePart[0]);
    cookieValues = decodeURIComponent(cookiePart[1]);
    cookieValues = cookieValues.split(",");
    let a = [];
    for (let i = 0; i < Math.round(cookieValues.length / 2); i++) {
      a[i] = new Array(2);
      a[i][0] = cookieValues[i * 2];
      a[i][1] = cookieValues[i * 2 + 1];
    }
    cookieList.push([cookieName, [a]]);
  });

  return cookieList;
}

export function deleteCookie(name) {
  const cookieName = encodeURIComponent(name);
  document.cookie = cookieName + "=; max-age=-1;";
}

export function clearData(items, chart) {
  let presentItems = items.length;
  if (presentItems) {
    for (let i = 0; i < presentItems; i++) {
      items[0].remove();
    }
    chart.data.labels.splice(0, presentItems);
    chart.data.datasets[0].data.splice(0, presentItems);
    chart.update();
  }
}
