/*
 * Kevin Bacon graph
 * Kyle Dinh

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
   edges : 3
   [ { a: 'adam', b: 'carol' },
     { a: 'ed', b: 'grace' },
     { a: 'betty', b: 'grace' } ]
 */

function Edge(node1, node2) {
   this.a = node1;
   this.b = node2;
}

function Graph() {
   this.edges = [];
   this.nodes = [];
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

Graph.prototype.getEdges = function (node) {
   var friends = [];
   for (var i = 0; i < this.edges.length; i++) {
      if (this.edges[i].a === node) { friends.push(this.edges[i].b); }
      if (this.edges[i].b === node) { friends.push(this.edges[i].a); }
   }
   return friends;
}


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
g.addEdge("betty","grace");
console.log(g.nodes);
console.log("edges : " + g.edges.length);
console.log(g.edges);
console.log(g.hasEdge("grace", "betty"));
console.log(g.getEdges("grace"));
