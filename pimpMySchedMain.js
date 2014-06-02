var PMS = {};

//constants
PMS.indexOfCRNInRow = 1;
PMS.indexOfSectionNameInTable = 0;
PMS.indexOfClassTable = 5;
PMS.indexOfFirstClass = 2;
PMS.wantedClassString = "CS - 

//returns section currently being looked at.
PMS.getCurrentSection = function () {
	return document.getElementsByClassName("ddtitle")[this.indexOfSectionNameInTable].innerText;
}

//returns table of classes in current section
PMS.getTableOfClasses = function () {
	return document.getElementsByTagName("tbody")[this.indexOfClassTable];
}

//returns row elements, given a number as the index in the table. returns class rows as array of dddefault objects.
PMS.getRowByIndex = function (index) {
	row = this.classTable.getElementsByTagName("tr")[index]
	//the first two rows don't contain anything other than themselves
	if(index < this.indexOfFirstClass) return row;
	
	return row.getElementsByClassName("dddefault");
}

//returns CRN of row (if applicable), given number in table, starting from 0.
PMS.getCRN = function (index) {
	return this.getRowByIndex(index)[this.indexOfCRNInRow].innerText;
}

//returns select element in index of row (hopefully a checkbox)
PMS.getSelectField = function (index) {
	return PMS.getRowByIndex(index)[0].firstElementChild;
}

//returns true if can register, false if otherwise. again, grateful I don't need to use .equals()...
PMS.getStatusOfIndex = function (index) {
	if(index < this.indexOfFirstClass) return;
	if(PMS.getSelectField(index).type == "checkbox") return true;
	return false;
	
}

//returns the index of the row containing passed CRN
PMS.getRowIndexOfCRN = function (passedCRN) {
	for(i = this.indexOfFirstClass; i < this.classTable.childElementCount - 1; i++) {
		if(this.getCRN(i) == passedCRN) return i;
	}
	//CRN not found!
	return -1;
}

//TODO: returns the row containing passed CRN
PMS.getClassRowByCRN = function (passedCRN) {
	return this.getRowByIndex(this.getRowIndexOfCRN(passedCRN));
}


//TODO: returns class name given CRN
PMS.classNameOfCRN = function (passedCRN) {
	
}

//Ooooooooohhhhh boy....
PMS.attemptToSignUpForWantedClasses = function () {
//DANGER! WARNING! DANGER! HARD CODED CS 110 CLASS DANGER! WARNING! DANGER! MORE DANGER!
	if(this.getStatusOfIndex(this.getRowIndexOfCRN(10385)) && this.getStatusOfIndex(this.getRowIndexOfCRN(21300)) {
		this.getSelectField(this.getRowIndexOfCRN(10385)).click();
		this.getSelectField(this.getRowIndexOfCRN(21300)).click();
		document.getElementsByName("ADD_BTN")[0].click();
	} else {
		//DOES NOT RESUBMIT DATA, WHICH DEFEATS THE PURPOSE.
		setTimeout(Location.reload, 300000);
	}
}

PMS.classTable = PMS.getTableOfClasses();
PMS.attemptToSignUpForWantedClasses();