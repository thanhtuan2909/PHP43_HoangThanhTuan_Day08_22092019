function handleSubmit() {
	var content = document.getElementById('content').value;
	if (content == '') {
		document.getElementById('error').innerHTML = "Không được để trống";
	} else {
		for (var i = 1; i <= 500; i++) {
			document.write(i + ". " + content + "<br>");
		}
	}
	return false;
}