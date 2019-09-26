function checkInputForm(cols) {
	if (cols == '') {
		document.getElementById('error').innerHTML = "Không được để trống";
		return false;
	} else if (isNaN(cols)) {
		document.getElementById('error').innerHTML = "Bạn phải nhập số";
		return false;
	}
	document.getElementById('error').innerHTML = '';
	return true;
}


function draw() {
	var cols = document.getElementById('cols').value;
	if (checkInputForm(cols)) {
		for (var i = 1; i <= cols; i++){
			for (var j = 1; j <= i; j++){
				document.write(' * ');
				//document.getElementById('result').innerHTML = ' * ';
			}
			document.write("<br>");
			//document.getElementById('result').innerHTML = '<br>';
		}
	}
	return false;
}