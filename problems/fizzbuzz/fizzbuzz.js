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
   return num % div === 0;
}

var i;
for (i = 1; i < 101; i++) {
   var output = i;
   var factor3 = isFactor(i, 3);
   var factor5 = isFactor(i, 5);
   var factor15 = isFactor(i, 15);

   if (factor3) { output = "Fizz"; }
   if (factor5) { output = "Buzz"; }
   if (factor15) { output = "FizzBuzz"; }

   console.log(output);
}

