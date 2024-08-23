// const res = require("express/lib/response");

async function checkName(inputName) {
    var users = "http://localhost:3000/user";
    let response = await fetch(users);
    let users_list = await response.json();
    
    var n = users_list.length;
    for (var i = 0; i < n; i++) {
        if (users_list[i].name === inputName) {
            return 1;
        }
    }
    return 0;
}

async function checkPass(inputPass) {
    var users = "http://localhost:3000/user";
    let response = await fetch(users);
    let users_list = await response.json();
    
    var n = users_list.length;
    for (var i = 0; i < n; i++) {
        if (users_list[i].password === inputPass) {
            return 1;
        }
    }
    return 0;
}

async function login(inputName, inputPass) {
    let nameCheck = await checkName(inputName);
    let passCheck = await checkPass(inputPass);
    
    if (nameCheck === 1 && passCheck === 1) {
        return 1;
    } else {
        return 0;
    }
}

var inputName;
document.getElementById("modal-sign-in").onclick = async function(e) {
    e.preventDefault();
    inputName = document.getElementById("modal-input-name").value;
    var inputPass = document.getElementById("modal-input-pass").value;
    
    let result = await login(inputName, inputPass);
    
    if (result === 1) {
        document.getElementsByClassName("modal")[0].style.display = "none";
        document.getElementsByClassName("modal")[0].style.position = "";
        document.getElementById("user-name").textContent = inputName;
        var elements = document.getElementsByClassName("cell");
        Array.from(elements).forEach(function(element) {
        element.style.display = "inline-block";
    });
    } else {
        document.getElementById("modal-noti").style.display = "block";
    }
}

document.getElementById("guest").onclick = function(e) {
    e.preventDefault();
    document.getElementsByClassName("modal")[0].style.display = "none";
    document.getElementsByClassName("modal")[0].style.position = "";
    document.getElementById("user-name").textContent = "Khách";
    var elements = document.getElementsByClassName("cell");
    Array.from(elements).forEach(function(element) {
        element.style.display = "inline-block";
    });
}

var algorythmAPI = "http://localhost:3000/algorythm";
fetch(algorythmAPI)
    .then(function(response) {
        return response.json();
    })
    .then(function(algorythms) {
        for(var i=1; i<=algorythms.length+1; i++) {
            var cell = document.createElement("h3");
            cell.className = "cell";
            if (i<=algorythms.length) {
                cell.id = `cell-${i}`;
                cell.textContent = algorythms[i-1].name;
            } else {
                cell.id = `cell-last`;
                cell.textContent = "+";
                cell.style.fontSize = "56px";
            }
            cell.onclick = function(e) {
                e.preventDefault();
                document.getElementsByClassName("content")[0].style.display = "flex";
                document.getElementsByClassName("content")[0].style.position = "fixed";
            }
            document.getElementsByClassName("main")[0].appendChild(cell);
        }
    })


document.getElementsByClassName("ti-menu")[0].onclick = function(e) {
    e.preventDefault();
    var element = document.getElementsByClassName("sub-menu")[0];
    if (element.style.display == "" || element.style.display == "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function display_modal (class_name) {
    document.getElementsByClassName(class_name)[0].onclick = function(e) {
        e.preventDefault();
        document.getElementsByClassName(class_name)[0].style.display = "none";
        document.getElementsByClassName(class_name)[0].style.position = "";
    }
    document.getElementsByClassName(`${class_name}-container`)[0].onclick = function(e) {
        e.stopPropagation();
    }
}
display_modal ("content");
display_modal ("setting");


document.getElementById("nav-setting").onclick = function(e) {
    e.preventDefault();
    document.getElementsByClassName("setting")[0].style.display = "flex";
    document.getElementsByClassName("setting")[0].style.position = "fixed";
}

var elements = document.getElementsByClassName("theme-detail-color");
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function(e) {
        e.preventDefault();
        for (let i = 0; i < elements.length; i++) {
            document.getElementById(`theme-detail-color-${i+1}`).style.width = "15px";
            document.getElementById(`theme-detail-color-${i+1}`).style.height = "15px";
            document.getElementById(`theme-detail-color-${i+1}`).style.margin = "7.5px 3px";
            document.getElementById(`theme-detail-color-${i+1}`).style.border = "";
        }
        // document.getElementById(`theme-detail-color-${i+1}`).style.border = "2px solid white";
        document.getElementById(`theme-detail-color-${i+1}`).style.width = "17px";
        document.getElementById(`theme-detail-color-${i+1}`).style.height = "17px";
        document.getElementById(`theme-detail-color-${i+1}`).style.margin = "6.5px 2px";
        document.getElementById(`theme-detail-color-${i+1}`).style.border = "2px solid white";
    });
}

function display_setting_detail(id) {
    document.getElementById("theme-detail").style.display = "none";

    document.getElementById(id).style.display = "block";
}
document.getElementById("theme").onclick = function(e) {
    e.preventDefault();
    document.getElementById("theme").style.backgroundColor = "rgba(51, 179, 179, 0.4)";
    display_setting_detail("theme-detail");
}