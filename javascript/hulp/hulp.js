/*
 * Hulp - Helper Util Library in Practice 
 * https://github.com/kyledinh/toolkit/tree/master/javascript/hulp
 */

 /*jslint devel: true, white: true */

 (function () {
    'use strict';

    if (typeof this.hulp == "undefined") {

        this.hulp = {};

        this.hulp.dev = function(str) {
            if (typeof DEBUG !== "undefined") {
                if (DEBUG !== false) {
                    console.log(str);              
                    return true;
                }
            }
            return false;
        };

        this.hulp.getProperties = function(obj) {
            var key, properties = [];
            for (key in obj) {
                if (typeof obj[key] != "function") { properties.push(key); }
            }
            return properties;
        };

        this.hulp.getMethods = function(obj) {
            var key, methods = [];
            for (key in obj) {
                if (typeof obj[key] == "function") { methods.push(key); }
            }
            return methods;
        };

        this.hulp.getType = function(obj) {
            if (typeof obj === "undefined") { return "undefined"; }
            if (obj === null) { return "null"; }            
            var con = obj.constructor.toString();  // returns a Function -> string
            return con.substring(con.indexOf(' ')+1, con.indexOf('('));
        };

        this.hulp.getClass = function(obj) {
            if (typeof obj === "undefined") { return "undefined"; }
            if (obj === null) { return "null"; }
            return Object.prototype.toString.call(obj).match(/^\[object\s(.*)\]$/)[1];
        };

        this.hulp.toString = function() {
            console.log("Hulp - Helper Util -- uses:");
            console.log("hulp.getProperties(obj)");
            console.log("hulp.getMethods(obj)");
            console.log("hulp.getClass(obj)");
            console.log("hulp.getType(obj)");   
        };

        this.hulp.help = this.hulp.toString;

        console.log("`hulp` helper has been initialized to the Global Scope.");

    } else {
        console.log("`hulp` is already in use in the Global Scope, `hulp` object not redefined.");
    }

}).call(this);   // `this` in this context, refers to the Global Scope
