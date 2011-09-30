
function nameNotEmpty() {
	if(document.contact.name.value == "") {
		document.contact.name.focus();	
		alert("Please enter your First Name");
		return false;
	}
	else
		return true;
}

function emailNotEmpty()
{
	var x=document.forms["contact"]["email"].value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
  		document.contact.email.focus();
 		alert("Not a valid e-mail address");
 	 	return false;
 	}
 	else
 		return true;
}

function enNotEmpty() {
	if(document.contact.enquiry.value == "") {
		document.contact.enquiry.focus();	
		alert("Please enter your enquiry");
		return false;
	}
	else
		return true;
}

function allOk() {
	if (nameNotEmpty() && emailNotEmpty() && enNotEmpty() )
		return true;
	else
		return false;
}
