/*
 * Written by https://github.com/kyledinh/toolkit
 * Usage: var sw = new Stopwatch(true); //true turns on debugging
 *    or: var sw = new Stopwatch(DEBUG); //for global var DEBUG
 * returns duration in milliseconds
 */

if (DEBUG) {
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
}

function Stopwatch(debug) {
   "use strict";
   this.begin;
   this.end;
   this.dur;
   this.debug = false; 
   if (debug === true) this.debug = true;
}

Stopwatch.prototype.start = function() {
   this.begin = Date.now();
   if (this.debug) console.log("Stopwatch started at: " + this.begin);
}

Stopwatch.prototype.stop = function() {
   this.end = Date.now();
   this.dur = this.end - this.begin;
   if (this.debug) console.log("Stopwatch stopped, dur: " + this.dur + " ms");
   return this.dur;
}

Stopwatch.prototype.lap = function() {
   var laptime = Date.now() - this.begin;
   if (this.debug) console.log("Stopwatch lapped, dur: " + laptime + " ms");
   return laptime;
}

