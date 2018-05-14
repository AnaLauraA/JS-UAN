function calcula () {
	var n1, n2, m1;

n1=parseFloat(document.getElementById ("n1").value);
n2=parseFloat(document.getElementById("n2").value);

m1=n1 / n2;
document.getElementById("m1").innerHTML = m1; 
}