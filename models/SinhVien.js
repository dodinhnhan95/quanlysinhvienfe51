var SinhVien = function (masv,tensv,email,diemtoan,diemly,diemhoa,diemrenluyen,loaisinhvien) { //Lớp đối tượng sinh viên
    this.maSinhVien = masv; //Các thuộc tính của class SinhVien
    this.tenSinhVien = tensv;
    this.email = email;
    this.diemToan = diemtoan;
    this.diemLy = diemly;
    this.diemHoa = diemhoa;
    this.diemRenLuyen = diemrenluyen;
    this.loaiSinhVien = loaisinhvien;
    this.xepLoai = function() {
        return 'thành bê đê '
=======
    this.xepLoai = function () {
        return 'Bá đạo';
>>>>>>> c4b22cf3d89134af46431a1a00cb076b1993acec
    }
    this.tinhDiemTrungBinh = function () {
        var dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) /3;
        return dtb;
    }
    this.name = "abababba";
}