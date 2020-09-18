// khai báo service 
var svService = new SinhVienService();
var layThongTinSinhVien = function () {
    var promise = svService.layDanhSachSinhVien();
    promise.then(function (result) {// hàm xử lý kế quả trả về thành công 
        var content = '';
        // từ dữ liệu tạo table 
        for (var i = 0; i < result.data.length; i++) {
            // lấy ra từng sinh viên từ kết quả sever trả về 
            var sv = result.data[i];
            // Tạo đối tượng sinhVien chứa dữ liệu đó 
            var sinhVien = new SinhVien();
            sinhVien.maSinhVien = sv.maSinhVien;
            sinhVien.tenSinhVien = sv.tenSinhVien;
            sinhVien.email = sv.email;
            sinhVien.diemToan = sv.diemToan;
            sinhVien.diemLy = sv.diemLy;
            sinhVien.diemHoa = sv.diemHoa;
            sinhVien.maSinhVien = sv.maSinhVien;
            sinhVien.loaiSinhVien = sv.loaiSinhVien;
            sinhVien.diemRenLuyen = sv.diemRenLuyen;
            content += `
         <tr>
         <td>${sinhVien.maSinhVien}</td>
         <td>${sinhVien.tenSinhVien}</td>
         <td>${sinhVien.email}</td>
         <td>${sinhVien.loaiSinhVien}</td>
         <td>${sinhVien.tinhDiemTrungBinh()}</td>
         <td>${sinhVien.diemRenLuyen}</td>
         <td><button class="btn btn-primary" onclick="chinhSua('${sinhVien.maSinhVien}')">Chỉnh sửa</button> </td>
         <td><button class="btn btn-danger " onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xóa</button></td>
         </tr>
        `
        }
        document.getElementById('tblSinhVien').innerHTML = content;
    }).catch(function (err) {
        console.log(err.response.data);
    })

}
layThongTinSinhVien();

// var promise = axios({
//     url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', // Đường dẫn backend cung cấp để lấy hoặc thêm dữ liệu 
//     method: 'GET'// giao thức backend cung cấp 
// });


// var layDuLieuThanhCong = function (result) { // hàm xử lý kết quả trả về 
//     console.log(result.data);

// // phương thức .then(callback): nhận vào 1 hàm có 1 tham số và kết quả trả về thành công từ phía sever( trả về dữ liệu )
// // phương thức .catch(callback): nhận vào có 1 tham số là kết qủa trả về từ phía server thất bại (Trả lỗi)
// promise.then(layDuLieuThanhCong).catch(layDuLieuThatBai);




// -----------------POST: chức năng thêm sinh viên vào server 
document.getElementById('btnThemSinhVien').onclick = function () {
    // lấy thông tin của người dùng nhập vào từ giao diện 
    var sv = new SinhVien();
    sv.maSinhVien = document.getElementById('maSinhVien').value;
    sv.tenSinhVien = document.getElementById('tenSinhVien').value;
    sv.email = document.getElementById('email').value;
    sv.diemToan = document.getElementById('diemToan').value;
    sv.diemLy = document.getElementById('diemLy').value;
    sv.diemHoa = document.getElementById('diemHoa').value;
    sv.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    console.log('sinhVien', sv);

    // tạo ra oject backend cần phải khai báo các biến giốngn như BE 
    // var object = {
    //     {
    //         "maSinhVien": sv.maSinhVien
    //         "tenSinhVien": "string",..
    //         "loaiSinhVien": "string",...
    //         "diemToan": 0,
    //         "diemLy": 0,
    //         "diemHoa": 0,
    //         "diemRenLuyen": 0,
    //         "email": "string"
    //       }
    // }

    axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien', // link BE cung cấp 
        method: 'POST',// phương thức BE cung cấp 
        data: sv // theo định dạng BE yêu cầu 
    }).then(function (result) {
        console.log("kết qủa", result.data);
        // cách 1 location.reload => load lại file script => goi api lấy danh sách sinh viên mới về lại 
        // location.reload();
        // cách 2 gọi lại api layDanhSachSinhVien tại đây 
        layThongTinSinhVien();
    }).catch(function (err) {
        console.log("kết quả", err.response.data);
    })
}


var xoaSinhVien = function (maSinhVien) {
    // gọi api từ back end => trả promise 
    var promise = svService.xoaSinhVien(maSinhVien);
    // dùng promise xử lý thành công hoặc thất bại 
    promise.then(function (result) {
        console.log(result.data);

        // load lại api thấy thông tin sinh viên 
        layThongTinSinhVien();
    }).catch(function (err) {
        console.log(err.response.data);
    })

}
var chinhSua = function (maSinhVien) {
    // hàm này khác với hàm layThongTinSinhVien ở trên nên đặt số 1 để phân biệt 
    var promise = svService.layThongTinSinhVien1(maSinhVien);
    promise.then(function (result) {
        var sinhVien = result.data;
        document.getElementById('maSinhVien').value = sinhVien.maSinhVien;
        document.getElementById('tenSinhVien').value = sinhVien.tenSinhVien;
        document.getElementById('email').value = sinhVien.email;
        document.getElementById('diemToan').value = sinhVien.diemToan;
        document.getElementById('diemLy').value = sinhVien.diemLy;
        document.getElementById('diemHoa').value = sinhVien.diemHoa;
        document.getElementById('diemRenLuyen').value = sinhVien.diemRenLuyen;
        document.getElementById('loaiSinhVien').value = sinhVien.loaiSinhVien;
    }).catch(function (err) {
        console.log(err.response.data);
    })

}
document.getElementById('btnCapNhatSinhVien').onclick=function( ) {
    var sinhVienUpdate = new SinhVien();
    sinhVienUpdate.maSinhVien = document.getElementById('maSinhVien').value;
    sinhVienUpdate.tenSinhVien = document.getElementById('tenSinhVien').value;
    sinhVienUpdate.email = document.getElementById('email').value;
    sinhVienUpdate.diemToan = document.getElementById('diemToan').value;
    sinhVienUpdate.diemLy = document.getElementById('diemLy').value;
    sinhVienUpdate.diemHoa = document.getElementById('diemHoa').value;
    sinhVienUpdate.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    sinhVienUpdate.loaiSinhVien = document.getElementById('loaiSinhVien').value;
    // gọi api câpj nhât sinh viên từ BE cung cấp 
    var promise = svService.capNhatThongTinSinhVien(sinhVienUpdate.maSinhVien,sinhVienUpdate);
    promise.then(function(result){
        console.log(result.data)
        //xửl ý cập nhật thành công 
        layThongTinSinhVien();

    }).catch(function(err){
        console.log(err.response.data);
    })
}

