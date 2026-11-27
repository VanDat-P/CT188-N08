// function docGio() {
//   return JSON.parse(localStorage.getItem("gio") || "[]");
// }

// function luuGio(gio) {
//   localStorage.setItem("gio", JSON.stringify(gio));
//   capNhatSo();
// }

// function themVaoGio(id) {
//   var gio = docGio();
//   var m = gio.find(function (x) { return x.id == id; });
//   if (m) m.sl++;
//   else gio.push({ id: id, sl: 1 });
//   luuGio(gio);
//   alert("Đã thêm vào giỏ hàng");
// }

// function xoaKhoiGio(id) {
//   luuGio(docGio().filter(function (x) { return x.id != id; }));
// }

// function doiSoLuong(id, sl) {
//   var gio = docGio();
//   sl = parseInt(sl, 10);
//   if (isNaN(sl)) sl = 1;
//   gio.forEach(function (x) { if (x.id == id) x.sl = sl; });
//   luuGio(gio.filter(function (x) { return x.sl > 0; }));
// }

// function capNhatSo() {
//   var tong = 0;
//   docGio().forEach(function (x) { tong += x.sl; });
//   var o = document.querySelector(".cart span");
//   if (o) o.textContent = tong;
// }

// document.addEventListener("DOMContentLoaded", capNhatSo);





// // ---------- Ô TÌM KIẾM Ở HEADER ----------
// document.addEventListener("DOMContentLoaded", function () {
//   var o = document.querySelector(".search input");
//   var nut = document.querySelector(".search button");
//   if (!o || !nut) return;

//   function timKiem() {
//     var tuKhoa = o.value.trim();
//     if (tuKhoa != "") {
//       location.href = "timkiem.html?q=" + encodeURIComponent(tuKhoa);
//     }
//   }

//   nut.addEventListener("click", timKiem);
//   o.addEventListener("keydown", function (e) {
//     if (e.key == "Enter") timKiem();
//   });
// });


// ---------- GIỎ HÀNG ----------

// Đọc giỏ hàng từ localStorage
function docGio() {
  return JSON.parse(localStorage.getItem("gio") || "[]");
}

// Lưu giỏ hàng và cập nhật số trên biểu tượng giỏ
function luuGio(gio) {
  localStorage.setItem("gio", JSON.stringify(gio));
  capNhatSo();
}

// Thêm sản phẩm vào giỏ
function themVaoGio(id) {
  var gio = docGio();
  var daCo = false;

  for (var i = 0; i < gio.length; i++) {
    if (gio[i].id == id) {
      gio[i].sl++;
      daCo = true;
    }
  }

  if (!daCo) {
    gio.push({ id: id, sl: 1 });
  }

  luuGio(gio);
  alert("Đã thêm vào giỏ hàng");
}

// Xóa sản phẩm khỏi giỏ
function xoaKhoiGio(id) {
  var gio = docGio();
  var moi = [];

  for (var i = 0; i < gio.length; i++) {
    if (gio[i].id != id) {
      moi.push(gio[i]);
    }
  }

  luuGio(moi);
}

// Đổi số lượng (số lượng <= 0 thì xóa khỏi giỏ)
function doiSoLuong(id, sl) {
  var gio = docGio();
  var moi = [];

  sl = parseInt(sl, 10);
  if (isNaN(sl)) sl = 1;

  for (var i = 0; i < gio.length; i++) {
    if (gio[i].id == id) {
      gio[i].sl = sl;
    }
    if (gio[i].sl > 0) {
      moi.push(gio[i]);
    }
  }

  luuGio(moi);
}

// Cập nhật số hiển thị cạnh biểu tượng giỏ hàng
function capNhatSo() {
  var gio = docGio();
  var tong = 0;

  for (var i = 0; i < gio.length; i++) {
    tong += gio[i].sl;
  }

  var o = document.querySelector(".cart span");
  if (o) o.textContent = tong;
}


// ---------- Ô TÌM KIẾM Ở HEADER ----------
document.addEventListener("DOMContentLoaded", function () {
  capNhatSo();

  var o = document.querySelector(".search input");
  var nut = document.querySelector(".search button");
  if (!o || !nut) return;

  function timKiem() {
    var tuKhoa = o.value.trim();
    if (tuKhoa != "") {
      location.href = "timkiem.html?q=" + encodeURIComponent(tuKhoa);
    }
  }

  nut.addEventListener("click", timKiem);
  o.addEventListener("keydown", function (e) {
    if (e.key == "Enter") timKiem();
  });
});