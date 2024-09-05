export function QuickSortFunction() {
    renderQuickSort(); // render ra HTML

    // Lệnh thực thi chính

    // Function
    function renderQuickSort() {
        var html = `
            <h1>Mô hình bài toán QuickSort đang trong giai đoạn phát triển</h1>
            <h2>
                <strong>Các minh hoạ đã có:</strong>
                <ul>
                    <li> * Bài toán N quân hậu (quay lui)</li>
                    <li> * Bài toán giải Sudoku (quay lui)</li>
                    <li> * Bài toán người du lịch (nhánh và cận)</li>
                    <li> * Tìm kiếm nhị phân (Binary Search) (chia để trị)</li>
                </ul>
            </h2>
        `;
        document.querySelector('.example-illustration').innerHTML = html;
    }
}