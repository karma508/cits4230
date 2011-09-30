function nameNotEmpty() {
	if(document.signin.name.value == "") {
		document.signin.name.focus();
		alert("Please enter your Name");
		return false;
	}
	else
		return true;
}

function passNotEmpty() {
	if(document.signin.pass.value == "") {
		document.signin.pass.focus();	
		alert("Please enter your Password");
		return false;
	}
	else
		return true;
}

function rePassNotEmpty() {
	if(document.signin.pass2.value == "") {
		document.signin.pass2.focus();	
		alert("Please Re-Type your Password");
		return false;
	}
	else if(document.signin.pass2.value != document.signin.pass.value) {
		document.signin.pass.focus();
		document.signin.pass.select();
		alert("Password does not match! Please re-enter your Password");
		return false;
	}
	else
		return true;
}

function emailNotEmpty()
{
	var x=document.forms["signin"]["email"].value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
  		document.signin.email.focus();
 		alert("Not a valid e-mail address");
 	 	return false;
 	}
 	else
 		return true;
}

function allOk() {
	if (nameNotEmpty() && passNotEmpty() && rePassNotEmpty() && emailNotEmpty())
		return true;
	else
		return false;
}
