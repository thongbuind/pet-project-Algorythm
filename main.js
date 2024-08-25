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
            <li><p><strong>Xem chi tiết source code</strong> <a href="${element["example-1-link"]}" target="_blank">tại đây</a></p></li>
        </ul>
        <h3>${element["example-2-name"]}</h3>
        <ul>
            <li><p>${element["example-2-depcription-1"]}</p></li>
            <li><p>${element["example-2-depcription-2"]}</p></li>
            <li><p>${element["example-2-depcription-3"]}</p></li>
            <li><p>${element["example-2-depcription-4"]}</p></li>
            <li><p>${element["example-2-depcription-5"]}</p></li>
            <li><p><p><strong>Xem chi tiết source code</strong> <a href="${element["example-2-link"]}" target="_blank">tại đây</a></p></li>
        </ul>
        <h3>${element["example-3-name"]}</h3>
        <ul>
            <li><p>${element["example-3-depcription-1"]}</p></li>
            <li><p>${element["example-3-depcription-2"]}</p></li>
            <li><p>${element["example-3-depcription-3"]}</p></li>
            <li><p>${element["example-3-depcription-4"]}</p></li>
            <li><p>${element["example-3-depcription-5"]}</p></li>
            <li><p><p><strong>Xem chi tiết source code</strong> <a href="${element["example-3-link"]}" target="_blank">tại đây</a></p></li>
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
        console.log("giai thua");
    } else if (tmp_path == "de-quy/example/2") {
        console.log("fibonacci");
    } else if (tmp_path == "de-quy/example/3") {
        console.log("thap ha noi");
    } else if (tmp_path == "nhanh-can/example/1") {
        console.log("nguoi du lich");
    } else if (tmp_path == "nhanh-can/example/2") {
        console.log("xep lich");
    } else if (tmp_path == "nhanh-can/example/3") {
        console.log("balo");
    } else if (tmp_path == "tham-lam/example/1") {
        console.log("chon hoat dong");
    } else if (tmp_path == "tham-lam/example/2") {
        console.log("chon tien xu");
    } else if (tmp_path == "tham-lam/example/3") {
        console.log("cay bao trum nho nhat");
    } else if (tmp_path == "chia-de-tri/example/1") {
        console.log("merge sort");
    } else if (tmp_path == "chia-de-tri/example/2") {
        console.log("quick sort");
    } else if (tmp_path == "chia-de-tri/example/3") {
        console.log("binary search");
    } else if (tmp_path == "quy-hoach-dong/example/1") {
        console.log("duong di ngan nhat");
    } else if (tmp_path == "quy-hoach-dong/example/2") {
        console.log("balo");
    } else if (tmp_path == "quy-hoach-dong/example/3") {
        console.log("chuoi con chung dai nhat");
    }
}

