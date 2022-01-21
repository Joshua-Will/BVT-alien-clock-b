const { text } = require("stream/consumers");
const { deflateRaw } = require("zlib");

// original clock idea from https://codepen.io/afarrar/pen/JRaEjP
class clock {


  // a new instance of the clock must take a boolean parameter.  "true" for a 12 hr clock w am/pm, "false" for a 24 hr clock
  constructor(not24hr) {
    this.not24hr = not24hr;
    // let date = new Date();
    this.hr = new Date().getHours();
    this.mn = new Date().getMinutes();
    this.sc = new Date().getSeconds();
  }

   
    

    // setting AM or PM
    


    // change the "meridian" ID to an ID that matches an element where you want the "am/pm" to appear
    // if (not24hr) {
    //   document.getElementById('meridian').style.display = "block";
    //   document.getElementById('meridian').innerHTML = session;
    // } else {
    //   document.getElementById('meridian').style.display = "none";
    // }
    


    setTime() {
      if (hr == 0) {
        hr = 12;
      } // becuase date().getHours() gives 0-23
      this.session = (hr > 12) ? "PM" : "AM";
      hr = (not24hr) ? hr - 12 : hr;
      this.hr = (hr < 10) ? "0" + hr : hr;
      this.mn = (mn < 10) ? "0" + mn : mn;
      this.sc = (sc < 10) ? "0" + sc : sc;

    }

    showClock() {
      textSize(200);
      fill(0, 81, 67);
      this.currentTime = hr + ":" + mn + ":" + sc;
      this.hour = str(hr);
      this.minute = str(mn);
      this.second = str(sc);
      text(hour + ":" + minute + ":" + second, 47, 190);
      text("hello");
    }


    // let currentTime = hr + ":" + mn + ":" + sc;
    // document.getElementById('clockTime').innerText = currentTime;
    // document.getElementById('clockTime').innerContent = currentTime;

}


// new clock(false);

let clock1 = new clock(false);


function setup() {
  createCanvas(475, 200);
  frameRate(30)
}

function draw() {
  background(0, 10, 0);
  
  clock.setTime();
  clock.showClock();
}


// for processing:
// create a class, inside class create a "show" or "render" method:  https://editor.p5js.org/TropintheBard/sketches/jMymj6-vU
// pulse editor: https://editor.p5js.org/TropintheBard/sketches/c2qjDQfeg