var dsSanPham = [
  { id: 1,  ten: "Chùa Một Cột",          gia: 480000, giaCu: 600000, anh: "sp1.jpg", conHang: true,  loai: ["vietnam","chuaden","ditich","congtrinh"], moTa: "Mô hình Chùa Một Cột, biểu tượng kiến trúc của Hà Nội." },
  { id: 2,  ten: "Tháp Rùa",              gia: 250000, giaCu: 0,      anh: "sp2.jpg", conHang: true,  loai: ["vietnam","ditich","congtrinh"], moTa: "Mô hình Tháp Rùa giữa hồ Hoàn Kiếm." },
  { id: 3,  ten: "Chùa Thiên Mụ",         gia: 590000, giaCu: 690000, anh: "sp3.jpg", conHang: true,  loai: ["vietnam","chuaden","ditich"], moTa: "Mô hình Chùa Thiên Mụ với tháp Phước Duyên bảy tầng." },
  { id: 4,  ten: "Dinh Độc Lập",          gia: 780000, giaCu: 0,      anh: "sp4.jpg", conHang: true,  loai: ["vietnam","ditich","congtrinh"], moTa: "Mô hình Dinh Độc Lập (Dinh Thống Nhất)." },
  { id: 5,  ten: "Tháp Eiffel",           gia: 390000, giaCu: 490000, anh: "sp5.jpg", conHang: true,  loai: ["thegioi","congtrinh"], moTa: "Mô hình Tháp Eiffel nổi tiếng của Pháp." },
  { id: 6,  ten: "Tượng Nữ Thần Tự Do",   gia: 320000, giaCu: 0,      anh: "sp6.jpg", conHang: true,  loai: ["thegioi","congtrinh"], moTa: "Mô hình Tượng Nữ Thần Tự Do của Mỹ." },
  { id: 7,  ten: "Nhà Hát Opera Sydney",  gia: 690000, giaCu: 810000, anh: "sp7.jpg", conHang: true,  loai: ["thegioi","congtrinh"], moTa: "Mô hình Nhà hát Opera Sydney với mái vỏ sò đặc trưng." },
  { id: 8,  ten: "Angkor Wat",            gia: 560000, giaCu: 800000, anh: "sp8.jpg", conHang: true,  loai: ["thegioi","chuaden","ditich","congtrinh"], moTa: "Mô hình quần thể đền Angkor Wat của Campuchia." },

  { id: 9,  ten: "Khuê Văn Các",          gia: 299999, giaCu: 499999, anh: "Khuê Văn Các.jpg",         conHang: true,  loai: ["vietnam","ditich"], moTa: "Mô hình Khuê Văn Các tại Văn Miếu - Quốc Tử Giám." },
  { id: 10, ten: "Thành Phố Barcelona",   gia: 199000, giaCu: 269000, anh: "Bà xã.jpg",                conHang: true,  loai: ["thegioi","thanhpho"], moTa: "Mô hình thu nhỏ thành phố Barcelona." },
  { id: 11, ten: "Nhà thờ Đức Bà",        gia: 399000, giaCu: 0,      anh: "Nhà thờ Đức Bà.jpg",       conHang: false, loai: ["vietnam","nhatho"], moTa: "Mô hình Nhà thờ Đức Bà Sài Gòn." },
  { id: 12, ten: "Cầu Tháp London",       gia: 419000, giaCu: 0,      anh: "Cầu Tháp London.jpg",      conHang: true,  loai: ["thegioi","congtrinh"], moTa: "Mô hình Tower Bridge bắc qua sông Thames." },
  { id: 13, ten: "Kiến Trúc Trùng Khánh", gia: 149000, giaCu: 299000, anh: "Trùng Khánh.jpg",          conHang: true,  loai: ["thegioi","thanhpho"], moTa: "Mô hình kiến trúc thành phố Trùng Khánh." },
  { id: 14, ten: "Đấu Trường La Mã",      gia: 169000, giaCu: 0,      anh: "Đấu trường la mã.jpg",     conHang: true,  loai: ["thegioi","ditich","congtrinh"], moTa: "Mô hình đấu trường Colosseum của La Mã." },
  { id: 15, ten: "Nhà thờ Tân Định",      gia: 599000, giaCu: 0,      anh: "Nhà thờ tân định.jpg",     conHang: false, loai: ["vietnam","nhatho"], moTa: "Mô hình Nhà thờ Tân Định màu hồng nổi tiếng." },
  { id: 16, ten: "Phu Văn Lâu",           gia: 119000, giaCu: 149000, anh: "Phu Văn Lâu.jpg",          conHang: true,  loai: ["vietnam","ditich"], moTa: "Mô hình Phu Văn Lâu tại Huế." },
  { id: 17, ten: "Bến Nhà Rồng",          gia: 299000, giaCu: 369000, anh: "Bến Nhà Rồng.jpg",         conHang: true,  loai: ["vietnam","ditich"], moTa: "Mô hình Bến Nhà Rồng tại TP. Hồ Chí Minh." },

  { id: 18, ten: "Kim Tự Tháp",           gia: 399999, giaCu: 0,      anh: "Kim Tự Tháp.jpg",          conHang: true,  loai: ["thegioi","ditich","congtrinh","moi"], moTa: "Mô hình Kim tự tháp Ai Cập." },
  { id: 19, ten: "Nhà Thờ Thánh Paul",    gia: 299000, giaCu: 349000, anh: "Nhà Thờ Thánh Paul.jpg",   conHang: true,  loai: ["thegioi","nhatho","congtrinh","moi"], moTa: "Mô hình Nhà thờ Thánh Paul với mái vòm lớn." },
  { id: 20, ten: "Tháp Đồng Hồ Big Ben",  gia: 499000, giaCu: 0,      anh: "Tháp Đồng Hồ Big Ben.jpg", conHang: false, loai: ["thegioi","congtrinh","moi"], moTa: "Mô hình tháp đồng hồ Big Ben của nước Anh." },
  { id: 21, ten: "Đền Taj Mahal",         gia: 319000, giaCu: 379000, anh: "Đền Taj Mahal.jpg",        conHang: true,  loai: ["thegioi","cungdien","ditich","congtrinh","moi"], moTa: "Mô hình đền Taj Mahal của Ấn Độ." }
];


