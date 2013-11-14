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

/*
 * Fizz Buzz in Javascipt, by Kyle Dinh
 */

function isFactor(num, div) {
   var remander = num % div;
   if (remander === 0) { return true; }
   return false;
}

var i;
for (i = 1; i < 101; i++) {
   var output = i;
   var factor3 = isFactor(i, 3);
   var factor5 = isFactor(i, 5);

   if (factor3 === true) { output = "Fizz"; }
   if (factor5 === true) { output = "Buzz"; }
   if ((factor3 === true) && (factor5 === true)) { output = "FizzBuzz"; }

   console.log(output);
}

