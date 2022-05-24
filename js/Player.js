class Player{

    constructor() {

        this.name = null
        this.index = null
        this.distance = 0
        this.rank=null
    }

    update(){
        var playerIndex="players/player"+this.index
database.ref(playerIndex).set(
    {
        name:this.name,
        distance:this.distance
    }
);
    }

    updateCount(playerCount){
database.ref("/").update(
    {
        playerCount:playerCount
    }
);
    }

    getCount(){
database.ref("playerCount").on("value",function(data){
playerCount=data.val()
})

    }

    static getPlayerInfo(){

        database.ref('players').on('value',function(data){
            allPlayers=data.val()
        })
    }

    getBoatsAtEnd(){
database.ref("boatsAtEnd").on('value',(data)=> {
   this.rank=data.val()
});
    }

   static updateBoatsAtEnd(rank){
database.ref("/").update({
    boatsAtEnd:rank
})
    }
}