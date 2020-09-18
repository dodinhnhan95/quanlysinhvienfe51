var SinhVienService = function() {
    // phương thức giao tiếp back End qua api => lấy thông tin sinh viên từ server trả về 
    this.layDanhSachSinhVien = function() {
        var promise = axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', // Đường dẫn backend cung cấp để lấy hoặc thêm dữ liệu 
            method: 'GET'// giao thức backend cung cấp 
        });
        return promise;
    }
    this.xoaSinhVien = function(maSinhVien) {
        var promise = axios({
            url: `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`,
            method: 'DELETE'
        })
        return promise;
    }
    this.layThongTinSinhVien1 = function (maSinhVien) {
        var promise = axios({
            url: `http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${maSinhVien}`,
            method: 'GET'
        })
        return promise;
    }
    this.capNhatThongTinSinhVien = function(maSinhVien,sinhVienUpdate) {
        var promise = axios({
            url: `http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${maSinhVien}`,
            method: 'PUT',
            data: sinhVienUpdate
        })
        return promise;
    }
}