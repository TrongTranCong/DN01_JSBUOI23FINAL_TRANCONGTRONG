/**
 * Demo lấy giá trị input và 
 * 
 * Khối 1: Inputs
 * amount ($)
 * 
 * 
 * Khối 2:
 * B1: Tìm tới thẻ inputs
 * Tìm tới thẻ button
 * 
 * B2: Tạo hàm function
 *  -Lấy giá trị từ inputs
 *  -Hiển thị thông báo lên UI (console.log)
 * B3: Gắn sự kiện (events) click cho button
 * onlick
 * 
 * Khối 3: output
 * Hiển thị thông báo giá trị
 * Exchange 
 * 
 */
//B1: Tìm tới thẻ inputs

var rateELE= document.getElementById("rateExchange");
var amountELE = document.getElementById("amountInput");
var exchangeELE = document.getElementById("result");

// B2:Tạo hàm function
document.getElementById("btnCal").onclick= function (){
    // Chứa các code xử lý sau khi user đã click 
    // Lấy giá trị từ form
    var rate = parseInt(rateELE.value);
    var amount = parseInt(amountELE.value);
    exchangeELE.value= amount * rate;
}