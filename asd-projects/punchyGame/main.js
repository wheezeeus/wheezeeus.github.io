const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");
c.fillStyle = "beige"
const impact = document.getElementById('clickArea')
const punchyBody = new Image()
punchyBody.src = './assets/punchyBody.png'
const punchyHeadIdle = new Image()
punchyHeadIdle.src = './assets/punchyIdle.png'
const incomingPunch = new Image()
incomingPunch.src = './assets/incomingPunch.png'

const spriteH = 320
const spriteW = 320

const headX = canvas.width/2.25
const headY = canvas.height/4.2

let frameX = 0
let frameY = 0
let gameFrame = 0
const staggerFrames = 20

var isClicked = false
let timesClicked = 0
let gameRun = true

$()

let cursor = {
    id : '#cursorNorm',
    x : 50,
    y : 90,
    width : 32,
    height : 32
}
let faceArea = {
    id: '#clickArea',
    x: 546,
    y: 215,
    width: 320,
    height: 320
}
let cursorState = false

function handleMouseMove(event) {
    // get the mouse location from the event object
    moveFist(event.pageX, event.pageY);  
}

function moveFist(x, y) {
    cursor.x = x
    cursor.y = y
    $(cursor.id).css('left', cursor.x);
    $(cursor.id).css('top', cursor.y);
}

function detectClick() {
    impact.addEventListener("click", function() {
        isClicked = true
        })
    }
function scene(cut) {
        c.clearRect(0, 0, canvas.width, canvas.height)
        c.fillRect(0, 0, canvas.width, canvas.height)
        c.drawImage(
            punchyBody,
            canvas.width/3.5,
            canvas.height/2,
            canvas.width/2.5,
            canvas.height/2
        )
        c.drawImage(
            cut,
            frameX * spriteW,
            frameY,
            spriteW,
            spriteH,
            headX,
            headY,
            spriteW,
            spriteH
        )
}
function animate() {
    var words = "Punch Score: " + timesClicked
    $(impact).hover(function() {
        cursorState = true
    }, function () {
        cursorState = false
    })
    $(document).on('mousemove', handleMouseMove)
    detectClick()
    if (isClicked === true) {
        timesClicked++
        document.getElementById("counter").innerHTML = words;
        scene(incomingPunch)
        if (gameFrame % 4 === 0) {
            if (frameX < 4) frameX++
            else isClicked = false
        }
        gameFrame++
    }
    else {
        scene(punchyHeadIdle)
        // console.log(doCollide(cursor, faceArea))
        if (gameFrame % staggerFrames === 0) {
            if (frameX < 4) frameX++
            else frameX = 0
        }
    if (cursorState === true) {
        cursor.src = './assets/cursorHov.png'
    }
    else {
        cursor.src = './assets/cursorNorm.png'
    }
        gameFrame++  
    }
    console.log(cursorState)
    requestAnimationFrame(animate)
}
function end() {

}

if (gameRun) {
    animate()
}
else {
    end()
}