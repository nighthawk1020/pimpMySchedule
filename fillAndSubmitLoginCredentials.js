loginCredentialHandler = {};

loginCredentialHandler.savedUserID = "exampleUser1";
loginCredentialHandler.savedPassword = "examplePass";

loginCredentialHandler.fillUserID = function () {
	userIDField = document.getElementById("UserID");
	userIDField.value = loginCredentialHandler.savedUserID;
}

//DOES NOT WORK. My guess is you can't simply access or set an encrypted value in a password field.
loginCredentialHandler.fillUserPassword = function () {
	passwordField = document.getElementById("PIN");
	passwordField.value = loginCredentialHandler.savedPassword;
}

loginCredentialHandler.submitFields = function () {
	loginBox = document.getElementsByName("loginform")[0];
	loginBox.submit();
}

loginCredentialHandler.fillandSubmitFields = function () {
	loginCredentialHandler.fillUserID();
	loginCredentialHandler.fillUserPassword();
	loginCredentialHandler.submitFields();
}

loginCredentialHandler.fillandSubmitFields();