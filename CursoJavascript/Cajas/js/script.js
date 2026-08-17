function validar() {
	lengs = document.getElementsByName("leng");
	
	sw = false;
	for (l = 0; l < lengs.length; l++) {
		if (lengs[l].checked) {
			sw = true;
			break;
		}
	}
	if (sw == false) {
		alert("No ha seleccionado ningún lenguaje %$&@");
		return false;
	}
	else {
		return true;
	}
	
}