var usernames = [];
var passwords = [];

usernames[0] = 'admin';
usernames[1] = 'user';
passwords[0] = 'admin123';
passwords[1] = 'user123';
var n = 2;


function local_login () {

	var uname = document.getElementsByName("uname")[0].value;
	var pass = document.getElementsByName('psw')[0].value;
	
	if (uname == 'admin' && pass == 'admin123') {
		// redirect to user page
		save_user(uname, pass);
		alert("Admin Login Successful!");
		window.open("templates/welcome.html", '_top');
	} else if (uname == 'user' && pass == 'user123') {
		// redirect to admin page
		save_user(uname, pass);
		alert("User Login Successful!");
		window.open("templates/welcome.html", '_top');
	} else {
		window.alert("Invalid user credentials!!");
	}
}

function save_user (uname, pass) {
	sessionStorage[uname] = "loggedin";
}

function register(){

	var uname = document.getElementsByName("uname")[0].value;
	var pass = document.getElementsByName('psw')[0].value;	

	usernames[n] = uname;
	passwords[n] = pass;

	alert("Registration Successful! Click to login.");
	window.open("welcome.html", '_top');



}