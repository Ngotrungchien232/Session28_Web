let students = [
  { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
  { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
  { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } },
];

function locSinhVien() {
  let danhSachSinhVien = [];

  for (let i = 0; i < students.length; i++) {
    let tongDiem =
      students[i].scores.math +
      students[i].scores.english +
      students[i].scores.literature;
    let trungBinh = tongDiem / 3;

    if (trungBinh >= 8) {
      danhSachSinhVien.push(students[i].name);
    }

    return danhSachSinhVien;
  }
}

let ketQua = locSinhVien();

alert("Các sinh viên có điểm trung bình >= 8 là: " + ketQua.join(", "));
