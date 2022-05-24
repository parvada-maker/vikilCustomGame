class Game{

  constructor() {


  }

  start() {
    if(gameState===0) {

      player = new Player()
      player.getCount();
    }
form = new Form()
form.display()
boat1=createSprite(200,100)
boat1.addImage(boatImg)
boat1.scale=0.5
boat2=createSprite(400,100)
boat2.addImage(boatImg)
boat2.scale=0.5
boats=[boat1,boat2]
  }

  play() {
    form.playButton.hide()
    form.input.hide()
    form.greeting.hide()
Player.getPlayerInfo()
player.getBoatsAtEnd()

if(allPlayers!==undefined){
  background(backgroundImg)
image(backgroundImg,0,-displayHeight*2,displayWidth,displayHeight*3)
var index=0;
var x=0;
var y
for(var i in allPlayers){
  index=index+1;
x=x+200
y=displayHeight-allPlayers[i].distance
boats[index-1].position.x=x
boats[index-1].position.y=y

if(index===player.index){
image(flagImg,x,y-60,30,30)
camera.position.x=displayWidth/2
camera.position.y=boats[index-1].position.y
}
textSize(15)
text(allPlayers[i].name+":"+allPlayers[i].distance,x,y+100)
}
}
if(keyIsDown(UP_ARROW) && player.index!=null){
  player.distance +=10
  player.update();
}

if(player.distance>1390){
 player.rank +=1
 Player.updateBoatsAtEnd(player.rank)
  gameState=2
}

drawSprites();
  }

  end(){
//console.log(player.rank)
swal({ title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`, 
text: "You reached the finish line successfully",
 imageUrl: "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png", 
 imageSize: "100x100",
  confirmButtonText: "Ok" });

  }

  getState(){
database.ref("gameState").on('value',function(data){
 gameState= data.val()
})
  }

  update(gameState){
database.ref("/").update({
  gameState:gameState
})
  }
}