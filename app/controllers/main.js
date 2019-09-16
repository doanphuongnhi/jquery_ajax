$(document).ready(function () {

    //goi phuong thuc ben DanhSachNguoiDung
    var danhSachNguoiDung = new DanhSachNguoiDung();

    getListUser();

    function getListUser() {
        danhSachNguoiDung.layDanhSachNguoiDung()
            //thuc thi ajax o tren(tuong ung khi nhan send)
            //thanh cong chay done
            .done(function (result) {
                taoBang(result);
            })
            //neu ko thanh cong chay error
            .fail(function (error) {
                console.log(error);
            });

        console.log(this.mangNguoiDung);

    }

    //xu ly nut xoa
    $("body").delegate(".btnXoa", "click", function () {
        var id = $(this).data("id");

        danhSachNguoiDung.xoaNguoiDung(id)
            .done(function (result) {
                getListUser();
            })
            .fail(function (error) {
                console.log(error);
            })
    });

// //xu ly sua nguoi dung
// $("body").delegate(".btnSua", "click", function(){
//     $(".model-title").html("Sửa thông tin");

//     var footer= `
//     <button id="btnCapNhat" class=' btn btn-success' >Cập nhật</button>
//     `
//     $(".modal-footer").html(footer);

//     var id = $(this).data("id");
//     danhSachNguoiDung.layDanhSachNguoiDung(id)
//     .done(function(result){
//         $("#TaiKhoan").val(result.taiKhoan);
//         $("#HoTen").val(result.hoTen);
//         $("#MatKhau").val(result.matKhau);
//         $("#Email").val(result.email);
//         $("#SoDienThoai").val(result.soDT);
//         $("#loaiNguoiDung").val(result.maLoaiNguoiDung);

//         console.log(result);
//     })
//     .fail(function(error){
//         console.log(error);
//     })
// })

    //tao bang duyet từ mảng có sẵn
    function taoBang(mang) {
        var content = "";
        mang.map(function (item, index) {
            content += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.taiKhoan}</td>
                <td>${item.hoTen}</td>
                <td>${item.matKhau}</td>
                <td>${item.email}</td>
                <td>${item.soDT}</td>
                <td>${item.maLoaiNguoiDung}</td>
                <td>
                    <button class='btnSua btn btn-info' data-id="${item.id}" data-toggle="modal" data-target="#myModal">Sửa</button>
                    <button class='btnXoa btn btn-danger' data-id="${item.id}">Xóa</button>
                </td>
            </tr>
            `
        })
        $("#tblDanhSachNguoiDung").html(content);
    }

    //cap nhat
    $("body").delegate("#btnCapNhat", "click",function(){
        var id = $(this).data("id");
        var taiKhoan = $("#TaiKhoan").val();
        var hoTen = $("#HoTen").val();
        var matKhau = $("#MatKhau").val();
        var email = $("#Email").val();
        var soDT = $("#SoDienThoai").val();
        var maLoaiNguoiDung = $("#loaiNguoiDung").val();

        var nguoiDung = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT, maLoaiNguoiDung);

        danhSachNguoiDung
        .capNhatNguoiDung(id,nguoiDung)
        .done(function(result){
            console.log(result);
            getListUser();
        })
        .fail(function(error){
            console.log(error);
        })
    });


    //=================== đổi và thêm cho bảng them nguoi dung
    $("#btnThemNguoiDung").click(function () {
        $(".modal-title").html("Thêm người dùng");

        //thêm nút them nguoi dung moi trong #btnThemNguoiDung
        var footer = `
            <button id="btnThem" class="btn btn-success" data-id="${id}">Thêm người dùng</button>
        `
        $(".modal-footer").html(footer);
    })


  /* Lấy thông tin người dùng */
  $("body").delegate(".btnSua", "click", function() {
    $(".modal-title").html("Sửa người dùng");
    var id = $(this).data("id");
    var footer = `    
        <button id="btnCapNhat" class="btn btn-success" data-id="${id}">Cập nhật</button>
      `;

    $(".modal-footer").html(footer);

    
    danhSachNguoiDung
      .layThongTinNguoiDung(id)
      .done(function(result) {
        $("#TaiKhoan").val(result.taiKhoan);
        $("#HoTen").val(result.hoTen);
        $("#MatKhau").val(result.matKhau);
        $("#Email").val(result.email);
        $("#SoDienThoai").val(result.soDT);
        $("#loaiNguoiDung").val(result.maLoaiNguoiDung);
      })
      .fail(function(err) {
        console.log(err);
      });
  });

    //xu ly chuc nang them
    $("body").delegate("#btnThem", "click", function () {
        var id = $(this).data("id");
        var taiKhoan = $("#TaiKhoan").val();
        var hoTen = $("#HoTen").val();
        var matKhau = $("#MatKhau").val();
        var email = $("#Email").val();
        var soDT = $("#SoDienThoai").val();
        var maLoaiNguoiDung = $("#loaiNguoiDung").val();

        var nguoiDung = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT, maLoaiNguoiDung);

        danhSachNguoiDung.themNguoiDung(nguoiDung)
            .done(function (result) {
                getListUser();
            })
            .fail(function (error) {
                console.log(error);
            })
    });

})