var algorythmApi = "https://66c8901d8a477f50dc2e92e8.mockapi.io/algorythm";

document.getElementById("de-quy").onclick = function(e) {
    e.preventDefault();
    document.getElementsByClassName("content")[0].style.display = "flex";
    document.getElementsByClassName("content")[0].style.position = "fixed";
    changeColorOfOption("option-theory");
    getAlorythm(function(algorythms) {
        var element = algorythms[0];
        renderAlgorythm(element);
    });


    document.getElementById("option-theory").onclick = function(e) {
        e.preventDefault();
        changeColorOfOption("option-theory");
        getAlorythm(function(algorythms) {
            var element = algorythms[0];
            renderAlgorythm(element);
        });
    }
}
document.getElementById("quay-lui").onclick = function(e) {
    e.preventDefault();
    document.getElementsByClassName("content")[0].style.display = "flex";
    document.getElementsByClassName("content")[0].style.position = "fixed";
    changeColorOfOption("option-theory");
    getAlorythm(function(algorythms) {
        var element = algorythms[1];
        renderAlgorythm(element);
    });

    document.getElementById("option-theory").onclick = function(e) {
        e.preventDefault();
        changeColorOfOption("option-theory");
        getAlorythm(function(algorythms) {
            var element = algorythms[1];
            renderAlgorythm(element);
        });
    }
}

document.getElementById("nhanh-can").onclick = function(e) {
    e.preventDefault();
    document.getElementsByClassName("content")[0].style.display = "flex";
    document.getElementsByClassName("content")[0].style.position = "fixed";
    changeColorOfOption("option-theory");
    getAlorythm(function(algorythms) {
        var element = algorythms[2];
        renderAlgorythm(element);
    });

    document.getElementById("option-theory").onclick = function(e) {
        e.preventDefault();
        changeColorOfOption("option-theory");
        getAlorythm(function(algorythms) {
            var element = algorythms[2];
            renderAlgorythm(element);
        });
    }
}

document.getElementById("tham-lam").onclick = function(e) {
    e.preventDefault();
    document.getElementsByClassName("content")[0].style.display = "flex";
    document.getElementsByClassName("content")[0].style.position = "fixed";
    changeColorOfOption("option-theory");
    getAlorythm(function(algorythms) {
        var element = algorythms[3];
        renderAlgorythm(element);
    });

    document.getElementById("option-theory").onclick = function(e) {
        e.preventDefault();
        changeColorOfOption("option-theory");
        getAlorythm(function(algorythms) {
            var element = algorythms[3];
            renderAlgorythm(element);
        });
    }
}

document.getElementById("chia-de-tri").onclick = function(e) {
    e.preventDefault();
    document.getElementsByClassName("content")[0].style.display = "flex";
    document.getElementsByClassName("content")[0].style.position = "fixed";
    changeColorOfOption("option-theory");
    getAlorythm(function(algorythms) {
        var element = algorythms[4];
        renderAlgorythm(element);
    });

    document.getElementById("option-theory").onclick = function(e) {
        e.preventDefault();
        changeColorOfOption("option-theory");
        getAlorythm(function(algorythms) {
            var element = algorythms[4];
            renderAlgorythm(element);
        });
    }
}

document.getElementById("quy-hoach-dong").onclick = function(e) {
    e.preventDefault();
    document.getElementsByClassName("content")[0].style.display = "flex";
    document.getElementsByClassName("content")[0].style.position = "fixed";
    changeColorOfOption("option-theory");
    getAlorythm(function(algorythms) {
        var element = algorythms[5];
        renderAlgorythm(element);
    });

    document.getElementById("option-theory").onclick = function(e) {
        e.preventDefault();
        changeColorOfOption("option-theory");
        getAlorythm(function(algorythms) {
            var element = algorythms[5];
            renderAlgorythm(element);
        });
    }
}




// Function

function getAlorythm(cb) {
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

function changeColorOfOption(id) {
    document.getElementById("option-theory").style.backgroundColor = "";
    document.getElementById("option-sample-code").style.backgroundColor = "";
    document.getElementById("option-example").style.backgroundColor = "";
    document.getElementById("option-note").style.backgroundColor = "";

    document.getElementById(id).style.backgroundColor = "white";
}
