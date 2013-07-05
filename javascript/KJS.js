//Sample Javascript library

var KJS = (function() {

  var api = {};
  
  api.plusOne = function(num) {
     return num + 1; 
  };  
  
  api.getid = function(id) {
    return document.getElementById(id);
  };

  api.clone = function(node, id) {
    var elem = node.cloneNode(true);
    if ((id !== "") && (id !== null)) {
      elem.setAttribute("id", id);
    } else {
      elem.removeAttribute("id");
    }
    return elem;
  };

  api.template = function(node, id) {
    var elem = api.clone(node, id);
    node.parentNode.removeChild(node);
    return elem;
  };  
 
  return api;

})();