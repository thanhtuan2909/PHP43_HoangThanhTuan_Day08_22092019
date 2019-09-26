function handleSubmit() {
	var a	= document.getElementById('a').value;
	
	if (a == '') {
		document.getElementById('error').innerHTML = "Không được để trống";
	} else if (isNaN(a)) {
		document.getElementById('error').innerHTML = "Phải nhập dữ định dạng số";
	} else {
		var gt = 1;
		var so = '';
		if (a == 0) {
			document.getElementById('result').innerHTML = "<b>" + a + "!</b> = " + 1;
		} else {
			for (var i = 1; i <= a; i++) {
				so += i + " x ";
				gt *= i;
			}
			document.getElementById('result').innerHTML = "<b>" + a + "!</b> = " + so.substring(0, so.length - 2) + " = " + gt;
		}
	}
	return false;
}