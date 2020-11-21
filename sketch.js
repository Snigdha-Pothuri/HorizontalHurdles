var form,player,game;
var database,position;
var gameState=0; 
var playerCount ;
var allplayers;


function setup(){
    database= firebase.database();
    createCanvas(displayWidth,displayHeight-200);
    game= new Game() 
    game.getState()
    game.start()
    
 }

function draw(){

   if (playerCount===4){
    game.update(1);   
   }
   if (gameState===1){
clear();
game.play(); 
}  

}