function NQueensFunction() {
    var size;
    let i;
    let x = Array(30).fill(0);
    let cot = Array(30).fill(0);
    let cheo_1 = Array(30).fill(0);
    let cheo_2 = Array(30).fill(0);
    let n_queens_result = [];
    let cnt=0;
    var n_queens_result_index = 1;

    renderNQueens(); // render ra HTML 

    // Lệnh thực thi chính
    document.getElementById("n_queens_button").onclick = function(e) {
        e.preventDefault();   
        n_queens_result_index = 1;
        document.getElementById("n_queens_result_roll").textContent = `${n_queens_result_index}`;
        cnt=0;
        n_queens_result = [];
        document.getElementById("n_queens_output").style.display = "block";
        if (size == 1) {
            if(document.getElementById("chess_board")) {
                document.getElementById("chess_board").remove();
            }
            document.getElementById("n_queens_total_result").textContent = "Số lượng kết quả: 1";
        } else if (size == 2 || size == 3) {
            if(document.getElementById("chess_board")) {
                document.getElementById("chess_board").remove();
            }
            document.getElementById("n_queens_total_result").textContent = "Số lượng kết quả: 0";
        } else if (size > 14) {
            if(document.getElementById("chess_board")) {
                document.getElementById("chess_board").remove();
            }
            document.getElementById("n_queens_total_result").textContent = "Kích thước bàn cờ quá lớn, vượt quá khả năng phần cứng thiết bị, vui lòng thử lại với kích thước nhỏ hơn 15";
        } else {
            if(document.getElementById("chess_board")) {
                document.getElementById("chess_board").remove();
            }
            var cell_size = 300/size;
            var chess_board = document.createElement("div");
            chess_board.id = "chess_board";
            document.getElementById("n_queens_output").appendChild(chess_board);

            var color_y = 0;
            for (var k=1; k<=size; k++) {
                var color_x = color_y;
                for (var j=1; j<=size; j++) {
                    var cell = document.createElement("div");
                    if (color_x%2 == 0) {
                        cell.className = "board_cell_black";
                        cell.id = `${k}${j}`;
                        cell.style.width = `${cell_size}px`;
                        cell.style.height = `${cell_size}px`;
                    } else {
                        cell.className = "board_cell_white";
                        cell.id = `${k}${j}`;
                        cell.style.width = `${cell_size}px`;
                        cell.style.height = `${cell_size}px`;
                    }
                    document.getElementById("chess_board").appendChild(cell);
                    color_x++;
                }
                color_y++;
            }
            n_queens(1);
            document.getElementById("n_queens_total_result").textContent = `Số lượng kết quả: ${cnt}`;
            for (var j=0; j<size; j++) {
                var queen_location = `${j+1}${n_queens_result[n_queens_result_index][j]}`;
                document.getElementById(queen_location).style.backgroundColor = "rgb(102, 204, 204)";
            }
        }
    }

    function renderNQueens() {
        var html = `
            <div id="n_queens_input" class="algorythm_input">
                <p>Nhập kích thước bàn cờ</p>
                <input type="text" id="n_queens_text_input" class="text">
                <button id="n_queens_button">Start</button>
            </div>
            <div id="n_queens_output" class="algorythm_output">
                <div id="n_queens_total_result">
                    Số lượng kết quả:
                </div>
                <div class="roll">
                    <button id="n_queens_result_before" class="before"><=</button>
                    <div id="n_queens_result_roll">1</div>
                    <button id="n_queens_result_next" class="next">=></button>
                </div>
            </div>
        `;
        document.querySelector('.example-illustration').innerHTML = html;
    }

    // Nhận size bàn cờ qua text input
    document.getElementById("n_queens_text_input").onchange = function(e) {
        size = Number(e.target.value);
    }

    // Nhấn nút kết quả tiếp theo
    document.getElementById("n_queens_result_next").onclick = function(e) {
        e.preventDefault();
        returnOriginalColor();
        if (n_queens_result_index < cnt) {
            n_queens_result_index++;
        }
        for (var j=0; j<size; j++) {
            var queen_location = `${j+1}${n_queens_result[n_queens_result_index][j]}`;
            document.getElementById(queen_location).style.backgroundColor = "rgb(102, 204, 204)";
        }
        document.getElementById("n_queens_result_roll").textContent = `${n_queens_result_index}`;
    }

    // Nhấn nút kết quả trước
    document.getElementById("n_queens_result_before").onclick = function(e) {
        e.preventDefault();
        returnOriginalColor();
        if (n_queens_result_index>1) {
            n_queens_result_index--;
        }
        for (var j=0; j<size; j++) {
            var queen_location = `${j+1}${n_queens_result[n_queens_result_index][j]}`;
            document.getElementById(queen_location).style.backgroundColor = "rgb(102, 204, 204)";
        }
        document.getElementById("n_queens_result_roll").textContent = `${n_queens_result_index}`;
    }

    function luu_ket_qua_n_queens() {
        n_queens_result[cnt] = [];  // Tạo hàng mới trong mảng 2 chiều
        for (var j = 1; j <= size; j++) {
            n_queens_result[cnt][j - 1] = x[j]; // Lưu giá trị của x từ 1 đến size
        }
    }
    function n_queens(i) {
        for (var j=1; j<=size; j++) {
            if (cot[j] == 0 && cheo_1[i - j + size] == 0 && cheo_2[i + j - 1] == 0) {
                x[i] = j;
                cot[j] = 1;
                cheo_1[i - j + size] = 1;
                cheo_2[i + j - 1] = 1;
                if (i == size) {
                    cnt++;
                    luu_ket_qua_n_queens();
                } else {
                    n_queens(i+1);
                }
                // backtrack
                cot[j] = 0;
                cheo_1[i - j + size] = 0;
                cheo_2[i + j - 1] = 0;
            }
        }
    }

    // Hàm trả lại màu gốc sau mỗi lần nhấn nút lấy kết quả khác 
    function returnOriginalColor() {
        for (var j=0; j<size; j++) {
            var queen_location = `${j+1}${n_queens_result[n_queens_result_index][j]}`;
            if (j % 2 != 0) {
                if (n_queens_result[n_queens_result_index][j] % 2 == 0) {
                    document.getElementById(queen_location).style.backgroundColor = "black";
                } else {
                    document.getElementById(queen_location).style.backgroundColor = "white";
                }
            } else {
                if (n_queens_result[n_queens_result_index][j] % 2 == 0) {
                    document.getElementById(queen_location).style.backgroundColor = "white";
                } else {
                    document.getElementById(queen_location).style.backgroundColor = "black";
                }
            }
        }
    }
}

function HoanViFunction() {
    renderHoanVi(); // render ra HTML

    // Lệnh thực thi chính

    // Function
    function renderHoanVi() {
        var html = `
            <h1>Tính năng hoán vị đang trong giai đoạn phát triển</h1>
        `;
        document.querySelector('.example-illustration').innerHTML = html;
    }
}

function SudokuFunction() {
    renderSudoku(); // render ra HTML

    // Lệnh thực thi chính

    // Function
    function renderSudoku() {
        var html = `
            <h1>Tính năng sudoku đang trong giai đoạn phát triển</h1>
        `;
        document.querySelector('.example-illustration').innerHTML = html;
    }
}


