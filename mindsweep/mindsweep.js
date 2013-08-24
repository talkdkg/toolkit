/*
 * Written by Kyle Dinh, developed for no jQuery implementation. 
 * Use d8 or node.js to run this mine sweeper game
 * d8 --shell console.js mindsweep.js
 * var g = new Game(8,9);
 * g.start();
 * g.click(2,3);
 * g.show();
 */

// Tile

function Tile(status, x, y) {
   this.status = (status) ? status : "UNKNOWN";
   this.touch =0;
   this.x = x;
   this.y = y;
}

Tile.prototype.print = function () {
   console.log(this.x + ", " + this.y + " " + this.status);
};

Tile.prototype.cheat = function () {
   var out = (this.touch) ? this.touch : "=";
   if (this.status === "BOMB") out = "*";
   if (this.touch !== "undefined") out = this.touch;
   return out; 
};

Tile.prototype.display = function () {
   var out = (this.touch) ? this.touch : "=";
   if (this.status === "BOMB") out = "*";
   if (this.status === "CLEAR") out = " ";
   return out; 
};

Tile.prototype.getNeighbors = function() {
   var arr = Array();
};

Tile.prototype.updateTouch = function(cnt) {
   if (this.status === "BOMB") {
   } else {
      this.touch = cnt;
   } 
};
// Grid

function Grid(x, y) {
   this.x = x;
   this.y = y;
   this.tiles;
}

Grid.prototype.setup = function () {
   var arr = new Array(this.x);
   for (var i=0; i < this.x; i++) {
       arr[i] = new Array(this.y); 
   }
   this.tiles = arr;
   for (var i=0; i < this.x; i++) {
      for (var j=0; j < this.y; j++) {
         this.tiles[i][j] = new Tile("UNKNOWN", i, j);
      }
   }
};

Grid.prototype.cheat = function () {
   var header = "        ";
   if (this.y > 10) header = header + " "; 
   for (var i=0; i < this.x; i++) {
      header = header + i + "  ";
      if (i < 10) header += " ";
   }
   console.log(header);
   for (var j=0; j < this.y; j++) {
      var row = (j < 10) ? "row  " + j + " :" : "row " + j + " :"; 
      for (var i=0; i < this.x; i++) {
         row = row + "[" + this.tiles[i][j].status + "] "; 
      } 
      console.log(row);
   }
};

Grid.prototype.print = function () {
   var header = "        ";
   if (this.y > 10) header = header + " "; 
   for (var i=0; i < this.x; i++) {
      header = header + i + "  ";
      if (i < 10) header += " ";
   }
   console.log(header);
   for (var j=0; j < this.y; j++) {
      var row = (j < 10) ? "row  " + j + " :" : "row " + j + " :"; 
      for (var i=0; i < this.x; i++) {
         row = row + "[" + this.tiles[i][j].display() + "] "; 
      } 
      console.log(row);
   }
};

Grid.prototype.layBombs = function (numBombs) {
   // place bombs on the grid
   var bombArr = [];
   var size = this.x * this.y; 
   for (var i=0; i < size; i++) {
       bombArr.push(i);
   }
   bombArr = shuffleArray(bombArr);
   for (var i=0; i < numBombs; i++) {
      var bomb = bombArr.pop();
      var row = Math.floor(bomb / this.x);   
      var mod = bomb % this.x;
      this.tiles[mod][row].status = "BOMB";
   }
};

function isInBounds(x, y) {
   if ((x < 0) || (x > this.x)) return false;
   if ((y < 0) || (y > this.y)) return false;
   return true;
}

Grid.prototype.updateTiles = function () {

   for (var i=0; i < this.x; i++) {
      for (var j=0; j < this.y; j++) {
         var cnt = 0;
         if (isInBounds(i-1,j-1)) { if (this.tiles[i-1][j-1].status === "BOMB") cnt++; }
         if (isInBounds(i,j-1))   { if (this.tiles[i][j-1].status === "BOMB") cnt++; }
         if (isInBounds(i+1,j-1)) { if (this.tiles[i+1][j-1].status === "BOMB") cnt++; }
         if (isInBounds(i-1,j))   { if (this.tiles[i-1][j].status === "BOMB") cnt++; }
         if (isInBounds(i+1,j))   { if (this.tiles[i+1][j].status === "BOMB") cnt++; }
         if (isInBounds(i-1,j+1)) { if (this.tiles[i-1][j+1].status === "BOMB") cnt++; }
         if (isInBounds(i,j+1))   { if (this.tiles[i][j+1].status === "BOMB") cnt++; }
         if (isInBounds(i+1,j+1)) { if (this.tiles[i+1][j+1].status === "BOMB") cnt++; }
         this.tiles[i][j].updateTouch(cnt);
      }
   }
};

/*
 * Game object
 */

function Game(x, y) {
   this.grid = new Grid(x, y);
   this.moves = 0;
   this.numBombs;
}

Game.prototype.click = function (x, y) {
   this.moves = this.moves +1;
   if ( this.grid.tiles[x][y].status === "BOMB") {
      console.log("YOU HIT A BOMB!!!");
   } else {
      this.grid.tiles[x][y].status = "CLEAR";
   }
};

Game.prototype.start = function (numBombs) {
   // place bombs on the grid
   this.numBombs = (numBombs) ? numBombs : 8;

   this.grid.setup();
   this.grid.layBombs(this.numBombs);
   //this.grid.updateTiles();
};

Game.prototype.show = function () {
   console.log("");
   this.grid.print();
};

Game.prototype.cheat = function () {
   console.log("");
   this.grid.cheat();
};

function shuffleArray(array) {
   for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }
   return array;
}
