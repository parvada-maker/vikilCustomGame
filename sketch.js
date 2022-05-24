var boat,backgroundImg,backgroundImg2,boatImg,game,gameState=0,form,flagImg
var player,playerCount,allPlayers,database,boat1,boat2,boats
function preload() {
flagImg = loadImage("assets/flag-removebg-preview.png")
  boatImg = loadImage("assets/boat2-removebg-preview.png")
backgroundImg = loadImage("assets/background.png")
backgroundImg2 = loadImage("assets/background3.jpg")
}

function setup() {
createCanvas(displayWidth,displayHeight)
database=firebase.database()


game = new Game()
game.getState()
game.start()
}

function draw() {

if(playerCount===2){
  game.update(1)
}

if(gameState===1){
  clear();
game.play();
}

if(gameState===2){
  game.end();
}
}
