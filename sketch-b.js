const { deflateRaw } = require("zlib");

// original clock idea from https://codepen.io/afarrar/pen/JRaEjP
class clock {


  // a new instance of the clock must take a boolean parameter.  "true" for a 12 hr clock w am/pm, "false" for a 24 hr clock
  constructor(not24hr) {
    this.not24hr = not24hr;
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let sc = date.getSeconds();
    // global scope "var" so can be accessed outside of the clock class
    var session = "";
    var not24hr;

    // setting hour "0" to 12
    if (hr == 0) {
      hr = 12;
    }

    // setting AM or PM
    session = (hr > 12) ? "PM" : "AM";


    // change the "meridian" ID to an ID that matches an element where you want the "am/pm" to appear
    if (not24hr) {
      document.getElementById('meridian').style.display = "block";
      document.getElementById('meridian').innerHTML = session;
    } else {
      document.getElementById('meridian').style.display = "none";
    }


    // added functionality for a 12/24 toggle
    // if clock is set to a 12hr clock, subtract 12 from the hour
    hr = (not24hr) ? hr - 12 : hr;


    // making sure a "0" is in front of any single digit
    hr = (hr < 10) ? "0" + hr : hr;
    mn = (mn < 10) ? "0" + mn : mn;
    sc = (sc < 10) ? "0" + sc : sc;



    let currentTime = hr + ":" + mn + ":" + sc;
    document.getElementById('clockTime').innerText = currentTime;
    document.getElementById('clockTime').innerContent = currentTime;
  }
}

let clock1 = new clock(true);


function setup() {
  createCanvas(475, 200);
}

function draw() {
  background(220);
}


// for processing:
// create a class, inside class create a "show" or "render" method.  https://editor.p5js.org/TropintheBard/sketches/jMymj6-vU