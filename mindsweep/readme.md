Mindsweep
---------
A minesweeper game written as a javascript module. The data structure is simple: a Game contains a Grid that contains a 2D array of Tiles. The Tiles contain all the state information for the game play. As clicks are made the "status" of the Tiles are changed from "UNKNOWN" to "CHECKED".  Unless of course the status is "BOMB", which then is an invalid click and ends the game.

All the data is keep in the Grid/Tile objects so it can be easily export as JSON or read as an object. This detaches this data from the display. The console log display is for debugging, however it can also be used to play the game. 

Data Structure
--------------
```
Game(x, y)
  |
  .grid ------------ Grid(x, y)
  .moves               |
  .numBombs            .tiles[][] ------- Tile(status, x, y)
  |                    .x                   .x
  |                    .y                   .y 
  |                    |                    .touch  # bombs are adjacent
  |                    |                    .status (UNKNOWN | CHECKED | BOMB)
  |                    |                    |
  .show()              .show()              .show()
  .cheat()             .cheat()             .cheat()               
  .click(x, y)         .setup()             .updateTouch(n)                              
  .start(n)            .layBombs(n)
                       .updateTiles()
```


Executing via CLI 
-----------------
This code can be ran from the command line with node.js of V8. Or a browser's javascript console. Game() takes the x and y for the Grid size, and Game.start() takes the number of desired bombs (8 is default).
```
 * d8 --shell console.js mindsweep.js
 * var g = new Game(8,12);
 * g.start(12);
 * g.click(2,3);
 * g.show();
 * g.cheat(); 
```
d8> g.show() // console.log 
```
show:
         0   1   2   3   4   5   6   7   8   9   10  11  
row  0 :[ ] [ ] [ ] [ ] [ ] [ ] [1] [=] [=] [=] [=] [=] 
row  1 :[1] [1] [ ] [ ] [ ] [ ] [1] [=] [=] [=] [=] [=] 
row  2 :[=] [1] [ ] [ ] [ ] [ ] [=] [=] [=] [=] [=] [=] 
row  3 :[=] [1] [ ] [ ] [1] [1] [=] [=] [=] [=] [=] [=] 
row  4 :[=] [1] [1] [ ] [=] [=] [=] [=] [=] [=] [=] [=] 
row  5 :[=] [=] [=] [1] [=] [=] [=] [=] [=] [=] [=] [=] 
row  6 :[=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] 
row  7 :[=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] 
row  8 :[=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] 
row  9 :[=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] 
row 10 :[=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] 
row 11 :[=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] 
row 12 :[=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] 
```

object returned from show()
```
[{x: 0, y: 0, show: "="}, {x: 1, y: 0, show: 1}, {x: 2, y: 0, show: " "}, {x: 3, y: 0, show: " "}, 
{x: 4, y: 0, show: " "}, {x: 5, y: 0, show: " "}, {x: 6, y: 0, show: " "}, ... ] 
```


d8> g.cheat() // console.log
```
cheat view:
         0   1   2   3   4   5   6   7   8   9   10  11  
row  0 :[0] [0] [0] [0] [0] [0] [1] [*] [1] [0] [1] [*] 
row  1 :[1] [1] [0] [0] [0] [0] [1] [1] [1] [0] [1] [1] 
row  2 :[*] [1] [0] [0] [0] [0] [0] [0] [0] [0] [0] [0] 
row  3 :[1] [1] [0] [0] [1] [1] [1] [0] [0] [0] [0] [0] 
row  4 :[1] [1] [1] [0] [1] [*] [1] [0] [0] [0] [0] [0] 
row  5 :[1] [*] [2] [1] [1] [1] [1] [0] [1] [2] [2] [1] 
row  6 :[1] [3] [*] [2] [0] [0] [0] [0] [1] [*] [*] [1] 
row  7 :[0] [2] [*] [3] [1] [0] [0] [0] [1] [2] [2] [1] 
row  8 :[0] [1] [2] [*] [1] [0] [0] [0] [0] [1] [1] [1] 
row  9 :[0] [0] [1] [1] [1] [0] [0] [0] [0] [1] [*] [1] 
row 10 :[0] [0] [0] [0] [0] [0] [0] [0] [0] [1] [1] [1] 
row 11 :[0] [0] [0] [0] [0] [0] [1] [1] [1] [0] [0] [0] 
row 12 :[0] [0] [0] [0] [0] [0] [1] [*] [1] [0] [0] [0] 
```

object returned from cheat()
```
[{x: 0, y: 1, show: "*"}, {x: 1, y: 3, show: "*"}, {x: 0, y: 4, show: "*"}, {x: 3, y: 5, show: "*"}, 
{x: 7, y: 5, show: "*"}, {x: 4, y: 7, show: "*"}, {x: 6, y: 7, show: "*"}, {x: 7, y: 7, show: "*"}]
```

Notes
-----
<img src="https://lh6.googleusercontent.com/p_RWhFwdGRuIbD3TtkStUqfhOagyfM86ouJbH9mTHNZRdZwA-7g999pLip6jIJXoZtWfWKOP5d-cGxWRbP16PGj307fOpJ_ZgPZNxSi2hu0g07Wc8MGCZuLINg"  width="600" />

Source
------
Written by Kyle Dinh, 2013

https://github.com/kyledinh/toolkit/tree/master/mindsweep

