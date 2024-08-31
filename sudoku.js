export function SudokuFunction() {
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