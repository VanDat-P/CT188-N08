// Lấy từ khóa tìm kiếm từ URL
var params = new URLSearchParams(window.location.search);
var q = params.get("q") || "";

// Hàm bỏ dấu tiếng Việt
function boDau(s) {
    return s.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d");
}

// Lấy sản phẩm có tên phù hợp
var kq = dsSanPham.filter(function (sp) {
    return boDau(sp.ten).includes(boDau(q));
});

// Hiển thị kết quả
var html = "<h2>Tìm thấy " + kq.length + " sản phẩm cho \"" + q + "\"</h2>";

if (kq.length == 0) {
    html += "<p>Không tìm thấy sản phẩm phù hợp!</p>";
}

kq.forEach(function (sp) {
    html += "<div class='tk-card'>";
    html += "<a href='chitietsanpham.html?id=" + sp.id + "'>";
    html += "<img src='../images/" + sp.anh + "'>";
    html += "<h3>" + sp.ten + "</h3>";
    html += "</a>";
    html += "<p class='tk-gia'>" + dinhDangGia(sp.gia) + "</p>";

    if (sp.giaCu > 0) {
        html += "<s>" + dinhDangGia(sp.giaCu) + "</s>";
    }

    html += "</div>";
});

document.getElementById("ketQua").innerHTML = html;