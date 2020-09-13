!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var a={inputDescr:document.getElementById("inputDescr"),inputVal:document.getElementById("inputVal"),item:document.getElementsByClassName("expenses__item"),itemDescr:document.getElementsByClassName("expenses__item__description"),itemVal:document.getElementsByClassName("expenses__item__value"),x:document.getElementsByClassName("expenses__item__delete"),list:document.getElementsByClassName("expenses__list"),warning:document.getElementById("expenses__input__warning"),id:0,dps:[],btnHistory:document.getElementsByClassName("btn__history")[0],btnSignIn:document.getElementsByClassName("btn__sign-in")[0],btnLogIn:document.getElementsByClassName("btn__log-in")[0],btnLogOut:document.getElementsByClassName("btn__log-out")[0],btns:document.getElementsByClassName("btn"),total:document.getElementById("total__exp")};function r(){var e=0;[].forEach.call(a.itemVal,(function(t){e+=Number(t.innerHTML)})),a.total.innerHTML="".concat(e)}var i=document.getElementById("myChart").getContext("2d"),o=new Chart(i,{type:"doughnut",data:{datasets:[{backgroundColor:[],borderColor:[],borderWidth:1}]},options:{legend:{labels:{fontColor:"#FFF"}}}});function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}!function(){for(var e=0;e<=100;e++){for(var t="#",n=0;n<6;n++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];o.data.datasets[0].backgroundColor[e]=t+"66",o.data.datasets[0].borderColor[e]=t}}();var d=function(){function e(t,n,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.descr=t,this.val=n,this.id=a}var t,n,a;return t=e,(n=[{key:"addingNewItem",value:function(){!function(e,t,n,a){e.data.labels.push(t),e.data.datasets[0].data[a]=n,e.update()}(o,this.descr,this.val,this.id);var e=document.createElement("div");e.className="expenses__item",e.id="exp-".concat(this.id);var t=document.createTextNode("");e.appendChild(t);var n=document.createElement("div");n.className="expenses__item__description";var a=document.createTextNode(this.descr);n.appendChild(a);var i=document.createElement("div");i.className="expenses__item__value";var s=document.createTextNode(this.val);i.appendChild(s);var d=document.createElement("div");d.className="expenses__item__delete";var l=document.createTextNode("x");d.appendChild(l),document.querySelector(".expenses__list").insertAdjacentElement("beforeend",e),document.getElementById(e.id).insertAdjacentElement("beforeend",n),document.getElementById(e.id).insertAdjacentElement("beforeend",i),document.getElementById(e.id).insertAdjacentElement("beforeend",d),r();var c=this.descr,u=this.val;d.addEventListener("click",(function(){!function(e,t,n){var a=e.data.labels.indexOf(t);a>-1&&e.data.labels.splice(a,1);var r=e.data.datasets[0].data.indexOf(n);r>-1&&e.data.datasets[0].data.splice(r,1),e.update()}(o,c,u),e.remove(),r()}))}}])&&s(t.prototype,n),a&&s(t,a),e}();function l(){if(""===a.inputVal.value||""===a.inputDescr.value){a.warning.style.opacity="1";for(var e=0;e<a.itemDescr.length;e++)a.itemDescr[e].style.top="1rem",a.itemVal[e].style.top="1rem"}else{a.warning.style.opacity="0";for(var t=0;t<a.itemDescr.length;t++)a.itemDescr[t].style.top="0",a.itemVal[t].style.top="0";new d(a.inputDescr.value,a.inputVal.value,a.id).addingNewItem(),a.id+=1}}a.inputDescr.addEventListener("keyup",(function(e){if("Enter"===e.key){for(var t=0;t<a.item.length;t++)a.item[t].id!=="exp-".concat(t)&&(a.item[t].id="exp-".concat(t)),a.id=t+1;l()}})),a.inputVal.addEventListener("keyup",(function(e){if("Enter"===e.key){for(var t=0;t<a.item.length;t++)a.item[t].id!=="exp-".concat(t)&&(a.item[t].id="exp-".concat(t)),a.id=t+1;l()}}))}]);