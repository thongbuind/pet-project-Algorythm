var i;
var cost = 0, ans = Number.MAX_SAFE_INTEGER, cmin = Number.MAX_SAFE_INTEGER;
var visited = Array(20).fill(0);
var x = Array(20).fill(0);
var totalCity = 4;
var costMatrix = Array.from({ length: 20 }, () => Array(20).fill(0));
var route = [];

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

// data mẫu
costMatrix = [
    [0, 85, 26, 81],
    [85, 0, 77, 97],
    [26, 77, 0, 26],
    [81, 97, 26, 0]
]
TSP(1);
console.log(ans);
