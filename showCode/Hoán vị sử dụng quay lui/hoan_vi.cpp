#include <iostream>
using namespace std;

int i;
int x[100];
int check[100];
int n = 5; // data mẫu
int cnt = 0;

void inkq() {
    for (int i=1; i<=n; i++) {
        cout << x[i];
    }
    cout << "   ";
}

void hoanVi(int i) {
    for (int j=1; j<=n; j++) {
        if (check[j] == 0) {
            x[i] = j;
            check[j] = 1;
            if (i == n) {
                inkq();
                cnt++;
            } else {
                hoanVi(i+1);
            }
            // backtrack
            check[j] = 0;
        }
    }
}

int main() {
    hoanVi(1);
    cout << endl;
    cout << "So hoan vi la: " << cnt;
}
