var PMSI = {};

//TODO: should check options page to see if PMS has been enabled
PMSI.init = function () {
	if(PMSI.hasWelcomeScreen() == true) PMSI.promptToStartPMSISesh();
}

PMSI.hasWelcomeScreen = function () {
	welcomeDiv = document.getElementsByClassName("pldefault")[7];
	if(welcomeDiv.innerText.indexOf("Welcome") == 0) {
		return true;
	}
	return false;
}

//TODO: instead of prompting twice to get whether or not the session should start in another tab, see if there's an easy way to 
PMSI.promptToStartPMSISesh = function () {
	startControl = confirm("Would you like to start a session of PimpMySchedule?");
	if(startControl) {
		sessionControl = confirm("Start PimpMySchedule in another tab?");
		if(sessionControl) {
			chrome.extension.sendMessage("newTabYes");
		} else {
			chrome.extension.sendMessage("newTabNo");
		}
	}
}

PMSI.init();