
function checkSoNguyenTo() {
	var a = document.getElementById('a').value;
	if (a == '') {
		document.getElementById('error').innerHTML = "Không được đế trống các trường";
		document.getElementById('result').innerHTML = "";
	} else if(isNaN(a)) {
		document.getElementById('error').innerHTML = "Bạn phải nhập số";
		document.getElementById('result').innerHTML = "";
	} else if (a < 2) {
		document.getElementById('error').innerHTML = "Số nguyên tố là số tự nhiên lớn hơn 1";
		document.getElementById('result').innerHTML = "";
	} else if (a == 2) {
		document.getElementById('result').innerHTML = a + " là số nguyên tố";;
		document.getElementById('error').innerHTML = "";
	} else {
		for (var i = 2; i < a; i++) {
			if (a % i == 0) {
				document.getElementById('result').innerHTML = a + " không phải là số nguyên tố";
				document.getElementById('error').innerHTML = "";
				return false;
			} else {
				document.getElementById('result').innerHTML = a + " là số nguyên tố";
				document.getElementById('error').innerHTML = "";
			}
		}
	}
	return false;
}