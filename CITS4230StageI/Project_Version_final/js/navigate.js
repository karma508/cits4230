// change color background if browser is Opera

function operaBackground() {
  var agent = navigator.userAgent.substring(0,5).toLowerCase();
  if ( agent.search("opera") == 0 ) {
  	document.body.style.backgroundColor="#000000";
  }
}
