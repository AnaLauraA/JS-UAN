function calcula()  {
	var dm, dn, a;

dm = parseFloat(document.getElementById("dm").value);
dn = parseFloat(document.getElementById("dn").value);

a = (dm*dn)/2 ;
document.getElementById("a").innerHTML = a;
}