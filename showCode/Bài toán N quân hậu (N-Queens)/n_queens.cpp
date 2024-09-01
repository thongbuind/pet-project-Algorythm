#include <iostream>
using namespace std;

int i, x[100], n;
int cot[100], cheo1[100], cheo2[100];
int cnt;

void inkq() {
    for (int j=1; j<=n; j++) {
        // cout << x[j] << endl;
        for (int k=1; k<=n; k++) {
            if (k != x[j]) {
                cout << ". ";
            } else {
                cout << "o ";
            }
        }
        cout << endl;
    }
    cout << endl;
}

void n_queens(int i) {
    for (int j=1; j<=n; j++) {
        if (cot[j] == 0 && cheo1[i - j + n] == 0 && cheo2[i + j - 1] == 0) {
            cot[j] = 1;
            cheo1[i - j + n] = 1;
            cheo2[i + j - 1] = 1;
            x[i] = j;
            if (i == n) {
                inkq();
                cnt++;
            } else {
                n_queens(i+1);
            }
            // backtrack
            cot[j] = 0;
            cheo1[i - j + n] = 0;
            cheo2[i + j - 1] = 0;
        }
    }
}

int main() {
    n=8; // data mẫu
    n_queens(1);
    cout << "co " << cnt << " ket qua" << endl;;
}
