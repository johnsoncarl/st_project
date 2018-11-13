function local_login () {

	var uname = document.getElementsByName("uname")[0].value;
	var pass = document.getElementsByName('psw')[0].value;
	
	if (uname == 'admin' && pass == 'admin123') {
		// redirect to user page
		save_user(uname, pass);
		alert("Admin Login Successful!");
		window.open("./welcome.html", '_top');
	} else if (uname == 'user' && pass == 'user123') {
		// redirect to admin page
		save_user(uname, pass);
		alert("User Login Successful!");
		window.open("./welcome.html", '_top');
	} else {
		window.alert("Invalid user credentials!!");
	}
}

function save_user (uname, pass) {
	sessionStorage[uname] = "loggedin";
}

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}