// viết chương trình tính nhập vào số nguyên dương n với 3 kí số
// tính và xuấ tooogr của 3 kí số

// đâu vào
var n = 246;
var hangTram = 0;
var hangChuc = 0; 
var hangDonVi = 0;

// xử lý

hangTram =  Math.floor(n/100);
hangChuc = Math.floor(n % 100 / 10);
hangDonVi = n % 10;

// Math.floor lấy số nguyên ví dụ 5.6 = 5.




var tong = hangTram + hangChuc + hangDonVi
// dau ra

console.log(" ket quả là " + tong);

