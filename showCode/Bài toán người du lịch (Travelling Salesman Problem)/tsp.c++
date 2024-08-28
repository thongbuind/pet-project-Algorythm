#include <iostream>
using namespace std;

int i, x[100], n;
int visited[10], c[100][100], cost = 0, ans = INT_MAX, cmin = INT_MAX;

void tsp(int i) {
    for (int j=1; j<=n; j++) {
        if (visited[j] == 0) {
            visited[j] = 1;
            x[i] = j;
            cost += c[x[i-1]][x[i]];
            if (i == n) {
                ans = min(ans, cost + c[x[n]][1]);
            } else if ((cost + (n-i+1) * cmin) < ans) {
                tsp(i + 1);
            }
            // Backtrack
            visited[j] = 0;
            cost -= c[x[i-1]][x[i]];
        }
    }
}

int main() {
    cout << "Nhap so luong thanh pho: ";
    cin >> n;
    for (int i=1; i<=n; i++) {
        for (int j=1; j<=n; j++) {
            cin >> c[i][j];
            if (c[i][j] < cmin) {
                cmin = c[i][j];
            }
        }
    }
/*
data mẫu
0 85 26 81
85 0 77 97
26 77 0 26
81 97 26 0
*/
    x[1] = 1;
    visited[1] = 1;
    tsp(2);
    cout << "Tong chi phi: " << ans << endl;
    return 0;
}
