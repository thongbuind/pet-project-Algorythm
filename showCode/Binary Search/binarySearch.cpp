#include <iostream>
using namespace std;

bool check(int arr[], int n) {
    for (int i=0; i<n-1; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}

void sort(int arr[], int n) {
    for (int i=0; i<n; i++) {
        int minIndex = i;
        for (int j=i; j<n; j++) {
            if (arr[j] < arr[minIndex]) {
                int tmp = arr[minIndex];
                arr[minIndex] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}

int BinarySearch(int arr[], int n, int x) {
    if (!check(arr, n)) {
        sort(arr, n);
    }
    int left = 0;
    int right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == x) {
            return mid;
        } else if (arr[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

int main() {
    // data mẫu
    int n = 100;
    int arr[100] = {537, 241, 825, 943, 487, 692, 357, 431, 657, 174,
                    528, 644, 750, 119, 293, 815, 616, 322, 935, 790,
                    108, 759, 639, 894, 508, 274, 132, 477, 214, 542,
                    711, 355, 940, 865, 141, 372, 978, 459, 148, 563,
                    826, 743, 219, 613, 487, 360, 102, 788, 616, 292,
                    810, 731, 453, 973, 375, 697, 258, 529, 694, 445,
                    731, 657, 108, 579, 246, 895, 242, 127, 311, 493,
                    857, 140, 920, 375, 209, 558, 609, 451, 285, 772,
                    333, 489, 201, 786, 450, 620, 394, 377, 265, 702,
                    274, 882, 340, 918, 132, 573, 742, 824, 194, 159};
    cout << BinarySearch(arr, n, 786);
}