// WHEN THE USER CLICKS ON THE BUTTON. 
//TOGGLE BETWEEN HIDING AND SHOWING THE DROPDOWN CONTENT


function myFunction(){
	document.getElementById("myDropdown").classList.toggle
	("show");
}


//CLOSE THE DROPDOWN MENU IF THE USER CLICKS OUTSIDE OF IT

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns =
	docuument.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
			openDropdown.classList.remove('show');
	  }
	}
  }
}








$(document).ready(function() {
$('.submit').click(function(event) {
console.log('Clicked button')

var email = $('.email').val()
var subject = $('.subject').val()
var message = $('.message').val()
var statusElm = $('.status')
statusElm.empty()

if(email.length > 5 && email.includes('@') && email.includes('.')) {
	statusElm.append('<div>Email is valid</div>')
} else {
	event.preventDefault()
	statusElm.append('<div>Email is not valid</div>')

}
if(subject.length >= 2) {
	statusElm.append('<div>Subject is valid</div>')
} else {
	event.preventDefault()
	statusElm.append('<div>Subject is not valid</div>')
}
if(message.length > 5) {
	statusElm.append('<div>Message is valid</div>')
} else {
	event.preventDefault()
	statusElm.append('<div>Message is not valid</div>')

}

 })
})