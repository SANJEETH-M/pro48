var canvas, backgroundImage;

var bikes, bike1, bike2, bike3, bike4;
var track, bike1_img, bike2_img, bike3_img, bike4_img
var  reset;
//var  fuel;
var gameState = 0;
var playerCount;
var database;
var player,form,game;
var allPlayers;



function preload() {
  track = loadImage("images/track.png");
  bike1_img = loadImage("images/bike1.png");
  bike2_img = loadImage("images/bike2.png");
  bike3_img = loadImage("images/bike3.png");
  bike4_img = loadImage("images/bike4.png");
  //fuel = loadImage("images/fuel.png");
  ground = loadImage("images/ground.png");
  reset = loadImage("images/reset.png");




}

function setup() {
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
if (playerCount === 4){
  game.update(1);
}

if (gameState===1){
  clear();
  game.play();
}

if (gameState === 2){
  game.end();
}

}