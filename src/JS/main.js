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

// Array.from(objects.item).forEach((el) => {
//   el.addEventListener("mouseover", function () {
//     console.log(`najechales na element ${el.id}`);
//   });
// });
Array.from(objects.x).forEach((el1) => {
  el1.addEventListener("click", function () {
    console.log(`kliknales na element ${el1.parentElement.id}`);
  });
});
// Array.from(objects.x).forEach((el1) => {
//   el1.addEventListener("click", function () {
//     console.log(`kliknales na element ${el1.parentElement.id}`);
//   });
// });


// let elem = new list("abc", "efg", 3);
// console.log(elem.returnn);

//write description and value -->

// add elements to the list
// add elemets to pie chart
// count some things ?? if yes
//count total value, percent of this element
// check if same object exist and sum it ?? Meybe
