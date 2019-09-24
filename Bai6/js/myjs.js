function handleSubmit() {
	var str1 = document.getElementById('str1').value;
	var str2 = document.getElementById('str2').value;
	var check = str1.includes(str2);
	if (str1 == '' || str2 == '') {
		document.getElementById('error').innerHTML = "Các trường không được để trống";
	} else if(check == true) {
			document.getElementById('error').style = 'display: none;';
			document.getElementById('result').style = 'margin: 20px auto; color: green;';
			document.getElementById('result').innerHTML = "Chuỗi " + "<b>" + str2 + "</b>" + " tồn tại trong chuỗi ban đầu " + "<b>" + str1 + "</b>";
	} else {
			document.getElementById('error').style = 'display: none;';
			document.getElementById('result').style = 'margin: 20px auto; color: blue;';
			document.getElementById('result').innerHTML = "Chuỗi " + "<b>" + str2 + "</b>" + " không tồn tại trong chuỗi ban đầu " + "<b>" + str1 + "</b>";
	}
	return false;
}