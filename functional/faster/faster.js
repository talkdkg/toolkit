var slow = function (x) {
   return "slow-" + x ;
};

var heavy = function (x) {
   return "slower-" + x;
};

function makefast(f) {
    var cache = {}; 
    return function (x) {
        if (cache[x] == undefined) {
            var a = f(x);
            cache[x] = a;
            return "write to cache : " + a;
        } else {
            return "from cache : " + cache[x];
        } 
    } 
}

var f1 = makefast(slow); 
var f2 = makefast(heavy); 

console.log(f1(100));
console.log(f2(100));
console.log(f1(100));
console.log(f2(100));

console.log(f1(200));
console.log(f2(200));

/* When it's written to cache it says "writing - "
 * When it's from cache it just writes it.
 */



