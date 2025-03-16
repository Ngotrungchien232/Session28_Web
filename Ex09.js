let books = [];
let choice;
let a = true;

// các hàm
function addBook() {
  let id = books.length + 1;
  let title = prompt("Nhập tên sách:");
  let author = prompt("Nhập tên tác giả:");
  let year = +prompt("Nhập năm xuất bản:");
  let price = +prompt("Nhập giá sách:");
  let isAvailable = true;

  let newBook = { id, title, author, year, price, isAvailable };
  books.push(newBook);
  alert("Thêm sách thành công!");
}

function displayBooks() {
  if (books.length === 0) {
    alert("Danh sách sách trống.");
    return;
  }

  let bookList = books
    .map(
      (book) =>
        `ID: ${book.id}, Tiêu đề: ${book.title}, Tác giả: ${book.author}, 
       Năm XB: ${book.year}, Giá: ${book.price}, 
       Trạng thái: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`
    )
    .join("\n\n");

  alert("Danh sách sách:\n" + bookList);
}

function searchBookByTitle() {
  let searchTitle = prompt("Nhập tiêu đề sách cần tìm:");
  let foundBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  if (foundBooks.length === 0) {
    alert("Không tìm thấy sách.");
    return;
  }

  let result = foundBooks
    .map(
      (book) =>
        `ID: ${book.id}, Tiêu đề: ${book.title}, Tác giả: ${
          book.author
        }, Trạng thái: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`
    )
    .join("\n\n");

  alert("Kết quả tìm kiếm:\n" + result);
}

function updateBookStatus() {
  let bookId = +prompt("Nhập ID sách cần cập nhật trạng thái:");
  let book = books.find((b) => b.id === bookId);

  if (!book) {
    alert("Không tìm thấy sách.");
    return;
  }

  book.isAvailable = !book.isAvailable;
  alert(
    `Trạng thái sách đã cập nhật thành: ${
      book.isAvailable ? "Có sẵn" : "Đã mượn"
    }`
  );
}

function deleteBook() {
  let bookId = +prompt("Nhập ID sách cần xóa:");
  let index = books.findIndex((b) => b.id === bookId);

  if (index === -1) {
    alert("Không tìm thấy sách.");
    return;
  }

  books.splice(index, 1);
  alert("Sách đã được xóa.");
}

function sortBooksByPrice() {
  if (books.length === 0) {
    alert("Danh sách sách trống.");
    return;
  }

  books.sort((a, b) => a.price - b.price);
  alert("Đã sắp xếp sách theo giá tăng dần.");
}

let menu = `
------ MENU ------
1. Thêm sách mới.
2. Hiển thị danh sách sách.
3. Tìm kiếm sách theo tiêu đề.
4. Cập nhật trạng thái mượn/trả sách theo id sách.
5. Xóa sách theo id sách ra khỏi danh sách.
6. Sắp xếp sách theo giá tăng dần.
7. Thoát.

Lựa chọn của bạn là gì?
`;

while (a) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      addBook();
      break;
    case 2:
      displayBooks();
      break;
    case 3:
      searchBookByTitle();
      break;
    case 4:
      updateBookStatus();
      break;
    case 5:
      deleteBook();
      break;
    case 6:
      sortBooksByPrice();
      break;
    case 7:
      running = false;
      alert("Chương trình đã thoát.");
      break;
    default:
      alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
  }
}
