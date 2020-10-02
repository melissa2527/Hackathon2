'use strict';
// document.addEventListener('click', () => {

// })
// console.log('it works!');
// pacMan.style.left = xpos + "px";
// pacMan.style.top = ypos + "px";
const tileSize = 85

class Stage {
    constructor(x, y) {
        this.width = x;
        this.height = y
    }

    render() {
        const stage = document.createElement('div');
        stage.className = 'stage';
        // stage.innerHTML = `<div class="stage"></div>`
        return stage
    }
    mount(parent) {
        this.element = this.render();
        parent.appendChild(this.element);
        // this.update()
    }
}

class Pacman {
    constructor(initialXpos, initialYpos, mouthOpen) {
        this.xpos = initialXpos;
        this.ypos = initialYpos
        this.mouth = mouthOpen;
    }
    moveRight() {
        if (this.xpos < 935) {this.xpos  += 85}  
    }
    moveLeft() {
        if (this.xpos > 0) { this.xpos -= 85 }  
    }
    moveUp() {
        if (this.ypos > 0) { this.ypos -= 85 }  
    }
    moveDown() {
        if (this.ypos < 400) { this.ypos += 85 }  
    }
    update() {
        this.pacMan.style.left = this.xpos + "px"
        this.pacMan.style.top = this.ypos + "px"
    }
    render() {
        const pacMan = document.querySelector('.entity');
        document.addEventListener('keydown', (event) => {
            if (event.code === 'ArrowLeft') {
                this.moveLeft()
                pacMan.style.backgroundPositionY = "255px";
            } else if (event.code === 'ArrowRight') {
                this.moveRight()
                pacMan.style.backgroundPositionY = "340px"
            } else if (event.code === 'ArrowUp') {
                this.moveUp()
                pacMan.style.backgroundPositionY = "85px"
            } else if (event.code === 'ArrowDown') {
                this.moveDown()
                pacMan.style.backgroundPositionY = "170px"
            }

            pacMan.style.left = this.xpos + "px";
            pacMan.style.top = this.ypos + "px";

        });
        return pacMan
    }

    mount(parent) {
        this.element = this.render()
        console.log(this.element)
        parent.appendChild(this.element)
    }
}

const app = document.querySelector('#app')
const stage = new Stage(500, 500)

stage.mount(app)
const pacpac = new Pacman(0, 0, true)
pacpac.mount(stage.element);
