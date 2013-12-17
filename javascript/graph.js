/*
 * Kevin Bacon graph
 * Kyle Dinh
 * nodejs v0.10.15

   [ 'adam',
     'betty',
     'carol',
     'dave',
     'ed',
     'fran',
     'grace',
     'helen',
     'ingrid',
     'jeff',
     'kevin' ]

   edges : 6
   [ { a: 'adam', b: 'carol' },
     { a: 'ed', b: 'grace' },
     { a: 'carol', b: 'betty' },
     { a: 'betty', b: 'grace' },
     { a: 'ed', b: 'kevin' },
     { a: 'ingrid', b: 'helen' } ]
   true
   [ { name: 'ed', deg: 0 }, { name: 'betty', deg: 0 } ]
   adam is connected to carol: 1
   >> adam : 2
   >> betty : 2
   >> grace : 3
   >> ed : 4
   >> kevin : 5
   adam is connected to kevin: 5
   >> adam : 2
   >> betty : 2
   >> grace : 3
   >> ed : 4
   >> kevin : 5
   adam is connected to ingrid: -1

 */

function Edge(node1, node2) {
   this.a = node1;
   this.b = node2;
}

function Graph() {
   this.edges = [];
   this.nodes = [];
}

function Find(name, deg) {
   this.name = name;
   this.deg = deg;
}

Graph.prototype.hasEdge = function (vert, node) {
   for (var i = 0; i < this.edges.length; i++) {
      //console.log("this edge: " + edges[i].a + " & " + edges[i].b)
      if (this.edges[i].a === vert && this.edges[i].b === node) { return true; }
      if (this.edges[i].a === node && this.edges[i].b === vert) { return true; }
   } 
   return false;
};

Graph.prototype.hasNode = function (str) {
   if (this.nodes.indexOf(str) > -1) {
      return true;
   }
   return false;
};

Graph.prototype.addNode = function (str) {
   if (this.nodes.indexOf(str) < 0) {
      this.nodes.push(str);
   }
};

Graph.prototype.addEdge = function (vert, node) {
   if ((this.nodes.indexOf(vert) > -1) && (this.nodes.indexOf(node) > -1)) {
      if (!this.hasEdge(vert, node)) {
         this.edges.push(new Edge(vert, node));
      }
   }
};

Graph.prototype.getEdges = function (node, deg) {
   var friends = [];
   for (var i = 0; i < this.edges.length; i++) {
      if (this.edges[i].a === node) { friends.push(new Find(this.edges[i].b, deg)); }
      if (this.edges[i].b === node) { friends.push(new Find(this.edges[i].a, deg)); }
   }
   return friends;
};

Graph.prototype.isConnected = function (start, target) {
   var stack = this.getEdges(start, 1);
   var checked = [];
   var item;
   var level = 1;
   while (stack.length > 0) {
      item = stack.pop();
      if (checked.indexOf(item.node) < 0) {
         checked.push(item.name);
         if (item.name === target) {
            return item.deg; // returns the degree of seperation (level)
         }
         level = level +1;
         var friends = this.getEdges(item.name, level);
         //debugFriends(friends, " in the loop");
         for (var i = 0; i < friends.length; i++) {
            if (checked.indexOf(friends[i].name) < 0) {
               stack.push(friends[i]);
               console.log(">> " + friends[i].name + " : " + friends[i].deg);
            }
         }
      }
   }
   return -1; // this represents a non-match
};

function debugFriends(friends, str) {
   for (var i = 0; i < friends.length; i++) {
      console.log(str + " debug: " + friends[i].name + " : " + friends[i].deg);
   }
} 


// The test

var g = new Graph();
g.addNode("adam");
g.addNode("betty");
g.addNode("carol");
g.addNode("dave");
g.addNode("ed");
g.addNode("fran");
g.addNode("grace");
g.addNode("helen");
g.addNode("ingrid");
g.addNode("jeff");
g.addNode("kevin");
g.addNode("adam");

g.addEdge("adam","carol");
g.addEdge("ed","grace");
g.addEdge("carol","betty");
g.addEdge("betty","grace");
g.addEdge("ed","kevin");
g.addEdge("ingrid","helen");

console.log(g.nodes);
console.log("edges : " + g.edges.length);
console.log(g.edges);
console.log(g.hasEdge("grace", "betty"));
console.log(g.getEdges("grace", 0));

console.log("adam is connected to carol: " + g.isConnected("adam", "carol"));
console.log("adam is connected to kevin: " + g.isConnected("adam", "kevin"));
console.log("adam is connected to ingrid: " + g.isConnected("adam", "ingrid"));
