

var agent = {index: 0, onScreen: false};

var shooter = {index: 1, onScreen: false};
 
var bomber = {index: 2,  onScreen: false};



var opponentsArray = [ agent, shooter, bomber];





var hero = document.getElementById('hero');

var opponent = document.getElementById('opponent');

var opponent2 = document.getElementById('opponent2');


var apparitionTimeOpponent1 = 2000;

var apparitionTimeOpponent2 = 2000;

var opponent1MinApparitionTime = 2000;

var opponent2MinApparitionTime = 4000;



var opponent1ApparitionInterval;

var opponent2ApparitionInterval;



var opponentSpeed = 1000;

var speed = 1000;

var scoreHTML = document.getElementById('score');

var score = 0;
 
var lazer = document.getElementById('lazer');


var opponentRunInterval;

var opponent2RunInterval;

var opponent2ShotInterval;



var opponent1ApparitionInterval;



var opponent2Bullet = document.getElementById('opponent2Bullet');


var opponent2OnScreen = false;




var boss =  document.getElementById('boss');

var bossLifePoints = 5;

var bossSoldier = document.getElementById('bossSoldier');


//POSITIONS



var updatedOpponent2Right;

var opponent2Right;


var updatedOpponent2BulletRight;



var opponent2BulletInterval;



var shotReady = true;





