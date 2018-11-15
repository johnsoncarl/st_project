var usernames = [];
var passwords = [];
var user_id = [];

usernames[0] = 'admin';
usernames[1] = 'user';
passwords[0] = 'admin123';
passwords[1] = 'user123';
user_id[0] = 'admin123';
user_id[1] = 'user123';

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

	user_id[n] = n;
	usernames[n] = uname;
	passwords[n] = pass;
	n = n +1;

	alert("Registration Successful! Click to login.");
	window.open("welcome.html", '_top');

}



function hide(){
	var addU = document.getElementById('addU');
	var addP = document.getElementById('addP');
	var getP = document.getElementById('getP');
	var genRep = document.getElementById('genRep');

	addU.style.display = 'none';
    addP.style.display = 'none';
    getP.style.display = 'none';
    genRep.style.display = 'none';

}

function addUser(){
	var addU = document.getElementById('addU');
	var addP = document.getElementById('addP');
	var getP = document.getElementById('getP');
	var genRep = document.getElementById('genRep');
    // get the current value of the clock's display property
   
     
    addU.style.display = 'block';
    addP.style.display = 'none';
    getP.style.display = 'none';
    genRep.style.display = 'none';
}


function addProject(){
	var addU = document.getElementById('addU');
	var addP = document.getElementById('addP');
    var getP = document.getElementById('getP');
	var genRep = document.getElementById('genRep');

    
    //if( displaySettingProject == 'none'){
    addU.style.display = 'none';
    addP.style.display = 'block';
    getP.style.display = 'none';
    genRep.style.display = 'none';
    
}



function getProject(){
	var addU = document.getElementById('addU');
	var addP = document.getElementById('addP');
	var getP = document.getElementById('getP');
	var genRep = document.getElementById('genRep');
   
    
    //if( displaySettingProject == 'none'){
    addU.style.display = 'none';
    addP.style.display = 'none';
    getP.style.display = 'block';
    genRep.style.display = 'none';
}



function generateReport(){
	var addU = document.getElementById('addU');
	var addP = document.getElementById('addP');
	var getP = document.getElementById('getP');
	var genRep = document.getElementById('genRep');
   
    
    //if( displaySettingProject == 'none'){
    addU.style.display = 'none';
    addP.style.display = 'none';
    getP.style.display = 'none';
    genRep.style.display = 'block';
}

