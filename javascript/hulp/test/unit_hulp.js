'use strict';

/* jasmine specs for controllers go here */

describe('MASTER HULP UNIT TEST: ', function() {

   var testObj = { a: "apple", b: "bat", c: "cat", 
      d: function() { return true;} 
   };

   describe('getProperties from Object', function(){
      it('do something', function() {
         var result = hulp.getProperties(testObj);
         console.log("============= " + result);
         var z = ['a', 'b', 'c'];
         var i, n;
         expect(result.length).toBe(3);
         expect(result[0]).toBe('a');        
      });
   });

   describe('getMethods from Object', function(){
      it('do something', function() {
         var result = hulp.getMethods(testObj);
         console.log("============= " + result);
         var z = ['d'];
         var i, n;
         expect(result.length).toBe(1);
         expect(result[0]).toBe('d');        
      });
   });

});
