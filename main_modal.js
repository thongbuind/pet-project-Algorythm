// Start
var id = 2;
changeColorOfOption("backtracking-theory");
getAlorythm(function(algorythms) {
    var element = algorythms[id-1];
    renderAlgorythm(element);
});

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

// Other
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
    document.getElementById("backtracking-theory").style.backgroundColor = "";
    document.getElementById("backtracking-sample-code").style.backgroundColor = "";
    document.getElementById("backtracking-example").style.backgroundColor = "";
    document.getElementById("backtracking-note").style.backgroundColor = "";

    document.getElementById(id).style.backgroundColor = "white";
}

function getAlorythm(cb) {
    var algorythmApi = "https://66c8901d8a477f50dc2e92e8.mockapi.io/algorythm";
    fetch(algorythmApi)
        .then(function(response) {
            return response.json();
        })
        .then(cb)
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