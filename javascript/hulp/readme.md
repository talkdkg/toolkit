# Hulp.js 
Hulp.js is a Helper Utility Library in Practice to make it easier for the developers to debug and inspect their objects. If `hulp.js` is  included in your app, the self involking function will place the`hulp` object library to the Global Scope.

To use any of the methods, simply call it through the object. The `hulp.debug()` method is meant to let the developer leave debug code uncommented with default of not logging to the console. But can be turned ON, in the browser console with a `DEBUG = true;` command.

```
var str = "This is a string";
var type = hulp.getType(str);         // 'String'

delete DEBUG;                         // delete from Global Scope
hulp.debug("type of obj: " + type);   // returns false, doesn't log to console
DEBUG = true;                         // sets DEBUG
hulp.debug("type of obj: " + type);   // returns true, logs "type of obj: String" to console.log

```

## Functions

For now, mainly functions to do debug logging and object inspection.

hulp Methods        |             |          
--------------------|-------------|
debug(str)          | returns true/false if DEBUG is set; if set it will write *str* to console.log() |
getProperties(obj)  | returns array of property names that are not functions |
getMethods(obj)     | returns array of method names of *obj* |
getType(obj)        | returns string of *obj* constructor type | 
getClass(obj)       | alt version of getType() |
toString()          | lists the methods of the library to the console |
help()              | same as toString() | 

## Dev Notes

* Includes Karma unit tests - unittest.sh
* Feel free to copy and extend for you own use
* I used NodeJS to write this 
* Author: github.com/kyledinh
* Codebase: https://github.com/kyledinh/toolkit/tree/master/javascript/hulp
