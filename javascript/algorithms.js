//Sample Javascript library

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

function Stack() {
    this.stack = new Array();
    this.pop = function() {
       return this.stack.pop();
    }
    this.push = function(item) {
       this.stack.push(item);
    }
    this.isEmpty = function() {
        return this.stack.length === 0;
    }
    this.size = function() {
        return this.stack.length;
    }
}

var algo = (function() {

  var api = {};
  
  api.swap (arr, a, b) {
     var temp = arr[a];
     arr[a] = arr[b];
     arr[b] = temp;
  }

  api.shuffle (arr) {
     var N = arr.length;

     for (var i = 0; i < N; i++) {
        var j = Math.floor(Math.random() * N);
        console.log(j);
        api.swap(arr, i, j); 
        console.log(arr);
      }
      return arr;  
  }
    
  function insertionSort(items) {
     var N = items.length;
     for (var i = 0; i < N; i++) {
         for (var j = i; j > 0; j--) {
              if (items[j] < items[j-1]) {
                  api.swap(items, j, j-1);
              } else {
                  break;
              }
         }
     }
     return items;
  }
  
  function selectionSort(items) {
     var N = items.length; 
     var min;
     for (var i = 0; i < N; i++) {
         min = i;
         console.log(items);
         //check the rest of the array for anything smaller
         for (var j = i+1; j < N; j++) {
             if (items[j] < items[min]) {
                 min = j;
             }
         }
         //swap the min found with pointer i
         swap(items, i , min);
     }
     return items;
  }
   
  return api;

})();
