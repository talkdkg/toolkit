
function Tile(status, x, y) {
   this.status = status || "UNKNOWN";
   this.x = x;
   this.y = y;
}


function Grid(x, y) {
   this.x = x;
   this.y = y;
   this.tiles = null;
}

Grid.prototype.setup = function () {
   var i, j, arr = [this.x];
   for (i=0; i < this.x; i++) {
       arr[i] = [this.y]; 
   }
   this.tiles = arr;
   for (i=0; i < this.x; i++) {
      for (j=0; j < this.y; j++) {
         this.tiles[i][j] = new Tile("UNKNOWN", i, j);
      }
   }
};


function Game() {
   this.grid = new Grid(3, 3);
   this.grid.setup();
}

Game.prototype.show = function () {
   console.log("show:");
   return this.grid.show();
};

Game.prototype.click = function (x, y) {
   if (this.grid.isInBounds(x,y) === false) {
      console.log("Invalid click: It's off the grid, please select again!");
      return "INVALID";
   } 
}   
   
