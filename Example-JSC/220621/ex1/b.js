function form1() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;

    var DT = a == 0 || b == 0 || (a == 0 && b == 0) ? 0 : a * b;
    var CV = a == 0 || b == 0 || (a == 0 && b == 0) ? 0 : (a + b) * 2;
    if (DT >= 0 && CV >= 0) {
        document.getElementById("CV").innerHTML = `Chu Vi : ${CV} cm`;
        document.getElementById("DT").innerHTML = `Diện Tích : ${DT} cm2`;
    }


}

function form2() {
    var kWh = Number(document.getElementById("kWh").value);

    if (kWh < 51)
        var value = 1549;
    else if (kWh < 101)
        var value = 1600;
    else if (kWh < 201)
        var value = 1858;
    else if (kWh < 301)
        var value = 2340;
    else if (kWh < 401)
        var value = 2615;
    else if (kWh > 401)
        var value = 2701;
    else var value = 0;

    var total = (Number(value) * kWh) * 30;
    if (isNaN(total)) {
        document.getElementById("kWhTxt").innerHTML = `Nhập vào số đi bạn ơi`;
    } else {
        total = total.toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND'
        });
        document.getElementById("kWhTxt").innerHTML = `Tiền điện : ${total}`;
    }

}

function form3() {

    var name = document.getElementById("nametxt").value;
    var dt = Number(document.getElementById("num1txt").value);
    var th = Number(document.getElementById("num2txt").value);
    var kt = Number(document.getElementById("num3txt").value);
    if ((dt <= 10 && th <= 10 && kt <= 10) && (dt > 1 && th > 1 && kt > 1) && name) {
        var qt = ((dt * 0.2) + (th * 0.4) + (kt * 0.4));
        var dtt = (dt + th + kt) / 3;
        var td = (qt + dtt) / 2;
        document.getElementById("name").innerHTML = `${name}`;
        document.getElementById("qtrinh").innerHTML = `${qt.toFixed(2)}`;
        document.getElementById("dt").innerHTML = `${dtt.toFixed(2)}`;
        document.getElementById("dtt").innerHTML = `${td.toFixed(2)}`;
        document.getElementById("td").innerHTML = `${dt}`;
        document.getElementById("th").innerHTML = `${th}`;
        document.getElementById("kt").innerHTML = `${kt}`;
        // Sinh viên được xếp loại 
        // A nếu điểm môn học đạt 8.5 trở lên;
        // B - nếu điểm môn học từ 6.5 đến dưới 8.5; 
        // C - nếu điểm môn học từ 5.0 đến dưới 6.5; 
        // D - nếu điểm môn học dưới 5.0.
        if (td < 5)
            var text = 'D';
        else if (td <= 6.5)
            var text = 'C';
        else if (td <= 8.5)
            var text = 'B';
        else if (td <= 10)
            var text = 'A';
        else var text = 'E';
        document.getElementById("xl").innerHTML = `${text}`;
    } else {
        document.getElementById("name").innerHTML = `NHẬP SAI | LỖI ĐIỂM `;
        document.getElementById("qtrinh").innerHTML = `NHẬP SAI | LỖI ĐIỂM `;
        document.getElementById("dt").innerHTML = `NHẬP SAI | LỖI ĐIỂM `;
        document.getElementById("dtt").innerHTML = `NHẬP SAI | LỖI ĐIỂM `;
        document.getElementById("td").innerHTML = `NHẬP SAI | LỖI ĐIỂM `;
        document.getElementById("th").innerHTML = `NHẬP SAI | LỖI ĐIỂM `;
        document.getElementById("kt").innerHTML = `NHẬP SAI | LỖI ĐIỂM `;
    }
}