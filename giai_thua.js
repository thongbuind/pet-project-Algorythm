export function GiaiThuaFunction() {
    renderGiaiThua(); // render ra HTML

    // Lệnh thực thi chính

    // Function
    function renderGiaiThua() {
        var html = `
            <h1>Tính năng giai thừa đang trong giai đoạn phát triển</h1>
            <h2>
                <strong>Các minh hoạ đã có:</strong>
                <ul>
                    <li> * Bài toán N quân hậu (quay lui)</li>
                    <li> * Bài toán giải Sudoku (quay lui)</li>
                    <li> * Bài toán người du lịch (nhánh và cận)</li>
                </ul>
            </h2>
        `;
        document.querySelector('.example-illustration').innerHTML = html;
    }
}