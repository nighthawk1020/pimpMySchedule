var selectTermHandler = {};

selectTermHandler.dropdown = document.getElementById("term_input_id");
selectTermHandler.dropdownOptions = selectTermHandler.dropdown.options;
selectTermHandler.nextTerm = "Fall 2012";

//TODO: pull nextTerm from background.js (or options.html) by comparing the termLastChecked index
selectTermHandler.findValueOfTerm = function (termString) {
	for(i = 0; i < this.dropdownOptions.length; i++) {
		 if(this.dropdownOptions[i].innerText.indexOf(termString) == 0) {
			return this.dropdownOptions[i].value;
		 }
	}
}

//returns true if the term involved is view only
selectTermHandler.checkIfViewOnly = function (termString) {
	if(termString.indexOf("(View only)") >= 0) {
		return true;
	}
	return false;
}

//returns true if the string passed into the method matches the nextTerm property.
selectTermHandler.matchesNextTerm = function (termString) {
	if(termString.indexOf(this.nextTerm) == 0) {
		return true;
	}
	return false;
}

//I wonder if doing it like this has any negative effects...
selectTermHandler.selectNextTerm = function () {
	this.dropdown.value = this.findValueOfTerm(this.nextTerm);
}

//a little messier than I'd like... but oh well.
selectTermHandler.submit = function () {
	document.forms[1].childNodes[9].click();
}

selectTermHandler.selectNextTermAndSubmit = function () {
	this.selectNextTerm();
	this.submit();
}


setTimeout(selectTermHandler.selectNextTermAndSubmit(), 3000);