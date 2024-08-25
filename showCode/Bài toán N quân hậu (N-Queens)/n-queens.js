var size;
let x = Array(30).fill(0);
let cot = Array(30).fill(0);
let cheo_1 = Array(30).fill(0);
let cheo_2 = Array(30).fill(0);
let n_queens_result = [];
let cnt=0;

function luu_ket_qua_n_queens() {
    n_queens_result[cnt] = [];
    for (var j = 1; j <= size; j++) {
        n_queens_result[cnt][j - 1] = x[j];
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