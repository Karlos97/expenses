import { objects } from "../models/objects.js";
import list from "../views/list.js";

export default function input(){
if (
      objects.inputVal.value === "" ||
      (objects.inputVal.value === "NaN" || objects.inputDescr.value === "")
    ) {
      objects.warning.style.opacity = "1";
      for (var i = 0; i < objects.itemDescr.length; i++) {
        objects.itemDescr[i].style.top = "1rem";
        objects.itemVal[i].style.top = "1rem";
      }
      // elem.inputWarning();
      console.log("true");
    } else {
      console.log("false");
      objects.warning.style.opacity = "0";
      for (var i = 0; i < objects.itemDescr.length; i++) {
        objects.itemDescr[i].style.top = "0";
        objects.itemVal[i].style.top = "0";
      }
      let elem = new list(
        objects.inputDescr.value,
        objects.inputVal.value,
        objects.item.length
      );
      elem.newItem();
    }
  
  }
