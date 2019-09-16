function DanhSachNguoiDung() {


    //lấy danh sach nguoi dung
    this.layDanhSachNguoiDung = function () {
        //su dung AJAX
        return $.ajax({
            url: "http://5d78df49a8c27100149866b3.mockapi.io/api/NguoiDung",
            type: "GET"
        })  
    };


    //phuong thuc them nguoi dung
    this.themNguoiDung = function(nguoiDung){
        return $.ajax({
            url: "http://5d78df49a8c27100149866b3.mockapi.io/api/NguoiDung",
            type: "POST",
            data: nguoiDung
        })
    };
}

//cach viet khac 1 phuong thuc ben ngoai phuong thuc cũ function DanhSachNguoiDung()
DanhSachNguoiDung.prototype.xoaNguoiDung = function(){
    return $.ajax({
        url: `http://5d78df49a8c27100149866b3.mockapi.io/api/NguoiDung/${id}`,
        type: "DELETE"
    })
}

//lấy thông tin nguoi dung
DanhSachNguoiDung.prototype.layThongTinNguoiDung = function(id){
    return $.ajax({
        url: `http://5d78df49a8c27100149866b3.mockapi.io/api/NguoiDung/${id}`,url: `http://5d78df49a8c27100149866b3.mockapi.io/api/NguoiDung/${id}`,
        type: "GET"
    })
}

//cap nhat nguoi dung
DanhSachNguoiDung.prototype.capNhatNguoiDung = function(id, nguoiDung){
    return $.ajax({
        url: `http://5d78df49a8c27100149866b3.mockapi.io/api/NguoiDung/${id}`,
        type: "PUT",
        data: nguoiDung
    });
};
