import userExpensesInput from "./models/userExpensesInput.js";
import { objects } from "./models/objects.js";
import { cleanInput, init, storeData, deleteCookie, clearData, totalValue } from "./models/functions.js";
import list from "./views/list.js";
import { chart } from "./views/chart.js";

let cookieList = init();
// console.log(cookieList)

objects.inputDescr.addEventListener("keyup", function (onEnterEventHandler) {
  if (onEnterEventHandler.key === "Enter") {
    for (let i = 0; i < objects.item.length; i++) {
      if (objects.item[i].id !== `exp-${i}`) {
        objects.item[i].id = `exp-${i}`;
      }
      objects.id = i + 1;
    }
    userExpensesInput();
    cleanInput();
    objects.historyInput.value = "Now";
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
    cleanInput();
    objects.historyInput.value = "Now";
  }
});

objects.historyInput.addEventListener("click", function () {
  objects.historyInput.value = "";
});



objects.historyInput.addEventListener("change", function () {
  clearData(objects.item,chart)
  cookieList.forEach((el) => {
    if (el[0] === this.value) {

      let expensesList = el[1][0];
      for (let i = 0; i < expensesList.length; i++) {
        let readList = new list(expensesList[i][0], expensesList[i][1], i);
        readList.addingNewItem();
      }
    }
  });
});

objects.btnDelete.addEventListener("click", function () {
  deleteCookie(objects.historyInput.value)
  clearData(objects.item,chart)
  totalValue()
  location.reload();
  // window.location.reload(true)
  // window.location.reload(false); 
});

objects.btnSave.addEventListener("click", function () {
  if (objects.item.length) {
    let now = new Date().toString().split(" ").splice(1, 4).join("-");
    let length = objects.item.length;
    let list = [];
    let sameList = false;
    for (let i = 0; i < length; i++) {
      list[i] = [
        objects.item[i].childNodes[1].textContent,
        objects.item[i].childNodes[2].textContent,
      ];
    }
// cookieList.forEach( el=>{
//   if(el[1][0] = list){
//     console.log(`lista ${el[1][0]} jest taka sama jak lista ${list}`)
//     sameList = true;
//   }else sameList = false;
// })
// if(!sameList){
    objects.historyList.innerHTML += `<option value=${now} />`;
    objects.historyInput.value = "Now";
    storeData(list, now, 365);
    sameList = false;
    location.reload();

}
  // }

});

//now:
// choosing we delete list and prepare like for init
// now shows up after typing new expenses when we have not opened history log

//after adding new element to the list history change on "now"
// after creating new list (making new id)
// create save option, change history - add option NOW
// if we already opened a save from history, we can overwrite it by pressing save
// we can delete everything
// choosing date from history will load expenses from that time

// let date = new Date(Date.now() + 86400e3);
// date = date.toUTCString();
// document.cookie = "user=John; expires=" + date dodać 12 miesiecy;
// document.cookie = "user=John; max-age=3600"; mozna tutaj w sekundachw rzucic 12 miesiecy

//READ

// function showCookie(name) {
//   if (document.cookie !== "") {
//       const cookies = document.cookie.split(/; */);

//       for (let i=0; i<cookies.length; i++) {
//           const cookiePart = cookies[i].split("=");
//           const cookieName = cookiesPart[0];
//           const cookieVal = cookiesPart[1];
//           if (cookieName === decodeURIComponent(name)) {
//               return decodeURIComponent(cookieVal);
//           }
//       }
//   }
//   return false;
// }

// DELTE



