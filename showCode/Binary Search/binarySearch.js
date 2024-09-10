// data mẫu
var arr = [
    537, 241, 825, 943, 487, 692, 357, 431, 657, 174,
    528, 644, 750, 119, 293, 815, 616, 322, 935, 790,
    108, 759, 639, 894, 508, 274, 132, 477, 214, 542,
    711, 355, 940, 865, 141, 372, 978, 459, 148, 563,
    826, 743, 219, 613, 487, 360, 102, 788, 616, 292,
    810, 731, 453, 973, 375, 697, 258, 529, 694, 445,
    731, 657, 108, 579, 246, 895, 242, 127, 311, 493,
    857, 140, 920, 375, 209, 558, 609, 451, 285, 772,
    333, 489, 201, 786, 450, 620, 394, 377, 265, 702,
    274, 882, 340, 918, 132, 573, 742, 824, 194, 159
];
var n = arr.length;
var x = 759;

function check() {
    for (let i=0; i<n; i++) {
        if (arr[i] > arr[i+1]) {
            return false
        }
    }
    return true;
}

function selectionSort() {
    for (let i=0; i<n; i++) {
        let indexMin = i;
        for (let j=i; j<n; j++) {
            if (arr[j] < arr[indexMin]) {
                let tmp = arr[j];
                arr[j] = arr[indexMin];
                arr[indexMin] = tmp;
            }
        }
    }
}

function binarySearch() {
    if (!check()) {
        selectionSort();
    }
    let left = 0;
    let right = n - 1;
    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] == x) {
            return mid;
        } else if (arr[mid] > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

// chạy chương trình
console.log(binarySearch());