#include <iostream>
using namespace std;

int giaiThua(int n) {
    if (n == 1) {
        return 1;
    } else {
        return n * giaiThua(n - 1);
    }
}

int main() {
    // data mẫu
    int n = 10;
    cout << "Giai thua cua " << n << " la: " << giaiThua(n);
}