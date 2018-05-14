function calcula () {
	var bm, w, h, a;

bm = parseFloat(document.getElementById("bm").value);
w = parseFloat(document.getElementById("w").value);
h = parseFloat(document.getElementById("h").value);

a = ((bm+w)*h)/2;
document.getElementById("a").innerHTML = a;
}