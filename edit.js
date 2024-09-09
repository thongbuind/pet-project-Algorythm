document.getElementById("nav-edit").onclick = function(e) {
    e.preventDefault();
    document.getElementsByClassName("content")[1].style.display = "flex";
    document.getElementsByClassName("content")[1].style.position = "fixed";
    document.getElementsByClassName("close-btn")[1].onclick = function(e) {
        e.preventDefault();
        document.getElementsByClassName("content")[1].style.display = "none";
        document.getElementsByClassName("content")[1].style.position = "";
    }
    SetOnclickEdit("edit-de-quy", 0);
    SetOnclickEdit("edit-quay-lui", 1);
    SetOnclickEdit("edit-nhanh-can", 2);
    SetOnclickEdit("edit-tham-lam", 3);
    SetOnclickEdit("edit-chia-de-tri", 4);
    SetOnclickEdit("edit-quy-hoach-dong", 5);
}

// Functions
function SetOnclickEdit(name, id) { 
    document.getElementById(name).onclick = function(e) {
        e.preventDefault();
        changeListColor(name);
        var element;
        getPost(function(algorythms) {
            element = algorythms[id];
            renderPost(element);
        });

    }
}

function getPost(cb) {
    var link = "https://66c8901d8a477f50dc2e92e8.mockapi.io/algorythm";
    fetch(link)
        .then(function(response) {
            return response.json();
        })
        .then(cb)
}

function renderPost(element) {
    var html = `
        <form action="" id="edit-form" method="POST">
            <div class="edit-header">Lý thuyết</div>
    `;
    for (let i=0; i<element["theory"].length; i++) {
        html += `
            <textarea id="theory-title-${i+1}" name="theory-title-${i+1}" wrap="soft">${element["theory"][i]["title"]}</textarea>
        `;
        for (let j=0; j<element["theory"][i]["content"].length; j++) {
            html += `
                <textarea id="theory-p-${j+1}" name="theory-p-${j+1}" wrap="soft">${element["theory"][i]["content"][j]}</textarea>
            `;
        }
    }
    html += `
        <div class="edit-header">Ví dụ</div>
    `;
    for (let i=0; i<element["examples"].length; i++) {
        html += `
            <textarea id="example-${i+1}-name" name="example-${i+1}-name" class="ex-name" wrap="soft">${element["examples"][i]["name"]}</textarea>
        `;
        for (let j=0; j<element["examples"][i]["description"].length; j++) {
            html += `
                <textarea id="theory-p-${j+1}" name="theory-p-${j+1}" wrap="soft">${element["examples"][i]["description"][j]}</textarea>
            `;
        }
    }
    html += `
            <div id="edit-back">Back</div>
            <button type="" id="edit-push">Push</buttonnnnn>
        </form>
    `;
    document.querySelector(".edit-screen").innerHTML = html;
}

function changeListColor(name) {
    document.getElementById("edit-de-quy").style.backgroundColor = "white";
    document.getElementById("edit-quay-lui").style.backgroundColor = "white";
    document.getElementById("edit-nhanh-can").style.backgroundColor = "white";
    document.getElementById("edit-tham-lam").style.backgroundColor = "white";
    document.getElementById("edit-chia-de-tri").style.backgroundColor = "white";
    document.getElementById("edit-quy-hoach-dong").style.backgroundColor = "white";

    document.getElementById(name).style.backgroundColor = "rgb(51, 179, 179)";
}
