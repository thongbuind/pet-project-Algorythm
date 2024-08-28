#include <iostream>
using namespace std;

void inkq(int sudoku[9][9]) {
    for (int i=0; i<9; i++) {
        for (int j=0; j<9; j++) {
            cout << sudoku[i][j] << " ";
        }
        cout << endl;
    }
}
 
bool check(int sudoku[9][9], int i, int j, int num) {
    // check hàng
    for (int x=0; x<9; x++) {
        if (sudoku[i][x] == num) {
            return false;
        }
    }
    // check cột
    for (int y=0; y<9; y++) {
        if (sudoku[y][j] == num) {
            return false;
        }
    }
    // check ô 3x3
    int start_i = i - i%3, start_j = j - j%3;
    for (int y=0; y<3; y++) {
        for (int x=0; x<3; x++) {
            if (sudoku[y+start_i][x+start_j] == num) {
                return false;
            }
        }
    }
    return true;
}

bool sudokuSolve(int sudoku[9][9], int i, int j) {
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
    if (sudoku[i][j] != 0) {
        return sudokuSolve(sudoku, i, j+1);
    }
    // thử từng số cho mỗi ô, ứng dụng quay lui
    for (int num=1; num<=9; num++) {
        if (check(sudoku, i, j, num)) {
            sudoku[i][j] = num;
            if (sudokuSolve(sudoku, i, j+1)) {
                return true;
            }
        }
        sudoku[i][j] = 0; //backtrack
    }
    return false;
}

int main() {
    // dữ liệu test mẫu
    int sudoku[9][9] = {
        {0, 0, 0, 0, 0, 7, 0, 9, 0},
        {0, 4, 0, 0, 8, 0, 0, 0, 0},
        {0, 0, 3, 0, 5, 0, 0, 0, 0},
        {0, 0, 0, 4, 0, 0, 0, 0, 0},
        {0, 0, 0, 0, 0, 0, 0, 0, 0},
        {0, 0, 0, 0, 0, 9, 0, 0, 0},
        {0, 0, 7, 0, 0, 0, 3, 0, 0},
        {0, 0, 0, 0, 0, 0, 0, 0, 0},
        {0, 2, 0, 0, 0, 0, 0, 6, 0}
    };
    if (sudokuSolve(sudoku, 0, 0)) {
        inkq(sudoku);
    } else {
        cout << "Khong the giai!";
    }
}
