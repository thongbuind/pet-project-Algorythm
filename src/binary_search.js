export function BinarySearchFunction() {
    var arr = [];
    var x;
    var result;
    var cnt = 0;
    var progress = Array.from({ length: 20 }, () => Array(20).fill(0));

    renderBinarySearch(); // render ra HTML

    // Nhập mảng
    getArr();

    // Lệnh thực thi chính
    document.getElementById("binary-search-solve").onclick = function(e) {
        e.preventDefault();
        result = binarySearch();
        printArr();
        printProgress();
    }

    // Function
    function renderBinarySearch() {
        var html = `
            <!-- nhập mảng đầu vào, số liệu mẫu -->
            <div id="binary-search-input">
                <button id="binary-search-sample-data">Số liệu mẫu</button>
                <input  id="binary-search-text-input" type="text" placeholder="Nhập mảng">
                <input  id="binary-search-x-input" type="text" placeholder="X">
                <button id="binary-search-solve">Tìm kiếm</button>
            </div>
            <!-- in ra mảng dưới dạng đã sắp xếp -->
            <div class="binary-search-list">
            </div>
            <!-- bước 1 -> bước n -->
            <div id="binary-search-progress">
            </div>
            <div id="binary-search-result"></div>
        `;
        document.querySelector('.example-illustration').innerHTML = html;
    }

    function check() {
        let n = arr.length;
        for (let i=0; i<n; i++) {
            if (arr[i] > arr[i+1]) {
                return false;
            }
        }
        return true;
    }

    function sort() {
        let n = arr.length;
        for (let i=0; i<n; i++) {
            let minIndex = i;
            for (let j=i; j<n; j++) {
                if (arr[j] < arr[minIndex]) {
                    let tmp = arr[j];
                    arr[j] = arr[minIndex];
                    arr[minIndex] = tmp;
                }
            }
        }
    }

    function binarySearch() {
        let n = arr.length;
        if (!check()) {
            sort();
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
            let index = 0;
            for (let i=left; i<=right; i++) {
                progress[cnt][index] = arr[i];
                index++;
            }
            cnt++;
        }
        return -1;
    }

    function getArr() {
        document.getElementById("binary-search-text-input").onchange = function(e) {
            e.preventDefault();
            arr = e.target.value.split(' ').map(function(item) {
                return parseInt(item.trim(), 10);
            });
            if (arr.length == 1) {
                arr = e.target.value.split(',').map(function(item) {
                    return parseInt(item.trim(), 10);
                });
                if (arr.length == 1) {
                    arr = e.target.value.split('-').map(function(item) {
                        return parseInt(item.trim(), 10);
                    });
                    if (arr.length == 1) {
                        arr = e.target.value.split(';').map(function(item) {
                            return parseInt(item.trim(), 10);
                        });
                    }
                }
            }
        }
        document.getElementById("binary-search-x-input").onchange = function(e) {
            e.preventDefault();
            x = Number(e.target.value);
        }
    }
    function printArr() {
        let n = arr.length;
        let html = '<ul>';
        for (let i=0; i<n; i++) {
            html += `<li class="binary-search-cell">${arr[i]}</li>`;
        }
        html += '</ul>';
        document.querySelector(".binary-search-list").innerHTML = html;
        document.querySelectorAll(".binary-search-list").forEach(function(e) {
            e.style.display = "block";
        }) 
    }

    function printProgress() {
        let html = '<ul>';
        for (let i=0; i<cnt; i++) {
            let n = progress[i].length;
            let tmp = `<ul class="binary-search-list">`;
            for (let j=0; j<n; j++) {
                if (progress[i][j] != 0) {
                    tmp += `<li class="binary-search-cell">${progress[i][j]}</li>`;
                }
            }
            tmp += '</ul>';
            html += tmp;
        }
        html += '</ul>';
        document.getElementById("binary-search-progress").innerHTML = html;
        document.querySelectorAll(".binary-search-list").forEach(function(e) {
            e.style.display = "block";
        });
        document.getElementById("binary-search-result").textContent = `Số cần tìm ở vị trí thứ ${result} trong mảng`;
        document.getElementById("binary-search-result").style.display = "block";
    }

    function binarySearchSampleData() {

    }
}