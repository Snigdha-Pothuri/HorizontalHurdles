var pencil = createSprite(200,200,35,35);
var red = createSprite(50,50,35,35);
var blue = createSprite(125,50,35,35);
var yellow = createSprite(200,50,35,35);
var pink = createSprite(275,50,35,35); 
var reset = createSprite(350,50,35,35);

red.shapeColor="red";
blue.shapeColor="blue";
yellow.shapeColor="yellow";
pink.shapeColor="pink";





function draw() { 
  
pencil.x= mouseX
pencil.y=mouseY; 

if (mousePressedOver(red)) {
 pencil.shapeColor="red" ; 
 }
if (mousePressedOver(blue)) {
pencil.shapeColor="blue" ; 
}
if (mousePressedOver(yellow)) {
pencil.shapeColor="yellow";  
} 
if (mousePressedOver(pink)) {
pencil.shapeColor="pink";  
}
if (mousePressedOver(reset)) {
background("white");  
}

if (pencil.y<65) {
pencil.visible=false;  
}
if (pencil.y>65) {
pencil.visible=true;  
}

  
drawSprites();  
}
