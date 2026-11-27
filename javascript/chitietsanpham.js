

var id = new URLSearchParams(location.search).get("id");
var sp = layTheoId(id);
var khung = document.getElementById("chiTiet");

if (!sp) {
    khung.innerHTML = "<p>Không tìm thấy sản phẩm</p>";
} else {
    var html = "<div class='ct-box'>";

    html += "<img src='../images/" + sp.anh + "' alt='" + sp.ten + "'>";

    html += "<h1 class='ct-ten'>" + sp.ten + "</h1>";

    html += "<p class='ct-gia'>" + dinhDangGia(sp.gia);

    if (sp.giaCu > 0) {
        html += "<span class='ct-gia-cu'>" + dinhDangGia(sp.giaCu) + "</span>";
    }

    html += "</p>";

    html += "<p class='ct-mota'>" + sp.moTa + "</p>";

    if (sp.conHang) {
        html += "<button onclick='themVaoGio(" + sp.id + ")'>Thêm vào giỏ hàng</button>";
    } else {
        html += "<p class='ct-het-hang'>Tạm hết hàng</p>";
    }

    html += "</div>";

    khung.innerHTML = html;
}
