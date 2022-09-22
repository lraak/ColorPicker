function submitClicked() {
	var rInput = 0;
	var gInput = 0;
	var bInput = 0;
	
	rInput = document.getElementById("rInput").value;
	
	gInput = document.getElementById("gInput").value;
	
	bInput = document.getElementById("bInput").value;
	
	document.getElementById("pyblValue").innerHTML = convert(rInput) + convert(gInput) + convert(bInput);
	
	document.getElementById("colorvalue").style.backgroundColor = "rgb(" + rInput + "," + gInput + "," + bInput + ")";
	
}

function convert(input) {
	
	var x = Number(input).toString(16);
	
	if (x.length<2) {
		x = "0" + x;
	}
	
	return x;
	
}