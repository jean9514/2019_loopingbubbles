"use strict";

window.addEventListener("DOMContentload", init);

function init() {
  let counter;
  makeAllBubbles();
}

//her tæller counter op til det ønskede antal af bobler: 257.
function makeAllBubbles() {
  console.log("makeAllBubbles");

  for (let counter = 0; counter < 257; counter++) {
    makeAbubbel();
  }
}

//her laver vi en bobel og cloner det efterfølende fra vores template.
function makeAbubbel() {
  console.log("makeAbubbel");

  const clone = document.querySelector("#bubbleTemp").Content.cloneNode(true);
  const bubble = clone.querySelector("#bubble");

  //indsætter clone fra templet i vores HTML holding div.

  document.querySelector("#bubbles").appendChild(clone);
}