// hàm định gía
function dinhDangGia(so) {
  return String(so).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
}

function layTheoId(id) {
  return dsSanPham.find(function (s) { return s.id == id; });
}





// ===== DANH MỤC =====
// Mỗi danh mục gồm những id sản phẩm nào
var danhMuc = {
  vietnam:   [1, 2, 3, 4, 9, 11, 15, 16, 17],
  thegioi:   [5, 6, 7, 8, 10, 12, 13, 14, 18, 19, 20, 21],
  chuaden:   [1, 3, 8],
  nhatho:    [11, 15, 19],
  congtrinh: [1, 2, 4, 5, 6, 7, 8, 12, 14, 18, 19, 20, 21],
  cungdien:  [21],
  thanhpho:  [10, 13],
  ditich:    [1, 2, 3, 4, 8, 9, 14, 16, 17, 18, 21],
  phongcanh: [],
  phukien:   [],
  moi:       [18, 19, 20, 21]
};

document.addEventListener("DOMContentLoaded", function () {
  var loai = new URLSearchParams(location.search).get("loai");
  if (!loai) return; // không có ?loai thì giữ nguyên trang

  var box = document.getElementById("danhSachSanPham");
  if (!box) return; // trang khác không có danh sách thì bỏ qua

  // Lọc sản phẩm
  var ds;
  if (loai === "khuyenmai") {
    ds = dsSanPham.filter(function (s) { return s.giaCu > 0; });
  } else {
    var ids = danhMuc[loai] || [];
    ds = dsSanPham.filter(function (s) { return ids.includes(s.id); });
  }

  // Vẽ ra màn hình
  var html = "";
  ds.forEach(function (s) {
    var badge = "";
    var giaCu = "";
    if (!s.conHang) badge = '<span class="badge-soldout">Tạm hết hàng</span>';
    if (s.giaCu > 0) giaCu = '<span class="price-old">' + dinhDangGia(s.giaCu) + '</span>';

    html += '<div class="product-card' + (s.conHang ? '' : ' sold-out') + '">'
          + badge
          + '<a href="chitietsanpham.html?id=' + s.id + '"><img src="../images/' + s.anh + '" alt="' + s.ten + '"></a>'
          + '<h3 class="product-name"><a href="chitietsanpham.html?id=' + s.id + '">' + s.ten + '</a></h3>'
          + '<p><span class="price-new">' + dinhDangGia(s.gia) + '</span> ' + giaCu + '</p>'
          + '</div>';
  });

  if (html === "") html = "<p>Chưa có sản phẩm trong danh mục này.</p>";
  box.innerHTML = html;

  // Ẩn phân trang cho gọn
  var pt = document.getElementById("phanTrang");
  if (pt) pt.style.display = "none";
});