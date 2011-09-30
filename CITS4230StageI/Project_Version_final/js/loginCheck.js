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

function allOk() {
	if (nameNotEmpty() && passNotEmpty())
		return true;
	else
		return false;
}
