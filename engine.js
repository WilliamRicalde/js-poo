
var screenObj = {};
var ship = {};
var enemyShip = {};
var speed = 10;

//Background
screenObj.canvas  = document.getElementById("myCanvas");
screenObj.context = screenObj.canvas.getContext("2d");
screenObj.width = screenObj.canvas.width;
screenObj.height = screenObj.canvas.height;

screenObj.start = function(){
    screenObj.context.clearRect(0, 0, screenObj.width, screenObj.height);
    screenObj.background = new Image();
    screenObj.background.src = "image6.jpg";    
    screenObj.background.onload = function(){
        screenObj.context.drawImage(screenObj.background, 0, 0)        
    } 
}

screenObj.clear = function() {
    screenObj.context.clearRect(0, 0, screenObj.width, screenObj.height);
    screenObj.context.drawImage(screenObj.background, 0, 0) 
}

//Player ship
ship.start = function() {
    ship.image = new Image();
    ship.image.src = "newship.png"
    ship.image.onload = function() {
        ship.positionx = (screenObj.width/2) - (ship.image.width/2);
        ship.positiony = screenObj.height - (ship.image.height + 10);
        screenObj.context.drawImage(ship.image, ship.positionx, ship.positiony);
    }
}

//Enemy ship
enemyShip.start = function() {
    enemyShip.image = new Image();
    enemyShip.image.src = 'nave.png';
    enemyShip.image.onload = function() {
        enemyShip.positionx = 350;
        enemyShip.positiony = 10;
        screenObj.context.drawImage(enemyShip.image, enemyShip.positionx, enemyShip.positiony);
    }
}

//Move ship and refresh position
ship.refresh = function(){
    screenObj.clear();
    screenObj.context.drawImage(ship.image, ship.positionx, ship.positiony); 
    screenObj.context.drawImage(enemyShip.image, enemyShip.positionx, enemyShip.positiony);  
}

ship.moveRight = function(){
    ship.positionx = ship.positionx + speed;
    moveEnemyship();
    ship.refresh();
}

ship.moveLeft = function(){
    ship.positionx = ship.positionx - speed;
    moveEnemyship();
    ship.refresh();
}


/*ship.moveUp = function(){
    ship.positiony = ship.positiony - speed;
    moveEnemyship();
    ship.refresh();
}

ship.moveDown = function(){
    ship.positiony = ship.positiony + speed;
    moveEnemyship();
    ship.refresh();
}*/

//Move ship with keys
function alPresionar(tecla){
        
    if (tecla.keyCode == 39){
        ship.moveRight();
    } 
    if (tecla.keyCode == 37){
        ship.moveLeft();
    }

    /*if (tecla.keyCode == 40){
        ship.moveDown();
    }

    if (tecla.keyCode == 38){
        ship.moveUp();
    }*/

}

window.addEventListener("keydown", alPresionar, false);

//Start game and audio
function cargar (){
    ship.start();
    enemyShip.start();
    enableAutoplay();
}

var audio = document.getElementById("audio");
function enableAutoplay() { 
  	audio.autoplay = true;
  	audio.load();
}

function moveEnemyship(){
    if (ship.positionx == enemyShip.positionx && ship.positiony == enemyShip.positiony){
        cargar();
    } 
    else{
        enemyShip.positionx = enemyShip.positionx + speed;
    }
}
