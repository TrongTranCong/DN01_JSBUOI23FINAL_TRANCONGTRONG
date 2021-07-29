/**
 * Demo lấy giá trị input 
 * 
 * Khối 1: Inputs
 * edge1, edge2
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
 * Area 
 * Perimeter
 */

//B1: Tìm tới thẻ inputs
var edge1ELE = document.getElementById("edge1");
var edge2ELE = document.getElementById("edge2");
var areaELE = document.getElementById("area");
var perimeterELE = document.getElementById("perimeter");
var Cal = document.getElementById("btnCal");
// B2: Taọ hàm function
document.getElementById("btnCal").onclick = function (){
    var edge1 = parseInt(edge1ELE.value);
    var edge2 = parseInt(edge2ELE.value);
    areaELE.value = edge1 * edge2;
    perimeterELE.value = (edge1 + edge2)*2;
}