// đã xong
import { NQueensFunction } from "./n_queens.js";
import { SudokuFunction } from "./sudoku.js";
import { NguoiDuLichFunction } from "./tsp.js";
// chưa xong
import { HoanViFunction } from "./hoan_vi.js";
import { ThapHaNoiFunction } from "./thap_ha_noi.js";
import { FibonacciFunction } from "./fibonacci.js";
import { GiaiThuaFunction } from "./giai_thua.js";
import { XepLichFunction } from "./xep_lich.js";
import { QuickSortFunction } from "./quick_sort.js";
import { MergeSortFunction } from "./merge_sort.js";
import { BinarySearchFunction } from "./binary_search.js";
import { CayBaoTrumNhoNhatFunction } from "./mst.js";
import { ChuoiConChungDaiNhatFunction } from "./lcs.js";

var algorythmApi = "https://66c8901d8a477f50dc2e92e8.mockapi.io/algorythm";
var path = "home";

setOnclick("de-quy", 0);
setOnclick("quay-lui", 1);
setOnclick("nhanh-can", 2);
setOnclick("tham-lam", 3);
setOnclick("chia-de-tri", 4);
setOnclick("quy-hoach-dong", 5);

document.getElementsByClassName("close-btn")[0].onclick = function(e) {
    e.preventDefault();
    document.getElementsByClassName("content")[0].style.display = "none";
    document.getElementsByClassName("content")[0].style.position = "";
}

// Function

function setOnclick(name, id) {
    document.getElementById(name).onclick = function(e) {
        e.preventDefault();
        document.getElementsByClassName("content")[0].style.display = "flex";
        document.getElementsByClassName("content")[0].style.position = "fixed";
        changeColorOfOption("option-theory");
        var element;
        getAlorythm(function(algorythms) {
            element = algorythms[id];
            renderTheory(element);
        });
        path = `${name}/theory`;
    
        document.getElementById("option-theory").onclick = function(e) {
            e.preventDefault();
            path = `${name}/theory`;
            changeColorOfOption("option-theory");
            renderTheory(element);
        }
        document.getElementById("option-sample-code").onclick = function(e) {
            e.preventDefault();
            path = `${name}/sample-code`;
            changeColorOfOption("option-sample-code");
            renderSampleCode(element);
        }
        
        document.getElementById("option-example").onclick = function(e) {
            e.preventDefault();
            path = `${name}/example`;
            changeColorOfOption("option-example");
            renderExample(element);
        }
        
        document.getElementById("option-note").onclick = function(e) {
            e.preventDefault();
            path = `${name}/note`;
            changeColorOfOption("option-note");
            renderNote(element);
        }
    }
}

function getAlorythm(cb) {
    fetch(algorythmApi)
        .then(function(response) {
            return response.json();
        })
        .then(cb)
}

