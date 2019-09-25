function handleSubmit() {
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var c = document.getElementById('c').value;

	if (a == '' || b == '' || c == '') {
		document.getElementById('error').innerHTML = "Không được để trống trường này";
	} else if (isNaN(a) || isNaN(b) || isNaN(c)) {
		document.getElementById('error').innerHTML = "Bạn phải nhập định dạng là số";
	} else if (a == 0) {
		document.getElementById('error').innerHTML = '';
		if (b == 0) {
			if (c == 0) {
				document.getElementById('result').innerHTML = "Phương trình vô số nghiệm";
				document.getElementById('showpt').innerHTML = c + " = 0";
			} else {
				document.getElementById('result').innerHTML = "Phương trình vô nghiệm";
				document.getElementById('showpt').innerHTML = c + " = 0";
			}
		} else if (b > 0){
			if (c > 0) {
				document.getElementById('showpt').innerHTML = a + "x<sup>2</sup> + " + b + "x + " + c + " = 0";
			} else if (c == 0) {
				document.getElementById('showpt').innerHTML = a + "x<sup>2</sup> + " + b + "x " + " = 0";
			} else {
				document.getElementById('showpt').innerHTML = a + "x<sup>2</sup> + " + b + "x - " + (-c) + " = 0";
			}
			document.getElementById('result').innerHTML = "x = " + (-c/b);
		} else {
			if (c > 0) {
				document.getElementById('showpt').innerHTML = a + "x<sup>2</sup> - " + (-b) + "x + " + c + " = 0";
			} else if (c == 0) {
				document.getElementById('showpt').innerHTML = a + "x<sup>2</sup> - " + (-b) + "x " + " = 0";
			} else {
				document.getElementById('showpt').innerHTML = a + "x<sup>2</sup> - " + (-b) + "x - " + (-c) + " = 0";
			}
			document.getElementById('result').innerHTML = "x = " + (-c/b);
		}
	} else {
		document.getElementById('error').style = 'display: none;';
		var denta = b*b - 4*(a*c);
		if (denta < 0) {
			document.getElementById('result').innerHTML = "Phương trình vô nghiệm";
			if (b < 0) {
				if (c < 0) {
					document.getElementById('showpt').innerHTML = a + "x<sup>2</sup> - " + (-b) +"x - " + (-c) + " = 0";
				} else {
					document.getElementById('showpt').innerHTML = a + "x<sup>2</sup> - " + (-b) +"x + " + c + " = 0";
				}
			} else {
				if (c < 0) {
					document.getElementById('showpt').innerHTML = a + "x<sup>2</sup> + " + b +"x - " + (-c) + " = 0";
				} else {
					document.getElementById('showpt').innerHTML = a + "x<sup>2</sup> + " + b +"x + " + c + " = 0";
				}
			}
		} else if (denta == 0) {
			document.getElementById('result').innerHTML = "x<sub>1</sub> = " + "x<sub>2</sub> = " + (-b/(2*a));
			document.getElementById('showpt').innerHTML = a + "x<sup>2</sup> + " + b +"x + " + c + " = 0";
		} else {
			var x1 = (-b + Math.sqrt(b*b - 4*(a*c)))/(2*a);
			var x2 = (-b - Math.sqrt(b*b - 4*(a*c)))/(2*a);
			if (b < 0) {
				if (c < 0) {
					document.getElementById('showpt').innerHTML = a + "x<sup>2</sup> - " + (-b) +"x - " + (-c) + " = 0";
				} else {
					document.getElementById('showpt').innerHTML = a + "x<sup>2</sup> - " + (-b) +"x + " + c + " = 0";
				}
			} else {
				if (c < 0) {
					document.getElementById('showpt').innerHTML = a + "x<sup>2</sup> + " + b +"x - " + (-c) + " = 0";
				} else {
					document.getElementById('showpt').innerHTML = a + "x<sup>2</sup> + " + b +"x + " + c + " = 0";
				}
			}
			document.getElementById('result').innerHTML = "x<sub>1</sub> = " + x1 + "<br>" + "x<sub>2</sub> = " + x2;
		}

	}
	return false;
}