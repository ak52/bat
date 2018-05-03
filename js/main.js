
var bat  = document.getElementById("bat");
var spikeTop1 = document.getElementById("spike-top-1");
var spikeTop2 = document.getElementById("spike-top-2");
var spikeTop3 = document.getElementById("spike-top-3");
var spikeTop4 = document.getElementById("spike-top-4");
var spikeTop5 = document.getElementById("spike-top-5");
var spikeTop6 = document.getElementById("spike-top-6");
var spikeTop7 = document.getElementById("spike-top-7");
var spikeBot1 = document.getElementById("spike-bot-1");
var spikeBot2 = document.getElementById("spike-bot-2");
var spikeBot3 = document.getElementById("spike-bot-3");
var spikeBot4 = document.getElementById("spike-bot-4");
var spikeBot5 = document.getElementById("spike-bot-5");
var spikeBot6 = document.getElementById("spike-bot-6");
var spikeBot7 = document.getElementById("spike-bot-7");


// bat fly
var bg = $('#background'),
bat = $('#bat'),
wh = bg.width() - bat.width(),
wv = bg.height() - bat.height(),
d = {},
x = 5;

function newh(v,a,b) {
		var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
		return n < 0 ? 0 : n > wh ? wh : n;
}

function newv(v,a,b) {
		var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
		return n < 0 ? 0 : n > wv ? wv : n;
}

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function() {
		bat.css({
				left: function(i,v) { return newh(v, 37, 39); },
				top: function(i,v) { return newv(v, 38, 40); }
		});
}, 20);


