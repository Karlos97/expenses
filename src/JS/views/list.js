// import "./chart.js";
import { objects } from "../models/objects.js";
import { dps, chart } from "./init.js";
// import chart from "./chart.js";

export default class list {
  constructor(inputDescr, inputVal, id) {
    this.descr = inputDescr;
    this.val = inputVal;
    this.id = id;
  }

  addingNewItem() {
    chart.data[0].dataPoints[this.id] = {
      y: this.val,
      name: this.descr,
    };
    chart.render();

    console.log(objects.dps);

    // creating item with two divs inside - description and value
    let item = document.createElement("div");
    item.className = "expenses__item";
    item.id = `exp-${this.id}`;
    let itemContent = document.createTextNode("");
    item.appendChild(itemContent);

    let itemDescr = document.createElement("div");
    itemDescr.className = "expenses__item__description";
    let itemDescrContent = document.createTextNode(this.descr);
    itemDescr.appendChild(itemDescrContent);

    let itemValue = document.createElement("div");
    itemValue.className = "expenses__item__value";
    let itemValueContent = document.createTextNode(this.val);
    itemValue.appendChild(itemValueContent);

    let itemX = document.createElement("div");
    itemX.className = "expenses__item__delete";
    let itemXContent = document.createTextNode("x");
    itemX.appendChild(itemXContent);

    // create objects in DOM
    let location = document.querySelector(".expenses__list");
    location.insertAdjacentElement("beforeend", item);
    document
      .getElementById(item.id)
      .insertAdjacentElement("beforeend", itemDescr);
    document
      .getElementById(item.id)
      .insertAdjacentElement("beforeend", itemValue);

    document.getElementById(item.id).insertAdjacentElement("beforeend", itemX);

    // opction delete after click
    itemX.addEventListener("click", function () {
      // console.log(chart.data[0].dataPoints);
      // console.log(item.id.charAt(4));
      chart.data[0].dataPoints.splice(item.id.charAt(4), 1);
      chart.render();
      // console.log(chart.data[0].dataPoints);
      item.remove();
    });
  }
}
