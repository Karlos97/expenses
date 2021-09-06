import userExpensesInput from "./models/userExpensesInput.js";
import { objects } from "./models/objects.js";
import { cleanInput, init, storeData, deleteCookie, clearData, totalValue } from "./models/functions.js";
import list from "./views/list.js";
import { chart } from "./views/chart.js";

let cookieList = init();

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
    objects.historyList.innerHTML += `<option value=${now} />`;
    objects.historyInput.value = "Now";
    storeData(list, now, 365);
    sameList = false;
    location.reload();

}

});



