function handleSubmit() {
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	var num3 = document.getElementById('num3').value;
	if (num1 == '' || num2 == '' || num3 == '') {
		document.getElementById('error').innerHTML = 'Bạn không được để trống';
	} else if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
		document.getElementById('error').innerHTML = 'Bạn phải nhập định dạng số';
	} else {
		var arr = [num1, num2, num3];
		for (var i = 0; i < 3; i++) {
			for (var j = i+1; j <= 3; j++) {
				if (arr[i] > arr[j]) {
					var tmp = arr[i];
					arr[i]	= arr[j];
					arr[j]	= tmp;
				}
			}
		}
		document.getElementById('error').style = 'display: none;';
		document.getElementById('result').innerHTML = "Số lớn nhất: " + "<b>" + arr[2] + "</b>" + "<br>" + "Số nhỏ nhất: " + "<b>" + arr[0] + "</b>";
	}
	return false;
}