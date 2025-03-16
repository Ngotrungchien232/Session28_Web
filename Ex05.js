const company = {
  name: "RikkeiSoft",
  location: "Hà Nội",
  employees: [
    { name: "Nguyễn Văn Luận", position: "Developer" },
    { name: "Nguyễn Văn Hoàng", position: "Tester" },
    { name: "Hoàng Nam Cao", position: "Manager" },
  ],
};

console.log("Tên công ty:", company.name);

// Hiển thị tên của từng nhân viên
console.log("Danh sách nhân viên:");
company.employees.forEach((employee) => {
  //company.employees là một mảng chứa danh sách sinh viên
  // dùng forEach để duyệt qua từng phần tử có trong mảng

  console.log("- " + employee.name); // in ra tên nhân viên có dấu - phía trước
});
