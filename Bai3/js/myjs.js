function handleSubmit() {
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;

	if (a == '' || b == '') {
		document.getElementById('error').innerHTML = "Không được để trống trường này";
	} else if (isNaN(a) || isNaN(b)) {
		document.getElementById('error').innerHTML = "Bạn phải nhập định dạng là số";
	} else if (a == 0) {
		if (b == 0) {
				document.getElementById('result').innerHTML = "Phương trình vô số nghiệm";
				document.getElementById('showpt').innerHTML = b + " = 0";
		} else {
				document.getElementById('result').innerHTML = "Phương trình vô nghiệm";
				document.getElementById('showpt').innerHTML = b + " = 0";
		}
	} else {
		if (b > 0) {
			document.getElementById('showpt').innerHTML = a + "x + " + b + " = 0";
		} else if (b == 0) {
			document.getElementById('showpt').innerHTML = a + "x " + " = 0";
		} else {
			document.getElementById('showpt').innerHTML = a + "x - " + (-b) + " = 0";
		}
		document.getElementById('result').innerHTML = "x = " + (-b/a);
	}
	return false;
}