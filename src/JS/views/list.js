// import "./chart.js";
// import { objects } from "../models/objects.js";
import { dps, chart } from "./chart.js";

export default class list {
  constructor(inputDescr, inputVal, id) {
    this.descr = inputDescr;
    this.val = inputVal;
    this.id = id;
  }

  newItem() {
    // let chart;
// let dps = [];
    dps.push({ y: this.val, name: this.descr });

    chart.render();
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

    // create objects in DOM
    let location = document.querySelector(".expenses__list");
    location.insertAdjacentElement("beforeend", item);

    document
      .getElementById(item.id)
      .insertAdjacentElement("beforeend", itemDescr);
    document
      .getElementById(item.id)
      .insertAdjacentElement("beforeend", itemValue);
  }
}
