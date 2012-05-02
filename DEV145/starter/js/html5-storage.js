function displayMessage() {
	console.log("displayMessage()");
	var message;
	
	//3. Read the message from local storage

	
	//4. If a message exists, display it on the page.
	if (message) {
		
	}
}

function saveMessage() {
	console.log("saveMessage()");
	var message;
	//Read the message from the input box
	message = document.getElementById("txtWelcomeMessage").value;
	
	//1. Save the message to local storage

	
	//2. Display an alert() confirmation to user

	
	//return the user to the home screen
	bb.popScreen();
}

//Do not change - display the welcome message when this screen has been loaded:
setTimeout(displayMessage, 100);