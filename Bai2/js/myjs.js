function handleSubmit() {
	var num = document.getElementById('num').value;

	if (num == '') {
		document.getElementById('error').innerHTML = "Không được bỏ trống trường này";
	} else if (isNaN(num)) {
		document.getElementById('error').innerHTML = "Bạn phải nhập định dạng số";
	} else if ((1 < num && num < 10) || (50 < num && num < 100)){
		document.getElementById('error').style = "display: none";
		document.getElementById('result').innerHTML = num + " nằm trong khoảng 1 - 10 hoặc 50 - 100";
	} else {
		document.getElementById('error').style = "display: none";
		document.getElementById('result').innerHTML = num + " không nằm trong khoảng 1 - 10 hoặc 50 - 100" + "<br>Khoảng (a,b) khác đoạn [a,b]";
	}
	return false;
}