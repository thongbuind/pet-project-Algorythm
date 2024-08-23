// Backtracking
document.getElementById("backtracking-theory").onclick = function(e) {
    e.preventDefault();
    var id = 2;
    changeColorOfOption("backtracking-theory");
    getAlorythm(function(algorythms) {
        var element = algorythms[id-1];
        renderAlgorythm(element);
    });
}

document.getElementById("backtracking-sample-code").onclick = function(e) {
    e.preventDefault();
    changeColorOfOption("backtracking-sample-code");
}

document.getElementById("backtracking-example").onclick = function(e) {
    e.preventDefault();
    changeColorOfOption("backtracking-example");
}

document.getElementById("backtracking-note").onclick = function(e) {
    e.preventDefault();
    changeColorOfOption("backtracking-note");
}

// Functions

function changeColorOfOption(id) {
    document.getElementById("option-theory").style.backgroundColor = "";
    document.getElementById("option-sample-code").style.backgroundColor = "";
    document.getElementById("option-example").style.backgroundColor = "";
    document.getElementById("option-note").style.backgroundColor = "";

    document.getElementById(id).style.backgroundColor = "white";
}

function renderAlgorythm(element) {
    var text = `${element["name"]}`;
    document.getElementById("title-name").textContent = text;

    var html = `
        <h3>${element["theory-title-1"]}</h3>
        <p>${element["theory-p-1"]}</p>
        <p>${element["theory-p-2"]}</p>
        <h3>${element["theory-title-2"]}</h3>
        <p>${element["theory-p-3"]}</p>
        <h3>${element["theory-title-3"]}</h3>
        <p>${element["theory-p-4"]}</p>
    `;
    document.querySelector('.theory').innerHTML = html;
}