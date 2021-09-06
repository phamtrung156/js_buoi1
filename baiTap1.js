// viết chương trình tính chiều dài cạnh huyền cả 1 tam giác vuông khi biết 2 cạnh góc vuông.
// canh_1 = 3
// canh_2 = 4
// canh_huyen = 0
//dau vao
//  khai báo bien
var canh_1 = 3;
var canh_2 = 4;
var canh_huyen = 0;

// xử lý
canh_huyen = Math.sqrt(canh_1*canh_1 + canh_2* canh_2);
// Math.sqrt tương ứng với căn bậc 2.

// đầu ra.
console.log("kết qua cạnh huyền là : " + canh_huyen);