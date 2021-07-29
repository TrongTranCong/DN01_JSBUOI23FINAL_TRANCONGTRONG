/**
 * Demo lấy giá trị input và 
 * 
 * Khối 1: Inputs
 * numbers
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
 * averge numbers
 * 
 */

// B1:Tìm tới thẻ inputs
var num1ELE = document.getElementById("num1");
var num2ELE = document.getElementById("num2");
var num3ELE = document.getElementById("num3");
var num4ELE = document.getElementById("num4");
var num5ELE = document.getElementById("num5");
var resultELE = document.getElementById("result");
// B2:Tạo hàm function
document.getElementById("btnCal").onclick= function (){
    var num1 = parseInt(num1ELE.value);
    var num2 = parseInt(num2ELE.value);
    var num3 = parseInt(num3ELE.value);
    var num4 = parseInt(num4ELE.value);
    var num5 = parseInt(num5ELE.value);
    var sumNums = num1 + num2 + num3 + num4 + num5;
    resultELE.value = sumNums/5;
}
    

  
