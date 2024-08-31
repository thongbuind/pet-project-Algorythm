export function NQueensFunction() {
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