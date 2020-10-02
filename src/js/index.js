'use strict';
// document.addEventListener('click', () => {
    
// })
// console.log('it works!');
const pacMan = document.querySelector('.entity');
let xpos = 0;
let ypos = 0;
pacMan.style.left = xpos + "px";
pacMan.style.top = ypos + "px";



class Pacman {
    constructor(initialXpos, mouthOpen) {
        this.xpos = initialXpos;
        this.mouth = mouthOpen;
    }
    moveRight() {
        this.xpos += 85
    }
    moveLeft() {
        this.xpos -= 85
    }
    moveUp() {
        this.ypos += 85
    }
    moveDown() {
        this.ypos -= 85
    }
    update() {
        this.pacMan.style.left = this.xpos + "px"
        this.pacMan.style.top = this.ypos + "px"
    }
    render() {
        document.addEventListener('keydown', (event) => {
            if(event.code === 'ArrowLeft') {
                this.moveLeft()
                pacMan.style.backgroundPositionY = "255px";
            } else if(event.code === 'ArrowRight') {
                this.moveRight()
                pacMan.style.backgroundPositionY = "340px"
            } else if(event.code === 'ArrowUp') {
                
                pacMan.style.backgroundPositionY = "85px"
            } else if(event.code === 'ArrowDown') {
                move
                pacMan.style.backgroundPositionY = "170px"
            }
            pacMan.style.left = xpos + "px";
            pacMan.style.top = ypos + "px";
          });
    }
}

// document.addEventListener('keydown', (event) => {
//     if(event.code === 'ArrowLeft') {
//         pacMan.style.backgroundPositionY = "255px";
//     } else if(event.code === 'ArrowRight' && xpos <= 1200) {
//         xpos += 85
//         pacMan.style.backgroundPositionY = "340px"
//     } else if(event.code === 'ArrowUp' && ypos >= 85) {
            // xpos -= 85
//         pacMan.style.backgroundPositionY = "85px"
//     } else if(event.code === 'ArrowDown' && ypos <= 600) {
//         ypos += 85
//         pacMan.style.backgroundPositionY = "170px"
//     }
//     pacMan.style.left = xpos + "px";
//     pacMan.style.top = ypos + "px";
//   });
// }
// }