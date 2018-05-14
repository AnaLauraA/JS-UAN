function calcula () {
	var pe, pd, p

p=parseFloat(document.getElementById("p").value);

pe = p + p*15/100;
document.getElementById("pe").innerHTML = pe;
pd = p - p*20/100;
document.getElementById("pd").innerHTML = pd;

}