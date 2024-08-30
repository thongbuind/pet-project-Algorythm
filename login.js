// Đăng nhập

async function checkName(inputName) {
    var users = "https://66c8901d8a477f50dc2e92e8.mockapi.io/user";
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
    var users = "https://66c8901d8a477f50dc2e92e8.mockapi.io/user";
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

