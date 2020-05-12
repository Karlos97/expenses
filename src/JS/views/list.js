// import "./chart.js";
import { objects } from "../models/objects.js";
import { dps, chart } from "./chart.js";
// import chart from "./chart.js";

export default class list {
  constructor(inputDescr, inputVal, id) {
    this.descr = inputDescr;
    this.val = inputVal;
    this.id = id;
  }

  newItem() {
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
      item.remove();
    });

    // chart.data[0].remove("dataPoints");
    // chart.data[0].set("dataPoints",[]);
    // chart.render();
    // document.getElementsByClassName("expenses__item__value")[0].innerHTML;
    // chart.data[0].addTo("dataPoints", {
    //   y: this.val,
    //   name: this.descr,
    // });
    // dps.push({ y: this.val, name: this.descr });
    // chart.data[0].set("dataPoints", []);
    // chart();
    // let chart.data[0].dps = [];
// chart();
    dps[this.id] = {
      y: this.val,
      name: this.descr,
    };
    console.log(dps);

    chart.data[0].addTo("dataPoints", dps);
    console.log(dps);

    chart.render();

    // dps[i].push({ y: objects.itemVal[i], name: objects.itemDescr[i] });

    // for (let i = 0; i <= objects.item.length; i++) {
    //   if (i === objects.item.length) {
    //     dps.push({
    //       y: this.val,
    //       name: this.descr,
    //     });
    //   } else {
    //     dps.push({
    //       y: Number(objects.itemVal[i].innerHTML),
    //       name: objects.itemDescr[i].innerHTML,
    //     });
    //   }
    //   // dps[i].push({ y: objects.itemVal[i], name: objects.itemDescr[i] });
    // }
  }
}
