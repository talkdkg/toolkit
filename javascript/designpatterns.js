// Function Arguments

function sum () {
   var x=0;
   var argLength = arguments.length;
   for (var i=0; i < argLength; i++) {
      x = x + arguments[i];
   }
   return x;
}
console.log("sum: " + sum(1,2,3,6,7,8,90));

// Chaining API Pattern

var Calc = function (start) {
   var that = this;
   this.add = function (x) {
      start = start + x;
      return that;
   };

   this.multiply = function (x) {
      start = start * x;
      return that;
   };

   this.equals = function (callback) {
      callback(start);
      return that;
   };
};

var x = new Calc(0).add(1).add(2).multiply(3).equals(function (result) {
   console.log(result);
});
