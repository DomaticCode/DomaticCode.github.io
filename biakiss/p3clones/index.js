const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Clone{
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color



    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
}

const x = canvas.width/2
const y = canvas.height/2

var state = 1;
var selectedPattern = 1;

function draw1() {
    topp.color = 'blue'
    topp.draw()
    topleft.color = 'blue'
    topleft.draw()
    left.color = 'blue'
    left.draw()
    bot.color = 'blue'
    bot.draw()
    right.color = 'blue'
    right.draw()
}

function draw1end(){
    topp.color = 'red'
    topp.draw()
    topleft.color = 'green'
    topleft.draw()
    left.color = 'red'
    left.draw()
    bot.color = 'red'
    bot.draw()
    right.color = 'red'
    right.draw()
}

function draw2() {
    topp.color = 'blue'
    topp.draw()
    topleft.color = 'blue'
    topleft.draw()
    topright.color = 'blue'
    topright.draw()
    botleft.color = 'blue'
    botleft.draw()
    botright.color = 'blue'
    botright.draw()
}

function draw2end() {
    topp.color = 'green'
    topp.draw()
    topleft.color = 'red'
    topleft.draw()
    topright.color = 'red'
    topright.draw()
    botleft.color = 'red'
    botleft.draw()
    botright.color = 'red'
    botright.draw()
}

function draw3() {
    bot.color = 'blue'
    bot.draw()
    topleft.color = 'blue'
    topleft.draw()
    topright.color = 'blue'
    topright.draw()
    botleft.color = 'blue'
    botleft.draw()
    botright.color = 'blue'
    botright.draw()
}

function draw3end() {
    bot.color = 'green'
    bot.draw()
    topleft.color = 'red'
    topleft.draw()
    topright.color = 'red'
    topright.draw()
    botleft.color = 'red'
    botleft.draw()
    botright.color = 'red'
    botright.draw()
}

function draw4(){
    topleft.color = 'blue'
    topleft.draw()
    left.color = 'blue'
    left.draw()
    botleft.color = 'blue'
    botleft.draw()
    bot.color = 'blue'
    bot.draw()
    right.color = 'blue'
    right.draw()
}

function draw4end(){
    topleft.color = 'red'
    topleft.draw()
    left.color = 'red'
    left.draw()
    botleft.color = 'green'
    botleft.draw()
    bot.color = 'red'
    bot.draw()
    right.color = 'red'
    right.draw()
}

function draw5(){
    topleft.color = 'blue'
    topleft.draw()
    bot.color = 'blue'
    bot.draw()
    botright.color = 'blue'
    botright.draw()
    right.color = 'blue'
    right.draw()
    topright.color = 'blue'
    topright.draw()
}

function draw5end(){
    topleft.color = 'red'
    topleft.draw()
    bot.color = 'red'
    bot.draw()
    botright.color = 'green'
    botright.draw()
    right.color = 'red'
    right.draw()
    topright.color = 'red'
    topright.draw()
}

function draw6(){
    topp.color = 'blue'
    topp.draw()
    topleft.color = 'blue'
    topleft.draw()
    bot.color = 'blue'
    bot.draw()
    botright.color = 'blue'
    botright.draw()
    topright.color = 'blue'
    topright.draw()
}
function draw6end(){
    topp.color = 'red'
    topp.draw()
    topleft.color = 'red'
    topleft.draw()
    bot.color = 'red'
    bot.draw()
    botright.color = 'green'
    botright.draw()
    topright.color = 'red'
    topright.draw()
}

function draw7(){
    topp.color = 'blue'
    topp.draw()
    topleft.color = 'blue'
    topleft.draw()
    left.color = 'blue'
    left.draw()
    bot.color = 'blue'
    bot.draw()
    botright.color = 'blue'
    botright.draw()
}

function draw7end(){
    topp.color = 'red'
    topp.draw()
    topleft.color = 'red'
    topleft.draw()
    left.color = 'green'
    left.draw()
    bot.color = 'red'
    bot.draw()
    botright.color = 'red'
    botright.draw()
}

