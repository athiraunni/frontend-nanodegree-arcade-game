// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.speed = Math.random() * (240 - 60) + 60;
};

// Update the enemy's position, required method for game
enemyRows = [65,150,230];

// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt,speed) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x > 500){
        //enemy s standing out of canvas
        this.x = 0; //startover
        this.y = ;
        this.speed = Math.random() * (240 - 60) + 60;
    }
    else{
        this.x += (this.speed * dt);
    }

    //detect collision
    enemyBox = {x: this.x, y: this.y};
    playerBox = {x: player.x, y: player.y};
    if ((enemyBox.x < (playerBox.x + 50)) && ((enemyBox.x + 75) > playerBox.x) && (enemyBox.y < (playerBox.y + 63)) && ((77 + enemyBox.y) > playerBox.y))
         {
          console.log("reset");
      setTimeout(lostMessage, 500)
      setTimeout(player.reset(), 10000);
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(x,y) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-princess-girl.png';
    this.x = 200;
    this.y = 410;
};

//on game reset player position
Player.prototype.reset = function(){
    this.x = 200;
    this.y = 410;
};

//update player
Player.prototype.update = function(x,y){
    console.log(this.y);
};


//Win or Loss Message !!!
function winMessage(){
    alert("You Won..!! :)");
};
function lostMessage(){
    alert("You Lose..!! :( Try Again.");
};

//render game
Player.prototype.render = function(x,y){
    //add user
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    if(this.y<0){
        setTimeout(winMessage,1000);  //player Win
        setTimeout(player.reset(),1000);  //reset game
    };
};

//key press input handling
Player.prototype.handleInput = function(key){
    switch(key){
        case:"left" :
            if(this.x >= 95){
                this.x = this.x - 95;
            };
        break;
        case:"right" :
            if(this.x <= 375){
                this.x = this.x + 95;
            };
        break;
        case:"up" :
            if(this.y >= 50){
                this.y = this.y - 83;
            };
        break;
        case:"down" :
            if(this.y <= 400){
                this.y = this.y + 83;
            };
        break;
    };
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
allEnemies[0] = new Enemy(0, 150);
allEnemies[1] = new Enemy(0, 65);
allEnemies[2] = new Enemy(0, 230);
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
