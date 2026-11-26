// Banner: bấm nút trái / phải để đổi ảnh

var dsAnh = ["banner.png", "banner2.png", "banner3.png"];
var viTri = 0;

// Đổi ảnh theo vị trí hiện tại
function doiAnh() {
    document.getElementById("anhBanner").src = "../images/" + dsAnh[viTri];
}

// Bấm nút phải
function tienToi() {
    viTri = viTri + 1;
    if (viTri == dsAnh.length) {
        viTri = 0;
    }
    doiAnh();
}

// Bấm nút trái
function luiLai() {
    viTri = viTri - 1;
    if (viTri < 0) {
        viTri = dsAnh.length - 1;
    }
    doiAnh();
}
