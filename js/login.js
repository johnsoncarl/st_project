// variable to detect user state of login or logout





var usernames = ["admin", "user"];
var passwords = ["admin123", "user123"];
var user_id = [1, 2];
var username = [];

// storing variables in local storage
sessionStorage["usernames"]= JSON.stringify(usernames);
sessionStorage["passwords"]= JSON.stringify(passwords);
sessionStorage["user_id"]= JSON.stringify(user_id);

// sessionStorage("usernames[0]", "admin");
// sessionStorage("usernames[1]", "user");

 username[0] = 'admin';
 username[1] = 'user';
// passwords[0] = 'admin123';
// passwords[1] = 'user123';
// user_id[0] = 1;
// user_id[1] = 2;

var n = 2;


function local_login () {

	var uname = document.getElementsByName("uname")[0].value;
	var pass = document.getElementsByName('psw')[0].value;
	
	
	if (uname == '' || pass == '') {
		// redirect to user page
		alert("Please fill in the required fields!");

	}else if (uname == 'admin' && pass == 'admin123') {
		// redirect to user page
		save_user(uname, pass);
		loggedin();
		alert("Admin Login Successful!");
		window.open("templates/welcome.html", '_top');
	} else if (uname == 'user' && pass == 'user123') {
		// redirect to admin page
		save_user(uname, pass);
		loggedin();
		alert("User Login Successful!");
		window.open("templates/welcome.html", '_top');
	} else {
		window.alert("Invalid user credentials!!");
	}
}


function save_user (uname, pass) {
	sessionStorage[uname] = "loggedin";
}

function loggedin(){
	sessionStorage["userState"] = true;
}

function logout(){
	sessionStorage["userState"] = false;
	window.open("../index.html", '_top');

}


function register(){

	var uname = document.getElementsByName("uname")[0].value;
	var pass = document.getElementsByName('psw')[0].value;	


	// parsing the json above and adding data to it
	var retrievedUser = sessionStorage["usernames"];
	var retrievedPass = sessionStorage["passwords"];
	var retrievedId = sessionStorage["user_id"];

	var usernames = JSON.parse(retrievedUser);
	var passwords = JSON.parse(retrievedPass);
	var user_id = JSON.parse(retrievedId);

	user_id[n] = n+1;
	usernames[n] = uname;
	passwords[n] = pass;
	n = n +1;

	sessionStorage["usernames"]= JSON.stringify(usernames);
	sessionStorage["passwords"]= JSON.stringify(passwords);
	sessionStorage["user_id"]= JSON.stringify(user_id);

	alert("Registration Successful! Click to login.");
	window.open("welcome.html", '_top');

}



function CheckPassword(inputtxt) 
{ 
	var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
	
	if(inputtxt.match(paswd)) 
	{ 
		return true;
	}
	else
	{ 
		return false;
	}
} 


function userAdd(){

	var uname = document.getElementsByName("uname")[0].value;
	var pass = document.getElementsByName('psw')[0].value;	

	if (uname == '' || pass == '') {
		// redirect to user page
		alert("Please fill in the required fields!");
		return;
	}

	// checking password validation
	var passValidity = CheckPassword(pass);

	if (passValidity == false){
		alert("The password \n > must be 8-20 characters long \n > must contain atleast one numeric digit \n > must contain atleast one special character")
		return;
	}


	// parsing the json above and adding data to it
	var retrievedUser = sessionStorage["usernames"];
	var retrievedPass = sessionStorage["passwords"];
	var retrievedId = sessionStorage["user_id"];

	var usernames = JSON.parse(retrievedUser);
	var passwords = JSON.parse(retrievedPass);
	var user_id = JSON.parse(retrievedId);

	user_id[n] = n+1;
	usernames[n] = uname;
	passwords[n] = pass;
	n = n +1;

	sessionStorage["usernames"]= JSON.stringify(usernames);
	sessionStorage["passwords"]= JSON.stringify(passwords);
	sessionStorage["user_id"]= JSON.stringify(user_id);

	alert("User Added!");

}




function hide(){
	var addU = document.getElementById('addU');
	var addP = document.getElementById('addP');
	var getP = document.getElementById('getP');
	var genRep = document.getElementById('genRep');
	var showUser = document.getElementById('showUser');

	addU.style.display = 'none';
    addP.style.display = 'none';
    getP.style.display = 'none';
    genRep.style.display = 'none';
    //showUser.style.display = 'none';



}

function addUser(){
	 
    addU.style.display = 'block';
    addP.style.display = 'none';
    getP.style.display = 'none';
    genRep.style.display = 'none';
    //showUser.style.display = 'none';

    //document.getElementById("demo").innerHTML = "helo";

}


function addProject(){
	
    //if( displaySettingProject == 'none'){
    addU.style.display = 'none';
    addP.style.display = 'block';
    getP.style.display = 'none';
    genRep.style.display = 'none';
    //showUser.style.display = 'none';
}



function getProject(){
	
    //if( displaySettingProject == 'none'){
    addU.style.display = 'none';
    addP.style.display = 'none';
    getP.style.display = 'block';
    genRep.style.display = 'none';
    //showUser.style.display = 'none';
}



function generateReport(){
	//if( displaySettingProject == 'none'){
    addU.style.display = 'none';
    addP.style.display = 'none';
    getP.style.display = 'none';
    genRep.style.display = 'block';
    //showUser.style.display = 'none';
}

function showUser(){
	addU.style.display = 'none';
    addP.style.display = 'none';
    getP.style.display = 'none';
    genRep.style.display = 'none';
   // showUser.style.display = 'block';
}

