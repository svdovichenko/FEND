"use strict";
//create random number with minimum and maximum parameters
function randomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//canvas area object
var canvas = {
  width: 415,
  height: 707
};

// Enemies our player must avoid
var Enemy = function(x, y) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.x = x;
  this.y = y;
  this.speed = randomInterval(200, 400);
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += this.speed * dt;
  if (this.x > 450) {
    //update enemy position
    this.x = randomInterval(-200, -400);
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
  this.sprite = 'images/ninja.png';
  this.x = x;
  this.y = y;
  this.score = 0;
};

Player.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  for (var i = 0; i < allEnemies.length; i++) {
    //update player position if there is a collision with the enemy
    if ((this.x <= allEnemies[i].x) && (allEnemies[i].x <= this.x + 60) && (this.y <= allEnemies[i].y + 60) && (allEnemies[i].y <= this.y + 60)) {
      this.reset();
      allLifes.pop();
      if (allLifes.length === 0) {
        gameOverMessage();
      }
    }
  }
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  ctx.beginPath();
  ctx.font = "64px Ceviche One";
  ctx.fillStyle = '#f41f45';
  ctx.fillText(this.score, 35, 100);
  ctx.closePath();
};

Player.prototype.reset = function() {
  this.x = canvas.width / 2;
  this.y = 480;
};

Player.prototype.handleInput = function(key) {
  // make sure player is within boundaries of canvas    
  // make player move with appropriate keyboard key presse    
  if (key === 'left') {
    if (this.x > 20) {
      this.x -= 100;
    }
  } else if (key === 'right') {
    if (this.x < 320) {
      this.x += 100;
    }
  } else if (key === 'up') {
    if (this.y > 80) {
      this.y -= 85;
    } else {
      //if water is hit player goes back to initial position
      console.log('gg');
      player.score++;
      player.reset();
    }
  } else if (key === 'down') {
    if (this.y < 420) {
      this.y += 85;
    }
  }
  if (this.y > 520 || this.y < 10) {
    player.reset();
  }
  if (key === 'space') {
    removeGameOverMessage();
    resetGameParameters(allLifes);
  }
};

//life count
var Life = function(x, y) {
  this.sprite = 'images/heart2.png';
  this.x = x;
  this.y = y;
};

Life.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var GameOver = function(x, y) {
  this.sprite = 'images/done.png';
  this.x = x;
  this.y = y;
};

GameOver.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player 
var enemy1 = new Enemy(0, 60);
var enemy2 = new Enemy(0, 145);
var enemy3 = new Enemy(0, 230);
var enemy4 = new Enemy(0, 310);
var allEnemies = [enemy1, enemy2, enemy3, enemy4];

var life1 = new Life(415, 60);
var life2 = new Life(445, 60);
var life3 = new Life(475, 60);
var allLifes = [life1, life2, life3];

var gameOver1 = new GameOver(50, 200);
var gameOverPic = [];

var player = new Player(canvas.width / 2, 480);

// add to array 
var gameOverMessage = function() {
  gameOverPic.push(gameOver1);
  if (gameOverPic.length === 1) {
    console.log('2');
    Player.prototype.x = 300;
    Player.prototype.y = 480;
  }
};

// remove from array
var removeGameOverMessage = function() {
  gameOverPic.pop();
};

//reset game parameters life and score
var resetGameParameters = function(allLifes) {
  player.score = 0;
  return allLifes.push(life1, life2, life3);
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    32: 'space'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});