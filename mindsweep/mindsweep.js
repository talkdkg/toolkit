/*
 * Written by Kyle Dinh, 2013. 
 * https://github.com/kyledinh/toolkit/tree/master/mindsweep
 * Use d8 or node.js to run this mine sweeper game
 * d8 --shell console.js mindsweep.js
 * var g = new Game(8,9);
 * g.start();
 * g.click(2,3);
 * g.show();
 * g.cheat();     // to see where the bombs are
 * 
 */

// Tile

function Tile(status, x, y) {
   this.status = (status) ? status : "UNKNOWN";
   this.touch = 0;
   this.x = x;
   this.y = y;
}

Tile.prototype.print = function () {
   console.log(this.x + ", " + this.y + " " + this.status);
};

Tile.prototype.cheat = function () {
   var out = (this.touch) ? this.touch : "=";
   if (this.touch !== "undefined") out = this.touch;
   if (this.status === "BOMB") out = "*";
   return out; 
};

Tile.prototype.show = function () {
   var out = "=";
   if ((this.status === "CHECKED") && (this.touch > 0)) out = this.touch;
   if ((this.status === "CHECKED") && (this.touch === 0)) out = " ";
   return out; 
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

//Console log the state of the Grid 
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
         row = row + "[" + this.tiles[i][j].cheat() + "] "; 
      } 
      console.log(row);
   }
};

//Console log the state of the Grid
Grid.prototype.show = function () {
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
         row = row + "[" + this.tiles[i][j].show() + "] "; 
      } 
      console.log(row);
   }
};

//Switch some Tiles to Bomb tiles 
Grid.prototype.layBombs = function (numBombs) {
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

Grid.prototype.isInBounds = function (x, y) {
   console.log("checking InBound " + x + ", " + y);
   if ((x < 0) || (x >= this.x)) return false;
   if ((y < 0) || (y >= this.y)) return false;
   return true;
}

Grid.prototype.updateTiles = function () {
   for (var j=0; j < this.y; j++) {    // row
      for (var i=0; i < this.x; i++) { // col
         var cnt = 0;
         if (this.isInBounds(i -1,j -1)) { if (this.tiles[i -1][j -1].status === "BOMB") cnt++; }
         if (this.isInBounds(i   ,j -1)) { if (this.tiles[i   ][j -1].status === "BOMB") cnt++; }
         if (this.isInBounds(i +1,j -1)) { if (this.tiles[i +1][j -1].status === "BOMB") cnt++; }
         if (this.isInBounds(i -1,j   )) { if (this.tiles[i -1][j   ].status === "BOMB") cnt++; }
         if (this.isInBounds(i +1,j   )) { if (this.tiles[i +1][j   ].status === "BOMB") cnt++; }
         if (this.isInBounds(i -1,j +1)) { if (this.tiles[i -1][j +1].status === "BOMB") cnt++; }
         if (this.isInBounds(i   ,j +1)) { if (this.tiles[i   ][j +1].status === "BOMB") cnt++; }
         if (this.isInBounds(i +1,j +1)) { if (this.tiles[i +1][j +1].status === "BOMB") cnt++; }
         console.log("updatingTouch " + i + ", " + j + " with " + cnt);
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

function checkZeroAndPush(t, arr) {
   if ((t.touch === 0) && (t.status !== "CHECKED")) {
      t.status = "CHECKED";
      arr.push(t);
      console.log("pushing to checkArr: " + t.x + ", " + t.y);
   }
   if ((t.touch > 0) && (t.status !== "BOMB")) {
      t.status = "CHECKED";
      console.log("marked adjacent : " + t.x + ", " + t.y);
   }
}

Game.prototype.click = function (x, y) {
   if (this.grid.isInBounds(x,y) === false) {
      console.log("Invalid click: It's off the grid, please select again!");
      return "INVALID";
   } 
   this.moves = this.moves +1;
   if ( this.grid.tiles[x][y].status === "BOMB") {
      console.log("YOU HIT A BOMB!!!");
      return "BOMB";
   } else {
      this.grid.tiles[x][y].status = "CHECKED";
      var checkArr = new Array();
      if (this.grid.tiles[x][y].touch === 0) {
         checkArr.push(this.grid.tiles[x][y]);
      }
      var tile;
      while ((tile = checkArr.pop()) != null) {
         console.log("This tile :" +  tile.print());
         var i = parseInt(tile.x);
         var j = parseInt(tile.y);
         tile.status = "CHECKED";
         //2D Array, looping through neighbors
         if (this.grid.isInBounds(i -1,j -1)) { checkZeroAndPush(this.grid.tiles[i -1][j -1], checkArr); }
         if (this.grid.isInBounds(i   ,j -1)) { checkZeroAndPush(this.grid.tiles[i  ][j  -1], checkArr); }
         if (this.grid.isInBounds(i +1,j -1)) { checkZeroAndPush(this.grid.tiles[i +1][j -1], checkArr); }
         if (this.grid.isInBounds(i -1,j   )) { checkZeroAndPush(this.grid.tiles[i -1][j   ], checkArr); }
         if (this.grid.isInBounds(i +1,j   )) { checkZeroAndPush(this.grid.tiles[i +1][j   ], checkArr); }
         if (this.grid.isInBounds(i -1,j +1)) { checkZeroAndPush(this.grid.tiles[i -1][j +1], checkArr); }
         if (this.grid.isInBounds(i   ,j +1)) { checkZeroAndPush(this.grid.tiles[i   ][j +1], checkArr); }
         if (this.grid.isInBounds(i +1,j +1)) { checkZeroAndPush(this.grid.tiles[i +1][j +1], checkArr); }
      }
      return "OK"; 
   }
};

Game.prototype.start = function (numBombs) {
   this.numBombs = (numBombs) ? numBombs : 8;
   this.grid.setup();
   this.grid.layBombs(this.numBombs);
   this.grid.updateTiles();
};

Game.prototype.show = function () {
   console.log("show:");
   this.grid.show();
};

Game.prototype.cheat = function () {
   console.log("cheat view:");
   this.grid.cheat();
};

// LIBRARY

function shuffleArray(array) {
   for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }
   return array;
}
