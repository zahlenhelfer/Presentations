function invokeBrowser() {
	console.log("invokeBrowser()");
	var url, args;

	//1. Read the URL from the input field
	url = document.getElementById("txtUrl").value;
	//2. create a new BrowserArguments object
	args = new blackberry.invoke.BrowserArguments(url);	
	//3. Open the browser to the target URL
	blackberry.invoke.invoke(blackberry.invoke.APP_BROWSER, args);
	
}

