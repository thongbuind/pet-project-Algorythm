export function CayBaoTrumNhoNhatFunction() {
    renderCayBaoTrumNhoNhat(); // render ra HTML

    // Lệnh thực thi chính

    // Function
    function renderCayBaoTrumNhoNhat() {
        var html = `
            <h1>Mô hình bài toán Cay Bao Trum Nho Nhat đang trong giai đoạn phát triển</h1>
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