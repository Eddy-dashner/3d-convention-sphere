const typedTextSpan = document.getElementById("typed-text");
const textArray = ["Welcome to Codash Imagination !"];
const colorArray = ["blue", "yellow", "green"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
          typedTextSpan.innerHTML += "<span class='" + colorArray[textArrayIndex] + "'>" + textArray[textArrayIndex].charAt(charIndex) + "</span>";
          charIndex++;
          setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, newTextDelay + 250);
});

let x = 1;
while (x <= 12) {
  let plane = document.createElement('div');
  plane.className = `plane plane-${x}`;
  plane.style.transform = `rotateY(${x * 15}deg)`;
  document.querySelector('.sphere-wrapper').appendChild(plane);
  for (y = 1; y <= 36; y++) {
    let spoke = document.createElement('div');
    spoke.className = `spoke spoke-${y}`;
    let color = y % 3 === 0 ? 'green' : y % 2 === 0 ? 'yellow' : 'blue';
    spoke.innerHTML = ` <div class="dot" style="background-color:${color}; animation: pulsate .5s infinite ${aDelay(y)}s alternate both"></div>`;
    spoke.style.transform = `rotateZ(${y * 10}deg)`;
    document.querySelector(`.plane-${x}`).appendChild(spoke);
  }
  x++;
}
function aDelay(t) {
  switch (t) {
    case 1:
    case 35:
      return 0.05;
    case 2:
    case 34:
      return 0.1;
    case 3:
    case 33:
      return 0.15;
    case 4:
    case 34:
      return 0.2;
    case 5:
    case 33:
      return 0.25;
    case 6:
    case 30:
      return 0.3;
    case 7:
    case 29:
      return 0.35;
    case 8:
    case 28:
      return 0.4;
    case 9:
    case 27:
      return 0.45;
    case 10:
    case 26:
      return 0.5;
    case 11:
    case 25:
      return 0.55;
    case 12:
    case 24:
      return 0.6;
    case 13:
    case 23:
      return 0.65;
    case 14:
    case 22:
      return 0.7;
    case 15:
    case 21:
      return 0.75;
    case 16:
    case 20:
      return 0.8;
    case 17:
    case 19:
      return 0.85;
    case 18:
      return 0.95;
    case 36:
      return 0;
    default:
      return 1;
  }
}