// touch control

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            setIntervalX(moveLeft,10,50);
        }
        else {
            setIntervalX(moveRight,10,50);
        }
    }
    else {
        if ( yDiff > 0 ) {
            setIntervalX(moveUp,10,50);
        }
        else {
            setIntervalX(moveDown,10,50);
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

function moveLeft(){
  bat.style.left = parseInt(bat.style.left.split("px")[0]) - 2 + "px";
}

function moveRight(){
  bat.style.left = parseInt(bat.style.left.split("px")[0]) + 2 + "px";
}

function moveUpp(){
  bat.style.top = parseInt(bat.style.top.split("px")[0]) - 2 + "px";
}

function moveDown(){
  bat.style.top = parseInt(bat.style.top.split("px")[0]) + 2 + "px";
}


function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {

       callback();

       if (++x === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);
}

var currentSpikeNo = 1;
var randomSpikeNumber = 0;
var currentSpikeBot = document.getElementById("spike-bot-1");
var currentSpikeTop = document.getElementById("spike-top-1");

function randomSpiker(){
	randomSpikeNumber = Math.ceil( Math.random() * 4 );
	currentSpikeBot = document.getElementById("spike-bot-" + currentSpikeNo);
	currentSpikeBot.style.backgroundImage = 'url("./img/spike-' + randomSpikeNumber + '.png")';
	currentSpikeBot.style.height = 100 + randomSpikeNumber*100 + 'px';
	currentSpikeTop = document.getElementById("spike-top-" + currentSpikeNo);
	currentSpikeTop.style.backgroundImage = 'url("./img/spike-' + (5-randomSpikeNumber) + '.png")';
	currentSpikeTop.style.height = 100 + (5-randomSpikeNumber)*100 + 'px';
	if(currentSpikeNo < 7){
		currentSpikeNo ++;
	}
	else {
		currentSpikeNo = 1;
	}
}

var spikeInterval = setInterval(randomSpiker,1000);

var player = document.getElementById("bat");
var sonarWaveCont = document.getElementById("sonarContainer");
function checkCollision(){

  var batTop = parseInt(window.getComputedStyle(player,null).getPropertyValue("top").split('px')[0]);
  var batLeft = parseInt(window.getComputedStyle(player,null).getPropertyValue("left").split('px')[0]);

  var spikeTop1Top = parseInt(window.getComputedStyle(spikeTop1,null).getPropertyValue("top").split('px')[0]);
  var spikeTop1Left = parseInt(window.getComputedStyle(spikeTop1,null).getPropertyValue("left").split('px')[0]);
	var spikeBot1Top = parseInt(window.getComputedStyle(spikeBot1,null).getPropertyValue("top").split('px')[0]);
	var spikeBot1Left = parseInt(window.getComputedStyle(spikeBot1,null).getPropertyValue("left").split('px')[0]);

	var spikeTop2Top = parseInt(window.getComputedStyle(spikeTop2,null).getPropertyValue("top").split('px')[0]);
  var spikeTop2Left = parseInt(window.getComputedStyle(spikeTop2,null).getPropertyValue("left").split('px')[0]);
	var spikeBot2Top = parseInt(window.getComputedStyle(spikeBot2,null).getPropertyValue("top").split('px')[0]);
	var spikeBot2Left = parseInt(window.getComputedStyle(spikeBot2,null).getPropertyValue("left").split('px')[0]);

	var spikeTop3Top = parseInt(window.getComputedStyle(spikeTop3,null).getPropertyValue("top").split('px')[0]);
  var spikeTop3Left = parseInt(window.getComputedStyle(spikeTop3,null).getPropertyValue("left").split('px')[0]);
	var spikeBot3Top = parseInt(window.getComputedStyle(spikeBot3,null).getPropertyValue("top").split('px')[0]);
	var spikeBot3Left = parseInt(window.getComputedStyle(spikeBot3,null).getPropertyValue("left").split('px')[0]);

	var spikeTop4Top = parseInt(window.getComputedStyle(spikeTop4,null).getPropertyValue("top").split('px')[0]);
  var spikeTop4Left = parseInt(window.getComputedStyle(spikeTop4,null).getPropertyValue("left").split('px')[0]);
	var spikeBot4Top = parseInt(window.getComputedStyle(spikeBot4,null).getPropertyValue("top").split('px')[0]);
	var spikeBot4Left = parseInt(window.getComputedStyle(spikeBot4,null).getPropertyValue("left").split('px')[0]);

	var spikeTop5Top = parseInt(window.getComputedStyle(spikeTop5,null).getPropertyValue("top").split('px')[0]);
  var spikeTop5Left = parseInt(window.getComputedStyle(spikeTop5,null).getPropertyValue("left").split('px')[0]);
	var spikeBot5Top = parseInt(window.getComputedStyle(spikeBot5,null).getPropertyValue("top").split('px')[0]);
	var spikeBot5Left = parseInt(window.getComputedStyle(spikeBot5,null).getPropertyValue("left").split('px')[0]);

	var spikeTop6Top = parseInt(window.getComputedStyle(spikeTop6,null).getPropertyValue("top").split('px')[0]);
  var spikeTop6Left = parseInt(window.getComputedStyle(spikeTop6,null).getPropertyValue("left").split('px')[0]);
	var spikeBot6Top = parseInt(window.getComputedStyle(spikeBot6,null).getPropertyValue("top").split('px')[0]);
	var spikeBot6Left = parseInt(window.getComputedStyle(spikeBot6,null).getPropertyValue("left").split('px')[0]);

	var spikeTop7Top = parseInt(window.getComputedStyle(spikeTop7,null).getPropertyValue("top").split('px')[0]);
  var spikeTop7Left = parseInt(window.getComputedStyle(spikeTop7,null).getPropertyValue("left").split('px')[0]);
	var spikeBot7Top = parseInt(window.getComputedStyle(spikeBot7,null).getPropertyValue("top").split('px')[0]);
	var spikeBot7Left = parseInt(window.getComputedStyle(spikeBot7,null).getPropertyValue("left").split('px')[0]);


  // Spike Collisions

	if(Math.abs(batTop-spikeTop1Top) <= 50 && Math.abs(batLeft-spikeTop1Left) <= 50){
			changeSpike(spikeTop1);
      onDeath();
  }

	if(Math.abs(batTop-spikeBot1Top) <= 50 && Math.abs(batLeft-spikeBot1Top) <= 50){
			changeSpike(spikeBot1);
			onDeath();
	}

	if(Math.abs(batTop-spikeTop2Top) <= 50 && Math.abs(batLeft-spikeTop2Left) <= 50){
			changeSpike(spikeTop2);
			onDeath();
	}

	if(Math.abs(batTop-spikeBot2Top) <= 50 && Math.abs(batLeft-spikeBot2Top) <= 50 ){
			changeSpike(spikeBot2);
			onDeath();
	}

	if(Math.abs(batTop-spikeTop3Top) <= 50 && Math.abs(batLeft-spikeTop3Left) <= 50){
			changeSpike(spikeTop3);
			onDeath();
	}

	if(Math.abs(batTop-spikeBot3Top) <= 50 && Math.abs(batLeft-spikeBot3Top) <= 50){
			changeSpike(spikeBot3);
			onDeath();
	}

	if(Math.abs(batTop-spikeTop4Top) <= 50 && Math.abs(batLeft-spikeTop4Left) <= 50){
			changeSpike(spikeTop4);
			onDeath();
	}

	if(Math.abs(batTop-spikeBot4Top) <= 50 && Math.abs(batLeft-spikeBot4Top) <= 50){
			changeSpike(spikeBot4);
			onDeath();
	}

	if(Math.abs(batTop-spikeTop5Top) <= 50 && Math.abs(batLeft-spikeTop5Left) <= 50){
			changeSpike(spikeTop5);
			onDeath();
	}

	if(Math.abs(batTop-spikeBot5Top) <= 50 && Math.abs(batLeft-spikeBot5Top) <= 50){
			changeSpike(spikeBot5);
			onDeath();
	}

	if(Math.abs(batTop-spikeTop6Top) <= 50 && Math.abs(batLeft-spikeTop6Left) <= 50){
			changeSpike(spikeTop6);
			onDeath();
	}

	if(Math.abs(batTop-spikeBot6Top) <= 50 && Math.abs(batLeft-spikeBot6Top) <= 50){
			changeSpike(spikeBot6);
			onDeath();
	}

	if(Math.abs(batTop-spikeTop7Top) <= 50 && Math.abs(batLeft-spikeTop7Left) <= 50){
			changeSpike(spikeTop7);
			onDeath();
	}

	if(Math.abs(batTop-spikeBot7Top) <= 50 && Math.abs(batLeft-spikeBot7Top) <= 50){
			changeSpike(spikeBot7);
			onDeath();
	}




}

function checkSonarCollision(){

	var sonarWave = document.getElementById('sonar');
	var sonarTop = parseInt(window.getComputedStyle(sonarWave,null).getPropertyValue("top").split('px')[0]) + 400;
	var sonarLeft = parseInt(window.getComputedStyle(sonarWave,null).getPropertyValue("left").split('px')[0]) + 800;

	var spikeTop1Top = parseInt(window.getComputedStyle(spikeTop1,null).getPropertyValue("top").split('px')[0]);
	var spikeTop1Left = parseInt(window.getComputedStyle(spikeTop1,null).getPropertyValue("left").split('px')[0]);
	var spikeBot1Top = parseInt(window.getComputedStyle(spikeBot1,null).getPropertyValue("top").split('px')[0]);
	var spikeBot1Left = parseInt(window.getComputedStyle(spikeBot1,null).getPropertyValue("left").split('px')[0]);

	var spikeTop2Top = parseInt(window.getComputedStyle(spikeTop2,null).getPropertyValue("top").split('px')[0]);
	var spikeTop2Left = parseInt(window.getComputedStyle(spikeTop2,null).getPropertyValue("left").split('px')[0]);
	var spikeBot2Top = parseInt(window.getComputedStyle(spikeBot2,null).getPropertyValue("top").split('px')[0]);
	var spikeBot2Left = parseInt(window.getComputedStyle(spikeBot2,null).getPropertyValue("left").split('px')[0]);

	var spikeTop3Top = parseInt(window.getComputedStyle(spikeTop3,null).getPropertyValue("top").split('px')[0]);
	var spikeTop3Left = parseInt(window.getComputedStyle(spikeTop3,null).getPropertyValue("left").split('px')[0]);
	var spikeBot3Top = parseInt(window.getComputedStyle(spikeBot3,null).getPropertyValue("top").split('px')[0]);
	var spikeBot3Left = parseInt(window.getComputedStyle(spikeBot3,null).getPropertyValue("left").split('px')[0]);

	var spikeTop4Top = parseInt(window.getComputedStyle(spikeTop4,null).getPropertyValue("top").split('px')[0]);
	var spikeTop4Left = parseInt(window.getComputedStyle(spikeTop4,null).getPropertyValue("left").split('px')[0]);
	var spikeBot4Top = parseInt(window.getComputedStyle(spikeBot4,null).getPropertyValue("top").split('px')[0]);
	var spikeBot4Left = parseInt(window.getComputedStyle(spikeBot4,null).getPropertyValue("left").split('px')[0]);

	var spikeTop5Top = parseInt(window.getComputedStyle(spikeTop5,null).getPropertyValue("top").split('px')[0]);
	var spikeTop5Left = parseInt(window.getComputedStyle(spikeTop5,null).getPropertyValue("left").split('px')[0]);
	var spikeBot5Top = parseInt(window.getComputedStyle(spikeBot5,null).getPropertyValue("top").split('px')[0]);
	var spikeBot5Left = parseInt(window.getComputedStyle(spikeBot5,null).getPropertyValue("left").split('px')[0]);

	var spikeTop6Top = parseInt(window.getComputedStyle(spikeTop6,null).getPropertyValue("top").split('px')[0]);
	var spikeTop6Left = parseInt(window.getComputedStyle(spikeTop6,null).getPropertyValue("left").split('px')[0]);
	var spikeBot6Top = parseInt(window.getComputedStyle(spikeBot6,null).getPropertyValue("top").split('px')[0]);
	var spikeBot6Left = parseInt(window.getComputedStyle(spikeBot6,null).getPropertyValue("left").split('px')[0]);

	var spikeTop7Top = parseInt(window.getComputedStyle(spikeTop7,null).getPropertyValue("top").split('px')[0]);
	var spikeTop7Left = parseInt(window.getComputedStyle(spikeTop7,null).getPropertyValue("left").split('px')[0]);
	var spikeBot7Top = parseInt(window.getComputedStyle(spikeBot7,null).getPropertyValue("top").split('px')[0]);
	var spikeBot7Left = parseInt(window.getComputedStyle(spikeBot7,null).getPropertyValue("left").split('px')[0]);

	// Sonar Collisions
	if(Math.abs(sonarTop-spikeTop1Top) <= 400 && Math.abs(sonarLeft-spikeTop1Left) <= 400){
		spikeTop1.style.opacity = 1;
	}

	if(Math.abs(sonarTop-spikeBot1Top) <= 400 && Math.abs(sonarLeft-spikeBot1Top) <= 400){
		spikeBot1.style.opacity = 1;
	}

	if(Math.abs(sonarTop-spikeTop2Top) <= 400 && Math.abs(sonarLeft-spikeTop2Left) <= 400){
		spikeTop2.style.opacity = 1;
	}

	if(Math.abs(sonarTop-spikeBot2Top) <= 400 && Math.abs(sonarLeft-spikeBot2Top) <= 400 ){
		spikeBot2.style.opacity = 1;
	}

	if(Math.abs(sonarTop-spikeTop3Top) <= 400 && Math.abs(sonarLeft-spikeTop3Left) <= 400){
		spikeTop3.style.opacity = 1;
	}

	if(Math.abs(sonarTop-spikeBot3Top) <= 400 && Math.abs(sonarLeft-spikeBot3Top) <= 400){
		spikeBot3.style.opacity = 1;
	}

	if(Math.abs(sonarTop-spikeTop4Top) <= 400 && Math.abs(sonarLeft-spikeTop4Left) <= 400){
		spikeTop4.style.opacity = 1;

	}

	if(Math.abs(sonarTop-spikeBot4Top) <= 400 && Math.abs(sonarLeft-spikeBot4Top) <= 400){
		spikeBot4.style.opacity = 1;
	}

	if(Math.abs(sonarTop-spikeTop5Top) <= 400 && Math.abs(sonarLeft-spikeTop5Left) <= 400){
		spikeTop5.style.opacity = 1;
	}

	if(Math.abs(sonarTop-spikeBot5Top) <= 400 && Math.abs(sonarLeft-spikeBot5Top) <= 400){
		spikeBot5.style.opacity = 1;
	}

	if(Math.abs(sonarTop-spikeTop6Top) <= 400 && Math.abs(sonarLeft-spikeTop6Left) <= 400){
		spikeTop6.style.opacity = 1;
	}

	if(Math.abs(sonarTop-spikeBot6Top) <= 400 && Math.abs(sonarLeft-spikeBot6Top) <= 400){
		spikeBot6.style.opacity = 1;
	}

	if(Math.abs(sonarTop-spikeTop7Top) <= 400 && Math.abs(sonarLeft-spikeTop7Left) <= 400){
		spikeTop7.style.opacity = 1;
	}

	if(Math.abs(sonarTop-spikeBot7Top) <= 400 && Math.abs(sonarLeft-spikeBot7Top) <= 400){
		spikeBot7.style.opacity = 1;
	}
}



setInterval(checkCollision,200);


function onDeath(){
	caveAnim.pause();
	batAnim.pause();
	sonarWaveCont.style.display = 'none';
  clearInterval(spikeInterval);
	clearInterval(startScore);

  stopAnimations();
}

function changeSpike(spike){
	// var currentBg = window.getComputedStyle(spike,null).getPropertyValue("background-image").split("spike-")[1].split('.')[0];
	if(window.getComputedStyle(spike,null).getPropertyValue("background-image").split("spike-")[1].split('.')[0] == '1'){
		spike.style.backgroundImage = 'url("./img/spike-5.png")';
	}
	else if(window.getComputedStyle(spike,null).getPropertyValue("background-image").split("spike-")[1].split('.')[0] == '2'){
		spike.style.backgroundImage = 'url("./img/spike-6.png")';
	}
	else if(window.getComputedStyle(spike,null).getPropertyValue("background-image").split("spike-")[1].split('.')[0] == '3'){
		spike.style.backgroundImage = 'url("./img/spike-7.png")';
	}
	else if(window.getComputedStyle(spike,null).getPropertyValue("background-image").split("spike-")[1].split('.')[0] == '4'){
		spike.style.backgroundImage = 'url("./img/spike-8.png")';
	}
}

function stopAnimations(){
  spikeBot1.style.webkitAnimationPlayState = 'paused';
  spikeBot2.style.webkitAnimationPlayState = 'paused';
  spikeBot3.style.webkitAnimationPlayState = 'paused';
  spikeBot4.style.webkitAnimationPlayState = 'paused';
  spikeBot5.style.webkitAnimationPlayState = 'paused';
  spikeBot6.style.webkitAnimationPlayState = 'paused';
  spikeBot7.style.webkitAnimationPlayState = 'paused';
  spikeTop1.style.webkitAnimationPlayState = 'paused';
	spikeTop2.style.webkitAnimationPlayState = 'paused';
	spikeTop3.style.webkitAnimationPlayState = 'paused';
	spikeTop4.style.webkitAnimationPlayState = 'paused';
	spikeTop5.style.webkitAnimationPlayState = 'paused';
	spikeTop6.style.webkitAnimationPlayState = 'paused';
	spikeTop7.style.webkitAnimationPlayState = 'paused';
}

function addScore(){
	document.getElementById('score').textContent = parseInt(document.getElementById('score').textContent) + 1;
}


var firstClick = true;

document.getElementById("background").addEventListener("click", function( event ) {
	// display the current click count inside the clicked div
	// event.target.textContent = "click count: " + event.detail;

	if(firstClick){
		document.getElementById("sonarContainer").innerHTML += '<div id="sonar" class="sonar"></div>';
		document.getElementById("sonar").style.top = parseInt(player.style.top.split('px')[0]) - 500 + 'px';
		document.getElementById("sonar").style.left = parseInt(player.style.left.split('px')[0]) + 60 + 'px';
		var script= document.createElement('script');
		script.type= 'text/javascript';
		script.src= 'js/sonar.js';
		document.getElementById("sonarContainer").appendChild(script);
		setInterval(checkSonarCollision,200);
		firstClick = false;
	}
	else{
		var center_x = parseInt(document.getElementById("sonar").style.left.split('px')[0]);
		var center_y = parseInt(document.getElementById("sonar").style.top.split('px')[0]) + 150;
		var mouse_x = event.clientX;
		var mouse_y = event.clientY;
		var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
		var degree = (radians * (180 / Math.PI) * -1) + 90;
		// document.getElementById("sonar").style.top = parseInt(document.getElementById("sonar").style.top.split('px')[0]) + degree + 'px';
		document.getElementById("sonar").style.transformOrigin = "200px 200px"
		document.getElementById("sonar").style.transform = "rotate("+(degree-30)+"deg)";

	}
}, false);
var startScore;
setTimeout(function(){ startScore = setInterval(addScore,1000); }, 5000);
