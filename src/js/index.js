'use strict';
// document.addEventListener('click', () => {
    
// })
// console.log('it works!');
// pacMan.style.left = xpos + "px";
// pacMan.style.top = ypos + "px";

class Pacman {
    constructor(initialXpos, initialYpos, mouthOpen) {
        this.xpos = initialXpos;
        this.ypos = initialYpos
        this.mouth = mouthOpen;
    }
    moveRight() {
        this.xpos += 85
    }
    moveLeft() {
        this.xpos -= 85
    }
    moveUp() {
        this.ypos -= 85
    }
    moveDown() {
        this.ypos += 85
    }
    update() {
        this.pacMan.style.left = this.xpos + "px"
        this.pacMan.style.top = this.ypos + "px"
    }
    render() {
        const pacMan = document.querySelector('.entity');
        document.addEventListener('keydown', (event) => {
            if(event.code === 'ArrowLeft') {
                this.moveLeft()
                pacMan.style.backgroundPositionY = "255px";
            } else if(event.code === 'ArrowRight') {
                this.moveRight()
                pacMan.style.backgroundPositionY = "340px"
            } else if(event.code === 'ArrowUp') {
                this.moveUp()
                pacMan.style.backgroundPositionY = "85px"
            } else if(event.code === 'ArrowDown') {
                this.moveDown()
                pacMan.style.backgroundPositionY = "170px"
            }

            pacMan.style.left = this.xpos + "px";
            pacMan.style.top = this.ypos + "px";
            
            return document
          });
    }

    mount() {
        this.game = this.render()
        this.update()
    }    
}

const app = document.querySelector('#app')
const pacpac = new Pacman(50, 50, true)
pacpac.mount(app)
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