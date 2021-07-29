/**
 * Demo lấy giá trị input 
 * 
 * Khối 1: Inputs
 * number (2-digits)
 * 
 * 
 * Khối 2:
 * B1: Tìm tới thẻ inputs
 * Tìm tới thẻ button
 * 
 * B2: Tạo hàm function
 *  -Lấy giá trị từ inputs
 *  -Hiển thị thông báo lên UI 
 * B3: Gắn sự kiện (events) click cho button
 * onlick
 * 
 * Khối 3: output
 * Hiển thị thông báo giá trị
 * Sum of 2-digits character
 * 
 */

//B1: Tìm tới thẻ inputs
var num2digitsELE = document.getElementById("num");
var sumELE = document.getElementById("sum2digits");
// B2: Taọ hàm function
document.getElementById("btnCal").onclick = function (){
    var num2digits = num2digitsELE.value;
    Ten = Math.floor(num2digits/10);
    Unit = Math.floor(num2digits%10);
    sumELE.value = Ten + Unit;
}