function getTimestamp() { 
    return Math.round((new Date()).getTime() / 1000);
}

function validateForm() {
    var errors = [];
    kjs.id("validation_msg").innerHTML = "";

    var address = document.forms["addressForm"]["address"].value;
    var address2 = document.forms["addressForm"]["address2"].value;
    var city = document.forms["addressForm"]["city"].value;
    var state = document.forms["addressForm"]["state"].value;
    var zipcode = document.forms["addressForm"]["zipcode"].value;

    var regAddress = new RegExp("^\s*[0-9a-zA-Z][0-9a-zA-Z '-]*$");
    var regAddress2 = new RegExp("^[a-zA-Z0-9\s,#'-]*$"); //accepts a blank field
    var regCity = new RegExp("^\s*[0-9a-zA-Z][0-9a-zA-Z '-]*$");
    var regState = new RegExp("^[A-Z]");
    var regZipcode = new RegExp("^\\d{5}(-\\d{4})?$"); 

    if (regAddress.test(address) == false) {
        errors.push("Address must be filled in with only letters and numbers: 324 Elm Street");
    }
    if (regAddress2.test(address2) == false) {
        errors.push("Address 2 can be blank or like this: #B or Apt 3");
    }
    if (regCity.test(city) == false) {
        errors.push("City must be like this: San Francisco");
    }
    if (regState.test(state) == false) {
        errors.push("Select a state from dropdown menu");
    }
    if (regZipcode.test(zipcode) == false) {
        errors.push("Zipcode needs to be in a 5 or 5-4 format: 94420 or 94420-1432");
    }

    if (errors.length > 0) {
        for (var i = 0; i < errors.length; i++) {
            var row = kjs.clone(kjs.id("error_msg"), null);
            row.removeAttribute("id");
            row.innerHTML = errors[i];
            kjs.id("validation_msg").appendChild(row);    
        }
        // alert("Errors : " + errors.length);
    } else {
        document.forms["addressForm"]["timestamp"].value = getTimestamp();
        alert("Form is valid, it would have been submitted!");
        // submit the form 
    }
}

function mkStateDropdown(obj) {
    for (var key in obj) {
        var row = kjs.clone(kjs.id("state_option"), null);
        row.setAttribute("value", key);
        row.innerHTML = obj[key];
        var parent = kjs.id("form_state");
        parent.appendChild(row);    
    }
}
 
function pageInit() {
    kjs.initAjax("data/list_of_states.json", mkStateDropdown);
}
