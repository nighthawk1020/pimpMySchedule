var loginCredentialHandler = {};

loginCredentialHandler.submitFields = function () {
	loginBox = document.getElementsByName("loginform")[0];
	loginBox.submit();
}

window.setTimeout(loginCredentialHandler.submitFields, 5000);