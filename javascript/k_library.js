// k_ js library of functions github:kyledinh

function k_gelbi(id) {
   return document.getElementById(id);
}

function k_create(tag, innerHtml, attr, value) {
   var elem = document.createElement(tag);
   elem.innerHTML = innerHtml;
   if ((attr !== null) && (attr !== "")) {
      elem.setAttribute(attr, value);
   }
   return elem;
}

function k_create(tag, innerHtml) {
   var elem = document.createElement(tag);
   elem.innerHTML = innerHtml;
   return elem;
}

function k_clone(node, id) {
   var elem = node.cloneNode(true);
   if ((id !== "") && (id !== null)) {
      elem.setAttribute("id", id);
   } else {
      elem.removeAttribute("id");
   }
   return elem;
}

function ajaxRequest() {
   var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"] //activeX versions to check for in IE
   if (window.ActiveXObject) { //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
      for (var i=0; i < activexmodes.length; i++) {
         try {
            return new ActiveXObject(activexmodes[i]);
         } catch(e) {
            //suppress error
         }
		}
   } else if (window.XMLHttpRequest) { // if Mozilla, Safari etc
      return new XMLHttpRequest();
   } else {
      return false;
	}
}
 
function initAjax(uri, callback) {
	var ajax = new ajaxRequest(); 	
	ajax.onreadystatechange = function() {	
    	if (ajax.readyState == 4 && ajax.status == 200) {
			var jsondata = eval('(' + ajax.responseText + ')');  
			if (callback) {   
				callback(jsondata); 
			}     	
    	}
	}
	ajax.open("GET", uri, true);
	ajax.send(null);
}

function processJson(records) {    
	for (var i=0; i < records.length; i++) {
		var rec = records[i];    
		var row = k_create("tr", "");    
		row.appendChild(k_create("td", rec.id, "", ""));
		row.appendChild(k_create("td", rec.google_id , "", ""));  
		row.appendChild(k_create("td", rec.task_title, "", ""));
		row.appendChild(k_create("td", rec.task_type, "", ""));
		row.appendChild(k_create("td", rec.task_desc, "", ""));
		k_gelbi("task_table").appendChild(row);    
	}
}

/*
function pageInit() {
   initAjax("rest_listalltasks.taak", processJson);
}
*/