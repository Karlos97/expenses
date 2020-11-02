import userExpensesInput from "./models/userExpensesInput.js";
import { objects } from "./models/objects.js";
import {cleanInput} from "./models/functions.js"

objects.inputDescr.addEventListener("keyup", function (onEnterEventHandler) {
  if (onEnterEventHandler.key === "Enter") {
    for (let i = 0; i < objects.item.length; i++) {
      
      if (objects.item[i].id !== `exp-${i}`) {
        objects.item[i].id = `exp-${i}`;
      }
      objects.id = i + 1;
    }
    userExpensesInput();
    cleanInput()
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
    cleanInput()
  }
});
// after creating new list (making new id) 
// create save option, change history - add option NOW
// if we already opened a save from history, we can overwrite it by pressing save
// we can delete everything
// choosing date from history will load expenses from that time
