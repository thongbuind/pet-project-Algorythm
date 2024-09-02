document.getElementById("nav-edit").onclick = function(e) {
    e.preventDefault();
    document.getElementsByClassName("content")[1].style.display = "flex";
    document.getElementsByClassName("content")[1].style.position = "fixed";
    document.getElementsByClassName("close-btn")[1].onclick = function(e) {
        e.preventDefault();
        document.getElementsByClassName("content")[1].style.display = "none";
        document.getElementsByClassName("content")[1].style.position = "";
    }
    SetOnclickEdit("edit-de-quy", 1);
    SetOnclickEdit("edit-quay-lui", 2);
    SetOnclickEdit("edit-tham-lam", 3);
    SetOnclickEdit("edit-nhanh-can", 4);
    SetOnclickEdit("edit-chia-de-tri", 5);
    SetOnclickEdit("edit-quy-hoach-dong", 6);
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
        <form action="https://66c8901d8a477f50dc2e92e8.mockapi.io/algorythm" id="edit-form" method="POST">
            <div class="edit-header">Lý thuyết</div>
            <textarea id="theory-title-1" name="theory-title-1" wrap="soft">${element["theory-title-1"]}</textarea>
            <textarea id="theory-p-1" name="theory-p-1" wrap="soft">${element["theory-p-1"]}</textarea>
            <textarea id="theory-p-2" name="theory-p-2" wrap="soft">${element["theory-p-2"]}</textarea>
            <textarea id="theory-title-2" name="theory-title-2" wrap="soft">${element["theory-title-2"]}</textarea>
            <textarea id="theory-p-3" name="theory-p-3" wrap="soft">${element["theory-p-3"]}</textarea>
            <textarea id="theory-p-4" name="theory-p-4" wrap="soft">${element["theory-p-4"]}</textarea>
            <textarea id="theory-title-3" name="theory-title-3" wrap="soft">${element["theory-title-3"]}</textarea>
            <textarea id="theory-p-5" name="theory-p-5" wrap="soft">${element["theory-p-4"]}</textarea>
            <textarea id="theory-p-6" name="theory-p-6" wrap="soft">${element["theory-p-5"]}</textarea>
            <textarea id="theory-title-4" name="theory-title-4" wrap="soft">${element["theory-title-4"]}</textarea>
            <textarea id="theory-p-7" name="theory-p-7" wrap="soft">${element["theory-p-7"]}</textarea>
            <textarea id="theory-p-8" name="theory-p-8" wrap="soft">${element["theory-p-8"]}</textarea>

            <div class="edit-header">Ví dụ</div>
            <textarea id="example-1-name" name="example-1-name" class="ex-name" wrap="soft">${element["example-1-name"]}</textarea>
            <textarea id="example-1-depcription-1" name="example-1-depcription-1" class="ex-depcription" wrap="soft">${element["example-1-depcription-1"]}</textarea>
            <textarea id="example-1-depcription-2" name="example-1-depcription-2" class="ex-depcription" wrap="soft">${element["example-1-depcription-2"]}</textarea>
            <textarea id="example-1-depcription-3" name="example-1-depcription-3" class="ex-depcription" wrap="soft">${element["example-1-depcription-3"]}</textarea>
            <textarea id="example-1-depcription-4" name="example-1-depcription-4" class="ex-depcription" wrap="soft">${element["example-1-depcription-4"]}</textarea>
            <textarea id="example-1-depcription-5" name="example-1-depcription-5" class="ex-depcription" wrap="soft">${element["example-1-depcription-5"]}</textarea>
            <textarea id="example-2-name" name="example-2-name" class="ex-name" wrap="soft">${element["example-2-name"]}</textarea>
            <textarea id="example-2-depcription-1" name="example-2-depcription-1" class="ex-depcription" wrap="soft">${element["example-2-depcription-1"]}</textarea>
            <textarea id="example-2-depcription-2" name="example-2-depcription-2" class="ex-depcription" wrap="soft">${element["example-2-depcription-2"]}</textarea>
            <textarea id="example-2-depcription-3" name="example-2-depcription-3" class="ex-depcription" wrap="soft">${element["example-2-depcription-3"]}</textarea>
            <textarea id="example-2-depcription-4" name="example-2-depcription-4" class="ex-depcription" wrap="soft">${element["example-2-depcription-4"]}</textarea>
            <textarea id="example-2-depcription-5" name="example-2-depcription-5" class="ex-depcription" wrap="soft">${element["example-2-depcription-5"]}</textarea>
            <textarea id="example-3-name" name="example-3-name" class="ex-name" wrap="soft">${element["example-3-name"]}</textarea>
            <textarea id="example-3-depcription-1" name="example-3-depcription-1" class="ex-depcription" wrap="soft">${element["example-3-depcription-1"]}</textarea>
            <textarea id="example-3-depcription-2" name="example-3-depcription-2" class="ex-depcription" wrap="soft">${element["example-3-depcription-2"]}</textarea>
            <textarea id="example-3-depcription-3" name="example-3-depcription-3" class="ex-depcription" wrap="soft">${element["example-3-depcription-3"]}</textarea>
            <textarea id="example-3-depcription-4" name="example-3-depcription-4" class="ex-depcription" wrap="soft">${element["example-3-depcription-4"]}</textarea>
            <textarea id="example-3-depcription-5" name="example-3-depcription-5" class="ex-depcription" wrap="soft">${element["example-3-depcription-5"]}</textarea>

            <div id="edit-back">Back</div>
            <button type="submit" id="edit-push">Push</button>
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
