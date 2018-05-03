var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.style.overflow = "hidden";

var drawingSurface = canvas.getContext("2d");

// Load Images
var bat = new Image();
var background = new Image();
var shardNorth = new Image();
var shardSouth = new Image();

bat.onload = function() {
  ctx.drawImage(bat, 0, 0);
}
background.onload = function() {
  ctx.drawImage(background, 0, 0);
}
shardNorth.onload = function() {
  ctx.drawImage(shardNorth, 0, 0);
}
shardSouth.onload = function() {
  ctx.drawImage(shardSouth, 0, 0);
}

bat.src = "img/bat.png";
background.src = "img/background.jpg";
shardNorth.src = "img/shardNorth.png";
shardSouth.src = "img/shardSouth.png";


// Variables
var gap = 400;
var constant = 100;

var bX = 10;
var bY = 150;

var gravity = 1.5;

var score = 0;

// Audio

var fly = new Audio();
var scor = new Audio();

fly.src = "audio/fly.mp3";
scor.src = "audio/score.mp3";

// Key Press Event Listener

document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 25;
    fly.play();
}

// Shard Coordinates

var shard = [];

shard[0] = {
    x : canvas.width,
    y : 0
};

// Draw Images

var fps = 1500;
function draw(){
    setTimeout(function() {
      requestAnimationFrame(draw);

      drawingSurface.drawImage(background,0,0);

      for(var i = 0; i < shard.length; i++){

          constant = shardNorth.height + gap;
          drawingSurface.drawImage(shardNorth,shard[i].x, shard[i].y);
          drawingSurface.drawImage(shardSouth,shard[i].x, shard[i].y + constant);

          shard[i].x--;

          if( shard[i].x == canvas.width-150 ){
              shard.push({
                  x : canvas.width,
                  y : Math.floor(Math.random()*shardNorth.height)-shardNorth.height
              });
          }

          // On Collision Event

          if( bX + bat.width >= shard[i].x && bX <= shard[i].x + shardNorth.width && (bY <= shard[i].y + shardNorth.height || bY+bat.height >= shard[i].y+constant) || bY + bat.height >=  canvas.height){
              location.reload(); // Reload page
          }

          if(shard[i].x == 30){
              score++;
              scor.play();
          }
      }

      drawingSurface.drawImage(bat,bX,bY);

      bY += gravity;

      drawingSurface.fillStyle = "#FF4500";
      drawingSurface.font = "20px Verdana";
      drawingSurface.fillText("Score : " + score, 10 ,canvas.height-20);
    }, 1000 / fps);
}

draw();
