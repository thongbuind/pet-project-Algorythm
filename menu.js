document.getElementsByClassName("ti-menu")[0].onclick = function(e) {
    e.preventDefault();
    var element = document.getElementsByClassName("sub-menu")[0];
    if (element.style.display == "" || element.style.display == "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function display_modal(class_name) {
    document.getElementsByClassName(class_name)[0].onclick = function(e) {
        e.preventDefault();
        document.getElementsByClassName(class_name)[0].style.display = "none";
        document.getElementsByClassName(class_name)[0].style.position = "";
    }
    document.getElementsByClassName(`${class_name}-container`)[0].onclick = function(e) {
        e.stopPropagation();
    }
}
// display_modal("content");
display_modal("setting");


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

document.querySelector(".last-nav").onclick = function(e) {
    location.reload();
}
