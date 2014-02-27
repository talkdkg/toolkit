/* requires: https://github.com/kyledinh/toolkit/tree/master/javascript/hulp.js */

'use strict';
var DEBUG;

/* jasmine specs for controllers go here */

describe('MASTER HULP UNIT TEST: ', function() {

   var testObj = { 
      a: "apple", b: "bat", c: "cat", 
      d: function() { return true;} 
   };

   describe("getType from Object", function() {
      it("'gets the object type", function() {
         console.log(hulp.getType(""));
         expect(hulp.getType("")).toBe("String");
         expect(hulp.getType(true)).toBe("Boolean");
         expect(hulp.getType(0)).toBe("Number");
         expect(hulp.getType([])).toBe("Array");
         expect(hulp.getType({})).toBe("Object");
         expect(hulp.getType(null)).toBe("null");

         var a = "This is a string";
         expect(hulp.getType(a)).toBe("String");
         a = 42;
         expect(hulp.getType(a)).toBe("Number");
         console.log("PASSED: hulp.getType");
      });
   });

   describe("getClass from Object", function() {
      it("gets a class", function() {
         expect(hulp.getClass("")).toBe("String");
         expect(hulp.getClass(true)).toBe("Boolean");
         expect(hulp.getClass(0)).toBe("Number");
         expect(hulp.getClass([])).toBe("Array");
         expect(hulp.getClass({})).toBe("Object");
         expect(hulp.getClass(null)).toBe("null");

         var a = "This is a string";
         expect(hulp.getClass(a)).toBe("String");
         a = 42;
         expect(hulp.getClass(a)).toBe("Number");
         console.log("PASSED: hulp.getClass");
      });
   });

   describe("getProperties from Object", function() {
      it("returns an array of keys", function() {
         var result = hulp.getProperties(testObj);
         console.log("============= " + result);
         var z = ['a', 'b', 'c'];
         var i, n;
         expect(result.length).toBe(3);
         expect(result[0]).toBe('a');        
         console.log("PASSED: hulp.getProperties");         
      });
   });

   describe("getMethods from Object", function() {
      it("returns array of method names", function() {
         var result = hulp.getMethods(testObj);
         console.log("============= " + result);
         var z = ['d'];
         var i, n;
         expect(result.length).toBe(1);
         expect(result[0]).toBe('d');
         console.log("PASSED: hulp.getMethods");        
      });
   });

   describe("test the debug log feature", function() {
      it("checks for DEBUG global var in use of help.debug()", function() {
         expect(hulp.debug("TEST")).toBe(false);
         DEBUG = true;  // declare in Global Scope
         expect(hulp.debug("Testing hulp.debug, works.")).toBe(true);      
         DEBUG = false;
         expect(hulp.debug("TEST")).toBe(false);      
         console.log("PASSED: hulp.debug");                      
      });
   });

});