function renderTheory(element) {
    displayScreen("theory");
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
        <h3>${element["theory-title-4"]}</h3>
        <p>${element["theory-p-5"]}</p>
    `;
    document.querySelector('.theory').innerHTML = html;
}
function renderSampleCode(element) {
    displayScreen("sample-code");
    var html = `
        <h3>${element["example-1-name"]}</h3>
        <ul>
            <li><p>${element["example-1-depcription-1"]}</p></li>
            <li><p>${element["example-1-depcription-2"]}</p></li>
            <li><p>${element["example-1-depcription-3"]}</p></li>
            <li><p>${element["example-1-depcription-4"]}</p></li>
            <li><p>${element["example-1-depcription-5"]}</p></li>
            <li><p><strong>Xem chi tiết source code</strong> <a href="${element["example-1-link"]}" target="_blank">tại đây</a> ฅ՞•ﻌ•՞ฅ</p></li>
        </ul>
        <h3>${element["example-2-name"]}</h3>
        <ul>
            <li><p>${element["example-2-depcription-1"]}</p></li>
            <li><p>${element["example-2-depcription-2"]}</p></li>
            <li><p>${element["example-2-depcription-3"]}</p></li>
            <li><p>${element["example-2-depcription-4"]}</p></li>
            <li><p>${element["example-2-depcription-5"]}</p></li>
            <li><p><strong>Xem chi tiết source code</strong> <a href="${element["example-2-link"]}" target="_blank">tại đây</a> ฅ՞•ﻌ•՞ฅ</p></li>
        </ul>
        <h3>${element["example-3-name"]}</h3>
        <ul>
            <li><p>${element["example-3-depcription-1"]}</p></li>
            <li><p>${element["example-3-depcription-2"]}</p></li>
            <li><p>${element["example-3-depcription-3"]}</p></li>
            <li><p>${element["example-3-depcription-4"]}</p></li>
            <li><p>${element["example-3-depcription-5"]}</p></li>
            <li><p><strong>Xem chi tiết source code</strong> <a href="${element["example-3-link"]}" target="_blank">tại đây</a> ฅ՞•ﻌ•՞ฅ</p></li>
        </ul>
    `;
    document.querySelector('.sample-code').innerHTML = html;
}
function renderExample(element) {
    displayScreen("example");
    var html = `
        <div class="example-illustration"></div>  
        <ul class="example-list">
            <li id="${path}/1">${element["example-1-name"]}</li>
            <li id="${path}/2">${element["example-2-name"]}</li>
            <li id="${path}/3">${element["example-3-name"]}</li>
        </ul>
    `;
    document.querySelector('.example').innerHTML = html;
    ganSuKienOnclickChoExample();
}
function renderNote(element) {
    displayScreen("note");
    var html = `
        <h1>note</h1>
    `;
    document.querySelector('.note').innerHTML = html;
}

function changeColorOfOption(id) {
    document.getElementById("option-theory").style.backgroundColor = "";
    document.getElementById("option-sample-code").style.backgroundColor = "";
    document.getElementById("option-example").style.backgroundColor = "";
    document.getElementById("option-note").style.backgroundColor = "";

    document.getElementById(id).style.backgroundColor = "white";
}

function displayScreen(className) {
    document.getElementsByClassName("theory")[0].style.display = "none";
    document.getElementsByClassName("sample-code")[0].style.display = "none";
    document.getElementsByClassName("example")[0].style.display = "none";
    document.getElementsByClassName("note")[0].style.display = "none";

    document.getElementsByClassName(className)[0].style.display = "block";
}

function ganSuKienOnclickChoExample() {
    document.getElementById(`${path}/1`).onclick = function(e) {
        var tmp_path = `${path}/1`;
        runCode(tmp_path);
    }
    document.getElementById(`${path}/2`).onclick = function(e) {
        var tmp_path = `${path}/2`;
        runCode(tmp_path);
    }
    document.getElementById(`${path}/3`).onclick = function(e) {
        var tmp_path = `${path}/3`;
        runCode(tmp_path);
    }
}

function runCode(tmp_path) {
    document.getElementById(`${path}/1`).style.backgroundColor = "";
    document.getElementById(`${path}/2`).style.backgroundColor = "";
    document.getElementById(`${path}/3`).style.backgroundColor = "";
    if (tmp_path[tmp_path.length - 1] == "1") {
        document.getElementById(`${path}/1`).style.backgroundColor = "rgb(51, 179, 179";
    } else if (tmp_path[tmp_path.length - 1] == "2") {
        document.getElementById(`${path}/2`).style.backgroundColor = "rgb(51, 179, 179";
    } else {
        document.getElementById(`${path}/3`).style.backgroundColor = "rgb(51, 179, 179";
    }
    if (tmp_path == "quay-lui/example/1") {
        NQueensFunction();
    } else if (tmp_path == "quay-lui/example/2") {
        HoanViFunction();
    } else if (tmp_path == "quay-lui/example/3") {
        SudokuFunction();
    } else if (tmp_path == "de-quy/example/1") {
        GiaiThuaFunction();
    } else if (tmp_path == "de-quy/example/2") {
        FibonacciFunction();
    } else if (tmp_path == "de-quy/example/3") {
        ThapHaNoiFunction();
    } else if (tmp_path == "nhanh-can/example/1") {
        NguoiDuLichFunction();
    } else if (tmp_path == "nhanh-can/example/2") {
        XepLichFunction();
    } else if (tmp_path == "nhanh-can/example/3") {
        console.log("balo");
    } else if (tmp_path == "tham-lam/example/1") {
        console.log("chon hoat dong");
    } else if (tmp_path == "tham-lam/example/2") {
        console.log("chon tien xu");
    } else if (tmp_path == "tham-lam/example/3") {
        CayBaoTrumNhoNhatFunction();
    } else if (tmp_path == "chia-de-tri/example/1") {
        MergeSortFunction();
    } else if (tmp_path == "chia-de-tri/example/2") {
        QuickSortFunction();
    } else if (tmp_path == "chia-de-tri/example/3") {
        BinarySearchFunction();
    } else if (tmp_path == "quy-hoach-dong/example/1") {
        console.log("duong di ngan nhat");
    } else if (tmp_path == "quy-hoach-dong/example/2") {
        console.log("balo");
    } else if (tmp_path == "quy-hoach-dong/example/3") {
        ChuoiConChungDaiNhatFunction();
    }
}

