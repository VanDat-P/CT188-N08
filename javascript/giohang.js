
function veGio() {
    var gio = docGio();
    var khung = document.getElementById("gioHang");

    if (gio.length == 0) {
        khung.innerHTML = `
            <div class="gh-trong">
                <h3>Giỏ hàng của bạn đang trống!</h3>
                <p>Hãy khám phá các sản phẩm của chúng tôi.</p>
                <a href="trangchu.html">Tiếp tục mua hàng</a>
            </div>
        `;
        return;
    }

    var tong = 0;

    var html = `
        <table class="gh-table">
            <tr>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th></th>
            </tr>
    `;

    gio.forEach(function (x) {
        var sp = layTheoId(x.id);
        var tien = sp.gia * x.sl;
        tong += tien;

        html += `
            <tr>
                <td>
                    <img src="../images/${sp.anh}">
                    <div>${sp.ten}</div>
                </td>

                <td>${dinhDangGia(sp.gia)}</td>

                <td>
                    <div class="gh-soluong">
                        <button onclick="doiSoLuong(${x.id}, ${Math.max(1, x.sl - 1)}); veGio()">-</button>

                        <input type="number" min="1" value="${x.sl}"
                            onchange="doiSoLuong(${x.id}, this.value); veGio()">

                        <button onclick="doiSoLuong(${x.id}, ${x.sl + 1}); veGio()">+</button>
                    </div>
                </td>

                <td>${dinhDangGia(tien)}</td>

                <td>
                    <button class="btn-xoa"
                        onclick="xoaKhoiGio(${x.id}); veGio()">
                        Xóa
                    </button>
                </td>
            </tr>
        `;
    });

    html += `
        </table>

        <div class="gh-thanhtoan">
            <div class="gh-tongket">
                <h3>TỔNG KẾT ĐƠN HÀNG</h3>

                <div class="gh-dong">
                    <span>Tạm tính:</span>
                    <span>${dinhDangGia(tong)}</span>
                </div>

                <div class="gh-dong">
                    <span>Phí vận chuyển:</span>
                    <span>Tính khi xác nhận đơn</span>
                </div>

                <div class="gh-dong gh-tong">
                    <strong>Tổng tiền:</strong>
                    <strong>${dinhDangGia(tong)}</strong>
                </div>

                <p class="gh-ghichu">
                    * Tổng tiền chưa bao gồm phí vận chuyển.
                </p>

                <div class="gh-nut">
                    <a href="trangchu.html" class="btn-tieptuc">
                        Tiếp tục mua hàng
                    </a>

                    <button class="btn-thanhtoan"
                        onclick="alert('Đặt hàng thành công.')">
                        Tiến hành thanh toán
                    </button>
                </div>
            </div>
        </div>
    `;

    khung.innerHTML = html;
}

veGio();