function draw8(){
    topleft.color = 'blue'
    topleft.draw()
    left.color = 'blue'
    left.draw()
    bot.color = 'blue'
    bot.draw()
    right.color = 'blue'
    right.draw()
    topright.color = 'blue'
    topright.draw()
}

function draw8end(){
    topleft.color = 'red'
    topleft.draw()
    left.color = 'red'
    left.draw()
    bot.color = 'red'
    bot.draw()
    right.color = 'yellow'
    right.draw()
    topright.color = 'yellow'
    topright.draw()
}



function drawPattern(){
    if(selectedPattern == 1){
        draw1();
    }else if(selectedPattern == 2){
        draw2();
    }else if(selectedPattern == 3){
        draw3();
    }else if(selectedPattern == 4){
        draw4();
    }else if(selectedPattern == 5){
        draw5();
    }else if(selectedPattern == 6){
        draw6();
    }else if(selectedPattern == 7){
        draw7();
    }else if(selectedPattern == 8){
        draw8();
    }
}

function drawEndPattern(){
    if(selectedPattern == 1){
        draw1end();
    }else if(selectedPattern == 2){
        draw2end();
    }else if(selectedPattern == 3){
        draw3end();
    }else if(selectedPattern == 4){
        draw4end();
    }else if(selectedPattern == 5){
        draw5end();
    }else if(selectedPattern == 6){
        draw6end();
    }else if(selectedPattern == 7){
        draw7end();
    }else if(selectedPattern == 8){
        draw8end();
    }
}



function stateAdvance(){
    state += 1
    console.log(state)
    if(state == 2){
        drawEndPattern()
    }else if(state >= 3){
        console.log('load next pattern')
        var pattern = Math.floor(Math.random() * 8) + 1;
        while(pattern == selectedPattern){
            console.log('rolled same number, time to reroll')
            pattern = Math.floor(Math.random() * 8) + 1;
        }
        selectedPattern = pattern
        console.log('new pattern = ' + selectedPattern)
        state = 1
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawlines()
        drawPattern()

    }
}


const topp = new Clone(x, y - 150, 30, 'blue')

const topleft = new Clone(x - 100, y - 100, 30, 'blue')

const left = new Clone(x- 150, y, 30, 'blue')

const botleft = new Clone(x - 100, y + 100, 30, 'blue')

const bot = new Clone(x, y + 150, 30, 'blue')

const botright = new Clone(x + 100, y + 100, 30, 'blue')

const right = new Clone(x+ 150, y, 30, 'blue')

const topright = new Clone(x + 100, y - 100, 30, 'blue')

function drawLine(ctx, begin, end, stroke = 'black', width = 1) {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }

    if (width) {
        ctx.lineWidth = width;
    }

    ctx.beginPath();
    ctx.moveTo(...begin);
    ctx.lineTo(...end);
    ctx.stroke();
}

function drawlines(){
    drawLine(c, [canvas.width/2, canvas.height/2], [canvas.width/2, canvas.height/2 -150], 'black', 5)
    drawLine(c, [canvas.width/2, canvas.height/2], [canvas.width/2 - 100, canvas.height/2 -100], 'black', 5)
    drawLine(c, [canvas.width/2, canvas.height/2], [canvas.width/2 -150, canvas.height/2], 'black', 5)
    drawLine(c, [canvas.width/2, canvas.height/2], [canvas.width/2 -100, canvas.height/2 +100], 'black', 5)
    drawLine(c, [canvas.width/2, canvas.height/2], [canvas.width/2, canvas.height/2 +150], 'black', 5)
    drawLine(c, [canvas.width/2, canvas.height/2], [canvas.width/2 +100, canvas.height/2 +100], 'black', 5)
    drawLine(c, [canvas.width/2, canvas.height/2], [canvas.width/2 +150, canvas.height/2 ], 'black', 5)
    drawLine(c, [canvas.width/2, canvas.height/2], [canvas.width/2 +100, canvas.height/2 -100], 'black', 5)
}

addEventListener('click', (event) =>
    {
    const clone2 = new Clone(event.clientX, event.clientY, 5, 'red')

    clone2.draw()
    stateAdvance()
})

draw1()
drawlines()