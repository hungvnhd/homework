                                //Bài tập về biến, kiểu dữ liệu và toán tử

//Bài tập 1: 

let vatly = (Number(prompt("Điểm vật lý của bạn là bao nhiêu?")));
let hoahoc = (Number(prompt("Điểm hoá học của bạn là bao nhiêu?")));
let sinhhoc= (Number(prompt("Điểm sinh học của bạn là bao nhiêu?")));
alert (`${"Điểm trung bình 3 môn của bạn là: " + (vatly + hoahoc + sinhhoc)/3}`);

let tongdiem = vatly + hoahoc + sinhhoc;

alert (`${"Tổng điểm 3 môn của bạn là: " + tongdiem} `);

//Bài tập 2:

let celcius =(Number(prompt("Mời bạn nhập giá trị của nhiệt độ trong thang đo nhiệt Celcius")));
alert(`${"Giá trị sau khi quy đổi sang thang đo nhiệt Fahrenheit là: " + ((celcius*9/5) + 32)}`);

//Bài tập 3 :

let bankinh =(Number(prompt("Mời bạn nhập bán kính đường tròn cần tính diện tích")));
alert(`${"Diện tích của đường tròn là: " + ((bankinh**2)*Math.PI)}`);

//Bài tập 4 :

let bankinh2 =(Number(prompt("Mời bạn nhập bán kính đường tròn cần tính chu vi")));
alert(`${"Chu vi của đường tròn là: " + (bankinh2*2*Math.PI)}`);



    




