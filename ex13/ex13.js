function calcula() {
	var t;

t = parseInt(document.getElementById("t").value);

var aux = "";
var i=1;
while (i<=10) {
	aux = aux + "<br/>" + t + " x " + i + " = " + (t*i);
	i = i + 1;
}
document.getElementById("tb").innerHTML = aux ;
}