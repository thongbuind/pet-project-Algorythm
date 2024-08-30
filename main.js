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
            <h2>
                <strong>Các minh hoạ đã có:</strong>
                <ul>
                    <li> * Bài toán N quân hậu (quay lui)</li>
                    <li> * Bài toán giải Sudoku (quay lui)</li>
                    <li> * Bài toán người du lịch (nhánh và cận)</li>
                </ul>
            </h2>
        `;
        document.querySelector('.example-illustration').innerHTML = html;
    }
}

function SudokuFunction() {
    renderSudoku(); // render ra HTML
    var sudokuArray = Array.from({ length: 9 }, () => Array(9).fill(0));

    // Sample data
    document.getElementById("sudoku-sample-data").onclick = function(e) {
        e.preventDefault();
        displaySampleData();
    }

    // Điền số
    fillData();

    // Clear
    document.getElementById("sudoku-clear").onclick = function(e) {
        e.preventDefault();
        clearTable();
        fillData();
    }

    // Lệnh thực thi chính
    document.getElementById("sudoku-solve").onclick = function(e) {
        e.preventDefault();
        saveInputSudokuArr();
        if (sudokuSolve(0, 0)) {
            document.getElementById("sudoku-noti").style.display = "none";
            displayResult();
        } else {
            document.getElementById("sudoku-noti").style.display = "inline-block";
        }
    }

    // Function
    function renderSudoku() {
        var html = `
            <p id="sudoku-noti">Không giải được!</p>
            <div id="sudoku-sample-data">Số liệu mẫu</div>
            <div id="sudoku-clear">Làm mới</div>
            <div id="sudoku-table">
                <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
            </div>
            <ul id="sudoku-num-list">
                <li id="sudoku-num-list-dedete">Xoá</li>
                <li id="sudoku-num-list-1">1</li>
                <li id="sudoku-num-list-2">2</li>
                <li id="sudoku-num-list-3">3</li>
                <li id="sudoku-num-list-4">4</li>
                <li id="sudoku-num-list-5">5</li>
                <li id="sudoku-num-list-6">6</li>
                <li id="sudoku-num-list-7">7</li>
                <li id="sudoku-num-list-8">8</li>
                <li id="sudoku-num-list-9">9</li>
            </ul>
            <div id="sudoku-solve">Giải</div>
        `;
        document.querySelector('.example-illustration').innerHTML = html;
    }

    function fillData() {
        let selectedP = null; // Biến để lưu trữ thẻ <p> đang được chọn
        document.querySelectorAll("#sudoku-table p").forEach(function(e) {
            e.addEventListener("click", function() {
                changeColor(e);
                selectedP = e; // Lưu thẻ <p> hiện tại vào biến
            });
        });
        document.querySelectorAll("#sudoku-num-list li").forEach(function(e) {
            e.addEventListener("click", function() {
                if (selectedP) { // Kiểm tra xem có thẻ <p> nào được chọn không
                    // selectedP.textContent = e.textContent.trim();
                    var num = e.textContent.trim();
                    if (num > 0 && num < 10) {
                        selectedP.textContent = num;
                    } else {
                        selectedP.textContent = "";
                    }
                }
            });
        });
    }

    function changeColor(e1) {
        document.querySelectorAll("#sudoku-table p").forEach(function(e2) {
            e2.style.backgroundColor = "white";
        })
        e1.style.backgroundColor = "rgb(102, 204, 204";
    }
    function saveInputSudokuArr() {
        var index = 0;
        for (var i=0; i<9; i++) {
            for (var j=0; j<9; j++) {
                var tmp = document.querySelectorAll("#sudoku-table p")[index].textContent.trim();
                if (tmp != "") {
                    sudokuArray[i][j] = Number(tmp);
                } else {
                    sudokuArray[i][j] = 0;
                }
                index++;
            }
        }
    }
    function check(i, j, num) {
        // check hàng ngang
        for (var x=0; x<9; x++) {
            if (sudokuArray[i][x] == num) {
                return false;
            }
        }
        // check hàng dọc
        for (var y=0; y<9; y++) {
            if (sudokuArray[y][j] == num) {
                return false;
            }
        }
        // check ô 3x3
        var start_i = i - i%3;
        var start_j = j - j%3;
        for (var y=0; y<3; y++) {
            for (var x=0; x<3; x++) {
                if (sudokuArray[y+start_i][x+start_j] == num) {
                    return false;
                }
            }
        }
        return true;
    }
    // Thuật toán backtrack
    function sudokuSolve(i, j) {
        // nếu đi đến ô cuối cùng rồi thì return
        if (i == 8 && j == 9) {
            return true;
        }
        // nếu đi đến cuối hàng rồi thì nhảy xuống ô dưới
        if (j == 9) {
            i++;
            j=0;
        }
        // nếu ô này có điền số rồi thì chuyển sang ô kế tiếp
        if (sudokuArray[i][j] != 0) {
            return sudokuSolve(i, j+1);
        }
        for (var num=1; num<=9; num++) {
            if(check(i, j, num)) {
                sudokuArray[i][j] = num;
                if (sudokuSolve(i, j+1)) {
                    return true;
                }
            }
            sudokuArray[i][j] = 0; // backtrack
        }
        return false;
    }
    function displayResult() {
        var index = 0;
        for (var i=0; i<9; i++) {
            for (var j=0; j<9; j++) {
                var tmp = sudokuArray[i][j];
                if(document.querySelectorAll("#sudoku-table p")[index].textContent.trim() == "") {
                    document.querySelectorAll("#sudoku-table p")[index].textContent = tmp;
                    document.querySelectorAll("#sudoku-table p")[index].style.color = "rgb(8, 143, 143)";
                }
                index++;
            }
        }
    }
    function displaySampleData() {
        let originalTable = `
            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
        `;
        document.getElementById("sudoku-table").innerHTML = originalTable;
        let sudokuSampleData = [
            [
                [8, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 6, 0, 0, 0, 0, 0],
                [0, 7, 0, 0, 9, 0, 2, 0, 0],
                [0, 5, 0, 0, 0, 7, 0, 0, 0],
                [0, 0, 0, 0, 4, 5, 7, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 3, 0],
                [0, 0, 1, 0, 0, 0, 0, 6, 8],
                [0, 0, 8, 5, 0, 0, 0, 1, 0],
                [0, 9, 0, 0, 0, 0, 4, 0, 0]
            ],
            [
                [0, 0, 5, 3, 0, 0, 0, 0, 0],
                [8, 0, 0, 0, 0, 0, 0, 2, 0],
                [0, 7, 0, 0, 1, 0, 5, 0, 0],
                [4, 0, 0, 0, 0, 5, 3, 0, 0],
                [0, 1, 0, 0, 7, 0, 0, 0, 6],
                [0, 0, 3, 2, 0, 0, 0, 8, 0],
                [0, 6, 0, 5, 0, 0, 0, 0, 9],
                [0, 0, 4, 0, 0, 0, 0, 3, 0],
                [0, 0, 0, 0, 0, 9, 7, 0, 0]
            ],
            [
                [0, 2, 0, 0, 0, 0, 0, 0, 3],
                [0, 0, 0, 6, 0, 0, 5, 0, 0],
                [0, 0, 7, 0, 0, 0, 0, 0, 8],
                [0, 0, 0, 0, 3, 0, 0, 0, 0],
                [0, 4, 0, 0, 7, 0, 0, 6, 0],
                [0, 0, 0, 0, 2, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 9, 0, 0],
                [0, 0, 8, 0, 0, 9, 0, 0, 0],
                [4, 0, 0, 0, 0, 0, 0, 1, 0]
            ],
            [
                [0, 0, 0, 0, 0, 4, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 3, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 8],
                [0, 0, 0, 0, 0, 0, 9, 0, 0],
                [5, 0, 0, 0, 0, 0, 0, 7, 0],
                [0, 0, 0, 2, 0, 0, 0, 0, 3],
                [0, 6, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 8, 0, 0],
                [0, 0, 0, 0, 9, 0, 0, 0, 0]
            ],
            [
                [0, 0, 9, 0, 0, 0, 0, 0, 0],
                [0, 5, 0, 0, 3, 0, 0, 7, 8],
                [0, 0, 0, 0, 0, 0, 0, 0, 6],
                [0, 0, 5, 0, 7, 0, 0, 0, 0],
                [0, 0, 0, 8, 0, 4, 0, 0, 0],
                [0, 0, 0, 0, 2, 0, 5, 0, 0],
                [0, 0, 7, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 4, 0],
                [0, 2, 0, 6, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 7, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 5],
                [0, 0, 4, 0, 0, 1, 0, 6, 0],
                [0, 0, 0, 0, 0, 0, 2, 0, 0],
                [1, 0, 5, 0, 0, 0, 0, 0, 0],
                [0, 3, 0, 0, 0, 0, 0, 0, 0],
                [0, 6, 0, 0, 0, 9, 0, 0, 0],
                [0, 9, 0, 4, 0, 0, 0, 0, 0],
                [8, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 0, 5, 0],
                [0, 0, 0, 0, 0, 0, 3, 0, 0],
                [4, 0, 0, 0, 0, 7, 0, 0, 0],
                [0, 0, 0, 0, 2, 0, 0, 0, 0],
                [5, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 6, 0, 0, 4],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 3, 7, 0, 0, 0, 0, 0, 0],
                [0, 6, 0, 0, 0, 0, 0, 0, 9]
            ]
        ];
        var randomNum = Math.floor(Math.random() * 7);
        console.log(randomNum);
        var data = sudokuSampleData[randomNum];

        var index = 0;
        for (var i=0; i<9; i++)  {
            for (var j=0; j<9; j++) {
                var tmp = data[i][j];
                if (tmp != 0) {
                    document.querySelectorAll("#sudoku-table p")[index].textContent = tmp;
                }
                index++;
            }
        }
    }
    function clearTable() {
        document.querySelectorAll("#sudoku-table p").forEach(function(e) {
            e.textContent = "";
            e.style.color = "black";
        });
    }
}

function GiaiThuaFunction() {
    renderGiaiThua(); // render ra HTML

    // Lệnh thực thi chính

    // Function
    function renderGiaiThua() {
        var html = `
            <h1>Tính năng giai thừa đang trong giai đoạn phát triển</h1>
            <h2>
                <strong>Các minh hoạ đã có:</strong>
                <ul>
                    <li> * Bài toán N quân hậu (quay lui)</li>
                    <li> * Bài toán giải Sudoku (quay lui)</li>
                    <li> * Bài toán người du lịch (nhánh và cận)</li>
                </ul>
            </h2>
        `;
        document.querySelector('.example-illustration').innerHTML = html;
    }
}

function FibonacciFunction() {
    renderFibonacci(); // render ra HTML

    // Lệnh thực thi chính

    // Function
    function renderFibonacci() {
        var html = `
            <h1>Tính năng Fibonacci đang trong giai đoạn phát triển</h1>
            <h2>
                <strong>Các minh hoạ đã có:</strong>
                <ul>
                    <li> * Bài toán N quân hậu (quay lui)</li>
                    <li> * Bài toán giải Sudoku (quay lui)</li>
                    <li> * Bài toán người du lịch (nhánh và cận)</li>
                </ul>
            </h2>
        `;
        document.querySelector('.example-illustration').innerHTML = html;
    }
}

function ThapHaNoiFunction() {
    renderThapHaNoi(); // render ra HTML

    // Lệnh thực thi chính

    // Function
    function renderThapHaNoi() {
        var html = `
            <h1>Tính năng bài toán tháp hà nội đang trong giai đoạn phát triển</h1>
            <h2>
                <strong>Các minh hoạ đã có:</strong>
                <ul>
                    <li> * Bài toán N quân hậu (quay lui)</li>
                    <li> * Bài toán giải Sudoku (quay lui)</li>
                    <li> * Bài toán người du lịch (nhánh và cận)</li>
                </ul>
            </h2>
        `;
        document.querySelector('.example-illustration').innerHTML = html;
    }
}

function NguoiDuLichFunction() {
    renderNguoiDuLich(); // render ra HTML
    var totalCity = 4;
    var costMatrix = Array.from({ length: 20 }, () => Array(20).fill(0));
    var cost = 0, ans = Number.MAX_SAFE_INTEGER, cmin = Number.MAX_SAFE_INTEGER;
    var visited = Array(20).fill(0);
    var x = Array(20).fill(0);
    var route = [];

    // Tăng giảm số thành phố   
    changeQuantity();

    // Lệnh thực thi chính
    document.getElementById("tsp-solve").onclick  = function(e) { 
        x[0] = 0;
        visited[0] = 1;
        TSP(1);
        document.getElementById("tsp-result-num").textContent = ans;
        document.getElementById("tsp-result-route").textContent = `${route.join(" => ")} => 0`;
    }

    // Function
    function renderNguoiDuLich() {
        let html = `
            <div id="tsp-total-city">
                Tổng số thành phố:
                <div id="tsp-roll">
                    <div id="tsp-roll-down">-</div>
                    <span id="tsp-roll-num">4</span>
                    <div id="tsp-roll-up">+</div>
                </div>
            </div>
            <div id="tsp-cost-matrix">
            </div>
            <div id="tsp-solve">Giải</div>
            <div id="tsp-clear">Làm mới</div>
            <div id="tsp-result">
                <div>Thứ tự thành phố đi qua: <span id="tsp-result-route"></span></div>
                <div><strong>Tổng chi phí: <span id="tsp-result-num"></span></strong></div>
            </div>
        `;
        document.querySelector('.example-illustration').innerHTML = html;
        changeMatrixSize(4);

    }

    function changeQuantity() {
        document.getElementById("tsp-roll-down").onclick = function(e) {
            e.preventDefault();
            if (totalCity > 4) {
                totalCity--;
                document.getElementById("tsp-roll-num").textContent = totalCity;
                changeMatrixSize(totalCity);
            }
        }
        document.getElementById("tsp-roll-up").onclick = function(e) {
            e.preventDefault();
            if (totalCity < 11) {
                totalCity++;
                document.getElementById("tsp-roll-num").textContent = totalCity;
                changeMatrixSize(totalCity);
            }
        }
    }

    function changeMatrixSize(totalCity) {
        let matrix = document.getElementById("tsp-cost-matrix");
        let cellSize = 250/totalCity;
        matrix.innerHTML = "";
        for (let i=0; i<totalCity; i++) {
            for (let j=0; j<totalCity; j++) {
                if (i == j) {
                    let cell = document.createElement("input");
                    cell.type = "text";
                    cell.className = "tsp-cell";
                    cell.id = `${i}${j}`;
                    cell.placeholder = "0";

                    matrix.appendChild(cell);
                } else {
                    let cell = document.createElement("input");
                    cell.type = "text";
                    cell.className = "tsp-cell";
                    cell.id = `${i}${j}`;

                    matrix.appendChild(cell);
                }
            }
        }
        document.querySelectorAll(".tsp-cell").forEach(function(e) {
            e.style.width = `${cellSize}px`;
            e.style.height = `${cellSize}px`;
        });
        costMatrix = Array.from({ length: 20 }, () => Array(20).fill(0));
        changeCost();
    }

    function changeCost() {
        document.querySelectorAll(".tsp-cell").forEach(function(e1) {
            e1.onchange = function(e2) {
                let id = String(e1.id);
                for(let i=0; i<totalCity; i++) {
                    for (let j=0; j<totalCity; j++) {
                        if (`${i}${j}` == id) {
                            costMatrix[i][j] = Number(e2.target.value);
                        }
                    }
                }
            }
        });
    }

    var cost = 0, ans = Number.MAX_SAFE_INTEGER, cmin = Number.MAX_SAFE_INTEGER;
    var visited = Array(20).fill(0);
    var x = Array(20).fill(0);
    function TSP(i) {
        for (var j=0; j<totalCity; j++) {
            if (visited[j] == 0) {
                visited[j] = 1;
                x[i] = j;
                cost += costMatrix[x[i-1]][x[i]];
                if (i == (totalCity-1)) {
                    let tmp = ans;
                    ans = Math.min(ans, cost + costMatrix[x[totalCity-1]][0]);
                    if (ans < tmp) {
                        route = x.slice(0, totalCity);
                    }
                } else {
                    TSP(i + 1);
                }
                // Backtrack
                visited[j] = 0;
                cost -= costMatrix[x[i-1]][x[i]];
            }
        }
    }
}
