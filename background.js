//hopefully tabID's can't be negative.
var activePMSSessionTabID = -1;
var term = "Summer 2014";
var listOfClasses = [];

//TODO: Options pls...
fillClasses = function () {
	listOfClasses.push("CS - ");
}

testFunction = function () {
	console.log("I did it!");
	console.log("Wait, why do I even need background.js?");
}

//TODO: do this
createPMSEnabledTab = function () {

}


startPMSInThisTab = function (tabIDsent) {
	 tabObjectToInstantiate = {};
	 tabObjectToInstantiate.url = "https://ssb.cc.binghamton.edu/banner/bwskfcls.p_sel_crse_search";
	 chrome.tabs.update(tabIDsent,tabObjectToInstantiate);
	 activePMSSessionTabID = tabIDSent;
}

// thankfully I don't have to use .equals()...
chrome.extension.onMessage.addListener(function(stringPassed, sender, sendResponse) {
	switch(stringPassed) {
		// 
		case "newTabYes": 
			console.log("create new tab: " + sender.tab.id);
			createPMSEnabledTab();
			break;
		case "newTabNo": 
			console.log("pirate this tab: " + sender.tab.id);
			startPMSInThisTab(sender.tab.id);
			break;
		default: 
			console.log("message received, incorrect format");
			break;
	}
});

testFunction();