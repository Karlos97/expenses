import { objects } from "./objects.js";
import list from "../views/list.js";

export default function userExpensesInput() {
  if (objects.inputVal.value === "" || objects.inputDescr.value === "") {
    objects.warning.style.opacity = "1";
    objects.warning.style.position = "relative";
    for (let i = 0; i < objects.itemDescr.length; i++) {
      objects.itemDescr[i].style.top = "1rem";
      objects.itemVal[i].style.top = "1rem";
    }
  } else {
    objects.warning.style.opacity = "0";
    objects.warning.style.position = "absolute";
    for (let i = 0; i < objects.itemDescr.length; i++) {
      objects.itemDescr[i].style.top = "0";
      objects.itemVal[i].style.top = "0";
    }
    let creatingExpensesList = new list(
      objects.inputDescr.value,
      objects.inputVal.value,
      objects.id
    );
    creatingExpensesList.addingNewItem();
    objects.id += 1;

  }
}
