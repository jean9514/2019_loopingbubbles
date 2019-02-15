"use strict";

window.addEventListener("DOMContentLoaded", init);

let bubbleArray = [];

function init() {
  console.log("init");
  makeAllBubbles(256);
  colorBubbles();
}

//her tæller counter op til det ønskede antal af bobler: 257.
function makeAllBubbles(test) {
  console.log("makeAllBubbles");

  for (let counter = 0; counter < test; counter++) {
    makeAbubbel();
  }
}

//her laver vi en bobel og cloner det efterfølende fra vores template.
function makeAbubbel() {
  console.log("makeAbubbel");

  const clone = document.querySelector("#bubbleTemp").content.cloneNode(true);
  const bubble = clone.querySelector("#bubble");

  //indsætter clone fra templet i vores HTML holding div.

  document.querySelector("#bubbles").appendChild(clone);

  //tilføjer bobler til vores array.
  bubbleArray.push(bubble);
}

//loop der asigner farver til vores bobler gennem vores array
function HowToColorBubbles(start, end, step, color) {
  for (let counter = start; counter < end; counter += step) {
    let bubbleWithColor = bubbleArray[counter];
    bubbleWithColor.style.backgroundColor = color;

    console.log(HowToColorBubbles);
  }
}

function colorBubbles() {
  HowToColorBubbles(0, 16, 1, "green");
  HowToColorBubbles(16, 32, 1, "red");
  HowToColorBubbles(32, 40, 1, "lightgreen");
  HowToColorBubbles(46, 50, 1, "lightblue");
  HowToColorBubbles(56, 128, 3, "pink");
  HowToColorBubbles(56, 128, 5, "orange");
  HowToColorBubbles(56, 128, 7, "black");
  for (let counter = 1; counter < 256; counter *= 2) {
    let bubbleWithColor = bubbleArray[counter];
    bubbleWithColor.style.backgroundColor = "yellow";

    console.log(HowToColorBubbles);
  }
  HowToColorBubbles(64, 256, 16, "purple");
  HowToColorBubbles(8, 256, 16, "hotpink");
  HowToColorBubbles(0, 256, 17, "cyan");
}
