export function NguoiDuLichFunction() {
    renderNguoiDuLich(); // render ra HTML
    var totalCity = 4;
    var costMatrix = Array.from({ length: 20 }, () => Array(20).fill(0));
    var cost = 0, ans = Number.MAX_SAFE_INTEGER, cmin = Number.MAX_SAFE_INTEGER;
    var visited = Array(20).fill(0);
    var x = Array(20).fill(0);
    var route = [];

    // Tăng giảm số thành phố   
    changeQuantity();

    // Lệnh thực thi chính
    document.getElementById("tsp-solve").onclick  = function(e) { 
        x[0] = 0;
        visited[0] = 1;
        TSP(1);
        document.getElementById("tsp-result-num").textContent = ans;
        document.getElementById("tsp-result-route").textContent = `${route.join(" => ")} => 0`;
    }

    // Làm mới
    document.getElementById("tsp-clear").onclick = function(e) {
        e.preventDefault();
        tspClear();
    }

    // Function
    function renderNguoiDuLich() {
        let html = `
            <div id="tsp-total-city">
                Tổng số thành phố:
                <div id="tsp-roll">
                    <div id="tsp-roll-down">-</div>
                    <span id="tsp-roll-num">4</span>
                    <div id="tsp-roll-up">+</div>
                </div>
            </div>
            <div id="tsp-cost-matrix">
            </div>
            <div id="tsp-solve">Giải</div>
            <div id="tsp-clear">Làm mới</div>
            <div id="tsp-result">
                <div>Thứ tự thành phố đi qua: <span id="tsp-result-route"></span></div>
                <div><strong>Tổng chi phí: <span id="tsp-result-num"></span></strong></div>
            </div>
        `;
        document.querySelector('.example-illustration').innerHTML = html;
        changeMatrixSize(4);

    }

    function changeQuantity() {
        document.getElementById("tsp-roll-down").onclick = function(e) {
            e.preventDefault();
            if (totalCity > 4) {
                totalCity--;
                document.getElementById("tsp-roll-num").textContent = totalCity;
                changeMatrixSize(totalCity);
            }
        }
        document.getElementById("tsp-roll-up").onclick = function(e) {
            e.preventDefault();
            if (totalCity < 11) {
                totalCity++;
                document.getElementById("tsp-roll-num").textContent = totalCity;
                changeMatrixSize(totalCity);
            }
        }
    }

    function changeMatrixSize(totalCity) {
        let matrix = document.getElementById("tsp-cost-matrix");
        let cellSize = 250/totalCity;
        matrix.innerHTML = "";
        for (let i=0; i<totalCity; i++) {
            for (let j=0; j<totalCity; j++) {
                if (i == j) {
                    let cell = document.createElement("input");
                    cell.type = "text";
                    cell.className = "tsp-cell";
                    cell.id = `${i}${j}`;
                    cell.placeholder = "0";

                    matrix.appendChild(cell);
                } else {
                    let cell = document.createElement("input");
                    cell.type = "text";
                    cell.className = "tsp-cell";
                    cell.id = `${i}${j}`;

                    matrix.appendChild(cell);
                }
            }
        }
        document.querySelectorAll(".tsp-cell").forEach(function(e) {
            e.style.width = `${cellSize}px`;
            e.style.height = `${cellSize}px`;
        });
        costMatrix = Array.from({ length: 20 }, () => Array(20).fill(0));
        changeCost();
    }

    function changeCost() {
        document.querySelectorAll(".tsp-cell").forEach(function(e1) {
            e1.onchange = function(e2) {
                let id = String(e1.id);
                for(let i=0; i<totalCity; i++) {
                    for (let j=0; j<totalCity; j++) {
                        if (`${i}${j}` == id) {
                            costMatrix[i][j] = Number(e2.target.value);
                        }
                    }
                }
            }
        });
    }

    var cost = 0, ans = Number.MAX_SAFE_INTEGER, cmin = Number.MAX_SAFE_INTEGER;
    var visited = Array(20).fill(0);
    var x = Array(20).fill(0);
    function TSP(i) {
        for (var j=0; j<totalCity; j++) {
            if (visited[j] == 0) {
                visited[j] = 1;
                x[i] = j;
                cost += costMatrix[x[i-1]][x[i]];
                if (i == (totalCity-1)) {
                    let tmp = ans;
                    ans = Math.min(ans, cost + costMatrix[x[totalCity-1]][0]);
                    if (ans < tmp) {
                        route = x.slice(0, totalCity);
                    }
                } else {
                    TSP(i + 1);
                }
                // Backtrack
                visited[j] = 0;
                cost -= costMatrix[x[i-1]][x[i]];
            }
        }
    }

    function tspClear() {
        document.querySelectorAll(".tsp-cell").forEach(function(e) {
            e.value = "";
        })
        document.getElementById("tsp-result-num").textContent = "";
        document.getElementById("tsp-result-route").textContent = "";
    }
}
