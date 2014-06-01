var testFunction = function () {
	console.log("I did it!");
	console.log("Wait, why do I even need background.js?");
}



var createPMSEnabledTab = function () {
}


chrome.extension.onMessage.addListener(function(stringPassed, sender, sendResponse) {
	switch(stringPassed) {
		case "newTabYes": 
			console.log("create new tab");
			break;
		case "newTabNo": 
			console.log("pirate this tab");
			break;
		default: 
			console.log("message received, incorrect format");
			break;
	}
});

testFunction();