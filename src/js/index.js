'use strict';
// document.addEventListener('click', () => {
    
// })
// console.log('it works!');
const pacMan = document.querySelector('.entity');
let xpos = 50;
let ypos = 50;
pacMan.style.left = xpos + "px";
pacMan.style.top = ypos + "px";
document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowLeft' && xpos >= 85) {
        xpos -= 85
        pacMan.style.backgroundPositionY = "255px";
    } else if(event.code === 'ArrowRight' && xpos <= 1200) {
        xpos += 85
        pacMan.style.backgroundPositionY = "340px"
    } else if(event.code === 'ArrowUp' && ypos >= 85) {
        ypos -= 85
        pacMan.style.backgroundPositionY = "85px"
    } else if(event.code === 'ArrowDown' && ypos <= 600) {
        ypos += 85
        pacMan.style.backgroundPositionY = "170px"
    }
    pacMan.style.left = xpos + "px";
    pacMan.style.top = ypos + "px";
  });


  