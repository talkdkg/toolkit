/*
 * Hulp - Helper Util Library in Practice 
 * https://github.com/kyledinh/toolkit/tree/master/javascript/hulp
 */
/*jslint devel: true, white: true */

(function () {
    'use strict';

    if (typeof this.hulp == 'undefined') {

        this.hulp = {};

        this.hulp.getProperties = function(obj) {
            var key, properties = [];
            for (key in obj) {
                if (typeof obj[key] != 'function') {
                    properties.push(key);
                }
            }
            return properties;
        };

        this.hulp.getMethods = function(obj) {
            var key, methods = [];
            for (key in obj) {
                if (typeof obj[key] == 'function') {
                    methods.push(key);
                }
            }
            return methods;
        };

	/* TODO write test */
	this.hulp.getType = function(obj) {
            var con = obj.constructor;  // returns a Function 
	    return con.toString().substring(str.indexOf(' ')+1, str.indexOf('('));
	}

	/* TODO write test, this is an alt version of getType() */
	this.hulp.getClass = function(obj) {
  	    if (typeof obj === "undefined") { return "undefined"; }
            if (obj === null) { return "null"; }
            return Object.prototype.toString.call(obj).match(/^\[object\s(.*)\]$/)[1];
	}

        this.hulp.toString = function() {
            console.log("Hulp - Helper Util -- uses:");
            console.log("hulp.getProperties(obj)");
            console.log("hulp.getMethods(obj)");   
        };

        this.hulp.help = this.hulp.toString;

        console.log("`hulp` helper has been initialized to the Global Scope.");
    } else {
        console.log("`hulp` is already in use in the Global Scope, `hulp` object not redefined.");
    }

}).call(this);   // `this` in this context, refers to the Global Scope
