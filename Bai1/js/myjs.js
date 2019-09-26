function checkInput(num1, num2) {
	if (num1 == '' || num2 == '') {
		document.getElementById('result').innerHTML = '';
		document.getElementById('error').innerHTML = 'Không được để trống dữ liệu';
		return false;
	} else if (isNaN(num1) || isNaN(num2)) {
		document.getElementById('result').innerHTML = '';
		document.getElementById('error').innerHTML = 'Cập nhật dữ liệu là số';
		return false;
	}
	document.getElementById('error').style = '';
	return true;
}

function check2(num1) {
	if (num1 == '') {
		document.getElementById('result').innerHTML = '';
		document.getElementById('error').innerHTML = 'Không được để trống dữ liệu';
		return false;
	} else if (isNaN(num1)) {
		document.getElementById('result').innerHTML = '';
		document.getElementById('error').innerHTML = 'Cập nhật dữ liệu là số';
		return false;
	}
	document.getElementById('error').style = '';
	return true;
}

function sum(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	if (checkInput(num1, num2) == true) {
		var sum =  parseInt(num1) + parseInt(num2);
		document.getElementById('result').innerHTML = "a + b = " + sum;
	}
	return false;
}

function sub(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	if (checkInput(num1, num2) == true) {
		var sub =  parseInt(num1) - parseInt(num2);
		document.getElementById('result').innerHTML = "a - b = " + sub;
	}
	return false;
}

function mul(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	if (checkInput(num1, num2) == true) {
		var mul =  parseInt(num1) * parseInt(num2);
		document.getElementById('result').innerHTML = "a x b = " + mul;
	}
	return false;
}

function div(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	if (checkInput(num1, num2) == true) {
		var div =  parseInt(num1) / parseInt(num2);
		document.getElementById('result').innerHTML = "a / b = " + div;
	}
	return false;
}

function per(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	if (checkInput(num1, num2) == true) {
		var per =  parseInt(num1) % parseInt(num2);
		document.getElementById('result').innerHTML = "a % b = " + per;
	}
	return false;
}

function incs(){
	var num1 = document.getElementById('num1').value;
	if (check2(num1) == true) {
		var incs =  num1++;
		document.getElementById('result').innerHTML = "a++ = " + incs;
	}
	return false;
}

function inct(){
	var num1 = document.getElementById('num1').value;
	if (check2(num1) == true) {
		var inct =  ++num1;
		document.getElementById('result').innerHTML = "a++ = " + inct;
	}
	return false;
}

function decs(){
	var num1 = document.getElementById('num1').value;
	if (check2(num1) == true) {
		var decs =  num1--;
		document.getElementById('result').innerHTML = "a++ = " + decs;
	}
	return false;
}

function dect(){
	var num1 = document.getElementById('num1').value;
	if (check2(num1) == true) {
		var dect =  --num1;
		document.getElementById('result').innerHTML = "a++ = " + dect;
	}
	return false;
}