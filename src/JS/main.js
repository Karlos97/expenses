import userExpensesInput from "./models/userExpensesInput.js";
import { chart } from "./views/chart.js";
import { objects } from "./models/objects.js";
// window.onload = init();
// objects.btns.forEach((el) => {
// el.addEventListener("click", () => {
//   alert("Option switched off.");
// });
// console.log(el);
// for (let item of objects.btns) {
//   item.addEventListener("click", () => {
//     alert("Option switched off.");
//   });
// }
// [].forEach.call(objects.btns, (el)=>{
//   console.log(el)
// })
objects.inputDescr.addEventListener("keyup", function (onEnterEventHandler) {
  if (onEnterEventHandler.key === "Enter") {
    for (let i = 0; i < objects.item.length; i++) {
      
      if (objects.item[i].id !== `exp-${i}`) {
        objects.item[i].id = `exp-${i}`;
      }
      objects.id = i + 1;
    }
    userExpensesInput();
  }
});
objects.inputVal.addEventListener("keyup", function (onEnterEventHandler) {
  if (onEnterEventHandler.key === "Enter") {
    for (let i = 0; i < objects.item.length; i++) {
      if (objects.item[i].id !== `exp-${i}`) {
        objects.item[i].id = `exp-${i}`;
      }
      objects.id = i + 1;
    }
    userExpensesInput();
  
  }
});

// Array.from(objects.item).forEach((el) => {
//   el.addEventListener("mouseover", function () {
//     console.log(`najechales na element ${el.id}`);
//   });
// });
// Array.from(objects.x).forEach((el1) => {
//   el1.addEventListener("click", function () {
//     console.log(`kliknales na element ${el1.parentElement.id}`);
//   });
// });
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
