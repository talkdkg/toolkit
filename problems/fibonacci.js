(function () {
   "use strict";
   if (typeof this.console === 'undefined') {
      this.console = {};
      this.console.log = function () {
         if (typeof print === 'function') {
            print.apply(this, arguments);
         }
      };
   }
}).call(this);


function fib(n) {
   return function(n, a, b) {
      return n > 0 ? arguments.callee(n-1, b, a+b) : a;
   }(n, 0, 1);
}

for (var i = 1; i < 14; i++) {
   console.log("Fibo " + i +" : " + fib(i) ); 
}

