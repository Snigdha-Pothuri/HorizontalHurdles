class Player {
    constructor (){
    this.index=null;
    this.distance=0;
    this.name=null;  
    }
    // counting the no of players and allowing only 4 players
    getCount(){
    var pcr = database.ref('playerCount')
    pcr.on("value",function(data){
    playerCount=data.val()
    })
    }
    // updating the count
    updateCount(count){
    database.ref('/').update({
        playerCount:count
    })
    } 
    // updating the player count
   update (){
   var playerindex="players/player"+this.index;
   database.ref(playerindex).set({
    name:this.name ,
    distance: this.distance
   })
   } 
   static getPlayerInfo (){
    var pir = database.ref('players') ;
    pir.on('value',(data)=>{
     allplayers=data.val();  
    })  
   }
}