#include <iostream>
using namespace std;
int Fibonacci(int i) {
    if (i > 1) {
        return (Fibonacci(i-1) + Fibonacci(i-2));
    } else if (i == 0) {
        return 0;
    } else if (i == 1) {
        return 1;
    } else {
        return -1;
    }
}

int main() {
    // tìm n số đầu tiên của dãy Fibonacci
    int n = 30; // data mẫu
    int fibonacci[100];
    for (int i=0; i<n; i++) {
        fibonacci[i] =  Fibonacci(i);
    }
    for (int i=0; i<n; i++) {
        cout << fibonacci[i] << "   ";
    }
}