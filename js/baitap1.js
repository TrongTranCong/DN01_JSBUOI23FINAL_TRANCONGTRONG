/**
 * Khối 1: Input
 * Lương 1 ngày: 100000
 * Số ngày làm
 * 
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo và gán giá trị cho số ngày, tiền lương 1 ngày
 * B2: Tạo biến chứa số ngày, tiền lương
 * B3: Xây dựng công thức tính tiền lương ngày làm
 * Lương 1 ngày * số ngày làm = tổng tiền lương 
 * Chuyển sang lập trình:
 * sumSal = salDay * day
 * B4: hiện kết quả lên console  
 * 
 * Khối 3: Output
 * Tiền lương ngày làm
 * 
 */
// Tạo và gán giá trị 
// B1: Tìm tới các thẻ cần xử lý
var salDayELE = document.getElementById("salDay");
var dayWorkELE = document.getElementById("dayWork");
var btnIncome = document.getElementById("btnIncome");
var resultELE = document.getElementById("result");
// var sumSal = document.getElementById("sumSal");

// B2: Gắn onClick
btnIncome.onclick = function () {
    // Chứa các code xử lý sau khi user đã click 
    // Lấy giá trị từ form
    var days = dayWorkELE.value;
    var dayIncome = salDayELE.value;
    resultELE.value = days * dayIncome;
}


