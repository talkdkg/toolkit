/*
 * Kevin Bacon graph
 * Kyle Dinh
 */

function Edge(node1, node2) {
   this.a = node1;
   this.b = node2;
}

function Graph() {
   this.edges = [];
   this.nodes = [];
}

Graph.prototype.hasEdge = function (edges, vert, node) {
   for (var i = 0; i < edges.length; i++) {
      console.log("this edge: " + edges[i].a + " & " + edges[i].b)
      if (edges[i].a === vert && edges[i].b === node) { return true; }
      if (edges[i].a === node && edges[i].b === vert) { return true; }
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
      if (!this.hasEdge(this.edges, vert, node)) {
         this.edges.push(new Edge(vert, node));
      }
   }
};

var g = new Graph();
g.addNode("sam");
g.addNode("jim");
g.addEdge("sam","jim");
g.addEdge("sam","jim");
g.addEdge("jim","sam");
console.log(g.nodes);
console.log("edges : " + g.edges.length);
console.log(g.edges[0]);
console.log(g.hasEdge(g.edges, "sam", "jim"));

