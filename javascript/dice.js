/* node dice.js
 * solves the problem of how many dice will roll a "2" with 5 dice.
 * Kyle Dinh
 * one :3125
 * two :1250
 * three :250
 * four :25
 * five :1
 * 
 * [2][2][2][2][2] = 1/7776
 * [2][2][2][2][*] = 5 * 5 = 25
 * [2][2][2][*][*] = 10 * 25 = 250
 * 
 * for matching 3: 10 pair combos
 * 0,1 0,2 0,3 0,4
 *     1,2 1,3 1,4
 *         2,3 2,4
 *             3,4
 */

function permute(arr, num, max, pos) {
   quotient = Math.floor(num / max)
   remainder = num % max
   arr[pos] = remainder
   if (quotient < max) {
      arr[pos +1] = quotient
   }
   if (quotient >= max) {
      permute(arr, quotient, max, pos +1)
   }
   return arr
}

function count(arr, targ) {
   var cnt = 0; 
   var i;
   for (i = 0; i < arr.length; i++) {
      if (arr[i] === targ) { 
         cnt++;
      }
   }
   return cnt;
}

var dice = [0,0,0,0,0]
var has1 = 0 , has2 = 0, has3 = 0, has4 = 0, has5 = 0;
var i;

// 6^5 = 7776 (six sides ^ 5 dice)
for (i = 0; i < 7776; i++) {
   var combo = permute(dice, i, 6, 0);
   console.log(combo);
   if (count(combo, 2) === 1) { has1++; }
   if (count(combo, 2) === 2) { has2++; }
   if (count(combo, 2) === 3) { has3++; }
   if (count(combo, 2) === 4) { has4++; }
   if (count(combo, 2) === 5) { has5++; }
}

console.log("one   : " + has1);
console.log("two   : " + has2);
console.log("three : " + has3);
console.log("four  : " + has4);
console.log("five  : " + has5);
var total = has3 + has4 + has5;
console.log("Getting 2's on 3 or more dice: " + total + " out of 7,776."); 
