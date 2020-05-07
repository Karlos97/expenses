import list from "./views/list.js";
import input from "./models/input.js";
// import "./views/chart.js";
import { objects } from "./models/objects.js";

objects.inputDescr.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    input();
  }
});
objects.inputVal.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    input();
  }
});
if((objects.x.addEventListener("onclick"))&&(objects.item.addEventListener("mouseover"))){console.log(`najechales na oba elementy`);}


// let elem = new list("abc", "efg", 3);
// console.log(elem.returnn);

//write description and value -->

// add elements to the list
// add elemets to pie chart
// count some things ?? if yes
//count total value, percent of this element
// check if same object exist and sum it ?? Meybe
