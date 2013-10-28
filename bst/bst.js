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


function BST() {
   this.root = null;
}

function Node(key, value) {
   this.key = key;
   this.value = value;
   this.left = null;
   this.right = null;
}

BST.prototype.append = function (_node, _current) {
   var _key = _node.key;
   var _value = _node.value;
   console.log(" appending " + _node.key +  " : " + _current.key)
   if (_node.key < _current.key) {
      if (_current.left === null) {
         _current.left = _node;
      } else {
         this.append(new Node(_key, _value), _current.left);
      }
   } else if (_node.key > _current.key) {
      if (_current.right === null) {
         _current.right = _node;
      } else {
         this.append(new Node(_key, _value), _current.right);
      }
   } else {
      _current.value = _node.value;
      return _node;
   }
};

BST.prototype.find = function (_key, _current) {
   console.log(" finding " + _key +  " : " + _current.key)
   console.log(_current.value);
   if (_key < _current.key) {
      if (_current.left === null) {
         return "no match";
      } else {
         this.find(_key, _current.left);
      }
   } else if (_key > _current.key) {
      if (_current.right === null) {
         return "no match";
      } else {
         this.find(_key, _current.right);
      }
   } else if (_key === _current.key) {
      return _current.value;
   } else {
      return "no match";
   }
};


BST.prototype.put = function (key, value) {
   var node = new Node(key, value);
   if (this.root === null) {
      this.root = node;
   } else {
      this.append(node, this.root);
   }
};


BST.prototype.get = function (key) {
   if (this.root === null) {
      return "empty tree";
   } else {
      return this.find(key, this.root);
   }
};


//Test

var b = new BST();
b.put(7, "Seven");
b.put(3, "Tres");
b.put(1, "Uno");
b.put(10, "Diaz");
b.put(12, "Doce");

//console.log(b.get(7));
//console.log(b.get(1));
//console.log(b.get(10));
