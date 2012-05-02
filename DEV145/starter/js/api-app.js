function displayAboutInfo() {
	console.log("displayAboutInfo()");
	var name, author, version, license;
	
	//1. Read the application name using blackberry.app API

	//2. Read the application author using blackberry.app API

	//3. Read the application version using blackberry.app API

	//4. Read the application license using blackberry.app API

	
	//Display application info to the page
	document.getElementById("txtAppName").value = name;
	document.getElementById("txtAppAuthor").value = author;
	document.getElementById("txtAppVersion").value = version;
	document.getElementById("txtAppLicense").value = license;
	
}

//Do not change - display the welcome message when this screen has been loaded:
setTimeout(displayAboutInfo, 100);