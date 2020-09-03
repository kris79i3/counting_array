"use strict";
window.addEventListener("DOMContentLoaded", start);

let arr = [];
let i = 0;

function start() {
  setTimeout(start, 1000);

  if (i < 9) {
    i++;
    arr.push(i);
  } else {
    arr.shift();
    i++;
    arr.push(i);
  }
  console.log(arr);
}
