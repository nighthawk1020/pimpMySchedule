var PMS = {};

//constants
PMS.indexOfCRNInRow = 1;
PMS.indexOfSectionNameInTable = 0;
PMS.indexOfClassTable = 5;
PMS.indexOfFirstClass = 2;


function courseBeingQueried(term, subject, CRN) {
	this.term = term;
	this.subject = subject;
	this.CRN = CRN;
	this.index = PMS.getRowIndexOfCRN(CRN);
	this.canRegisterFor = PMS.getStatusOfIndex(this.index);
}

//if the course requires more than one class to be open at a time (you have to register for multiple courses at a time), call this constructor. cCRNs (componentCRN) follow the format of
//"exCRN,ex2CRN,ex3CRN,ex4CRN"
//listed by priority. later I may make it so that it will continuously try to get the 1st priority, barring schedule conflicts. But that is further down the line.
function multiCourseBeingQueried(term, subject, CRN, cCRN) {
	this = new courseBeingQueried(term, subject, CRN);
	this.componentCRN = cCRN.split(",");
	this.componentIndex = [];
	
	//filling in the componentIndex array, can't do this as it's instantiated, I have to instantiate it first, then modify it in two separate processes.
	this.fillIndicesOfcCRNs = function () {
		this.componentCRN.forEach(function(element) {
			this.componentIndex.push(PMS.getRowIndexOfCRN(element));
		}
	}
}

//returns section currently being looked at.
PMS.getCurrentSection = function () {
	return document.getElementsByClassName("ddtitle")[this.indexOfSectionNameInTable].innerText;
}

//returns table of classes in current section
PMS.getTableOfClasses = function () {
	return document.getElementsByTagName("tbody")[this.indexOfClassTable];
}

//returns row elements, given the index in the table. returns class rows as array of dddefault objects.
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
	if(this.getStatusOfIndex(this.getRowIndexOfCRN(10385)) && this.getStatusOfIndex(this.getRowIndexOfCRN(21300))) {
		console.log("kay!");
	};
}

//execution
PMS.classTable = PMS.getTableOfClasses();