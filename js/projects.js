// var list = document.getElementById('demo');
// var projectCount = [];

// localStorage.setItem("projects", JSON.stringify(projectCount));
// var retrievedProjects = localStorage.getItem("projects");
// projectCount = JSON.parse(retrievedProjects);


// function changeText2() {
//     var projectName = document.getElementById('projectName').value;
//     document.getElementById('boldStuff2').innerHTML = projectName;
//     var entry = document.createElement('li');
//     entry.appendChild(document.createTextNode(projectName));
//     list.appendChild(entry);

//  //    var retrievedProjects = localStorage.getItem("projects");
// 	// projectCount = JSON.parse(retrievedProjects);
// 	// projectCount[projectCount.length] = projectName;
// }


var list = document.getElementById('demo');

function changeText2() {
    var firstname = document.getElementById('firstname').value;
    document.getElementById('boldStuff2').innerHTML = firstname;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(firstname));
    list.appendChild(entry);
}