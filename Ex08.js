let employees = [];
let choice;
let a = true;

// viết các hàm ở đây
function addEmployee() {
  let id = employees.length + 1;
  let name = prompt("Nhập tên nhân viên:");
  let position = prompt("Nhập chức vụ:");
  let salary = +prompt("Nhập mức lương:");

  let newEmployee = { id, name, position, salary };
  employees.push(newEmployee);
  alert("Thêm nhân viên thành công!");
}

function deleteEmployee() {
  let empId = +prompt("Nhập ID nhân viên cần xóa:");
  let index = employees.findIndex((emp) => emp.id === empId);

  if (index === -1) {
    alert("Không tìm thấy nhân viên.");
    return;
  }

  let confirmDelete = confirm(
    `Bạn có chắc muốn xóa nhân viên: ${employees[index].name}?`
  );
  if (confirmDelete) {
    employees.splice(index, 1);
    alert("Nhân viên đã được xóa.");
  } else {
    alert("Hủy thao tác xóa.");
  }
}

function updateSalary() {
  let empId = +prompt("Nhập ID nhân viên cần cập nhật lương:");
  let employee = employees.find((emp) => emp.id === empId);

  if (!employee) {
    alert("Không tìm thấy nhân viên.");
    return;
  }

  let newSalary = +prompt(`Nhập mức lương mới cho ${employee.name}:`);
  employee.salary = newSalary;
  alert("Cập nhật lương thành công!");
}

function searchEmployee() {
  let searchName = prompt("Nhập tên nhân viên cần tìm:");
  let foundEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchName.toLowerCase())
  );

  if (foundEmployees.length === 0) {
    alert("Không tìm thấy nhân viên.");
    return;
  }

  let result = foundEmployees
    .map(
      (emp) =>
        `ID: ${emp.id}, Tên: ${emp.name}, Chức vụ: ${emp.position}, Lương: ${emp.salary}`
    )
    .join("\n\n");

  alert("Kết quả tìm kiếm:\n" + result);
}

let menu = `
------ MENU ------
1. Thêm nhân viên mới.
2. Xóa nhân viên theo id.
3. Cập nhật mức lương của nhân viên theo id.
4. Tìm kiếm nhân viên theo tên.
5. Thoát.

Lựa chọn của bạn là gì?
`;

while (a) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      addEmployee();
      break;
    case 2:
      deleteEmployee();
      break;
    case 3:
      updateSalary();
      break;
    case 4:
      searchEmployee();
      break;
    case 5:
      running = false;
      alert("Chương trình đã thoát.");
      break;
    default:
      alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
  }
}
